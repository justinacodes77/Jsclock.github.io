/*
 * Auto-generated content from the Brackets New Project extension.  Enjoy!
 */
window.onload = function(){
 printTime();
};
alert ( "welcome");
function printTime(){
   var d = new Date();
    var hours= d.getHours();
    var mins =d.getMinutes();
    var secs = d.getSeconds();
    var day = d.getDay();
    var date= d.getDate();
    var month= d.getMonth();
    var year= d.getFullYear();
    var amorpm = hours >= 12 ? 'PM' : 'AM';
    hours=hours % 12 ;
     switch (day){ 
            
        case 0:
            day = "Sunday";
            break;
            case 1:
            day = "Monday";
            break;
            case 2:
            day = "Tuesday";
            break;
            case 3:
            day = "Wednesday";
            break;
            case 4:
            day = "Thursday";
            break;
            case 5:
            day = "Friday";
            break;
            case 6:
            day = "Saturday";
            break;
    }
    
    if (hours<10) {
        hours = "0" + hours;  
    }
    if (mins<10) {
        hours = "0" + mins;  
    }
    if (secs<10) {
        hours = "0" + secs;  
    }
    if (amorpm<12) {
        hours = "0" + amorpm;  
    }
    
    
month = month + 1;
 document.getElementById("test").innerHTML = hours+":"+mins+":"+secs+" "+amorpm;
document.getElementById("date").innerHTML = day+ " / " + date + " / " + month + " / " + year;
}

setInterval(printTime,1000);




