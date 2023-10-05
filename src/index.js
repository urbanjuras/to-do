import loadHeader from './header.js'
import loadButton from './button.js'
import { loadTable, createRow } from './todoTable.js'
import Todo from './todoList.js'

const content = document.getElementById('content')
const todos = []

function createMain(){
    const main = document.createElement('div')
    main.setAttribute('id','main')

    return main
}

function addToList(title, desc, author, priority){
    const todo = new Todo(title, desc, author, priority)
    const newT = todo.createNew()
    todos.push(newT)
    createRow(todos)
}

content.appendChild(createMain())
loadHeader()
loadButton()
loadTable()
addToList('test','test','test','1')


export { todos }