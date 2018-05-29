import {setState,getState} from "../store";

/* FIXME:
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/
let len = 6
const add = (elmt) => {
         let tmp = getState();
         if(typeof(elmt) === "string")
         {
            setState([...tmp,{id: ++len,url : elmt}]);
         }
         else
         { 
            setState([...tmp,...elmt]);
         }


};

export default add;
