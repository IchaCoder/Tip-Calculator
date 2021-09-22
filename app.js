// Selecting the input fields

const inputBill = document.getElementById('bill');
const numOfPerson = document.getElementById('num-of-person');
const tipButtons = document.querySelectorAll('.btn');
const form = document.getElementById('form');
const errorMessage = document.querySelector('.error-message');
const numOfPeopleDiv = document.querySelector('.number-of-people');
const customBtn = document.querySelector('.custom-rate');
const submitBtn = document.querySelector('.submit')

let btnClassList;
let customBtnContainsClass;
let newTargetBtnValue;
let overallTip 
let tipPerPerson
let totalPerPerson
let overallPerPerson


let billValue;
let numOfPeople;

let numbers = parseInt(inputBill.value)
let targetBtnValue;

// Selecting tip amount per person and total amount per person 
const tipPerHead = document.querySelector('.tip-head')
const totalPerHead = document.querySelector('.total-head')


inputBill.addEventListener('input', function(){
    billValue = parseInt(inputBill.value) ;
    setInterval(changeValue(), 100)
    // setInterval(btnClick(), 100)
})

    
numOfPerson.addEventListener('input', function(){
    numOfPeople = parseInt(numOfPerson.value);
    errorMessageClassList = errorMessage.classList;
    numOfPeopleDivClassList = numOfPeopleDiv.classList;
    if(numOfPeople == 0){
        errorMessageClassList.add('show-error');
        numOfPeopleDivClassList.add('input-two')
    } else {
        errorMessageClassList.remove('show-error');
        numOfPeopleDivClassList.remove('input-two')
    }
})


customBtn.addEventListener('click', function(){
    
    tipButtons.forEach(btn => {
        btnClassList.remove('clicked')
    })

})

customBtn.addEventListener('input', function(){
    setInterval(changeValue(), 100)
})
function changeValue(){
    targetBtnValue = customBtn.value;
    
    overallTip = ((targetBtnValue / 100) * billValue);
        tipPerPerson = overallTip / numOfPeople;

        overallPerPerson = billValue - overallTip;
        totalPerPerson = overallPerPerson / numOfPeople;

        if(isNaN(tipPerPerson)){
            tipPerPerson = 0
        }
        if(isNaN(totalPerPerson)){
            totalPerPerson = 0
        }
        

        tipPerHead.textContent = tipPerPerson.toFixed(2);  // To convert to two decimal places
        totalPerHead.textContent = totalPerPerson.toFixed(2);
        // Changing the background when btn is clicked

}

tipButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        btnClassList = e.currentTarget.classList;
        targetBtnValue =parseInt(e.currentTarget.value);
        let id = e.target.dataset.id;
        
        if(id){
            tipButtons.forEach(btn => {
                btn.classList.remove('clicked')
                btnClassList.add('clicked')
            })
        }
        
        overallTip = ((targetBtnValue / 100) * billValue);
    tipPerPerson = overallTip / numOfPeople;
    
    overallPerPerson = billValue - overallTip;
    totalPerPerson = overallPerPerson / numOfPeople;
    
    if(isNaN(tipPerPerson)){
        tipPerPerson = 0
    }
    if(isNaN(totalPerPerson)){
        totalPerPerson = 0
    }
    
    if(!btnClassList.contains('custom')){
        customBtn.value = ''
    }

    tipPerHead.textContent = tipPerPerson.toFixed(2);  // To convert to two decimal places
    totalPerHead.textContent = totalPerPerson.toFixed(2);
        // Changing the background when btn is clicked

        
        //changeValue()
    })
})

function btnClick(){
    
}

const colOne = document.querySelector('.col-one')
colOne.addEventListener('click', function(){
    const submitClassList = submitBtn.classList;
    submitClassList.remove('reset');
})

form.addEventListener('submit', (e) => {
    // prevent default stops the default behavior when submitting
    e.preventDefault();
    const submitClassList = submitBtn.classList;
    submitClassList.add('reset');
    tipPerHead.textContent = '0.00';
    totalPerHead.textContent = '0.00' ;
    inputBill.value = ""
    numOfPerson.value = ""
})

