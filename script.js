function displayHealthTipsAndImage(status) {
    const tips = {
        Underweight: "Eat more frequent, calorie-rich meals.",
        Normal: "Maintain your healthy diet and stay active.",
        Overweight: "Consider portion control and regular exercise.",
        Obese: "Consult a healthcare provider for a suitable fitness plan."
    };

    const healthTipsBox = document.getElementById('healthTips');
    healthTipsBox.style.display = 'block';
    healthTipsBox.textContent = tips[status] || "Enter your details to see health tips.";

    const bmiImage = document.getElementById('bmiImage');
    switch (status) {
        case 'Underweight':
            bmiImage.src = 'images/positive-vote.png';
            bmiImage.alt = 'Underweight';
            break;
        case 'Normal':
            bmiImage.src = 'images/positive-vote.png';
            bmiImage.alt = 'Normal Weight';
            break;
        case 'Overweight':
            bmiImage.src = 'images/negative-vote.png';
            bmiImage.alt = 'Overweight';
            break;
        case 'Obese':
            bmiImage.src = 'images/negative-vote.png';
            bmiImage.alt = 'Obese';
            break;
        default:
            bmiImage.src = '';
            bmiImage.alt = '';
    }
}

document.getElementById('calculateBtn').addEventListener('click', function() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value / 100; // Convert cm to meters

    if (weight > 0 && height > 0) {
        let bmi = weight / (height * height);
        document.getElementById('bmiValue').textContent = bmi.toFixed(2);

        let status = '';
        if (bmi < 18.5) {
            status = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            status = 'Normal';
        } else if (bmi >= 25 && bmi < 30) {
            status = 'Overweight';
        } else {
            status = 'Obese';
        }
        document.getElementById('bmiStatus').textContent = status;
        displayHealthTipsAndImage(status);
    }
});
