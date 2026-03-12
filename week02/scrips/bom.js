
// const input = document.querySelector("favchap");
// const button = document.querySelector("button");
// const list = document.querySelector("list");

// const li = document.createElement("li");

// const deleteButton = document.createElement("button");

// li.textContent = input.value;

// deleteButton.textContent = "❌";

// li.append(deleteButton);

// list.append(li);

// buttonElement.addEventListener("click", function() {
//     if (inputElement.value !="") {
//         const li = document.createElement("li");
//         li.textContent = input.value;

//         const deleteButton = document.createElement("button");
//         deleteButton.textContent = "❌";
//         deleteButton.addEventListener("click", function(){
//             listElement.removeChild(li);
//             inputElement.focus();
//         });
//         li.appendChild(deleteBtn);

//         listElement.appendChild(li);
//         inputElement.value = "";

//     }
//     inputElement.focus();

// });

const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

buttonElement.addEventListener("click", function(){
	if (inputElement.value != "") {
		const li = document.createElement("li");
		li.textContent = inputElement.value;

		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "❌";
		deleteBtn.addEventListener("click", function(){
			listElement.removeChild(li);
			inputElement.focus();
		})
	li.appendChild(deleteBtn);

	listElement.appendChild(li);
	inputElement.value = "";

		
	}

	inputElement.focus();
});

