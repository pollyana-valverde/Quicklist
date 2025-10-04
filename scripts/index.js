const addInput = document.querySelector("#add-input");
const form = document.querySelector("#add-item form");
const list = document.querySelector("#item-list ul");

const deleteAlert = document.querySelector("#delete-alert .container");

form.onsubmit = (e) => {
    e.preventDefault()
    const newItem = document.createElement("li");

    newItem.classList.add("item", "px-base", "py-lg", "flex", "gap-1", "round-base");

    newItem.innerHTML = `
        <div class="checkbox-image"></div>
        <input type="checkbox" name="item-row" id="${addInput.value}" value="${addInput.value}"></input> 
        <p>${addInput.value}</p>
        <i class="trash-icon" onclick="deleteItem(this)"></i>
    `;

    list.append(newItem);

    form.reset()
}

//função para remover o li
function deleteItem(item) {
    item.parentElement.remove()

    const newAlert = document.createElement("div");
    newAlert.classList.add("alert", "px-base", "py-base", "flex", "gap-1", "round-base");

    newAlert.innerHTML = `
       <img src="assets/icons/warning-circle-filled.svg" alt="">
        <p>O item foi removido da lista</p>
        <img src="assets/icons/delete-small.svg" onclick="this.parentElement.remove()" alt="">
    `;

    deleteAlert.append(newAlert)
}
