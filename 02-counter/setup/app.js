// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        /*
            cf. [ JS筆記 ] e.target 與 e.currentTarget 的差別
            https://jim1105.coderbridge.io/2022/07/13/target-and-currentTarget/
        */
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        } else if(styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;
        if(count > 0){
            value.style.color = "green";
        } else if(count < 0){
            value.style.color = "red";
        } else {
            value.style.color = "black";
        }
    });
});