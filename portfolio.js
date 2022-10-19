// Function to change CSS property of a single element of a class
function changeCSS(id, className, selector, style1, style2) {
    const classContent = document.getElementsByClassName(className);
    for (var i = 0; i < classContent.length; i++){
        classContent[i].style.setProperty(selector, style1);
    }
        document.getElementById(id).style.setProperty(selector, style2);
}


// Function to add event listeners to tab buttons
const btn1 = document.getElementById('tab-button-1');
btn1.addEventListener("click", function () { changeCSS('tab-button-1', 'tab-button', 'color','#154c79', '#01D6BD'); }, false);

const content1 = document.getElementById('tab-button-1');
content1.addEventListener("click", function () { changeCSS('tab-content-1', 'tab-content', 'display','none', 'block'); }, false);

const btn2 = document.getElementById('tab-button-2');
btn2.addEventListener("click", function () { changeCSS('tab-button-2', 'tab-button', 'color','#154c79', '#01D6BD'); }, false);

const content2 = document.getElementById('tab-button-2');
content2.addEventListener("click", function () { changeCSS('tab-content-2', 'tab-content', 'display','none', 'block'); }, false);

const btn3 = document.getElementById('tab-button-3');
btn3.addEventListener("click", function () { changeCSS('tab-button-3', 'tab-button', 'color','#154c79', '#01D6BD'); }, false);

const content3 = document.getElementById('tab-button-3');
content3.addEventListener("click", function () { changeCSS('tab-content-3', 'tab-content', 'display','none', 'block'); }, false);
