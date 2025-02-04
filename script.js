const btnEl= document.getElementById("btn");
const birthdayEl= document.getElementById("birthday");
const resultEl = document.getElementById("result");


function calculateAge(){
  const birthdayValue = birthdayEl.value;
  if(birthdayValue===""){
    alert ("Please enter your birthday");
  }
else{
const age = getAge(birthdayValue);
resultEl.innerText = `Your age is $
 {age} $ {age >1 ? "years": "year"}old`;


}

}
function getAge(birthdayValue){
  const currentDate= new Date();
  const birthdaydate = new Date(birthdayValue);
  
  let age =currentDate.getFullYear() - birthdaydate.getFullyear();

  const month =currentDate.getMonth()- birthdaydate.getMonth();

if(
  month < 0 || 
  (month === 0 && currentDate.getDate()< birthdaydate.getDate()))
  {
  age--;
}

return age;


}



btnEl.addEventListener("click",calculateAge);

