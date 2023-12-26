let bodyElement = document.getElementsByTagName('body')[0];
let containerElement = document.createElement('div');
let size = 16;

bodyElement.appendChild(containerElement);

containerElement.style.border = "thick solid black";
containerElement.style.display = "flex";
containerElement.style.width = "650px";
containerElement.style.height = "650px";
containerElement.style.flexDirection = "column";

let cellStorage = [];

function makeGrid(newSize){
	while(containerElement.firstChild){
		containerElement.removeChild(containerElement.firstChild);
	}
	for (let i = 0; i < newSize; i ++){
		let rowElement = document.createElement('div');
		for (let j = 0; j < newSize; j ++){
			let cellElement = document.createElement('div');
			cellElement.style.border = "thin solid red";
			cellElement.style.flexGrow = "1";
			cellElement.addEventListener("mouseenter", function(){
				cellElement.style.backgroundColor = "orange";
			});
			rowElement.appendChild(cellElement);
			rowElement.style.flexGrow = "1";
			rowElement.style.display = "flex";
	
			cellStorage.push(cellElement);
		}
		containerElement.appendChild(rowElement);
	}
}
makeGrid(size);

let buttonElement = document.createElement('button');
buttonElement.textContent = "Change size";
bodyElement.appendChild(buttonElement);

buttonElement.addEventListener("click", function(){
	size = prompt("Enter new size");
	makeGrid(size);
});

