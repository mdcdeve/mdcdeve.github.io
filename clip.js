function copyToClipboard(str) {
  const el = document.createElement("textarea");
  el.value = str;
  document.body.appendChild(el);
  el.select();

  if (navigator.clipboard) {
    navigator.clipboard.writeText(str)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch(err => {
        console.error('Error copying text: ', err);
      });
  } else {
    document.execCommand("copy");
  }

  document.body.removeChild(el);
}
