const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]
//Create array of nos
array=[1,2,3,4,5,6,7,8,9,10,11]
//Check if array created is an array
console.log(Array.isArray(array))
//Find the length of the array
console.log(array.length)
//Find 1st,middle and last element in Array
console.log(`First:${array[0]}`)
console.log(`Middle:${array[Math.floor((array.length-1)/2)]}`)
console.log(`Last:${array[array.length-1]}`)

itCompanies=[
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
]
console.log(itCompanies);
console.log(itCompanies.length)
console.log(`First Company:${itCompanies[0]}`);
console.log(`Middle Company:${itCompanies[Math.floor(itCompanies.length/2)]}`);
console.log(`Last Company:${itCompanies[itCompanies.length-1]}`);
itCompanies.forEach(company => {
  console.log(company.toUpperCase());  
});
console.log(`${itCompanies.join()} are big IT Companies`);
if (itCompanies.includes('Facebook')){
  console.log('Facebook');
}else{
  console.log('Not found');
}
c=[]
itCompanies.forEach(company => {
  count=0
  console.log(company.toUpperCase());  
});
itCompanies.sort()
console.log(itCompanies);
itCompanies.reverse()
console.log(itCompanies);
console.log(itCompanies.slice(0,3));
console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length));
itCompanies.shift(0,1)
console.log(itCompanies);
itCompanies.splice(0,itCompanies.length)
console.log(itCompanies);