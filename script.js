var CC, YY, MM, DD, d, dayVal;
var dayNme = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNme = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNme = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function validate() {
    var gender = document.getElementsByName("gender");
    if( document.myForm.month.value.length != 2 || document.myForm.month.value > 12  || document.myForm.month.value <= 0){
     alert( "Invalid!Please provide a number between 1 and 12" );
     document.myForm.month.focus() ;
     return false;
    }
    else if( document.myForm.date.value > 31 || document.myForm.date.value <= 0) {
     alert( "Please enter a valid date!" );
     document.myForm.day.focus() ;
     return false;
    }
    else if(gender[0].checked==false && gender[1].checked==false ) {
        alert("select male or female");
        return false;
    }   
    else{
        return true ;
    }
}

function calcDay(){
year = document.getElementById("year").value;
CC = parseInt(year.substring(0,2));
YY = parseInt(year.substring(2,4));
MM = parseInt(document.getElementById("month").value);
DD = parseInt(document.getElementById("day").value);
d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
console.log(d);
return (Math.floor(d));
}

