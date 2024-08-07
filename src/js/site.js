var mx; 
var my; 
var mx_orig; 
var my_orig; 
var wx_orig; 
var wy_orig;

var hoveredWin = null;
var hoveredContent = false;
var origWindow = null;
var mousePos;
var mouseDown = false;
var hoveredWin = false;
var movingWindow = false;

var windowList = "";

var titlebar_additions = "<span class='wp-bar-fake'></span>"; // temp

function addListeners() {
    document.addEventListener("mousedown", function (e) {
        //TODO make only left click
        // if (e.leftclick != 1) { return; }
        mouseDown = true;
        bringToFront(hoveredWin);

        if (hoveredWin && !hoveredContent) {
            origWindow = hoveredWin;
            createOutline(hoveredWin.style.width, hoveredWin.style.height, hoveredWin.style.left, hoveredWin.style.top);
            
            let outline = document.getElementById("outline")
            outline.setPointerCapture(true);
            mx_orig = e.pageX; my_orig = e.pageY;
            // let ex = hoveredWin.style.left;
            // let ey = hoveredWin.style.top;
            let ex = outline.style.left;
            let ey = outline.style.top;
            if (ex.includes("%")) {
                wx_orig = +(window.innerWidth) * +("." + ex.replace('%', ''));
            } else { 
                wx_orig = +(ex.replace('px', ''));
            }

            if (ey.includes("%")) {
                wy_orig = +(window.innerHeight) * +("." + ey.replace('%', ''));
            } else { 
                wy_orig = +(ey.replace('px', ''));
            }
        }
    }, false)

    document.addEventListener("mouseup", function () {
        mouseDown = false;
        
        if (!hoveredContent && hoveredWin) {
            hoveredWin.style.top = outline.style.top;
            hoveredWin.style.left = outline.style.left;
            hoveredWin.style.zIndex = "999";
        }
        
        if (document.getElementById("outline")) removeWindow("outline");

        if (movingWindow) {
            let element = hoveredWin;
            if (element == null) return;
            windowReset();

            detectWindow(element)
        }
        
    }, false)

    document.addEventListener("mousemove", function (e) { // e =>
        mx = e.pageX;
        my = e.pageY;

        if (movingWindow) {
            if (!hoveredWin) return;

            let newTop = (+(e.pageY - my_orig) + wy_orig);
            let newLeft = (+(e.pageX - mx_orig) + wx_orig);

            // hoveredWin.style.top = newTop + "px";
            // hoveredWin.style.left = newLeft + "px";
            if (!document.getElementById("outline")) return;
            let outline = document.getElementById("outline")
            outline.style.top = newTop + "px";
            outline.style.left = newLeft + "px";

            //should only change zindex when window is selectedd not hovered over
            // hoveredWin.style.zIndex = "999";
            outline.style.zIndex = "999";
        } else {
            if (mouseDown) {
                if (hoveredWin) {
                    movingWindow = true;
                }
            }
        }
    }, false)
}

function createWindow(name) {
    if (document.getElementById(name)) { return; }
    var index = windowList.windows.findIndex(win => win.page == name);

    if (index != -1) {
        var properties = windowList.windows[index];
        newWin = new Window(properties);
        addWindowToDOM(newWin);
        toggleWindow(name);
    }
}

function removeWindow(name) {
    try {
        const element = document.getElementById(name);
        element.remove();
    } catch (e) {
        return;
    }
}

function createOutline(width, height, left, top) {
    if (document.getElementById("outline")) { return; }
    var index = windowList.windows.findIndex(win => win.page == "outline");
    var properties = windowList.windows[index];

    win = new Window(properties);

    var div = document.createElement("div");
    div.id = win.page;
    div.style.display = "block";
    div.style.width = width;
    div.style.height = height;
    div.style.left = left;
    div.style.top = top;
    div.classList.add("outline");
        div.style.pointerEvents = 'initial';
        div.style.userSelect = 'initial';

    document.body.appendChild(div);
}

//Toggle window visibility
function toggleWindow(winName) {
    var win = document.getElementById(winName)
    if (win.style.display == "none") {
        win.style.display = "block";
    } else {
        win.style.display = "none";
    }
}

function getWindows() {
    return Array.from(document.querySelectorAll(".window"));
}

