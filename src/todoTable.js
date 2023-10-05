const table = document.createElement('table')
const thead = document.createElement('thead')
const tbody = document.createElement('tbody')

function createTable(){
    
    const tr = document.createElement('tr')
    const trTitle = document.createElement('th')
    trTitle.textContent = 'Naslov'
    const trDesc = document.createElement('th')
    trDesc.textContent = 'Opis'
    const trAuthor = document.createElement('th')
    trAuthor.textContent = 'Avtor'
    const trPrio = document.createElement('th')
    trPrio.textContent = 'Prioriteta'

    tr.appendChild(trTitle)
    tr.appendChild(trDesc)
    tr.appendChild(trAuthor)
    tr.appendChild(trPrio)
    thead.appendChild(tr)
    table.appendChild(thead)
    table.appendChild(tbody)
    return table
}
function createRow(todos){
    tbody.textContent = ''

    todos.forEach(element => {
        const row = insertRow(element)
        tbody.appendChild(row)
    })
}

function insertRow(todo){
    const row = document.createElement('tr')
    const tdTitle = document.createElement('td')
    tdTitle.textContent = todo.title
    const tdDesc = document.createElement('td')
    tdDesc.textContent = todo.desc
    const tdAuthor = document.createElement('td')
    tdAuthor.textContent = todo.author
    const tdPrio = document.createElement('td')
    tdPrio.textContent = todo.priority

    row.appendChild(tdTitle)
    row.appendChild(tdDesc)
    row.appendChild(tdAuthor)
    row.appendChild(tdPrio)

    return row
}

function loadTable(){
    const main = document.getElementById('main')

    main.appendChild(createTable())
}
export {loadTable, createRow}