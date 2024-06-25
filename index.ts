// interface defination:

// TypeScript allows you to specifically type an object using an interface that can be reused by multiple objects. To create an interface, use the interface keyword followed by the interface name and the typed object.

// Syntax:
// interfae objname{}

interface PersonObj {
  fname: string;
  lname: string;
  age: number;
  education: string;
  email: string;
  address: string;
  rollNum: number;
  hobbies: string[];
  socialMedia: {
    firstId: string;
    secondId: string;
    thirdId: string;
  };
}
const personObj: PersonObj = {
  fname: "Hamza",
  lname: "Faisal",
  age: 34,
  education: "intermediate",
  email: "abc@hotmail.com",
  address: "HouseNo/234",
  rollNum: 38998,
  hobbies: ["Cricket!", "Hockey!", "Football!"],

  socialMedia: {
    firstId: "FACEBOOK",
    secondId: "INSTAGRAM",
    thirdId: "LINKEDIN",
  },
};
console.log(personObj);
const favouriteHobby = (personObj: PersonObj) => {
  return `${personObj.hobbies[0]}`;
};
console.log("\tMy Favourite hobby is ", favouriteHobby(personObj));
// console.log("\n\tFunction Return Favourite Hobby ==>", personObj.fun("Cricket"));
// THE END:
