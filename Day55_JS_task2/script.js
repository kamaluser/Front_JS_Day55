const newsBtn = document.querySelectorAll('.button')[1];
newsBtn.click();

function openPage(pageName, element, color) {
    let contents = document.querySelectorAll(".content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
  
    let buttons = document.querySelectorAll(".button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "";
    }
  
    document.getElementById(pageName).style.display = "block";
  
    element.style.backgroundColor = color;
  }