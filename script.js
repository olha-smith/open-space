let passwordField = document.getElementById("password-field");

let buttonOk = document.getElementById("get-password");
buttonOk.addEventListener("click", checkPassword);

const rocket = document.getElementById("rocket");

let checkboxes = document.querySelectorAll('.check-buttons input[type="checkbox"]');
let levers = document.querySelectorAll('.levers input[type="range"]');
let launchButton = document.querySelectorAll('.control-panel__inner input[id="launch"]');

launchButton.forEach(function (element) {
    element.addEventListener("click", launchRocket);
})

function checkPassword() {
    if (passwordField.value === "TrustNo1") {
        passwordField.value = null;
        changeAccess(checkboxes, false);
        changeAccess(levers, false);
        passwordField.disabled = true;
        buttonOk.disabled = true;
    } else {
        alert("Incorrect password!");
    }
}

function changeAccess(elements, isForbidden) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].disabled = isForbidden;
    }
}

function launchRocket() {
    if (isCheckboxesOn(checkboxes) && isLeversOn(levers)) {
        changePosition()
        console.log("3… 2… 1… Liftoff!");
    } else {
        console.log("Launch failed!");
    }
}

function isSettingsOn() {
    if (isCheckboxesOn(checkboxes) && isLeversOn(levers)) {
        changeAccess(launchButton, false);
    } else {
        changeAccess(launchButton, true);
    }
}

function isCheckboxesOn(elements) {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].checked !== true) {
            return false;
        }
    }
    return true;
}

function isLeversOn(elements) {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].value !== "100") {
            return false;
        }
    }
    return true;
}

function changePosition() {
    let x = parseInt(rocket.style.left);
    let y = parseInt(rocket.style.top);

    const id = setInterval(
        function() {
                rocket.style.top = x + "em";
                rocket.style.left = y + "em";
                x--;
                y++;
                if (x === -10) {
                    clearInterval(id);
                }
            },
        20);
}
