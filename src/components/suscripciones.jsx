import React, { useState } from 'react'
import ValoresPresupuesto from './valoresPresupuesto';

export default function Suscripciones({
    datoPresupuesto,
    setValorSuscripcion,
    valorSuscripcion,
    setValorCantidadSuscripcion,
    valorCantidadSuscripcion,
    setMostrar1,
    setSuscripcionCompleta,
    suscripcionCompleta,
}) {

    const [gastado, setGastado] = useState(0);
    const [error, setError] = useState(false);
    const [errorCantidad, setErrorCantidad] = useState(false);

    const modificarSuscripcion = (e) => {
        setValorSuscripcion(e.target.value);
    };

    const modificarValorSuscripcion = (e) => {
        setValorCantidadSuscripcion(e.target.value);
    };

    const enviarSuscripcion = (e) => {
        e.preventDefault();
        if (valorCantidadSuscripcion === "" || Number(valorCantidadSuscripcion) <= 0 || valorSuscripcion === "") {
            setError(true);
            return;
        }
        setError(false);
        if (datoPresupuesto - gastado < Number(valorCantidadSuscripcion)) {
            setErrorCantidad(true);
            return;
        }
        setErrorCantidad(false);

        setMostrar1(true);

        const valorSuscripcionCompleta = {
            suscripcion: valorSuscripcion,
            cantidad: valorCantidadSuscripcion,
            id: Date.now(),
        }

        setSuscripcionCompleta([...suscripcionCompleta, valorSuscripcionCompleta]);

        setValorSuscripcion("");
        setValorCantidadSuscripcion("");
    };

    return (
        <>
            <section className="caja2">
                <ValoresPresupuesto 
                datoPresupuesto = {datoPresupuesto} 
                suscripcionCompleta = {suscripcionCompleta}
                setGastado = {setGastado}
                gastado = {gastado}/>

                <form className="caja22" onSubmit={enviarSuscripcion}>
                    <h3 >Agregar suscripción</h3>
                    <p>Servicio</p>
                    <select value={valorSuscripcion} onChange={modificarSuscripcion}>
                        <option value="">-- Elegir --</option>
                        <option value="youtube">YouTube Premium</option>
                        <option value="spotify">Spotify</option>
                        <option value="disney">Disney Plus</option>
                        <option value="amazon">Amazon prime</option>
                        <option value="apple">Apple TV</option>
                        <option value="netflix">Netflix</option>
                    </select>

                    <p>Valor suscripción</p>
                    <input type="number" placeholder='20$' value={valorCantidadSuscripcion} onChange={modificarValorSuscripcion} />

                    <button>Agregar</button>

                    {error ? <p className='error'>Datos no validos</p> : null}
                    {errorCantidad ? <p className='error'>Presupuesto insuficiente</p> : null}
                    
                </form>
            </section>
        </>
    )
}

