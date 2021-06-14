  
// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.getElementById('grocery')
const submitButton = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')
// edit option
let editElement;
let editFlag = false;
let editId = "";
// ****** EVENT LISTENERS **********
form.addEventListener('submit', editItem);

clearBtn.addEventListener('click', clearItems)

window.addEventListener("DOMContentLoaded", setupItems);
// ****** FUNCTIONS **********
function editItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if(value && !editFlag){
        createListItem(id,value);
        displayAlert("item added to the list", "success")
        container.classList.add('show-container');
        setBackToDefault();
        addToLocalStorage(id,value);
        
    }
    else if(value && editFlag){
        editElement.innerHTML = value;
        displayAlert('value successfully changed', 'success');
        editLocalStorage();
        setBackToDefault();
    }
    else{
        displayAlert("please enter a value","danger")
    }

}
//clear items function
function clearItems() {
    const items = document.querySelectorAll('.grocery-item');
    if(items.length > 0) {
        items.forEach(function(item) {
            list.removeChild(item);
        })
        container.classList.remove('show-container');
        displayAlert("items cleared", "danger");
        setBackToDefault();
        localStorage.removeItem('list');
    }
    

}

function displayAlert(text,action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(function(){
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`); 
    },1000)
}
//delete item
function deletItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    list.removeChild(element);
    if(list.children.length === 0) {
        container.classList.remove('show-container');
    }
    displayAlert('item successfully deleted', 'success');
    setBackToDefault();
}
//editing item 
function editingItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;
    submitButton.textContent = "edit";
}
//set back to default
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = ""
    submitButton.textContent = "submit"
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    const grocery = {id, value};
    let items = getLocalStorage();
    items.push(grocery); 
    localStorage.setItem('list', JSON.stringify(items))
}
function removeFromLocalStorage(){
    let items = getLocalStorage();

    items = items.filter(function(item){
        if(item.id !==id){
            return item
        }
    })
    localStorage.setItem("list", JSON.stringify(items))
}
function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items = items.map(function(item) {
        if(item.id === id) {
            item.value = value;
        }
        return item;
    })
    localStorage.setItem("list", JSON.stringify(items))
}
function getLocalStorage() {
    return localStorage.getItem('list')?
    JSON.parse(localStorage.getItem('list'))
    :[];
    
}
// ****** SETUP ITEMS **********
function setupItems() {
    let items = getLocalStorage();
    if(items.length > 0) {
        items.forEach(function(item){
            createListItem(item.id,item.value)
        })
        container.classList.add('show-container');
    }
}

function createListItem(id, value){
    const element = document.createElement('article');
    element.classList.add('grocery-item')
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
        <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
    </div>`
    const deleteBtn = element.querySelector(".delete-btn");
    const editBtn = element.querySelector(".edit-btn");
    deleteBtn.addEventListener('click', deletItem);
    editBtn.addEventListener('click', editingItem)
    list.appendChild(element);
}