//your JS code here. If required.
    const sounds = ["applause.mp3", "boo.mp3", "gasp.mp3", "tada.mp3", "victory.mp3", "wrong.mp3"];

    const buttonsContainer = document.getElementById("buttons");

    // Store audio objects
    let audioObjects = {};

    sounds.forEach(sound => {
      const btn = document.createElement("button");
      btn.classList.add("btn");
      btn.innerText = sound.replace(".mp3", "");

      const audio = new Audio(`sounds/${sound}`);
      audioObjects[sound] = audio;

      btn.addEventListener("click", () => {
        stopAllSounds();
        audio.play();
      });

      buttonsContainer.appendChild(btn);
    });

const stopBtn = document.createElement("button");
    stopBtn.classList.add("stop");
    stopBtn.innerText = "Stop";

    stopBtn.addEventListener("click", stopAllSounds);

    buttonsContainer.appendChild(stopBtn);

    // Function to stop all sounds
    function stopAllSounds() {
      for (let key in audioObjects) {
        audioObjects[key].pause();
        audioObjects[key].currentTime = 0;
      }
    }

