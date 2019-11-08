import { async } from "q";

export const fetchdata = async() =>{  
 
 const  fetchitem = await fetch('http://localhost:5000/tasks')
 const dataitem = await fetchitem.json();

return dataitem;

        

    



}