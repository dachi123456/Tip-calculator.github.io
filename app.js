const error = document.getElementById('error')
//buttons
const resetBtn = document.getElementById("reset");
const percent5 =document.getElementById("5");
const percent10 = document.getElementById("10");
const percent15 = document.getElementById("15");
const percent25 = document.getElementById("25");
const percent50 = document.getElementById("50");
//inputs
const billInput = document.getElementById("bill-input");
const customInput = document.getElementById("custom");
const peopleInput = document.getElementById("people-input");
//output
let output1 = document.getElementById("output-number1");
const output2 = document.getElementById("output-number2");

//default
let billInputVal = 0.00;
billInputVal = billInput.value ;
let peopleVal;
let output1Val;


//func
document.addEventListener("click",function(event){
    if(!percent15.contains(event.target)){
        percent15.classList.remove("clicked")
    }
    if(!percent5.contains(event.target)){
        percent5.classList.remove("clicked");
    }if(!percent10.contains(event.target)){
        percent10.classList.remove("clicked")
    }if(!percent25.contains(event.target)){
        percent25.classList.remove("clicked")
    }if(!percent50.contains(event.target)){
        percent50.classList.remove("clicked")
    }
})




percent5.addEventListener('click',function(event){
    event.preventDefault();
    if(!percent5.classList.contains("clicked")){
        percent5.classList.add("clicked")
    }else{
        percent5.classList.remove("clicked")
    }

    peopleVal = Number(peopleInput.value)
    output1.textContent = (billInput.value * 0.05 / peopleInput.value).toFixed(2);
    output2.textContent = "$" + (billInput.value / peopleVal).toFixed(2);
})
percent10.addEventListener('click',function(event){
    event.preventDefault();
    if(!percent10.classList.contains("clicked")){
        percent10.classList.add("clicked");
    }else{
        percent10.classList.remove("clicked");
    }

    peopleVal = Number(peopleInput.value)
    output1.textContent = "$" + (billInput.value * 0.10 / peopleInput.value).toFixed(2);
    output2.textContent = "$" + (billInput.value / peopleVal).toFixed(2);
})

percent15.addEventListener("click",function(event){
    event.preventDefault();
    if(!percent15.classList.contains("clicked")){
        percent15.classList.add("clicked")
    }else{
        percent15.classList.remove("clicked")
    }

    peopleVal = Number(peopleInput.value);
    output1.textContent = "$" + (billInput.value * 0.15 / peopleVal).toFixed(2);
    output2.textContent = "$" + (billInput.value / peopleVal).toFixed(2);
    
})
percent25.addEventListener("click",function(event){
    event.preventDefault();
    if(!percent25.classList.contains("clicked")){
        percent25.classList.add("clicked")
    }else{
        percent25.classList.remove("clicked")
    }

    peopleVal = Number(peopleInput.value);
    output1.textContent = "$" + (billInput.value * 0.25 / peopleVal).toFixed(2);
    output2.textContent = "$" + (billInput.value / peopleVal).toFixed(2);

})
percent50.addEventListener('click',function(event){
    event.preventDefault();
    if(!percent50.classList.contains("clicked")){
        percent50.classList.add("clicked")
    }else{
        percent50.classList.remove("clicked");
    }

    peopleVal = Number(peopleInput.value);
    output1.textContent = "$" + (billInput.value * 0.50 / peopleVal).toFixed(2);
    output2.textContent = "$" + (billInput.value / peopleVal).toFixed(2);
})
customInput.addEventListener('input',function(){
    peopleVal = Number(peopleInput.value);
    let customVal = customInput.value
    output1.textContent = "$" + (billInput.value * customVal / 100 / peopleVal).toFixed(2);
})

peopleInput.addEventListener('input',function(){
    peopleVal = Number(peopleInput.value);
    let customVal = customInput.value
    output1.textContent = "$" + (billInput.value * customVal / 100 / peopleVal).toFixed(2);
    output2.textContent = "$" + (billInput.value / peopleVal).toFixed(2);
    if(peopleInput.value == 0){
        error.style.display = "block";
        peopleInput.style.borderColor = "#E17052";
    }
    if(peopleInput.value != 0){
        error.style.display = "none";
        peopleInput.style.borderColor = "#26C2AE";
    }
    
})
billInput.addEventListener('input',function(){
    peopleVal = Number(peopleInput.value);
    let customVal = customInput.value
    output1.textContent = "$" + (billInput.value * customVal / 100 / peopleVal).toFixed(2);
    output2.textContent = "$" + (billInput.value / peopleVal).toFixed(2);
    billInput.style.borderColor = "#26C2AE";
})
resetBtn.addEventListener('click',function(event){
    event.preventDefault();
    billInput.value = "";
    peopleInput.value = "";
    customInput.value = "custom";
    output1.textContent = "$0.00";
    output2.textContent = "$0.00";
})