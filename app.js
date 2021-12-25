const name = document.querySelector('#name')
const age = document.querySelector('#age')
const button = document.querySelector('#button')
const output = document.querySelector('.output')

console.log();


button.addEventListener('click', () => {
        
        if(name.value == ''){

            name.nextElementSibling.innerHTML = `
             <p class="text-danger">Name Field Required</p>
          `
          
        }else if(age.value == ''){
            age.nextElementSibling.innerHTML = `
            <p class="text-danger">Year Field Required</p>
        ` 

        }else{
            output.innerHTML = `
            ${ageCal(name.value,age.value)}
          `
         
       }
 
         name.value = '';
         age.value = '';
     })
     



