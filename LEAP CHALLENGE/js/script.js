function theyear(year){


if (year % 4 ===0 ){
if (year % 100 === 0){
    if (year % 400 ===0){
        return "Leap year!"

    }
    else{
        return "Not a leap year."; 
    }
}
else{
    return "leap year!";
}
}
else{
    return"Not a leap year.";
}

}

alert(theyear(2030));


    




