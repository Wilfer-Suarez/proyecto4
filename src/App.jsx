import { useState } from 'react'
import Suscripciones from './components/suscripciones'
import AgregarPresupuesto from './components/agregarPresupuesto'
import ListaSuscripciones from './components/listaSuscripciones';

function App() {
  const [valorPresupuesto, setValorPresupuesto] = useState("");
  const [datoPresupuesto, setDatoPresupuesto] = useState("");
  const [valorSuscripcion, setValorSuscripcion] = useState("");
  const [valorCantidadSuscripcion, setValorCantidadSuscripcion] = useState("");
  const [suscripcionCompleta, setSuscripcionCompleta] = useState([]);
  const [mostrar, setMostrar] = useState(false);
  const [mostrar1, setMostrar1] = useState(false);

  const eliminarSuscripcion = id => {
    const nuevaLista = suscripcionCompleta.filter(rey => rey.id != id);
    setSuscripcionCompleta(nuevaLista);
  }

  const mostrarPresupuesto = mostrar
    ? <Suscripciones
      datoPresupuesto={datoPresupuesto}
      setValorSuscripcion={setValorSuscripcion}
      valorSuscripcion={valorSuscripcion}
      setValorCantidadSuscripcion={setValorCantidadSuscripcion}
      valorCantidadSuscripcion={valorCantidadSuscripcion}
      setMostrar1={setMostrar1}
      setSuscripcionCompleta={setSuscripcionCompleta}
      suscripcionCompleta={suscripcionCompleta} />
    : <AgregarPresupuesto
      setValorPresupuesto={setValorPresupuesto}
      valorPresupuesto={valorPresupuesto}
      setDatoPresupuesto={setDatoPresupuesto}
      datoPresupuesto={datoPresupuesto}
      setMostrar={setMostrar} />

  const mostrarSuscripcion = mostrar1
    ? <ListaSuscripciones suscripcionCompleta={suscripcionCompleta} eliminarSuscripcion={eliminarSuscripcion} />
    : null

  return (
    <>
      <div className="cajaPrincipal">
        <nav className="caja1">
          <h1>Medidor Suscripciones</h1>
        </nav>

        {mostrarPresupuesto}

        {mostrarSuscripcion}
      </div>
    </>
  )
}

export default App
