import React from 'react'

class TarjetaFruta extends React.Component {
    state = {
        cantidad: 0
    }

    agregar = () => this.setState({ cantidad: ++this.state.cantidad })
    restar = () => this.setState({ cantidad: --this.state.cantidad })
    limpiar = () => this.setState({ cantidad: 0 })

    render() {
        return (
            <div>
                <h2>{ this.props.name }</h2>
                <h3>Precio { this.props.price }</h3>
                <hr/>
                <button onClick = { this.agregar } >+</button>
                <button onClick = { this.restar } >-</button>
                <button onClick = { this.limpiar.bind(this) } >Limpiar</button>
                <p>Cantidad { this.state.cantidad }</p>
            </div>
        )
    }

}

export default TarjetaFruta