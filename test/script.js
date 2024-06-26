document.getElementById('fetchButton').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value;
    const urlList = document.getElementById('urlList');
    urlList.innerHTML = '';

    if (!urlInput) {
        urlList.innerHTML = '<li>Please enter a URL</li>';
        return;
    }

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = proxyUrl + urlInput;

    fetch(targetUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const baseURL = 'https://funko.com/dw/image/v2/BGTS_PRD/';

            const urls = [];
            if (data.product && data.product.images && data.product.images['hi-res']) {
                const hiResImages = data.product.images['hi-res'];
                hiResImages.forEach(image => {
                    if (image.url) {
                        let fullUrl = image.url;
                        if (!fullUrl.startsWith(baseURL)) {
                            fullUrl = baseURL + fullUrl;
                        }
                        urls.push(fullUrl);
                    }
                });
            }

            if (urls.length > 0) {
                urls.forEach(url => {
                    const listItem = document.createElement('li');
                    const link = document.createElement('a');
                    link.href = url;
                    link.textContent = url;
                    link.target = '_blank'; // Open link in a new tab

                    const image = document.createElement('img');
                    image.src = url;
                    image.alt = 'Image';
                    image.style.display = 'block';
                    image.style.marginTop = '10px';
                    image.style.maxWidth = '100%';

                    listItem.appendChild(link);
                    listItem.appendChild(image);
                    urlList.appendChild(listItem);
                });
            } else {
                urlList.innerHTML = '<li>No URLs found</li>';
            }
        })
        .catch(error => {
            urlList.innerHTML = `<li>Error fetching JSON data: ${error.message}</li>`;
        });
});
