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
const showMsg = (content) => {
  onlineStatus.textContent = content;
  onlineStatus.classList.remove("remove");
  setTimeout(() => {
    onlineStatus.classList.add("remove");
  }, 3000);
};
fetchJokes.addEventListener("click", () => {
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        screen.value = `${data.setup} - ${data.punchline}`;
      } else {
        screen.value = "Loading...";
      }
    })
    .catch((error) => {
      showMsg(`Error, Try Later ❗`);
    });
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(`${screen.value}`);
  showMsg("Copied to Clipboard.");
});

if (navigator.onLine) {
  showMsg(`You're Online 💡`);
} else {
  showMsg(`Check Connection and Try again ❗`);
}
