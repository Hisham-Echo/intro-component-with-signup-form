import { showError, hideError } from "./modules/functions.js";

let inputs = document.forms[0].getElementsByTagName("input");
let send = inputs[inputs.length - 1];

let emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/i;

// Validation
send.addEventListener("click", (e, bool) => {
    bool = false;

    // check for empty fields
    let i = 0;
    while (i < 4) {
        if (inputs[i].value == "") {
            showError(inputs[i], `${inputs[i].placeholder} cannot be empty`);
            bool = false
        } else {
            hideError(inputs[i]);
            bool = true;
        }
        i++;
    }
    
    // validate email
    if (emailExp.test(inputs[2].value)) {
        hideError(inputs[2]);
        bool = true;
    } else {
        showError(inputs[2], "Looks like this is not an email");
        bool = false
    }

    if(!bool){
      e.preventDefault();
    }
});
