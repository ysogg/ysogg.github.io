var mx; 
var my; 
var mx_orig; 
var my_orig; 
var wx_orig; 
var wy_orig;

var hoveredWin = null;
var mousePos;
var mouseDown = false;
var hoveredWin = false;
var movingWindow = false;

var titlebar_additions = "<span class='wp-bar-fake'></span>"; // temp

function addListeners() {
    document.addEventListener("mousedown", function (e) {
        //TODO make only left click
        // if (e.leftclick != 1) { return; }
        mouseDown = true;
        if (hoveredWin) {
            mx_orig = e.pageX; my_orig = e.pageY;
            let ex = hoveredWin.style.left;
            let ey = hoveredWin.style.top;
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
        };
    }, false)

    document.addEventListener("mouseup", function () {
        mouseDown = false;
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

            hoveredWin.style.top = newTop + "px";
            hoveredWin.style.left = newLeft + "px";

            hoveredWin.style.zIndex = "999";
        } else {
            if (mouseDown) {
                if (hoveredWin) {
                    movingWindow = true;
                }
            }
        }
    }, false)
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

    if (element.classList.contains("window")) {
        hoveredWin = element;
        let windows = getWindows();

        //disallow other windows from being selected
        for (const curr of windows) {
            if (curr != hoveredWin) {
                curr.style.pointerEvents = 'none';
                curr.style.userSelect = 'none';
                curr.style.zIndex = '0';
            }
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
            this.link = properties.link;
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
    <span class="titlebar">
        <span class='tl_lines', style="width:100px"></span>
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

    div.querySelector(".titlebar")?.addEventListener("mouseenter", (e) => {
        let target = e.target;
        if (target == null) return;

        let parentElement = target.parentElement;
        if (parentElement == null) return;
        detectWindow(parentElement);
    });

    div.querySelector(".titlebar")?.addEventListener("mouseleave", (e) => {
        if (!movingWindow) {
            windowReset();
        }
    });
    
}

function main() {
    addListeners();

    fetch('./src/properties/window_properties.json')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const windowList = JSON.parse(JSON.stringify(data));
        var initial_windows = [];

        windowList.windows.forEach(windowProperties => {
            initial_windows.push(new Window(windowProperties));
        })

        initial_windows.forEach(win => {
            addWindowToDOM(win);
        })
    })
}

try {
    main();
} catch (err) {
    throw err;
}

