// ! Task 1
var itemArray = [
    {
        name: "juice",
        price: "50",
        quantity: "3",
    },
    {
        name: "cookie",
        price: "30",
        quantity: "9",
    },
    {
        name: "shirt",
        price: "880",
        quantity: "1",
    },
    {
        name: "pen",
        price: "100",
        quantity: "2",
    }
]

var count1 = (itemArray[0].price * itemArray[0].quantity);
var count2 = (itemArray[1].price * itemArray[1].quantity);
var count3 = (itemArray[2].price * itemArray[2].quantity);
var count4 = (itemArray[3].price * itemArray[3].quantity);

var allItems = (count1+ count2 + count3 + count4);

console.log(count1);
console.log(count2);
console.log(count4);

console.log(allItems);

// Task 2
var obj = {
    name: "Ahsan",
    email: "dreamer.ahsan@gmail.com",
    password: "12345",
    age: 18,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan",
}

if("age" in obj && "country" in obj == true){
    console.log("Task 2 output");
    console.log("Age and country exist in object.");
} else{
    console.log("Task 2 output");
    console.log("NaN");
}

// Task 3

function Ahsan(fName, country, age){
    this.fName = fName,
    this.country = country,
    this.age = age
    
}

 var p1 = new Ahsan('Ahsan', 'Pakistan', 25);
var p2 = new Ahsan("Zain", "Pakistan", 11);
 var p3 = new Ahsan("Zohar", "Pakistan", 13);

 console.log(p2);

// Task 4




function Area(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

function myfun() {
    var personName = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var profession = document.getElementById("profession").value;

    if ((personName.length && address.length && education.length && profession.length) == 0) {
        console.log("Please fill all the field correctly");
    } else {
        var gender1 = document.getElementById("male");
        var gender2 = document.getElementById("female");

        if (gender1.checked) {
            var a = "male";
        } else if (gender2.checked) {
            var a = "female";
        }

        const myArea = new Area(personName, a, address, education, profession);
        console.log(myArea);
    }
}
