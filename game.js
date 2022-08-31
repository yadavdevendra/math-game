let first_number = Math.floor(Math.random() * 10 + 1);
let second_number = Math.floor(Math.random() * 10 + 1);
document.getElementById("v1").value = first_number
document.getElementById("v2").value = second_number
let result = first_number + second_number
console.log(result)
const gameplay = () => {
    var inputuser = document.getElementById("userinput").value
    if (inputuser == result) {
        //document.getElementById("sms").innerHTML = "Well Done! Your Answer is Correct"
      alert("Well Done! Your Answer is Correct");
    } else {
        //document.getElementById("sms").innerHTML = "wrong answer try again"
         alert("wrong answer try again")
    }
    first_number = Math.floor(Math.random() * 10 + 1);
    second_number = Math.floor(Math.random() * 10 + 1);
    document.getElementById("v1").value = first_number
    document.getElementById("v2").value = second_number
    result = first_number + second_number
}
