document.getElementById('bmiForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    const resultBox = document.getElementById('result');

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let resultText = "";
        let color = "";
        
        if (bmi < 18.5) {
            resultText += "คุณมีน้ำหนักต่ำกว่าเกณฑ์";
        } else if (bmi < 24.9) {
            resultText += "อยู่ในเกณฑ์ปกติ";
        } else if (bmi < 29.9) {
            resultText += "น้ำหนักเกิน";
        } else {
            resultText += "โรคอ้วน";
        }

        resultBox.innerText = resultText;
        resultBox.classList.add("large-text");

        document.getElementById("bmi-result").innerText = bmi;
    } else {
        resultBox.style.display = "block";
    }
});