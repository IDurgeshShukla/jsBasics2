const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {

//  for( i = 0; i< data.length;i++){
//   if(data[i].profession === "developer") console.log(data[i]);
//  }
data.forEach((Element) => {if(Element.profession === "developer")
console.log(Element)})
}

// 2. Add Data
function addData() {
 const newdata = prompt("please enter data");
 data.push(newdata);

}

// 3. Remove Admins
function removeAdmin() {
  data.forEach((element)=>{
    if(element.profession === "admin")
  data.pop(element)
  })
   data.forEach((Element) => console.log(Element))
 
  
}

// 4. Concatenate Array
function concatenateArray() {
  let dummy = ['obj1','obj2'];
  dummy = data.concat(dummy);
  dummy.forEach((element) => console.log(element))
}

// 5. Average Age
function averageAge() {
  let age = Number(0);
  let length = Number(data.length);

  data.forEach((element) => age += Number(element.age))

  console.log( age/length);
}

// 6. Age Check
function checkAgeAbove25() {
  data.forEach((element)=> {
if(element.age > 25) console.log(true)
  })
}

// 7. Unique Professions
function uniqueProfessions() {
  let profession = null;

 data.forEach((element)=>{
  if(profession === element.profession) {
    
  } else{
    profession = element.profession;
    console.log(element.profession);
  }
 })
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a,b)=> a.age- b.age)
  data.forEach((element)=> console.log(element))
}

// 9. Update Profession
function updateJohnsProfession() {
  data.forEach((element)=>{
    if(element.name == "john")
 element.profession = 'manager';
console.log(element)})
}

// 10. Profession Count
function getTotalProfessions() {
  console.log(data.length)
}
