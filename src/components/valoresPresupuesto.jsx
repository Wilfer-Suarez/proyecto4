import React, { useEffect, useState } from 'react'

export default function ValoresPresupuesto( {datoPresupuesto, suscripcionCompleta, gastado, setGastado} ) {

    const actualizarDisponible = () => {
        const gastado = suscripcionCompleta.reduce((total, rey) => Number(rey.cantidad) + total, 0);
        setGastado(gastado);
    };

    useEffect(() => {
        actualizarDisponible();
    }, [suscripcionCompleta]);

    return (
        <>
            <div className="caja21">
                <div className="presupuesto">Presupuesto: <p>{datoPresupuesto} $</p></div>
                <div className="presupuesto">Disponible: <p>{datoPresupuesto - gastado} $</p></div>
                <div className="presupuesto">Gastado: <p>{gastado} $</p></div>
            </div>
        </>
    )
}
