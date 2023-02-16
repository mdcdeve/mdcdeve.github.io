document.getElementById("tweet").addEventListener("click", function() {
  // Get the text from the output box
  var outputText = document.getElementById("output").value;
  
  // Encode the text for use in a URL
  var encodedText = encodeURIComponent(outputText);
  
  // Construct the tweet URL
  var tweetUrl = "https://twitter.com/intent/tweet?text=" + encodedText;
  
  // Open a new window with the tweet URL
  window.open(tweetUrl);
});
