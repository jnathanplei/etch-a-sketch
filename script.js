function makeRows(rows, cols) {
    const container = document.getElementById("container");
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
    //cell.innerText = (c+1);
        container.appendChild(cell).className = "grid-item";
    };
};

makeRows(16, 16);

function blackColor() {
    const boxs = container.querySelectorAll('.grid-item');
    boxs.forEach(box => box.addEventListener('mouseover', function() {
        this.style.background = 'black';
    }))  
}

blackColor()

//clear and make new grid

function clearRows() {
    document.getElementById('container').textContent = '';
}

var button = document.createElement("button");
button.innerHTML = "Change Grid Size";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function() {
    clearRows();
    let size = "";
    while (size>100 || size<2) {
        size = prompt("Grid Size? 2 to 100", 0);
    }
    rows = parseInt(size);
    cols = parseInt(size);
    makeRows(rows, cols);
    blackColor()
});