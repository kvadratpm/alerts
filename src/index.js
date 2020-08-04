import "./styles.css";

const button = document.getElementById("alert-generator");
let count = 1;
const generateAlert = () => {
  const div = document.body.querySelector(".alerts");
  console.log(div);
  const atr = ["alert", "alert-primary"];
  const alert = document.createElement("div");
  alert.innerHTML = `Alert ${count}`;
  alert.classList.add(...atr);
  div.prepend(alert);
  count += 1;
};
button.addEventListener("click", generateAlert);
