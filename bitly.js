const submitButton = document.getElementById("submit");
const output = document.getElementById("bitlyshort");

submitButton.addEventListener("click", async (event) => {
  event.preventDefault();

  const url = document.getElementById("output").value;

  const response = await fetch(`https://api-ssl.bitly.com/v4/shorten`, {
    method: "POST",
    headers: {
      Authorization: "Bearer bfbe3808572eff5694908d03e9f05cfc8fb1951b",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      long_url: url
    })
  });

  const data = await response.json();

  output.innerHTML = `Short Boy ~ <a href="${data.link}">${data.link}</a> ~ Short Boy`;

  copyToClipboard(data.link);
});
