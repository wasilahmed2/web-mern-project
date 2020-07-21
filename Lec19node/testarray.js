console.clear();

let student =["Usman","Talal", "Nouman"];
 


student.splice(2,2,"Akhtar");
student.sort(); 
console.log(...student);

let rate=[1,2,3];
let newrate=rate.map(function(a){
    return a*2;
});

console.log(newrate); 
