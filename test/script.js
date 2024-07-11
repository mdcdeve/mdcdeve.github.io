document.getElementById('extractButton').addEventListener('click', function() {
    const jsonInput = document.getElementById('jsonInput').value;
    const urlList = document.getElementById('urlList');
    urlList.innerHTML = '';

    try {
        const data = JSON.parse(jsonInput);
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
    } catch (error) {
        urlList.innerHTML = '<li>Invalid JSON data</li>';
    }
});
