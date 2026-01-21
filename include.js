// function loadHTML(id,file) {
//   fetch(file)
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById(id).innerHTML = data;
//     });
// }

// loadHTML("footer", "/footer.html");


fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch(error => console.error("Footer load error:", error));