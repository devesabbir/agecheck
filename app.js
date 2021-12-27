const name = document.querySelector("#name");
const age = document.querySelector("#age");
const button = document.querySelector("#button");
const output = document.querySelector(".output");
let gender = document.querySelector('input[type="radio"]:checked');



button.addEventListener("click", () => {

  let gender = document.querySelector('input[type="radio"]:checked');

  if (name.value == "") {
    name.nextElementSibling.innerHTML = `
             <p class="text-danger">Name Field Required!</p>
          `;
  } else if (age.value == "" || (/^[0-9]*$/).test(age.value) == false) {
    age.nextElementSibling.innerHTML = `
            <p class="text-danger">Year Field Required! fill with Digit.</p>
        `;
  } else {
    output.innerHTML = `
             ${ageCal(name.value,age.value,gender.value)}
         `;
  }
  
  name.value = "";
  age.value = "";
});


