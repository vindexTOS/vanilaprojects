const mapDiv = document.getElementById('map')
const myInput = document.getElementById('myInput')
const myBtn = document.getElementById('myBtn')

let arr = []

function deleteItem(index) {
  arr.splice(index, 1)

  mapDiv.innerHTML = ''
  arr.forEach((element, index) => {
    mapDiv.innerHTML += `
        <div>
        <span class="task-edit" >${element}</span>
          <button onclick="deleteItem(${index})">Delete</button>
          <button>Edit </button>
        </div>
      `
  })
}



function editItem(){
 
}

myBtn.addEventListener('click', function () {
  let inputValue = myInput.value
  arr.push(inputValue)

  mapDiv.innerHTML = ''
  arr.forEach((element, index) => {
    mapDiv.innerHTML += `<div>
     <span class="task-edit" >${element}</span>
     <button onclick='deleteItem(${index})' >Delete</button>
     <button>Edit </button>
     </div>
     
     `
  })
})
