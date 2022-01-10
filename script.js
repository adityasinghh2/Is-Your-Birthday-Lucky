const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function comapreValues(sum,luckyNumber)
{
    if(sum%luckyNumber===0) {
        outputBox.innerText="Your birthday is lucky";
    }else{
        outputBox.innerText="Your birthday is not lucky";
    }
}

function checkBirthDateIsLucky() {
    const dob =dateOfBirth.value;
    const sum = calculateSum(dob);
    comapreValues(sum,luckyNumber.value);
}

function calculateSum(dob) {
  dob= dob.replaceAll("-","");
  let sum =0;
  for(let index=0;index<dob.lenght; index++) {
      sum = sum + Number(dob.charAt(index));
  }
    return sum;
}

checkNumberButton.addEventListener('click',checkBirthDateIsLucky)
