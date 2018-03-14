// functions that perform controls validation
// they return true (data are valid) or false (data are invalid)
function isNameValid() {
    let name = document.getElementById('name');
    if (name.value.length < 3 || name.value.length > 50) {
        return false;
    }
    return true;
}
function isGradeValid() {
    let grade = document.getElementById('grade');
    if (isNaN(grade.value) || grade.value < 1 || grade.value > 10) {
        return false;
    }
    return true;
}
// test all data, display a message and mark controls 
function verify() {
    // this variable will sum up all the messages
    let messages = "";
    // perform 'name' validation   
    if (!isNameValid()) {
        messages += "Numele trebuie să aibă lungimea cuprinsă între 3 și 50 caractere.";
        markForWrongValue(document.getElementById("name"));
    }
    // perform 'grade' validation 
    if (!isGradeValid()) {
        messages += "Nota trebuie să fie număr cuprins între 1 și 10 inclusiv.";
        markForWrongValue(document.getElementById("grade"));
    }
    // if there are no errors, the messages string is empty
    if (messages.length == "") {
        messages = "Datele sunt corecte.";
    }
    alert (messages);
}
// mark a control as having a wrong value
function markForWrongValue(control) {
    control.style.backgroundColor = '#ff9999';
    control.style.color = '#ff0000';
}
// mark a control as having a presumable correct value
function markForRightValue(control) {
    control.style.backgroundColor = '#ffffff';
    control.style.color = '#000000';
}