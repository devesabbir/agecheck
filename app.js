const name = document.querySelector("#name");
const age = document.querySelector("#age");
const button = document.querySelector("#button");
const output = document.querySelector(".output");



name.addEventListener('keyup', function(){
    output.innerHTML = '' ;
    name.nextElementSibling.innerHTML = '';
})

age.addEventListener('keyup', function(){
    output.innerHTML = '' ;
    age.nextElementSibling.innerHTML = '';
})


button.addEventListener("click", () => {
  let gender = document.querySelector('input[type="radio"]:checked');

  if (name.value == "") {
    name.nextElementSibling.innerHTML = `
             <p class="text-danger">Name Field Required!</p>
          `;
  } else if (age.value == "" || /^[0-9]*$/.test(age.value) == false) {
    age.nextElementSibling.innerHTML = `
            <p class="text-danger">Year Field Required! fill with Digit.</p>
        `;
  } else {
    output.innerHTML = `
             ${ageCal(name.value, age.value, gender.value)}
         `;
         button.setAttribute('class','bg-danger text-white');
  }

  name.value = "";
  age.value = "";
});

button.addEventListener('blur', () => {
       button.removeAttribute('class');
       output.innerHTML = '';
})
