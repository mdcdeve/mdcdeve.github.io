document.getElementById('fetchButton').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value;
    const urlList = document.getElementById('urlList');
    const dataIframe = document.getElementById('dataIframe');
    
    urlList.innerHTML = '';

    if (!urlInput) {
        urlList.innerHTML = '<li>Please enter a URL</li>';
        return;
    }

    dataIframe.src = urlInput;

    dataIframe.onload = function() {
        try {
            const iframeDocument = dataIframe.contentDocument || dataIframe.contentWindow.document;
            const jsonData = JSON.parse(iframeDocument.body.innerText);

            const baseURL = 'https://funko.com/dw/image/v2/BGTS_PRD/';

            const urls = [];
            if (jsonData.product && jsonData.product.images && jsonData.product.images['hi-res']) {
                const hiResImages = jsonData.product.images['hi-res'];
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
        } catch (error) {
            urlList.innerHTML = `<li>Error parsing JSON data: ${error.message}</li>`;
        }
    };

    dataIframe.onerror = function() {
        urlList.innerHTML = '<li>Error loading JSON URL</li>';
    };
});
