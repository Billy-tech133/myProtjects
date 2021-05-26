const btn_decrease = document.querySelector('.decrease');
const btn_increase = document.querySelector('.increase');
const btn_reset = document.querySelector('.reset');
const value = document.getElementById('value')
const btn = document.querySelectorAll('.btn')


let count = 0;

// My solution
/*btn_reset.addEventListener('click', function() {
    value.textContent = 0;
    value.style.color = "#222" 
})

btn_decrease.addEventListener('click', function() {
    count -= 1;
    value.style.color = "red";
    value.textContent = count;
})

btn_increase.addEventListener('click', function() {
    count += 1;
    value.style.color = "green";
    value.textContent = count;
})*/


//Lectures solution 

btn.forEach(function(button) {
    button.addEventListener('click', function(e) {
        let styles = e.currentTarget.classList;
        if(styles.contains("decrease")) {
            count--;
        } else if(styles.contains("increase")) {
            count ++;
        } else if(styles.contains("reset")) {
            count = 0;
        } 
        if(count > 0) {
            value.style.color = "green";
        } else if(count == 0 ) {
            value.style.color = "#222"
        } else if(count < 0 ) {
            value.style.color = "red"
        }
        value.textContent = count;
    })
})