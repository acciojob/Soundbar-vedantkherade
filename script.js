//your JS code here. If required.
 const sounds = ["applause.mp3", "boo.mp3", "gasp.mp3", "tada.mp3", "victory.mp3", "wrong.mp3"];

  const buttonsContainer = document.getElementById("buttons");

  
  let audioObjects = {};

  // Function to stop all sounds
  function stopAllSounds() {
    for (let key in audioObjects) {
      audioObjects[key].pause();
      audioObjects[key].currentTime = 0;
    }
  }

  sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound.replace(".mp3", "");

    
    const audio = document.createElement("audio");
    audio.src = `sounds/${sound}`;
    audio.setAttribute("preload", "auto"); 
    audio.style.display = "none"; 
    document.body.appendChild(audio);

    // Save audio object
    audioObjects[sound] = audio;

    // Button click event
    btn.addEventListener("click", () => {
      stopAllSounds();
      audio.play();
    });

    // Append button to container
    buttonsContainer.appendChild(btn);
  });

  // Add Stop button
  const stopBtn = document.createElement("button");
  stopBtn.classList.add("stop");
  stopBtn.innerText = "Stop";
  stopBtn.addEventListener("click", stopAllSounds);
  buttonsContainer.appendChild(stopBtn);
