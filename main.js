let launchButton = document.getElementById('launch-button');
let loadingContainer = document.getElementById('loading-container');
let outerCircle = document.getElementById('outer-circle');
let saveButton = document.getElementById('save-button');
let selSong = document.getElementsByClassName('sel-song');
let username = document.getElementById('u-input');
let infoContainer = document.getElementById('info-container');

// function deleration goes here  
function toggleSaveButton() {
    let nameFlag, musicFlag = false;
    if (username.value == '') {
        nameFlag = false;
    }
    else{
        for (let i = 0; i < username.value.length; i++) {
            if (username.value.indexOf(i) != ' ') {
                nameFlag = true;
                break;
            }
        }
        for(let i = 0; i < selSong.length; i++){
            if (selSong[i].checked) {
                musicFlag = true;
                break;
            }
        }
    }
    if(nameFlag && musicFlag){
        saveButton.classList.remove('translateY');
    }
    else{
        saveButton.classList.add('translateY');
    }
}


// eventlistener code goes here 
let formCheckingInterval = setInterval(() => {
    toggleSaveButton();
    console.log('wheww');
}, 500);
saveButton.addEventListener('click', ()=>{
    clearInterval(formCheckingInterval);
    window.scrollTo(0, window.innerHeight * 2);
    setTimeout(() => {
        infoContainer.style.display = 'none';
        document.querySelector('header').style.display = 'none';
    }, 1000);
})


window.addEventListener('load', ()=>{

    // onload enables the button  
    launchButton.style.bottom = '10vh';
    loadingContainer.style.transform = 'scale(0)';
    outerCircle.classList.remove('outer-circle');
    launchButton.addEventListener('click', ()=>{
        window.scrollTo(0, window.innerHeight);
        document.getElementById('main-logo').style.left = '0';
    })
})