let form = document.getElementById("raceForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let age = parseInt(document.getElementById("age").value);
  let registeredEarly = true;

  let raceNumber = Math.floor(Math.random() * 1000);

  if (age > 18 && registeredEarly) {
    raceNumber += 1000;
  }
  let raceTime;

  if (age > 18 && registeredEarly) {
    raceTime = "9:30 Am";
  } else if (age > 18 && !registeredEarly) {
    raceTime = "11:00 Am";
  } else if (age < 18) {
    raceTime = "12:30 Am";
  } else {
    raceTime = "Please see the registration desk.";
  }

  let result = `Name : ${name} <br> Race Number : ${raceNumber} <br>Race Time : ${raceTime}`;
  document.getElementById("result").innerHTML = result;

  let model = document.getElementById("resultModal");
  model.style.display = "block";

  let closeButton = document.querySelector(".close-button");
  closeButton.addEventListener("click", function () {
    model.style.display = "none";
    document.getElementById("raceForm").reset();
  });

  window.addEventListener("click", function (event) {
    if (event.target == model) {
      model.style.display = "none";
      document.getElementById("raceForm").reset();
    }
  });
});
