import { getState,setState} from "../store"
/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

const remove = (elmt) => {
                const idtoremove = elmt.id;
                const   tmp=getState();
                let newbuf = tmp.filter(elmt => elmt.id !== idtoremove);
                setState(newbuf)
                };

export default remove;
