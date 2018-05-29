/* FIXME:
*
* export a function that updates a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
* - the updated element must not share the same reference as the previous one.
*
*/

const update = (elmt,newelmt) => {
                const idtoremove = elmt.id;
                const   tmp=getState();
                let newbuf = tmp.filter(elmt => elmt.id !== idtoremove);
                newbuf
                setState([...newbuf,{id:idtoremove,newelmt}])
                };
export default update;
