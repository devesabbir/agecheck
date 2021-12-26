const name = document.querySelector("#name");
const age = document.querySelector("#age");
const button = document.querySelector("#button");
const output = document.querySelector(".output");
const male = document.querySelector("#male");
const female = document.querySelector("#female");
const gender = document.querySelector(".gender");





button.addEventListener("click", () => {
  if (name.value == "") {
    name.nextElementSibling.innerHTML = `
             <p class="text-danger">Name Field Required</p>
          `;
  } else if (age.value == "" || (/^[0-9]*$/).test(age.value) == false) {
    age.nextElementSibling.innerHTML = `
            <p class="text-danger">Year Field Required  fill with Digit</p>
        `;
  } else {
    output.innerHTML = `
           ${ageCal(name.value, age.value)}
         `;
  }
  name.value = "";
  age.value = "";
});

