
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
var femaleNames = ['Akosua', 'Adwoa', ' Abenaa', 'Akua', 'Yaa', 'Afua', ' Ama']


function calculateDayValue(){
  var year = document.getElementById('year').value;
  var cc = parseInt(year.slice(0,2));
  var yy = parseInt(year.slice(2,4));
  var mm = parseInt(document.getElementById('month').value);
  var dd = parseInt(document.getElementById('date').value);
  var gender = "";
  if (document.getElementById("male").checked){
    gender = "Male"
  } else if (document.getElementById("female").checked) {
    gender = "Female"
  } else {
    alert("Please select a gender")
    return false;
  }

  // console.log("selected gender: ", gender)

    if(document.getElementById('year').value=="" || document.getElementById('year').value.length !== 4 || document.getElementById('year').value<1000 || document.getElementById('year').value>2021){
      alert("Please enter a valid year")
      return false;
    }
    else if(document.getElementById('month').value==0 || document.getElementById('month').value>12){
      alert("Please enter a valid month")
      return false;
    }
    else if(document.getElementById('date').value==0 || document.getElementById('date').value>31){
      alert("Please enter a valid date")
      return false;
    } else if (Number.isInteger(mm) !==true || Number.isInteger(dd) !==true  ) {
      console.log("MM is Integer: ", Number.isInteger(mm))
      alert("Year, month and day should be of type Integer")
      return false;
    }
    else{
      let dayValue = Math.floor(( ( (cc/4) -2*cc-1) + ( (5*yy/4) ) + ((26*(mm+1)/10) ) + dd)%7);
      console.log("Day value: ", dayValue)
      console.log("Random male name: ", maleNames[4])

      console.log("is gender make: ", (gender === "Male"))
      
      if(gender === "Male") {
        document.getElementById('result').innerHTML=(`You were born on ${days[dayValue]} and your Akan name is ${maleNames[dayValue]}`)
      } else {
        document.getElementById('result').innerHTML=(`You were born on ${days[dayValue]} and your Akan name is ${femaleNames[dayValue]}`)
      }
    }
  }