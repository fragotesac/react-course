import React from 'react'
import ReactDom from 'react-dom'

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