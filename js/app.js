const players = [];
function displayPlayer (){
    
const pList = document.getElementById('p-list');
pList.innerText = players.length;
const pContainer = document.getElementById('p-container');
pContainer.textContent = '';


 for (let i = 0; i < players.length; i++){

const li = document.createElement('li');
li.innerHTML = `

<p> ${players[i]}</p>

`
pContainer.appendChild(li);

};

}
function playerList (element){
    
    const playersList = element.parentNode.parentNode.children[0].innerText;
    
     element.disabled = true;
    
    
    if(players.length >=5){
        
    alert ('you can not add more than 5 players');

    return;
    }
    
    
    
    
players.push(playersList);
displayPlayer();

}



// step-1:
document.getElementById('calcultate-btn').addEventListener('click',function(){
    const playerInput = getInputFieldValueById('player-input');
    const playerExpense = getTextElementValueById('expense');
    
    // validation:
    if(isNaN(playerInput) ||  playerInput < 0 || playerExpense < 0 || Math.sign(playerInput) === -1 ) {
    alert ('please enter the valid input');
    return;
    
    }
    // step-2:
    const playerNumber = players.length * playerInput
    setTextElementValueById('expense',playerNumber);
    
    })
    
    // step-3:
    document.getElementById('calc-total').addEventListener('click',function(){
    const playerExpense = getTextElementValueById('expense');
    const managerInput = getInputFieldValueById('manager-input');
    const coachInput = getInputFieldValueById('coach-input');
    
    // validation:
    if(isNaN(managerInput) || isNaN(coachInput) || managerInput < 0 || coachInput < 0 || Math.sign(managerInput) === -1 || Math.sign(coachInput) === -1 ){
    alert('please enter the valid input');
    return;
    }
    const total = playerExpense + managerInput + coachInput;
    setTextElementValueById ('total',total);
    
    })