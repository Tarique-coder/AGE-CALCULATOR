let birthDate = document.querySelector("#birthdate");
let calcBtn = document.querySelector("#calculate-btn");
let result = document.querySelector("#result");

//adding eventListener to calculate button
calcBtn.addEventListener("click", function () {
  console.log("button was clicked");
  let input = birthDate.value;
  console.log(input);
  if (input == "") {
    alert("Please enter your birthdate first!!");
    return;
  }
  let birthdate = new Date(input);
  let todayDate = new Date();
  console.log("Birth date: ", birthDate);
  console.log("Current date: ", todayDate);

  //difference in years(age)
  let diffYear = todayDate.getFullYear() - birthdate.getFullYear(); //getFullYear gives the year count ex:2025
  console.log(`The difference in the year is: ${diffYear}`);

  const monthDiff = todayDate.getMonth() - birthdate.getMonth(); //here negative value represents birthdate has not arrived
  const dayDiff = todayDate.getDate() - birthdate.getDate();

  if (monthDiff < 0 || (monthDiff == 0 && dayDiff < 0)) {
    diffYear--; //diffYear = age
  }

  if (diffYear < 0 || diffYear > 120) {
    alert("Invalid Birth Date!");
    return;
  }
  result.textContent = `You are ${diffYear} years old.`;
  birthDate.value = "";
});
