const weighte = document.getElementsByClassName("weight");
const heighte = document.getElementsByClassName("height");
const calculateButton = document.querySelector(".calculate"); // Corrected selector
const bmiResult = document.getElementById("bmiResult"); // Element to display BMI
const uon = document.getElementById("uon"); // Element to display BMI

calculateButton.addEventListener("click", function() {
    if (weighte.length > 0 && heighte.length > 0) {
        const weight = weighte[0].value;
        const height = heighte[0].value; // Use the correct variable

        console.log("Weight:", weight);
        console.log("Height:", height);

        if (weight && height) {
            const heightInMeters = height / 100; // Convert height to meters
            const bmi = weight / (heightInMeters * heightInMeters); // Calculate BMI
            bmiResult.textContent = `Your BMI is: ${bmi.toFixed(2)}`; // Display BMI in the HTML
            if (bmiResult<18.5){
                uon.textContent = 'underweight niQQa' ;
            }
            else if (bmiResult>=18.5 && bmiResult<25){
                uon.textContent = 'normal'
            }
            else {
                uon.textContent = 'you fckin obese WHALE'
            }
                } else {
            bmiResult.textContent = "Please enter valid weight and height."; // Display error message
        }
    }
});
