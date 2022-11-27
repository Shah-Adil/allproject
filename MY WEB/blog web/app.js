


// // string
// let myName  = "adil" ;

// // array 

// let food = ["cake " , "mango " , 'ice-cream'];

// // ====== obj ================

// let profile = {
//     name: 'adil',
//     age : 18 

// }




// for (const key in profile) {
//   console.log(`Index : ${key}; items : ${profile[key]}`)

// }


// for (const v of food) {
//     console.log(v)
  
//   }
  

// let sum = 0 ;
// let  star = ""
// for(let i  = 1 ; i <= 5 ; i++ ) {
//     sum += i * i ;
//     star += "*"
//     console.log(star);
// }

// console.log(sum);



// let sum  =  0 ; 
// let star =  "" ; 


// for (let i = 1; i <= 5; i++) {
//     star += "⭐" 
//     console.log(star);

//     sum += i * i ;

// }

// console.log(sum);


// // normal function 
// function name(params) {
//     console.log(`hello ${params}`);
// }
// name("khan");

// // let function 
// let myitems = function(items) {
//     console.log(`I like ${items}`);
// }
// myitems("you");

// // arrow function 
// let myNumber = (num1 =  4 , num2 = 2 ) => {
//   return num1 * num2 ;
// } 

// let result = myNumber();

// console.log(result);




// let myFav  = [ ' red' ,  'blue' , 'green'];


// myFav.forEach(mname)


// function mname(items , Index , ot) {
//   console.log(items , Index , ot) ;
// }




// let myMap = function(items) {
//   console.log(items , ' Is my favorite color');
// };

// myFav.map(myMap);


// let math1 ; 
// math1 = Math.ceil(2.7);
// math1 = Math.round(2.7);
// math1 = Math.PI;
// math1 = Math.E;
// math1 = Math.floor(2.7);
// math1 = Math.sqrt(2.7);
// math1 = Math.abs(-2.7);
// math1 = Math.pow(5 , 2);
// math1 = Math.min(2.7 , 1 , -5 , 6 , 8);
// math1 = Math.max(2.7 , 5 , 11);
// math1 = Math.random() * 10;

// console.log(math1);



// let date ; 

// date = new Date();
// date = new Date("04-07-2003");


// console.log(date);


// let home = document.getElementById("home");
// let blog = document.getElementById("blog");


// function homepage() {
//     home.style="display: flex;";
//     blog.style="display: none;";
// }



// function blogpage() {
//     blog.style="display: flex;";
//     home.style="display: none;";
// }








// js class 

// class person    {
//     constructor(name="khan" , lname="baba" , dob="11/5/2001") {
//         this.firstName =  name;
//         this.lastName = lname;
//         this.dob = dob;
        
        
//     }

//     theirAge() {
//        let birth = new Date(this.dob);
//         let diff = Date.now() - birth.getTime();
//         let age = new Date(diff);
//         return Math.abs(age.getUTCFullYear()-1970);  
//     }

    
// }


// let person1 = new person("ali" , "a" , "11/4/2000");
// let person2 = new person();
// let person3 = new person("ser" , "sungh" , "5/9/2005");
// console.log(person1.theirAge());
// console.log(person2);
// console.log(person3);


// sub class 


// class person {
//     constructor(fName , lName) {
//         this.firstName = fName;
//         this.lastName = lName;

//     }

//     fullName() {
//         return `Hello ${this.firstName} ${this.lastName} `;
//     }
// }




// class customer extends person  {
//     constructor(fName , lName , phone , membership) {
//         super(fName , lName)
//         this.phone = phone ;
//         this .membership = membership ;
//     }
// }



// let person1 =  new person("adil" , "shah");

// console.log(person1);
// console.log(person1.fullName());


// let customer1 = new customer ( "selmon" , "kan" , "0188888888" , "not a member")

// console.log(customer1);
// console.log(customer1.fullName());












