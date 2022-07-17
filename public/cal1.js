// calculate BMI
let NumHight = document.getElementById('hight');
let NumWight = document.getElementById('wight');
let OutputBmi = document.getElementById('bmi');
let Btcal = document.getElementById('cal');

function printCal() {
    let number1 = Number(NumHight.value);
    let number2 = Number(NumWight.value);
    let outputHtml = '';
    let haftHigth = number1 / 100;
    let cal = number2 / (haftHigth * haftHigth);


    if (isNaN(cal)) {
        outputHtml += '<p>';
        outputHtml += "กรุณากรอกข้อมูลให้ถูกต้องและครบถ้วน";
        outputHtml += '</p>';
        OutputBmi.innerHTML = outputHtml;
    } else if (cal == Infinity) {
        outputHtml += '<p>';
        outputHtml += "กรุณากรอกข้อมูลให้ถูกต้องและครบถ้วน";
        outputHtml += '</p>';
        OutputBmi.innerHTML = outputHtml;
    } else {
        outputHtml += '<p>';
        outputHtml += "ผลลัพธ์ BMI คือ " + cal;
        outputHtml += '</p>';
        OutputBmi.innerHTML = outputHtml;
    }
}
Btcal.addEventListener('click', printCal);