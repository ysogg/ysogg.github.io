document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("logo");
    logo.addEventListener('mousedown', logoClick);

    const innerGrid = document.getElementById("innerGrid");
    const copyright = document.getElementById("copyright")

    window.addEventListener('resize', () => {
        if (logo.classList.contains('logoTopLeft')) {
            positionLogoAtInnerGrid();
        }
    });

    // innerGrid's own size shifts once its async content (e.g. the itch.io
    // image, which has no explicit dimensions) finishes loading, moving its
    // centered offsetTop/offsetLeft. Reposition whenever that happens.
    new ResizeObserver(() => {
        if (logo.classList.contains('logoTopLeft')) {
            positionLogoAtInnerGrid();
        }
    }).observe(innerGrid);
});


function positionLogoAtInnerGrid() {
    logo.style.left = `${innerGrid.offsetLeft - 10}px`;
    logo.style.top = `${innerGrid.offsetTop - 15}px`;
}


async function logoClick() {
    document.body.classList.remove('hideOverflow')
    // alert('0_0');
    logo.classList.add('noAnim')
    logo.classList.remove('spinAnimation');
    logo.classList.add('logoTopLeft');
    innerGrid.classList.add('move-up')
    copyright.classList.remove('hidden')
    positionLogoAtInnerGrid();
}


