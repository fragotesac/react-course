import React from 'react'
import TarjetaFruta from './componentes/TarjetaFruta'

var frutaExotica = 'Fruta del Dragon'

const App = () => (
    <div>
        <TarjetaFruta name = 'Sandia' price = {2.00} />
        <TarjetaFruta name = 'Agua  y manto' price = {3.00}></TarjetaFruta>
        <TarjetaFruta name = { `${frutaExotica}` } price = {100.00}></TarjetaFruta>
    </div>
)

export default App