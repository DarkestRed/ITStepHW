window.addEventListener("load", function () {

    let elemContainer = document.querySelector(".elemContainer");
    let input = document.querySelector("input");
    let addBtn = document.querySelector(".addButton");
    let delBtn = document.querySelector(".deleteButton");

    function addElem(value) {
        let elem = document.createElement("div");
        elem.classList.add("elem");
        elem.innerText = value;
        elemContainer.appendChild(elem);
    }

    function delMarked() {
        let markedElem = document.getElementsByClassName("markedElem");
        while (markedElem.length > 0) markedElem[0].remove();
    }

    addBtn.addEventListener("click", function () {
        if (input.value) addElem(input.value);
    });

    elemContainer.addEventListener("click", function (e) {
        if (e.target.matches(".elem")) e.target.classList.add("markedElem");
    });

    delBtn.addEventListener("click", function () {
        delMarked();
    });

});