if("webkitSpeechRecognition" in window) {
  let speechRecognition = new webkitSpeechRecognition();
  let final_transcrit = "";


  speechRecognition.continuous = true;
  speechRecognition.interimResults = true;
  speechRecognition.lang = document.querySelector('#select_dialect').value;


  speechRecognition.onstart = () => {
    document.querySelector('#status').style.display = "block";
  }

  speechRecognition.onerror = () => {
    document.querySelector('#status').style.display = "none";
    console.log('error');
  }

  speechRecognition.onend = () => {
    document.querySelector('#status').style.display = "none";
    console.log('end');
  }

  speechRecognition.onresult = (event) => {
    let interim_transcript = "";

    for(let i = event.resultIndex; i < event.results.length; i++) {
      if(event.results[i].isfinal) {
         final_transcrit = event.results[i][0].transcript;
      } else {
        interim_transcript = event.results[i][0].transcript;
      }

    }
    document.querySelector("#final").innerHTML = final_transcrit;
    document.querySelector("#interim").innerHTML = interim_transcript;

  };

  document.querySelector("#start").onclick = () => {
    speechRecognition.start();
  }

  document.querySelector("#stop").onclick = () => {
    speechRecognition.stop();
  };



  } else {
    console.log("not available")
  }

