var mx; 
var my; 
var mx_orig; 
var my_orig; 
var wx_orig; 
var wy_orig;

var hoveredWin = null;
var mousePos;
var offset = [0,0];
var div;
var mouseDown = false;
var hoveredWin = false;
var movingWindow = false;

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
            let el = hoveredWin;
            if (el == null) {
                return;
            }
            // movingWindowReset();
            // movingWindowDetect(el);
        }
    }, false)

    document.addEventListener("mousemove", function (e) {
        mx = e.pageX;
        my = e.pageY;

        if (movingWindow) {
            if (!hoveredWin) {
                return;
            }

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

    // var windowDrag = document.createElement("span");
    // windowDrag.classList.add("window-drag");
    // div.appendChild(windowDrag);

    document.body.appendChild(div);
    
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

