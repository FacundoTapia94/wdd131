
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



// ORIGINAL CLICK EVENTLISTENER 

// const inputElement = document.querySelector("#favchap");
// const buttonElement = document.querySelector("button");
// const listElement = document.querySelector("#list");

// buttonElement.addEventListener("click", function(){
// 	if (inputElement.value != "") {
// 		const li = document.createElement("li");
// 		li.textContent = inputElement.value;

// 		const deleteBtn = document.createElement("button");
// 		deleteBtn.textContent = "❌";
// 		deleteBtn.addEventListener("click", function(){
// 			listElement.removeChild(li);
// 			inputElement.focus();
// 		})
// 	li.appendChild(deleteBtn);

// 	listElement.appendChild(li);
// 	inputElement.value = "";

		
// 	}

// 	inputElement.focus();
// });


// const input = document.querySelector("#favchap");
// const button = document.querySelector("button");
// const list = document.querySelector("#list");

// buttonElement.addEventListener("click", () => {
// 	if (input.value != "") {
// 		displayList(input.value);
// 		chapterArray.push(input.value);
// 		setChapterList();
// 		input.value = "";
// 		input.focus();
// 	}

// });





// let chaptersArray = getChapterList() || [];

// chaptersArray.forEach(chapter => {
// 	displayList(chapter);
// })


// function displayList(item) {
// 	const ul = document.getElementById("list");
// 	const li = document.createElement("li");

// 	li.textContent = item;
// 	ul.appendChild(li);
// }





// function displayList(item) {
// 	let li = document.createElement("li");
// 	let deleteButton = document.createElement("button");
// 	li.textContent = item; 
// 	deleteButton.textContent = "X"
// 	deleteButton.classList.add("delete");
// 	li.append(deleteButton);
// 	list.append(li);
// 	deleteButton.addEventListener("click", function () {
// 		list.removeChild(li);
// 		deleteChapter(li.textContent); 
// 		input.focus();
// 	})
// }

// function setChapterList() {
// 	localStorage.setItem("myFavBOMList", JSON.stringify(chapterArray));

// }

// function getChapterList() {
// 	return JSON.parse(localStorage.getItem("myFavBOMList"));
// }





// function deleteChapter(chapter) {
// 	chapter = chapter.slice(0, chapter.length - 1);
// 	chaptersArray = chaptersArray.filter((item) => item !== chapter);
// 	setChapterList();
	
// }




const input = document.querySelector("#favchap");
const button= document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
	displayList(chapter)
	
});

button.addEventListener("click", () => {
	if (input.value.trim() !== "") {
		displayList(input.value);
		chaptersArray.push(input.value);
		setChaptersList(chaptersArray);
		input.value = "";
		input.focus();
	}
});

function displayList(item) {
	let li = document.createElement("li");
	let deletebutton = document.createElement("button");
	li.textContent = item;
	deletebutton.textContent = "❌";
	deletebutton.classList.add("delete");
	li.append(deletebutton);
	list.append(li);
	deletebutton.addEventListener("click", function () {
		list.removeChild(li);
		deleteChapter(li.textContent);
		input.focus();
	});
}

function setChapterList() {
	localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
	return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
	chapter = chapter.slice(0, chapter.length - 1);
	chaptersArray = chaptersArray.filter(item => item !== chapter);
	setChapterList();
}





