const inputEmail = document.querySelector('#email');
const inputRequired = document.querySelectorAll(".required");
const validFormButton = document.querySelector('#submit');

const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let isValid = false;
let tableElement = document.getElementById("myTable")

if (tableElement) {
    let table = "<table><tr><th>Variables</th>";
    for (let i = 0; i < 9; i++) {
        table += "<th>Colonne " + (i + 1) + "</th>";
    }
    table += "</tr>";
    for (let i = 0; i < 99; i++) {
        table += "<tr><td>Ligne " + (i + 1) + "</td>";
        for (let j = 0; j < 9; j++) {
            table += "<td>" + Math.floor(Math.random() * 100) + "</td>";
        }
        table += "</tr>";
    }
    table += "</table>";

    document.getElementById("myTable").innerHTML = table;
}


validFormButton.disabled = true;

inputRequired.forEach(input => {
    input.addEventListener('keyup', () => {
        isValid = validateInput();
        updateSubmitButton();
    });
});

function validateInput() {
    let valid = true;

    if( inputEmail.value && !regex.test(inputEmail.value)) {
        console.log(inputEmail.value)
        valid = false;
    }

    inputRequired.forEach(input => {

        if(!input.value) {
            console.log(input)
            valid = false;
        }
    });

    console.log(valid)
    return valid;
}

function updateSubmitButton() {
    if(isValid) {
        console.log('ok')
        validFormButton.removeAttribute("disabled")
    } else {
        validFormButton.disabled = true;
    }
}
