var inter = "";
document.getElementById("btn").addEventListener("click", getEmoji);
document.getElementById("btnOne").addEventListener("click", getEmojiOne);
document.getElementById("stopBtn").addEventListener("click", stopEmoji);
function getEmoji() {
    clearInterval(inter);
    inter= setInterval(() => {
    fetch('https://ranmoji.herokuapp.com/emojis/api/v.1.0/')
      .then(res => {res.json()
        .then(data => {
                document.getElementById("result").innerHTML = `${data.emoji}`;
                document.getElementById("code").textContent = `${data.emoji}`;  
            }); 
        });
    }, 750);
    console.log(inter)
  }

function getEmojiOne() {
    clearInterval(inter);
    fetch('https://ranmoji.herokuapp.com/emojis/api/v.1.0/')
      .then(res => {res.json()
        .then(data => {
            
                document.getElementById("result").innerHTML = `${data.emoji}`;
                document.getElementById("code").textContent = `${data.emoji}`;  
            });
        });
  }
function stopEmoji(){
    clearInterval(inter);
}