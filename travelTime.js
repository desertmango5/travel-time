$(document).ready(function() {
	
	/* set and format time for 4 set cities */
	function setTime() {
	
		var time = new Date();
		var localHours = time.getHours();
		var hours = time.getUTCHours();
		var minutes = time.getMinutes();
		var seconds = time.getSeconds();
		
		// set hour based on UTC time
		var amsHours = setHour(hours + 2);
			
		var detHours = setHour(hours - 4);      
     
		var breHours = setHour(hours - 4);  
	
    var phxHours = setHour(hours - 7);      
      
		var alAinHours = setHour(hours + 4);

		/* adjust the way seconds display XX:XX:0X if seconds less than 10 */
		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		
		/* adjust the way minutes display XX:X0 if minutes less than 10 */
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		
		if (localHours < 10) {
				localHours = '0' + localHours;
		}
	
	// format times for display
	var localTime = localHours + ':' + minutes + ':' + seconds;	
	var amsTime = amsHours + ':' + minutes;
	var detTime = detHours + ':' + minutes;
	var breTime = breHours + ':' + minutes;
	var phxTime = phxHours + ':' + minutes;
	var alAinTime = alAinHours + ':' + minutes;
		
	var amsday = amsDay(amsHours);
	var breday = breDay(breHours);
	var detday = detDay(detHours);
	var phxday = phxDay(phxHours);
	var alainday = alAinDay(alAinHours);
	
	
	// display time on page
	$('.local').html(localTime);
	$('#ams').html(amsTime);
	$('#det').html(detTime);
	$('#bre').html(breTime);
	$('#phx').html(phxTime);
	$('#alAin').html(alAinTime);
		
	// display day on page	
	$('#amsDay').html(setDay(amsday));
	$('#breDay').html(setDay(breday));
	$('#detDay').html(setDay(detday));
	$('#phxDay').html(setDay(phxday));
	$('#alAinDay').html(setDay(alainday));
		
		// setTime() testing area
		
		
		setDay();
	} // END setTime()

		/**********************************************/
	
	/* this will update the time automatically every second */
	
	setInterval(setTime, 1000);
	
	/**********************************************/
	
	 
	/* RETURN DAY OF THE WEEK */
  function amsDay(hours) {
    var time = new Date();
    var day = time.getUTCDay();
	
    if (hours >= 0 && hours < 2) {
      day += 1;
    }
		if (day === 7) {
			day = 0;
		}
		else if (day === -1) {
			day = 6;
		}
    return day;
  }
  
   function breDay(hours) {
    var time = new Date();
    var day = time.getUTCDay();
	
    if (hours >= 20 && hours <= 23) {
      day -= 1;
    }
		 if (day === 7) {
			day = 0;
		}
		else if (day === -1) {
			day = 6;
		}
    return day;
  }

  function detDay(hours) {
    var time = new Date();
    var day = time.getUTCDay();
	
    if (hours >= 20 && hours <= 23) {
      day -= 1;
    }
		if (day === 7) {
			day = 0;
		}
		else if (day === -1) {
			day = 6;
		}
    return day;
  }
  
  function phxDay(hours) {
    var time = new Date();
    var day = time.getUTCDay();
	
    if (hours >= 17 && hours <= 23) {
      day -= 1;
    }
		
		if (day === 7) {
			day = 0;
		}
		else if (day === -1) {
			day = 6;
		}
    return day;
  }
  
  function alAinDay(hours) {
    var time = new Date();
    var day = time.getUTCDay();
	
    if (hours >= 0 && hours < 4) {
      day += 1;
    }
		if (day === 7) {
			day = 0;
		}
		else if (day === -1) {
			day = 6;
		}
    return day;
  }
 

  /* set Day of Week */
function setDay(day) {
  switch(day) {

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
  
  return day;
  
} // END setDay()
		/**********************************************/
	
	
	/* 1. function that corrects for negative UTC time adjustment and 
     2. adjusts midnight time (24:00) to (0:00) 
     3. adds leading 0 to time (0X:XX) 
  */
  
  function setHour(hours) {
    if (hours < 0) {
      hours = 24 + hours;
    }
      if (hours === 24) {
          hours = 0;
      }
		if (hours > 24) {
			hours = hours - 24;
		}
    if (hours < 10) {
			hours = '0' + hours;
		}
    return hours;
  }
	// END setHour()
		/**********************************************/
	
}); // END JQUERY