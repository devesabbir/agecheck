function ageCal(name,year) {
     let date = new Date();
     let age = date.getFullYear() - year;
     return `
        <p class="bg-${ageCheck(age).class} text-${ageCheck(age).color}">Hi ${name} You Are ${age} Years Old & ${ageCheck(age).status}</p>
     
     `
}

let ageCheck = (age) => {
     
      if(age >= 0 && age <= 12){
         return {
             Status : 'You Are babu',
             class : 'info'
         }
      }else if(age >= 13 && age <= 17 ){
          return {
              Status : 'You Are Kishor',
              class : 'primary'
          }
      }else if(age >= 18 && age <= 30){
          return {
              status : 'You are Togboge jubok',
              class : 'success'
          }
      }else if(age >= 31 && age <= 45){
        return {
            status : 'You are Moddho Boyosko',
            class : 'warning'
        }
      }else if(age >= 46 && age <= 120){
        return {
            status : 'You are Buru    Manush',
            class : 'danger'
        }
      }else if(age >= 121 ){
        return {
            status : 'Tumi toh Jin',
            class : 'dark',
            color : 'success'
        }
      }else{
        return {
            status : 'kothao gormil ache',
            class : 'danger'
        }
      }

}
 

