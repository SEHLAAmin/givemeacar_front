import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Agence() {

    
    const [dataAgence, setDataAgence] = useState({ hits: [] });

    useEffect(() => {

        async function fetch
        const result = await axios.get('http://localhost:9090/Agence');
        setDataAgence(result.dataAgence)
    }, []);




    return (
        <div>
            {dataAgence.tableau.map(current => (
                <h1>{current.name}</h1>
            ))}
            
            {/* recup nos data d'agence */}
        </div>
    )
}
