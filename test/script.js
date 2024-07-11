// script.js

document.getElementById('extractButton').addEventListener('click', async function() {
    const jsonInput = document.getElementById('jsonInput').value;
    const urlList = document.getElementById('urlList');
    urlList.innerHTML = '';

    try {
        const data = JSON.parse(jsonInput);
        const baseURL = 'https://funko.com/dw/image/v2/BGTS_PRD/';

        const urls = [];
        if (data.product && data.product.images && data.product.images['hi-res']) {
            const hiResImages = data.product.images['hi-res'];
            hiResImages.forEach(async image => {
                if (image.url) {
                    let fullUrl = image.url;
                    if (!fullUrl.startsWith(baseURL)) {
                        fullUrl = baseURL + fullUrl;
                    }

                    try {
                        // Fetch Base64 encoded image from server
                        const response = await fetch(`/fetchImage?imageUrl=${encodeURIComponent(fullUrl)}`);
                        const { dataUrl } = await response.json();

                        // Create UI elements
                        const listItem = document.createElement('li');
                        const link = document.createElement('a');
                        link.href = fullUrl;
                        link.textContent = fullUrl;
                        link.target = '_blank'; // Open link in a new tab

                        const imageElem = document.createElement('img');
                        imageElem.src = dataUrl; // Use Base64 data URL
                        imageElem.alt = 'Image';
                        imageElem.style.display = 'block';
                        imageElem.style.marginTop = '10px';
                        imageElem.style.maxWidth = '100%';

                        listItem.appendChild(link);
                        listItem.appendChild(imageElem);
                        urlList.appendChild(listItem);
                    } catch (error) {
                        console.error('Error fetching Base64 image:', error);
                    }
                }
            });
        }

        if (urls.length === 0) {
            urlList.innerHTML = '<li>No URLs found</li>';
        }
    } catch (error) {
        urlList.innerHTML = '<li>Invalid JSON data</li>';
    }
});
