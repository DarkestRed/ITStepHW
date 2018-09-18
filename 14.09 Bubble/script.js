window.addEventListener("load", function () {

    let bubbleContainer = document.querySelector(".bubbleContainer");
    let redBubbleBtn = document.querySelector(".red");
    let greenBubbleBtn = document.querySelector(".green");
    let blueBubbleBtn = document.querySelector(".blue");

    function random(a, b) {
        return Math.round(Math.random() * (b - a)) + a;
    }

    function addBubble(bubbleColor) {
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");

        let bubbleContainerWidth = bubbleContainer.offsetWidth;
        let bubbleContainerHeight = bubbleContainer.offsetHeight;

        let bubbleSize = random(20, bubbleContainerHeight / 2);
        let bubblePosLeft = random(0, bubbleContainerWidth - bubbleSize);
        let bubblePosTop = random(0, bubbleContainerHeight - bubbleSize);

        bubble.style.width = bubbleSize + "px";
        bubble.style.height = bubbleSize + "px";
        bubble.style.left = bubblePosLeft + "px";
        bubble.style.top = bubblePosTop + "px";
        bubble.style.backgroundColor = bubbleColor;

        bubbleContainer.append(bubble);
    }

    redBubbleBtn.addEventListener("click", function () {
        addBubble("red")
    });
    greenBubbleBtn.addEventListener("click", function () {
        addBubble("green")
    });
    blueBubbleBtn.addEventListener("click", function () {
        addBubble("blue")
    });

    bubbleContainer.addEventListener("click", function (e) {
        if (e.target.matches(".bubble")) e.target.remove();
    })

});