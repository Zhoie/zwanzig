const video = document.getElementById('screen');
const play = document.getElementById('play');
const stop = document.getElementById('stop'); 
const progress = document.getElementById('progress');   
const timestamp = document.getElementById('timestamp');


function toggleViedoStatus() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
//stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// updat play/pause icon
function updatePlayIcon() {
    if(video.paused) {
        player.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        player.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

//set progress bar
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    //Get minutes
    let mins = Math.floor(video.currentTime / 60);
    if(mins <video.duration) {
        mins = "0" + String(mins);
    }
    //Get seconds
    let secs = Math.floor(video.currentTime % 60);
    if(secs < video.duration) {
        secs = "0" + String(secs);
    }
    timestamp.innerHTML = `${mins}:${secs}`;
}

function updatePlayIcon (){
    if(video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

//Event listeners
video.addEventListener('click', toggleViedoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleViedoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);