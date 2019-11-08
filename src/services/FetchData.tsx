import React, { useState } from 'react';
const FetchData: React.FC = () => {
    const [item, setItem] = useState([])
    useState(async () => {

        const fetchItem = await fetch("http://localhost:5000/tasks");
        const data = await fetchItem.json();
        
        // console.log(typeof(data))
        
    })

    return (
        <div>


        </div>


    );



}