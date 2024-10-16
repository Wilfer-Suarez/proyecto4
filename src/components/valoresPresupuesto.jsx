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
                <p className="presupuesto">Presupuesto: {datoPresupuesto} $</p>
                <p className="presupuesto">Disponible: {datoPresupuesto - gastado} $</p>
                <p className="presupuesto">Gastado: {gastado} $</p>
            </div>
        </>
    )
}
