function ageCal(name, year, gender) {
  let date = new Date();
  let age = date.getFullYear() - year;
  return `
        <p class="bg-${ageCheck(age, gender).classs} text-${
    ageCheck(age, gender).color
  }">Hi ${name} You Are ${age} Years Old ${ageCheck(age, gender).Status}</p>
     
     `;
}

let ageCheck = (age, gender) => {
  if (age >= 0 && age <= 12) {
    if (gender == "male") {
      return {
        Status: "& tumi Ekhno Babu.",
        classs: "info",
      };
    } else if (gender == "female") {
      return {
        Status: "& tumi Ekhno Babu.",
        classs: "info",
      };
    }
  } else if (age >= 13 && age <= 17) {
    if (gender == "male") {
      return {
        Status: "& tumi Ekhn Kishor.",
        classs: "info",
      };
    } else if (gender == "female") {
      return {
        Status: "& tumi Ekhn Kishori.",
        classs: "info",
      };
    }
  } else if (age >= 18 && age <= 30) {
    if (gender == "male") {
      return {
        Status: "& tumi Ekhn jubok.",
        classs: "info",
      };
    } else if (gender == "female") {
      return {
        Status: "& tumi Ekhn jubuti.",
        classs: "info",
      };
    }
  } else if (age >= 31 && age <= 45) {
    if (gender == "male") {
      return {
        Status: "& Apni Ekhn Purush.",
        classs: "info",
      };
    } else if (gender == "female") {
      return {
        Status: "& Apni Ekhn Mohila.",
        classs: "info",
      };
    }
  } else if (age >= 46 && age <= 120) {
    if (gender == "male") {
      return {
        Status: "& Apni Ekhn Buro Manush.",
        classs: "info",
        color: "danger",
      };
    } else if (gender == "female") {
      return {
        Status: "& Apni Ekhn Buri Manush.",
        classs: "info",
        color: "danger",
      };
    }
  } else if (age >= 121) {
    if (gender == "male") {
      return {
        Status: ". r tumi buji jin !",
        classs: "info",
      };
    } else if (gender == "female") {
      return {
        Status: ".tumi manush naki pori !",
        classs: "info",
      };
    }
  } else {
    return {
      Status: ". Asole kothao gormil hoyeche...!",
      classs: "danger",
    };
  }
};
