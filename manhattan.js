const closest = document.querySelector('.announcements__others_firstpos');
const soon = document.querySelector('.announcements__others_secpos');
const board = document.querySelector('.announcements_others-posters');
const boardInner = document.querySelector('.announcements_others-posters-container')
const frstposter = document.querySelector('.firstposter');
const secposter = document.querySelector('.secposter');
const thrdposter = document.querySelector('.thirdposter');
const fourthposter = document.querySelector('.fourthposter');



function soonActive(){
    if(soon.classList.contains('passive-annPos')){
        soon.classList.remove('passive-annPos');
        soon.classList.add('active-annPos');
        closest.classList.remove('active-annPos');
        closest.classList.add('passive-annPos');

        soon.style.backgroundColor = "#32160b";
        closest.style.backgroundColor = "#2a110a";

        frstposter.remove();
        secposter.remove();
        thrdposter.remove();
        fourthposter.remove();

        boardInner.insertAdjacentHTML(
            'afterbegin',
            `<p class="announcements_others-posters-soon-inner">Скоро появится...</p>`
        );
    }
}

const soonTitle = document.querySelector('.announcements_others-posters-soon-inner');

function closestActive(){
if(closest.classList.contains('passive-annPos')){
    closest.classList.remove('passive-annPos');
    closest.classList.add('active-annPos');
    soon.classList.remove('active-annPos');
    soon.classList.add('passive-annPos');

    closest.style.backgroundColor = "#32160b";
    soon.style.backgroundColor = "#2a110a";

    document.location.reload();
}
}

soon.addEventListener("click", soonActive);
closest.addEventListener("click", closestActive);

//-------------------LOGO---------------------------
const logo = document.querySelector('.menu__logo');
function refresh(){
    document.location.href = "index.html";
}

logo.addEventListener("click", refresh);
// --------------------------------------------------

const techCardOne = document.querySelector('.cardOne');
const techCardTwo = document.querySelector('.cardTwo');
const techCardThree = document.querySelector('.cardThree');
const techCardFour = document.querySelector('.cardFour');
const techCardFive = document.querySelector('.cardFive');
const techCardSix = document.querySelector('.cardSix');

const techCardBodyOne = document.querySelector('.bodyOne');

console.log(techCardOne);

function dropDownOne(){
    if(techCardOne.classList.contains('passiveTechCard')){
    techCardOne.classList.remove('passiveTechCard');
    techCardOne.classList.add('activeTechCard');
    techCardOne.style.backgroundColor = '#D5621D';
    
    techCardOne.insertAdjacentHTML(
'beforeend',
`
<li class="tech__card-component">Acoustic system BELL Top 600W x 2</li>
<li class="tech__card-component">Acoustic system BELL Mid 600W x 2</li>
<li class="tech__card-component">Acoustic system BELL Sub 1000W x 2</li>
<li class="tech__card-component">Front monitor Yamaha SM12V 300w x 2</li>
<li class="tech__card-component">Backside monitor Dynacord 500W x 2</li>
`
    )
}
else if(techCardOne.classList.contains('activeTechCard')){
    document.location.reload();
}
};

techCardOne.addEventListener("click", dropDownOne);

function dropDownTwo(){
    if(techCardTwo.classList.contains('passiveTechCard')){
    techCardTwo.classList.remove('passiveTechCard');
    techCardTwo.classList.add('activeTechCard');
    techCardTwo.style.backgroundColor = '#D5621D';
    
    techCardTwo.insertAdjacentHTML(
'beforeend',
`
<li class="tech__card-component">Acoustic system BELL Top 600W x 2</li>
<li class="tech__card-component">Acoustic system BELL Mid 600W x 2</li>
<li class="tech__card-component">Acoustic system BELL Sub 1000W x 2</li>
<li class="tech__card-component">Front monitor Yamaha SM12V 300w x 2</li>
<li class="tech__card-component">Backside monitor Dynacord 500W x 2</li>
`
    )
}
else if(techCardTwo.classList.contains('activeTechCard')){
    document.location.reload();
}
};

