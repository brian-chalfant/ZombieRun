/*
* Name: Chalfant, Brian
Project #: 06
*
* @author Brian Chalfant
* Validation Script for Event Registration Page.
*
* */
function validate(){
    //boolean indicating all fields filled out successfully, set to true initially and tripped false.
    let form_valid = true;
    // Array for boolean returns of validations
    let validations = [];

    // Declare Constants for interaction with HTML fields
    const form = document.getElementById("form-div");
    const response = document.getElementById('response');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const age = document.getElementById('age');
    const dob = document.getElementById('dob');
    const sex = document.getElementsByName('sex');
    const streetAddress = document.getElementById('street-address');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const zipCode = document.getElementById('zip-code');
    const telephone = document.getElementById('telephone');
    const emailAddress = document.getElementById('email-address');
    const tshirts = document.getElementsByName('tshirt');
    const waiv = document.getElementById('waiv');
    const pay = document.getElementById('pay');

    // Declare Constants for Form Labels to give user feedback on incomplete fields
    const firstNameLBL = document.getElementById('lbl-first-name');
    const lastNameLBL = document.getElementById('lbl-last-name');
    const ageLBL = document.getElementById('lbl-age');
    const dobLBL = document.getElementById('lbl-dob');
    const sexLBL = document.getElementById('lbl-sex');
    const streetAddressLBL = document.getElementById('lbl-street-address');
    const cityLBL = document.getElementById('lbl-city');
    const stateLBL = document.getElementById('lbl-state');
    const zipCodeLBL = document.getElementById('lbl-zip-code');
    const telephoneLBL = document.getElementById('lbl-telephone');
    const emailAddressLBL = document.getElementById('lbl-email-address');
    const tshirtLBL = document.getElementById('lbl-shirt');
    const waivLBL = document.getElementById('lbl-waiv');
    const payLBL = document.getElementById('lbl-pay');

    // Declare Constants for HTML Fieldsets to give visual indicators for incomplete fields
    const sexFieldSet = document.getElementById('sex')
    const tshirtFieldSet = document.getElementById('tshirt-size')
    const waivFieldSet = document.getElementById('waiver-fs')
    const payFieldSet = document.getElementById('payment-fs')

    //Reset any previous incomplete field indicators
    reset();

    // validate each field and and push the boolean result to the validations array
    validations.push(validatefield(firstName, firstNameLBL));
    validations.push(validatefield(lastName, lastNameLBL));
    validations.push(validatefield(age, ageLBL));
    validations.push(validatefield(dob, dobLBL));
    validations.push(validatefield(streetAddress, streetAddressLBL));
    validations.push(validatefield(city, cityLBL));
    validations.push(validatefield(state, stateLBL));
    validations.push(validatefield(zipCode, zipCodeLBL));
    validations.push(validatefield(telephone, telephoneLBL));
    validations.push(validatefield(emailAddress, emailAddressLBL));
    validations.push(validateRadios(sex, sexLBL, sexFieldSet));
    validations.push(validateRadios(tshirts, tshirtLBL, tshirtFieldSet));
    validations.push(validateCheckbox(waiv, waivLBL, waivFieldSet));
    validations.push(validateCheckbox(pay, payLBL, payFieldSet));

    //cycle through validations, if an entry in the array is false, the form is invalid and the loop is broken
    for(let i=0;i<validations.length;i++){
        if(!validations[i]){
            form_valid = false;
            break;
        }
    }

    // if the form is valid generate a confirmation code and display to user
    if(form_valid){
        let confirm = GenerateConfirmation(firstName, lastName);
        // This is where you would write the form data to registered participants list
        form.style.display = "none";
        response.style.display = "block";
        response.innerHTML = firstName.value + ", You are successfully Registered for the 2021 Honolulu Zombie Run!<br>" +
            "Your Confirmation Number is: <span style='color:black; font-family: sans-serif; text-shadow: none;'> " + confirm + "</span><br>See you There!";
    }



}
/*
* validates a field. ensures that the element's length is greater than 0, if it's not the label will be updated to a red
* color and an asterisk added.  The form warning label will also be updated informing the user that the fields are
* required.
*
* the function returns true if the field is valid and false if it is not.
* */
function validatefield(element, label) {
    const formWarningLBL = document.getElementById('lbl-form-warning');
    if (element.value.length === 0) {
        label.innerHTML = label.innerHTML + " *"
        label.style.color = "Red";
        formWarningLBL.innerHTML = "PLEASE FILL OUT ALL REQUIRED FIELDS";
        formWarningLBL.style.color = "Red";
        return false;
    }
    return true;
}
/*
* validates a radio button field.  Cycles through radio buttons and ensures that one is checked.  if not the
* label is updated to a red color and an asterisk added.  The form warning label will also be updated informing
* the user that the fields are required.
*
* the function returns true if the field is valid and false if it is not.
* */
function validateRadios(radioArr, label, fieldset){
    const formWarningLBL = document.getElementById('lbl-form-warning');
    let valid = false;
    for (let i=0;i<radioArr.length;i++){
        if (radioArr[i].checked){
            valid = true;
        }
    }
    if(!valid){
        label.innerHTML = label.innerHTML + " *"
        label.style.color = "Red";
        formWarningLBL.innerHTML = "PLEASE FILL OUT ALL REQUIRED FIELDS";
        formWarningLBL.style.color = "Red";
        fieldset.style.borderColor = "Red";
    }
    return valid;
}
/*
* validates a checkbox field ensures that it is checked.  if not the
* label is updated to a red color and an asterisk added.  The form warning label will also be updated informing
* the user that the fields are required.
*
* the function returns true if the field is valid and false if it is not.
* */
function validateCheckbox(check, label, fieldset){
    const formWarningLBL = document.getElementById('lbl-form-warning');
    if(!check.checked){
        label.innerHTML = label.innerHTML + " *"
        label.style.color = "Red";
        formWarningLBL.innerHTML = "PLEASE FILL OUT ALL REQUIRED FIELDS";
        formWarningLBL.style.color = "Red";
        fieldset.style.borderColor = "Red";
        return false;
    }
    return true;
}
/*
* reset function sets all of the form labels to their original colors, removes the asterisks, sets the fieldset
* borders back to black, and removes the form warning label.
*
* */
function reset(){
    //declare constants for Fieldsets
    const sexFieldSet = document.getElementById('sex')
    const tshirtFieldSet = document.getElementById('tshirt-size')
    const waivFieldSet = document.getElementById('waiver-fs')
    const payFieldSet = document.getElementById('payment-fs')

    //declare constants for labels
    const formWarningLBL = document.getElementById('lbl-form-warning');
    const firstNameLBL = document.getElementById('lbl-first-name');
    const lastNameLBL = document.getElementById('lbl-last-name');
    const ageLBL = document.getElementById('lbl-age');
    const dobLBL = document.getElementById('lbl-dob');
    const sexLBL = document.getElementById('lbl-sex');
    const streetAddressLBL = document.getElementById('lbl-street-address');
    const cityLBL = document.getElementById('lbl-city');
    const stateLBL = document.getElementById('lbl-state');
    const zipCodeLBL = document.getElementById('lbl-zip-code');
    const telephoneLBL = document.getElementById('lbl-telephone');
    const emailAddressLBL = document.getElementById('lbl-email-address');
    const tshirtLBL = document.getElementById('lbl-shirt');
    const waivLBL = document.getElementById('lbl-waiv');
    const payLBL = document.getElementById('lbl-pay');

    // set fieldset borders to black
    sexFieldSet.style.borderColor = "Black";
    tshirtFieldSet.style.borderColor = "Black";
    waivFieldSet.style.borderColor = "Black";
    payFieldSet.style.borderColor = "Black";

    //remove form warning label
    formWarningLBL.innerHTML = "";

    // reset color and content of form labels
    firstNameLBL.innerHTML = '<span>First Name</span>';
    firstNameLBL.style.color = "Black";
    lastNameLBL.innerHTML = '<span>Last Name</span>';
    lastNameLBL.style.color = "Black";
    ageLBL.innerHTML = '<span>Age</span>';
    ageLBL.style.color = "Black";
    dobLBL.innerHTML = '<span>Date of Birth</span>';
    dobLBL.style.color = "Black";
    sexLBL.innerHTML = '<span>Sex</span>';
    sexLBL.style.color = "Black";
    streetAddressLBL.innerHTML = '<span>Street Address</span>';
    streetAddressLBL.style.color = "Black"
    cityLBL.innerHTML = '<span>City</span>';
    cityLBL.style.color = "Black";
    stateLBL.innerHTML = '<span>State</span>';
    stateLBL.style.color = "Black";
    zipCodeLBL.innerHTML = '<span>Zip Code</span>';
    zipCodeLBL.style.color = "Black"
    telephoneLBL.innerHTML = '<span>Telephone</span>';
    telephoneLBL.style.color = "Black";
    emailAddressLBL.innerHTML = '<span>Email Address</span>';
    emailAddressLBL.style.color = "Black";
    tshirtLBL.innerHTML = '<span>T-Shirt Size</span>';
    tshirtLBL.style.color = "Black";
    waivLBL.innerHTML = '<span>Waiver</span>';
    waivLBL.style.color = "Black";
    payLBL.innerHTML = '<span>Payment</span>';
    payLBL.style.color = "Black";

}
/*
* Generates a confirmation code for the user.  The confirmation code takes the first and last initial and combines it
* with a random three digit number to ensure that there are no duplicates as there are 676000 possibilities.
*
* */
function GenerateConfirmation(firstname, lastname){
    let cn = firstname.value[0];
    cn += lastname.value.slice(0,1);
    cn += (Math.floor(Math.random()*(999-100+1)+100)).toString(); // random 3 digit number
    return cn;
}

