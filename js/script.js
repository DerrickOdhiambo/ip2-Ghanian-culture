//creating variables for days, male names and female names
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
var femaleNames = ['Akosua', 'Adwoa', ' Abenaa', 'Akua', 'Yaa', 'Afua', ' Ama']

//create a function to get input value from the user
function calculateDayValue() {
  var year = document.getElementById('year').value;
  var cc = parseInt(year.slice(0, 2));
  var yy = parseInt(year.slice(2, 4));
  var mm = parseInt(document.getElementById('month').value);
  var dd = parseInt(document.getElementById('date').value);

  //validating the gender of user
  var gender = "";
  if (document.getElementById("male").checked) {
      gender = "Male"
  } else if (document.getElementById("female").checked) {
      gender = "Female"
  } else {
      alert("Please select a gender")
      return false;
  }


      //final validation to print out the output
      if (gender === "Male") {
          document.getElementById('result').innerHTML = (`You were born on ${days[dayValue]} and your Akan name is ${maleNames[dayValue]}`)
      } else {
          document.getElementById('result').innerHTML = (`You were born on ${days[dayValue]} and your Akan name is ${femaleNames[dayValue]}`)
      }
  }
}