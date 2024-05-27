let filterButton = document.querySelector('#filter-button')
let createButton = document.querySelector('#create-button')
let table = document.querySelector('#table')
rows = table.getElementsByTagName('tr');
let searchInput = document.querySelector('#searchInput');

filterButton.addEventListener('click', (e) => {
    e.preventDefault()
 let filterText = searchInput.value.toLowerCase()

 for(let i = 1; i < rows.length; i++ ){
    let cells = rows[i].getElementsByTagName('td');
    let matched = false;
 
 for (let j = 0; j < cells.length; j++) {
    if (cells[j].innerText.toLowerCase().includes(filterText)) {
        matched = true;
        break;
        }}
        rows[i].style.display = matched ? "" : "none";
        
     }
})



createButton.addEventListener('click', (e) => {
    e.preventDefault();
let  newRow =  document.createElement('tr')
let td = documnt.createElement('td')
td.innerText = "7";
newRow.appendChild(td)
table.appendChild(newRow)
    });