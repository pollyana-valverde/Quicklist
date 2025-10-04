const addInput = document.querySelector("#add-input");
const form = document.querySelector("#add-item form");
const list = document.querySelector("#item-list ul")

// addInput.addEventListener("input", () => {
//     console.log(addInput.value);
// })

form.onsubmit = (e) => {
    e.preventDefault()

    const newItem = document.createElement("li");

    newItem.classList.add("item", "px-base", "py-lg", "flex", "gap-1", "round-base");

    newItem.innerHTML = `
        <div class="checkbox-image"></div>
        <input type="checkbox" name="item-row" id="item-row">
        <p>${addInput.value}</p>
        <i class="trash-icon"></i>
    `;

    list.append(newItem);
}