techCardTwo.addEventListener("click", dropDownTwo);

function dropDownThree(){
    if(techCardThree.classList.contains('passiveTechCard')){
    techCardThree.classList.remove('passiveTechCard');
    techCardThree.classList.add('activeTechCard');
    techCardThree.style.backgroundColor = '#D5621D';
    
    techCardThree.insertAdjacentHTML(
'beforeend',
`
<li class="tech__card-component">Acoustic system BELL Top 600W x 2</li>
<li class="tech__card-component">Acoustic system BELL Mid 600W x 2</li>
<li class="tech__card-component">Acoustic system BELL Sub 1000W x 2</li>
<li class="tech__card-component">Front monitor Yamaha SM12V 300w x 2</li>
<li class="tech__card-component">Backside monitor Dynacord 500W x 2</li>
`
    )
}
else if(techCardThree.classList.contains('activeTechCard')){
    document.location.reload();
}
};

techCardThree.addEventListener("click", dropDownThree);

function dropDownFour(){
    if(techCardFour.classList.contains('passiveTechCard')){
    techCardFour.classList.remove('passiveTechCard');
    techCardFour.classList.add('activeTechCard');
    techCardFour.style.backgroundColor = '#D5621D';
    
    techCardFour.insertAdjacentHTML(
'beforeend',
`
<li class="tech__card-component">Acoustic system BELL Top 600W x 2</li>
<li class="tech__card-component">Acoustic system BELL Mid 600W x 2</li>
<li class="tech__card-component">Acoustic system BELL Sub 1000W x 2</li>
<li class="tech__card-component">Front monitor Yamaha SM12V 300w x 2</li>
<li class="tech__card-component">Backside monitor Dynacord 500W x 2</li>
`
    )
}
else if(techCardFour.classList.contains('activeTechCard')){
    document.location.reload();
}
};

techCardFour.addEventListener("click", dropDownFour);

function dropDownFive(){
    if(techCardFive.classList.contains('passiveTechCard')){
    techCardFive.classList.remove('passiveTechCard');
    techCardFive.classList.add('activeTechCard');
    techCardFive.style.backgroundColor = '#D5621D';
    
    techCardFive.insertAdjacentHTML(
'beforeend',
`
<li class="tech__card-component">Acoustic system BELL Top 600W x 2</li>
<li class="tech__card-component">Acoustic system BELL Mid 600W x 2</li>
<li class="tech__card-component">Acoustic system BELL Sub 1000W x 2</li>
<li class="tech__card-component">Front monitor Yamaha SM12V 300w x 2</li>
<li class="tech__card-component">Backside monitor Dynacord 500W x 2</li>
`
    )
}
else if(techCardFive.classList.contains('activeTechCard')){
    document.location.reload();
}
};

techCardFive.addEventListener("click", dropDownFive);

function dropDownSix(){
    if(techCardSix.classList.contains('passiveTechCard')){
    techCardSix.classList.remove('passiveTechCard');
    techCardSix.classList.add('activeTechCard');
    techCardSix.style.backgroundColor = '#D5621D';
    
    techCardSix.insertAdjacentHTML(
'beforeend',
`
<li class="tech__card-component">Acoustic system BELL Top 600W x 2</li>
<li class="tech__card-component">Acoustic system BELL Mid 600W x 2</li>
<li class="tech__card-component">Acoustic system BELL Sub 1000W x 2</li>
<li class="tech__card-component">Front monitor Yamaha SM12V 300w x 2</li>
<li class="tech__card-component">Backside monitor Dynacord 500W x 2</li>
`
    )
}
else if(techCardSix.classList.contains('activeTechCard')){
    document.location.reload();
}
};

techCardSix.addEventListener("click", dropDownSix);




