const weighte = document.getElementsByClassName("weight");
const heighte = document.getElementsByClassName("height");
const calculateButton = document.querySelector(".calculate"); 
const bmiResult = document.getElementById("bmiResult"); 
const uon = document.getElementById("uon"); 

calculateButton.addEventListener("click", function() {
    if (weighte.length > 0 && heighte.length > 0) {
        const weight = parseFloat(weighte[0].value); 
        const height = parseFloat(heighte[0].value); 

        console.log("Weight:", weight);
        console.log("Height:", height);

        if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) { 
            const heightInMeters = height / 100; 
            const bmi = weight / (heightInMeters * heightInMeters); 
            bmiResult.textContent = `Your BMI is: ${bmi.toFixed(2)}`; 

            if (bmi < 18.5) {
                uon.textContent = 'Underweight';
            } else if (bmi >= 18.5 && bmi < 25) {
                uon.textContent = 'Normal weight';
            } else if (bmi >= 25 && bmi < 30) {
                uon.textContent = 'Overweight';
            } else {
                uon.textContent = 'Obese';
            }
        } else {
            bmiResult.textContent = "Please enter valid weight and height."; 
        }
    }
});

