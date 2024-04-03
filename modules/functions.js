let Red = "hsl(0, 100%, 74%)";
// error styling and appending
export function showError(input, msg) {
    // reset
    hideError(input);
    // error icon
    let myIcon = document.createElement("img");
    myIcon.setAttribute("src", "./images/icon-error.svg");

    myIcon.style = `position: absolute;
    top: ${window.innerWidth < 1000 ? "15px" : "20px"};
    right: ${window.innerWidth < 1000 ? "15px" : "20px"};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;`;

    input.style.border = `2px solid ${Red}`;
    input.before(myIcon);

    // error message
    let myMsg = document.createElement("p");
    myMsg.classList.add("msg");
    myMsg.style = `text-align: right;
    color:${Red};
    padding: 0;
    margin-top: -10px;
    margin-bottom: 15px;
    font-style: italic;`;

    myMsg.textContent = msg;
    input.parentElement.after(myMsg);
}

export function hideError(input) {
    let icon = input.previousSibling;
    let msg = input.parentElement.nextSibling;

    if (icon == (null || undefined) || msg == (null || undefined)) {
    } else {
        icon.remove(); // error icon
        msg.remove(); // error msg
        input.style.borderColor = "#00000020"; // border color reset
    }
}
