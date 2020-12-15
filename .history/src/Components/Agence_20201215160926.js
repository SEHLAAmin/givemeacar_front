import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Agence() {

    
    const [dataAgence, setDataAgence] = useState({ test: [] });

    useEffect( async () => {
        const result = await axios.get('http://localhost:9090/Agence');
        setDataAgence(result.dataAgence)
    });




    return (
        <div>
            {dataAgence.test.map(current => (
                <h1>{current.name}</h1>
            ))}
            
            {/* recup nos data d'agence */}
        </div>
    )
}
