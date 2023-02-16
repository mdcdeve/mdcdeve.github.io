function tweetThis() {
  var tweetUrl = "";
  var bitlyshort = document.getElementById("bitlyshort");
  if (bitlyshort && bitlyshort.textContent.trim() !== "") {
    var textContent = bitlyshort.textContent.trim();
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    var urlMatch = textContent.match(urlRegex);
    tweetUrl = encodeURIComponent(urlMatch[0]);
  } else {
    var output = document.getElementById("output");
    if (output.value.trim() !== "") {
      tweetUrl = encodeURIComponent(output.value);
    }
  }
  var tweetIntentUrl =
    "https://twitter.com/intent/tweet?text=" + tweetUrl;
  window.open(tweetIntentUrl);
}
