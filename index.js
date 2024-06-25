// interface defination:
const personObj = {
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
const favouriteHobby = (personObj) => {
    return `${personObj.hobbies[0]}`;
};
console.log("\tMy Favourite hobby is ", favouriteHobby(personObj));
export {};
// console.log("\n\tFunction Return Favourite Hobby ==>", personObj.fun("Cricket"));
// THE END:
