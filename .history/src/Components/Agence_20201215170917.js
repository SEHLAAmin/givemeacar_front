import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AffichageAgence from './AffichageAgence'
export default function Agence() {


    const [dataAgence, setDataAgence] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const result = await axios('http://localhost:9090/Agence');
            setDataAgence(result.data)
            //console.log(result)
        }
        fetchData();
    }, []);



    return (
         <div>
             <h1></h1>
         </div>
    )
}
