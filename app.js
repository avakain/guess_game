const qwerty = document.getElementById('qwerty');
const phaser = document.getElementById('phrase');
const btn_reset = document.getElementsByClassName('btn-reset')[0];
const overLay = document.getElementById('overlay');
const ul = document.querySelector('#phrase ul');
const lis = ul.children;
const ol = document.querySelector('ol').children;

let missies = 0;

const phrases = [
    'Interstellar',
    'Internationale',
    'Gateway timeout',
    'Service unavailable',
    'File not found',
    'Access denied',
    'Not enough memory',
    'Low disk space',
    'Invalid password',
    'Device not ready',
    'Bad file type',
    'File too large'
  ];


function displayLettersOnTheScreem() {  
    const randomPhraseInLetter = phrases[Math.floor(Math.random() * phrases.length)].toUpperCase().split("");
     for (const letter of randomPhraseInLetter){
        const li = document.createElement('li')
        li.className = 'letter'
        li.append(letter);
        if(li.textContent === ' '){
            li.className += ' space';
        }
        ul.append(li)  
    }
    return randomPhraseInLetter;
}

const randomPhraseByLettersInArray = displayLettersOnTheScreem();

function countShowedLetters() {
    let showNum = 0;
    for (const li of lis){
        let Item = li.className
        if(Item === "letter show" || Item === "letter space"){
            showNum++ 
        }
    }
    return showNum;
} 

function reset(){
    const button = document.querySelectorAll('#qwerty button');
    const li = document.querySelectorAll('#phrase li');
    const img = document.querySelectorAll('img');
    for (const but of button){
        but.className = '';
    }
    for (item of li){
        item.remove();
    }
    for (mi of img){
        mi.src = 'images/liveHeart.png';;
    }
}


function win(){
    const lenght = lis.length
    if (lenght === countShowedLetters()){
    overLay.className = 'win';
    const h2 = overLay.children[0];
    overLay.style.display = ""; 
    h2.textContent = 'Vége van Géza nyertél';
    btn_reset.textContent = 'Dikk akarom mégecce';
    return missies = 0;
    }
} 
console.log(countShowedLetters())
function lose(){
    overLay.className = 'lose';
    overLay.style.display = '';
    const h2 = overLay.children[0];
    h2.textContent = 'Nem nyert';
    btn_reset.textContent = 'Nekimegyek mégecce';
    return missies = 0;
}

function checkGameEnd(){   
    if (missies > 4){
        lose()
    }else {
        win()       
    } 


}

console.log(missies)
  // This eventLisener hides the first css layer and game starting
  btn_reset.addEventListener('click', (e)=>{
    const button = e.target;
    if (button.textContent === 'Start Game'){
        overLay.style.display = 'none';
    } else{   
        reset()   
        overLay.style.display = 'none';
        displayLettersOnTheScreem();
    }
  })


qwerty.addEventListener('click', (e)=>{

const clicked_event = e.target;    
const pressedButton = e.target.textContent;
const img = document.querySelectorAll('img');

if(clicked_event.tagName === 'BUTTON') {
    clicked_event.className = 'chosen';
    const missedLetter = randomPhraseByLettersInArray.indexOf(pressedButton.toUpperCase()); 
    if (missedLetter === -1 ){
        missies ++ 
        img[missies-1].src = 'images/lostHeart.png';              
}
}




    

function letterOnTheList(){
    for (const li of lis){
        if(li.textContent === pressedButton.toUpperCase()){
            console.log('hit')
            li.className += ' show';
        } 
    }
}


console.log(checkGameEnd());
letterOnTheList()
checkGameEnd()

})


