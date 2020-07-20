var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
var femaleNames = ['Akosua', 'Adwoa', ' Abenaa', 'Akua', 'Yaa', 'Afua', ' Ama']

function calculateDay() {
    // check if the date input is empty
    if (document.getElementById('myDate').value == "") {
        alert('Invalid Date. Please enter a date')
        return false;
    }

    //check if gender is selected
    var gender = "";
    if (document.getElementById("male").checked) {
        gender = "Male"
        console.log(gender)
    } else if (document.getElementById("female").checked) {
        gender = "Female"
        console.log(gender)
    } else {
        alert("Please select a gender")
        return false;
    }

    //to get the day value of the input
    var theDate = new Date(document.getElementById('myDate').value)
    var dayValue = theDate.getDay();
    console.log(dayValue)
    if (gender === "Male") {
        document.getElementById('result').innerHTML = (`You were born on ${days[dayValue]} and your Akan name is ${maleNames[dayValue]}`)
    } else {
        document.getElementById('result').innerHTML = (`You were born on ${days[dayValue]} and your Akan name is ${femaleNames[dayValue]}`)
    }
}

//function to reset the form once data is entered
function resetForm() {
    document.getElementById('myForm').reset()

}