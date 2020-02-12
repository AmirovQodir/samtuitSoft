let countClick = 0;

function openMenu() {
    ++countClick;
    let windowSize = window.innerWidth;

    if (countClick%2 === 0) {
        console.log(windowSize);
        if (windowSize < 990) {
            document.getElementById('wrap-Nav').style.position = "absolute";
            document.getElementById('wrap-Nav').style.visibility = 'hidden';
        }
        else
            document.getElementById('wrap-Nav').style.visibility = 'hidden';
    }
    else {
        console.log(windowSize);
        if (windowSize < 990) {

            document.getElementById('wrap-Nav').style.position = "relative";
            document.getElementById('wrap-Nav').style.visibility = 'visible'
        }
        else
            document.getElementById('wrap-Nav').style.visibility = 'visible'
    }
}

let countClickMenu = 0;
function openSideMenu() {
    let windowSize = window.innerWidth;
    
    if (windowSize < 990) {
        countClickMenu++;
        var element = document.getElementById("sideNav");
        if (countClickMenu%2 !== 0) {
            element.classList.add("openSideMenu");
        }
        else {
            element.classList.remove("openSideMenu");
        }
    } else  return

}
