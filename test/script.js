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
                // Convert PNG to JPEG if needed
                if (url.endsWith('.png')) {
                    convertPngToJpg(url)
                        .then(jpegBlob => {
                            const imageUrl = URL.createObjectURL(jpegBlob);
                            displayUrlWithImage(url, imageUrl);
                        })
                        .catch(error => {
                            console.error('Conversion failed:', error);
                            displayUrlWithImage(url, url); // Display original PNG as fallback
                        });
                } else {
                    displayUrlWithImage(url, url);
                }
            });
        } else {
            urlList.innerHTML = '<li>No URLs found</li>';
        }
    } catch (error) {
        console.error('JSON parsing error:', error);
        urlList.innerHTML = `<li>Invalid JSON data: ${error.message}</li>`;
    }
});

// Function to convert PNG to JPEG using Canvas
function convertPngToJpg(pngUrl) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous'; // Enable CORS
        img.onload = function() {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            canvas.toBlob(blob => {
                resolve(blob);
            }, 'image/jpeg', 0.9); // Quality 0.9 (90%)
        };
        img.onerror = function(error) {
            reject(error);
        };
        img.src = pngUrl;
    });
}

// Function to display URL with image in the list
function displayUrlWithImage(url, imageUrl) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = url;
    link.textContent = url;
    link.target = '_blank'; // Open link in a new tab

    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = 'Image';
    image.style.display = 'block';
    image.style.marginTop = '10px';
    image.style.maxWidth = '100%';

    listItem.appendChild(link);
    listItem.appendChild(image);
    urlList.appendChild(listItem);
}
