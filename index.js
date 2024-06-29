let height = document.querySelector(".height");
let weight = document.querySelector(".weight");
let submit = document.querySelector(".submit");
let output = document.querySelector(".output");
let inchV = document.querySelector(".inch");


function BMI() {
    let heightV = parseInt(height.value);
    let inchVal = parseInt(inchV.value);
    let weightV = parseInt(weight.value);
    
    let meter = ((heightV * 12) + inchVal) * 0.0254;
    let bmi = (weightV / (meter ** 2)).toFixed(2);

    if (bmi < 15) {
        output.innerHTML = `Under Weight: ${bmi} <p style="color:red">You need to consult with a Doctor.</p>`;
    } else if(bmi < 18.6) {
        output.innerHTML = `Under Weight: ${bmi}`;
    } else if (bmi > 18.6 && bmi < 24.9) {
        output.innerHTML = `Normal: ${bmi}`;
    } else if (bmi > 24.9 && bmi < 27) {
        output.innerHTML = `Over Weight: ${bmi}`;
    } else if (bmi > 27) {
        output.innerHTML = `Over Weight: ${bmi} <p style="color:red">You need to consult with a Doctor.</p>`;
    } else {
        output.innerHTML = 'error';
    }
}

submit.addEventListener("click", function () {
    if (height.value, weight.value) {
        
        if (inchV.value < 12) {
            BMI(); 
        } else {
            output.innerHTML = "Inch value must less than 12";
        }
    } else {
        output.innerHTML = "Enter your Height and weight";
    }
});


