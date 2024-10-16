import React, { useState } from 'react'

export default function AgregarPresupuesto({ setValorPresupuesto, valorPresupuesto, setDatoPresupuesto, setMostrar }) {
    const [error, setError] = useState(false);

    const modificarPresupuesto = (e) => {
        setValorPresupuesto(e.target.value);
    };

    const enviarPresupuesto = (e) => {
        e.preventDefault();
        if (valorPresupuesto === "" || Number(valorPresupuesto) < 0) {
            setError(true);
            return;
        }

        setDatoPresupuesto(Number(valorPresupuesto));
        setMostrar(true);
    };

    return (
        <>
            <div className='agregarPresupuesto'>
                <form className='agregarPresupuesto1' onSubmit={enviarPresupuesto}>
                    <h3>Agregar presupuesto</h3>
                    <p>en Dolares</p>
                    <input type="number" onChange={modificarPresupuesto} />
                    <button>Agregar</button>
                    {error ? <p className='error'>Datos no validos</p> : null}
                </form>
            </div>
        </>
    )
}
