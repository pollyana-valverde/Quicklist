const addInput = document.querySelector("#add-input");
const form = document.querySelector("#add-item form");
const list = document.querySelector("#item-list ul")

// addInput.addEventListener("input", () => {
//     console.log(addInput.value);
// })

form.onsubmit = (e) => {
    e.preventDefault()

    const newItem = document.createElement("li");

    newItem.innerHTML = `${addInput.value}`;

    list.append(newItem);
}

