import React, { useState } from 'react'

export default function ListaSuscripciones({ suscripcionCompleta, eliminarSuscripcion }) {

    return (
        <>
            <aside className="caja3">
                <h3>Suscripciones</h3>
            </aside>

            <footer className="caja4">
                {suscripcionCompleta.map((rey, index) => {
                    const urlImagen = `./src/imagenes/${rey.suscripcion}.svg`;

                    const borrarSuscripcion = () => {
                        eliminarSuscripcion(rey.id);
                    };

                    return (
                        <div className="caja41" key={index}>
                            <img src={urlImagen} alt="Servicios" />
                            <p>{rey.cantidad} $</p>
                            <button onClick={borrarSuscripcion}>Borrar</button>
                        </div>
                    );
                })}
            </footer>
        </>
    )
}
