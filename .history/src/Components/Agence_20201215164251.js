import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AffichageAgence from './AffichageAgence'
export default function Agence() {


    const [dataAgence, setDataAgence] = useState({ hits: [] });

    useEffect(() => {

        async function fetchData() {
            const result = await axios('http://localhost:9090/Agence');
            console.log(result)
            setDataAgence(result.data)
        }
        fetchData();
    }, []);




    return (
       
           <AffichageAgence test={}/>
        

        // <div>
        //     {dataAgence.hits.map(item =>(
        //         <h1>{item.name}</h1>
        //     ))}
        // </div>
        //     <ul>
        //     {dataAgence.hits.map(item => (
        //       <li>
        //         <a >{item.name}</a>
        //       </li>
        //     ))}
        //   </ul>
    )
}
