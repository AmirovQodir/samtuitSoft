let countClick = 0;

function openMenu() {
    ++countClick;
    let windowSize = window.innerWidth;
    let element = document.getElementById("choose-lang");
    if (countClick%2 === 0) {
         if (windowSize < 990) {
            element.classList.remove("open-wrap");
            document.getElementById('wrap-Nav').style.visibility = 'hidden';
        }
        else
        document.getElementById('wrap-Nav').style.visibility = 'hidden';
    }
    else {
        if (windowSize < 990) {
            element.classList.add("open-wrap");
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


function changeLanguage() {
    alert("Til o'zgartirish imkoniyati yuklanmoqda...");
}