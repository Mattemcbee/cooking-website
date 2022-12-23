import { filterIngredientsByTrue, filterExport } from "../meals/MealsSlice"
const stringArrayPush=()=>{
let array = []
let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
for (let i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value)
}
const stringArray = JSON.stringify(array);
console.log(stringArray, 'string from arraypush') ; 
// if (stringArray.length > 4 ) {
// filterExport(); 
//     console.log(stringArray.length,'length')
// }


return( stringArray )
}
export default stringArrayPush;