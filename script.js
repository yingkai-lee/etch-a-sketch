let bodyElement = document.getElementsByTagName('body')[0];
let containerElement = document.createElement('div');
let size = 16;

bodyElement.appendChild(containerElement);

containerElement.style.border = "thin solid black";
containerElement.style.display = "flex";
containerElement.style.width = "500px";
containerElement.style.height = "500px";
containerElement.style.flexDirection = "column";

for (let i = 0; i < 16; i ++){
	let rowElement = document.createElement('div');
	for (let j = 0; j < 16; j ++){
		let cellElement = document.createElement('div');
		cellElement.style.border = "thin solid red";
		cellElement.style.flexGrow = "1";
		cellElement.addEventListener("mouseenter", function(){
			cellElement.style.backgroundColor = "orange";
		});
		rowElement.appendChild(cellElement);
		rowElement.style.flexGrow = "1";
		rowElement.style.display = "flex";
	}
	containerElement.appendChild(rowElement);
}