function detectWindow(element) {
    if (element == null) return;

    if (element.classList.contains("window") || element.parentElement.classList.contains("window")) {
        hoveredWin = element;
        let windows = getWindows();
        for (const curr of windows) {
            if (curr != hoveredWin) {
                curr.style.pointerEvents = 'none';
                curr.style.userSelect = 'none';
                // curr.style.zIndex = '0';
            }
        }
    }
}

function bringToFront(element) {
    if (element == null) return;
    element.style.zIndex = "999";

    let windows = getWindows();
    for (const curr of windows) {
        if (curr != hoveredWin) {
            curr.style.pointerEvents = 'none';
            curr.style.userSelect = 'none';
            curr.style.zIndex = '0';
        }
    }
}

function windowReset() {
    movingWindow = false;
    hoveredWin = null;

    var windows = getWindows();
    for(const curr of windows) {
        if (curr != hoveredWin) {
            curr.style.pointerEvents = 'initial';
            curr.style.userSelect = 'initial';
        }
    }
}

class Window {
    constructor(properties) {
        this.title = properties.title;
        this.width = properties.width;
        this.height = properties.height;
        this.left = properties.left;
        this.top = properties.top;

        if (properties.data.link != null) {
            this.link = properties.data.link;
        } else {
            this.link = null;
        }

        if (properties.data.initialView == "hidden") {
            this.display = "none";
        } else {
            this.display = "block";
        }
        
        this.page = properties.page;
    }
}

//Create window and add to DOM
function addWindowToDOM(win) {

    var div = document.createElement("div");
    div.id = win.page;
    div.style.display = win.display;
    div.style.left = win.left;
    div.style.top = win.top;
    div.style.width = win.width;
    div.style.height = win.height;
    div.style.background = "gray";
    div.style.color = "blue";
    div.classList.add("window");
    
    div.innerHTML += `
    <div class="titlebar">
        <span class='tl_lines', style="width:100%"></span>
        <span class="title">`+ win.title + `</span>
        </span>
        `;
    div.innerHTML += titlebar_additions

    // Rough proof of concept
    // Eventually this should be its own function
    // Also switch up json to have a sub object that contains window type, link, and other misc info that isn't style properties
    var contents = document.createElement("span");
    contents.classList.add("content");
    if (win.link != null) {
        fetch(win.link)
        .then((info) => info.text())
        .then(info => {
            contents.innerHTML = info;
        })
    }
    div.appendChild(contents);

    document.body.appendChild(div);

    // div.querySelector(".titlebar")?.addEventListener("mouseenter", (e) => {
    //     let target = e.target;
    //     if (target == null) return;

    //     let parentElement = target.parentElement;
    //     if (parentElement == null) return;
    //     detectWindow(parentElement);
    // });

    // div.querySelector(".titlebar")?.addEventListener("mouseleave", (e) => {
    //     if (!movingWindow) {
    //         if (!document.getElementById("outline")) { windowReset(); }  
    //     }
    // });

    // $('#' + div.id).on('mouseenter', '*')
    div.querySelector('*')?.addEventListener("mouseenter", (e) => {
        let target = e.target;
        if (target == null) return;

        let parentElement = target.parentElement;
        if (parentElement == null) return;
        detectWindow(parentElement);
    });

    div.querySelector('*')?.addEventListener("mouseleave", (e) => {
        if (!movingWindow) {
            if (!document.getElementById("outline")) { windowReset(); }  
        }
    });

    // ^^^^
        //combine both of these pairs into one

    // .....
    div.querySelector(".content")?.addEventListener("mouseenter", (e) => {
        hoveredContent = true;
        let target = e.target;
        if (target == null) return;

        let parentElement = target.parentElement
        if (parentElement == null) return;
        detectWindow(parentElement);
    });

    div.querySelector(".content")?.addEventListener("mouseleave", (e) => {
        hoveredContent = false;
        windowReset();
    });
    
}

function main() {
    addListeners();

    fetch('./src/properties/window_properties.json')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        windowList = JSON.parse(JSON.stringify(data));
        var initial_windows = [];

        windowList.windows.forEach(windowProperties => {
            initial_windows.push(new Window(windowProperties));
        })

        initial_windows.forEach(win => {
            if (win.display == "block") {
                addWindowToDOM(win);
            }
            
        })
    })
}

try {
    main();
} catch (err) {
    throw err;
}

