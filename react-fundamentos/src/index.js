import React from 'react'
import ReactDom from 'react-dom'

// Manejos de strings

/*
const name = 'Francis Gonzales'
const user = {
    'id': 1,
    'name': 'Francis',
    'edad': 28
}
function userId(user) {
    return user.id
}

const App = <h1>
    Hello World -  React By { name } mi edad es { user.edad }
    mi id es { userId(user) }
</h1>


const root = document.getElementById('root')
ReactDom.render(App, root)
*/

// Creacion de componentes - Funcionales
// los metodos creados deben iniciar con mayuscula

/*
const TarjetaFruta = () => (
    <div>
        <h3>Titulo</h3>
        <hr/>
        <p>Descripcion</p>
    </div>
)

const App = () => (
    <div>
        <TarjetaFruta/>
        <TarjetaFruta></TarjetaFruta>
    </div>
)

const root = document.getElementById('root')
//ReactDom.render(<App></App>, root)
// o
ReactDom.render(<App/>, root)
*/

// Props
// Parametros a los  componentes

/*
// Retorna diractemante los datos sin necesidad de escribir return
//const TarjetaFruta = (props) => (
//    <div>
//        <h2>{ props.name }</h2>
//        <h3>Precio { props.price }</h3>
//        <hr/>
//        <p>Descripcion</p>
//    </div>
//)

const TarjetaFruta = (props) => {
    console.log(props)
    return (<div>
        <h2>{ props.name }</h2>
        <h3>Precio { props.price }</h3>
        <hr/>
        <p>Descripcion</p>
    </div>
    )
}
    

var frutaExotica = 'Fruta del Dragon'

const App = () => (
    <div>
        <TarjetaFruta name = 'Sandia' price = {2.00} />
        <TarjetaFruta name = 'Agua  y manto' price = {3.00}></TarjetaFruta>
        <TarjetaFruta name = { `${frutaExotica}` } price = {100.00}></TarjetaFruta>
    </div>
)

const root = document.getElementById('root')
//ReactDom.render(<App></App>, root)
// o
ReactDom.render(<App/>, root)
*/

// Creacion de componentes - Con Estados
// los metodos creados deben iniciar con mayuscula

class TarjetaFruta extends React.Component {
    constructor() {
        super();

        this.agregar = this.agregar.bind(this)
        this.restar = this.restar.bind(this)

        this.state = {
            cantidad: 0
        }
    }

    agregar () {
        this.setState({cantidad: ++this.state.cantidad})
    }

    restar () {
        this.setState({cantidad: --this.state.cantidad})
    }

    limpiar () {
        this.setState({cantidad: 0})
    }

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

var frutaExotica = 'Fruta del Dragon'

const App = () => (
    <div>
        <TarjetaFruta name = 'Sandia' price = {2.00} />
        <TarjetaFruta name = 'Agua  y manto' price = {3.00}></TarjetaFruta>
        <TarjetaFruta name = { `${frutaExotica}` } price = {100.00}></TarjetaFruta>
    </div>
)

const root = document.getElementById('root')
ReactDom.render(<App/>, root)