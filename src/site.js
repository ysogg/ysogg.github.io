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
    movingWIndow = false;
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

    constructor() {

    }
}

//Create window and add to DOM
function addWindowToDOM(win) {

    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = "150px";
    div.style.top = "0px";
    div.style.width = "350px";
    div.style.height = "500px";
    div.style.background = "gray";
    div.style.color = "blue";
    div.classList.add("window");
    
    div.innerHTML += `
    <span class="titlebar">
        <span class='tl_lines', style="width:100px"></span>
        <span class="title">`+ "Window Title" + `</span>
        </span>
        `;
    div.innerHTML += titlebar_additions

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

// NOTES
/* addWindowToDOM
 * - Should initialise everything about the window
 * - Creates div, appends child to body, etc..
*/


/* detectWindow
 * - When moust enters titlebar of window (set up in addWindowToDOM) need to check if it's a moveable window
 * - If it is then we can set hoveredWin to true and it should work from there
*/


// initial_windows is an array which is then iterated over to create multiple divs in one quick go
// each should be opf the Window class


function main() {
    addListeners();

    let initial_windows = [
        new Window("center"),
        new Window("left")
    ];
    
    initial_windows.forEach(win => {
        addWindowToDOM(win);
    })
}

try {
    main();
} catch (err) {
    throw err;
}

