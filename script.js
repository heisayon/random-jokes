const screen = document.getElementById("screen");
const fetchJokes = document.getElementById("fetchJokes");
const API = "https://official-joke-api.appspot.com/random_joke";
const copy = document.getElementById("copy");
// async function getData() {
//   const response = await fetch(API);
//   let data = await response.json();
//   screen.value = `${data.setup} - ${data.punchline}`;
// }
const onlineStatus = document.getElementById("onlineStatus");
    
fetchJokes.addEventListener("click", () => {
  fetch(API)
    .then((response) => response.json())
    .then((data) => (screen.value = `${data.setup} - ${data.punchline}`))
    .catch((error) => {
      console.warn(error);
    });
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(`${screen.value}`);
  alert("Copied to Clipboard");
});

if (navigator.onLine) {
  onlineStatus.textContent = `You're Online ✅`;
} else {
  onlineStatus.textContent = `Check Connection and Try again ❗`;
}
