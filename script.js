function calculateBMI(){
    var weight = parseInt(document.getElementById('weight').value);
    var height = parseInt(document.getElementById('height').value);
    var bmi = weight / ((height / 100) ** 2);
    var result = document.getElementById('result');

    if(bmi < 18.5){
        result.innerHTML = "Your BMI is " + bmi.toFixed(1) + ". You're underweight."
    }
    else if (bmi >= 18.5 && bmi < 25) {
        result.innerHTML = "Your BMI is " + bmi.toFixed(1) + ". You have a normal weight.";
    } 
    else if (bmi >= 25 && bmi < 30) {
        result.innerHTML = "Your BMI is " + bmi.toFixed(1) + ". You are overweight.";
    } 
    else {
        result.innerHTML = "Your BMI is " + bmi.toFixed(1) + ". You are obese.";
    }
}  