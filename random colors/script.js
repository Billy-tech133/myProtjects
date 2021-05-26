let clickMe = ["red", "blue", "black", "green"]
let btn_class = document.getElementById('btn')
let color_class = document.querySelector('.color')


btn_class.addEventListener('click', function() {
        let randomNumber = getRandomValues();
        document.body.style.backgroundColor = clickMe[randomNumber];
        color_class.textContent = clickMe[randomNumber]
    
    
})

function getRandomValues() {
    return Math.floor(Math.random() * clickMe.length)
}
