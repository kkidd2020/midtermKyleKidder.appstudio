
btnSubmit.onclick=function(){
  let income = inptIncome.value
  let answer = `With your income of $${income}, you are in a tax bracket of ` 
  
  if ( income < 30000) {
     lblAnswer.value = answer + "8%"
} else if (income >= 30000 && income <=99999) {
     lblAnswer.value = answer + "15%"
  }else if ( income > 99999) {
     lblAnswer.value = answer + "25%"
  } else {
    "Not Valid"
}
}


btnGoAgain.onclick=function(){
  lblAnswer.value = "Try another income"
}
