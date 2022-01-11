var dateOfbirth = document.querySelector("#date-of-birth") 
var luckyNumber = document.querySelector("#lucky-number")
var btnCheckNumber = document.querySelector(".btn-check-number")
var message = document.querySelector(".message")
var privacyAlert = document.querySelector(".privacy-alert")
var hidePrivacyMsg = document.querySelector(".hide-privacy-msg")



function privacyTextHandler(){
    privacyAlert.style.display = "none"
}

function sumDOB(){
    var dob = dateOfbirth.value.replaceAll("-","")
    var sum=0
    for(var i=0;i<dob.length;i++){
        sum = sum + Number(dob[i])
    }
    return sum
}

function isLuckyDob(sum){
    if(sum % luckyNumber.value ===0){
        message.innerText = "Yay! Your birthday is lucky 🙂"
    }else{
        message.innerText = "Alas! Your birthday is not lucky 😌"
    }
}

function checkNumberEventHandler(){
    if(dateOfbirth.value === ""|| luckyNumber.value === ""){
        message.innerText = "Please Enter both the fields"
    }else if(luckyNumber.value <= 0){
        message.innerText = "Please enter a lucky number greater than zero."
    }else{
        const sum = sumDOB()
        isLuckyDob(sum)
    }
     
}

btnCheckNumber.addEventListener("click",checkNumberEventHandler)
hidePrivacyMsg.addEventListener("click",privacyTextHandler)