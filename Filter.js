const ages=[32,21,34,17,20];
const result=ages.filter(checkAdult);
function checkAdult(age){
    return age>=18
}
console.log(result);