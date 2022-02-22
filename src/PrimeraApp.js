import React from 'react';
//import React, { Fragment } from 'react';

const PrimeraApp = ( {saludo = 'Hola mundo'} ) => {

  

    return (
        <>
            <h1> {saludo} </h1>
            {/* JSON.stringify(saludo, null, 3)*/ } 
            <p>Mi Primera aplicación</p>
        </>
    );
    
    
}

export default PrimeraApp;