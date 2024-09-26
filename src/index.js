function displayAnswer(response) {
  new Typewriter("#jokeAnswer", {
    strings: [response.data.answer],
    autoStart: true,
    cursor: "",
    delay: 50,
    pauseFor: 3000,
    loop: false,
  });
}

function fetchJoke() {
  let apiKey = "o7aa001199a3fa308a4b424t253e2953";
  let context =
    "Please be clear, and write one joke with an answer, make sure you only display the answer.";
  let prompt = "Please write me a joke? ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayAnswer);
}

let button = document.querySelector("#button-joke");
button.addEventListener("click", fetchJoke);
