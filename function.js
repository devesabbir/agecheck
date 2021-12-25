function ageCal(name, year) {
  let date = new Date();
  let age = date.getFullYear() - year;
  return `
        <p class="bg-${ageCheck(age).class} text-${
    ageCheck(age).color
  }">Hi ${name} You Are ${age} Years Old ${ageCheck(age).Status}</p>
     
     `;
}

let ageCheck = (age, gender) => {
  if (age >= 0 && age <= 12) {
    return {
        Status: "& tumi Ekhno Babu.",
        class: "info",
      };
    }else if (age >= 13 && age <= 17) {
        return {
            Status: "& Tumi Ekhn Teenager.",
            class: "primary",
          };
  } else if (age >= 18 && age <= 30) {
    return {
        Status: "& Tumi togboge Young.",
        class: "primary",
      };
  } else if (age >= 31 && age <= 45) {
    return {
        Status: "& Apni Ekhn Midle Age.",
        class: "warning",
      };
  } else if (age >= 46 && age <= 120) {
    return {
        Status: "& Apni ekhn Oldest Manush.",
        class: "danger",
      };
  } else if (age >= 121) {
    return {
      Status: ". R Tumi Buji Jin!",
      class: "dark",
      color: "success",
    };
  } else {
    return {
      Status: ". Asole kothao gormil hoyeche...!",
      class: "danger"
     
    };
  }
};
