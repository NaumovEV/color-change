const board = document.querySelector("#board")
const colors = ["#00FF00", "#FF0000", "#FF69B4", "y#FF4500", "#FFFF00", "#800000", "#FF00FF", "#0000FF", "#808000", "#0000FF", "#F4A460", "#FF7F50", "#C71585", "#CD5C5C", "#7FFFD4"]
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement("div")
    square.classList.add("square")

    square.addEventListener("mouseover", () => setColor(square))

    square.addEventListener("mouseleave", () => removeColer(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColer(element) {
    element.style.backgroundColor = "#8c8ea1"
    element.style.boxShadow = `0 0 10px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
