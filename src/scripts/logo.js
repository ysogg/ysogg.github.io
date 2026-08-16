document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("logo");
    logo.addEventListener('mousedown', logoClick);

    const innerGrid = document.getElementById("innerGrid");
    const footer = document.getElementById("footer");
});


async function logoClick() {
    // alert('0_0');
    logo.classList.add('noAnim')
    logo.classList.remove('spinAnimation');
    logo.classList.add('logoTopLeft');
    innerGrid.classList.add('move-up')
    // await delay(1000)
    footer.classList.remove("hidden")
}


