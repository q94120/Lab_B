// Tabs
function openLink(evt, linkName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("myLink");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(linkName).style.display = "block";
    evt.currentTarget.className += " w3-red";
}

// Click on the first tablink on load
document.getElementsByClassName("tablink")[0].click();

// 新增中間彈出視窗的JS
var modalElem = document.getElementById("tyModal");
        var spanElem = document.getElementsByClassName("tyClose")[0];

        spanElem.onclick = function () {
            modalElem.style.display = "none";
        }

        setTimeout(function () {
            modalElem.style.display = "block";
        }, 1000);