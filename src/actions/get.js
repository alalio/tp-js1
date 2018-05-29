import { getState } from "../store";
/* FIXME:
*
* export a function that gets a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

const get = (id) => {
    const state = getState();
    return state.indexOf(id);
   };

export default get;
