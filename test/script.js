document.getElementById('extractButton').addEventListener('click', function() {
    const inputText = document.getElementById('jsonInput').value;
    const urlList = document.getElementById('urlList');
    urlList.innerHTML = ''; // Clear previous results

    const baseURL = 'https://funko.com/dw/image/v2/BGTS_PRD/';
    const foundUrls = new Set(); // Use a Set to automatically handle duplicate URLs

    // Regex to find potential image URLs or paths.
    // This pattern looks for sequences of characters (not whitespace or common delimiters like quotes, brackets)
    // that end with a common image file extension.
    const imagePatternRegex = /([^\s"'<>()\[\]{}]+\.(?:png|jpg|jpeg|gif|webp))/gi;

    let match;
    while ((match = imagePatternRegex.exec(inputText)) !== null) {
        let candidateUrlOrPath = match[1];

        // Basic check to avoid excessively short or clearly invalid matches (optional, can be adjusted)
        if (candidateUrlOrPath.length < 4) { // e.g., ".png" is too short
            continue;
        }

        let finalUrl;

        if (candidateUrlOrPath.startsWith('http://') || candidateUrlOrPath.startsWith('https://') || candidateUrlOrPath.startsWith('//')) {
            // It's already an absolute URL
            finalUrl = candidateUrlOrPath;
        } else if (candidateUrlOrPath.includes('://')) {
            // Contains "://" but doesn't start with a known protocol, might be malformed or not a direct image URL.
            // For a very permissive approach, you could try to use it, but it's safer to skip.
            // console.warn('Skipping potentially malformed URL:', candidateUrlOrPath);
            continue;
        }
        else {
            // Assume it's a relative path, prepend baseURL
            // Ensure no double slashes if path starts with one, and baseURL ends with one.
            if (baseURL.endsWith('/') && candidateUrlOrPath.startsWith('/')) {
                finalUrl = baseURL + candidateUrlOrPath.substring(1);
            } else if (!baseURL.endsWith('/') && !candidateUrlOrPath.startsWith('/')) {
                finalUrl = baseURL + '/' + candidateUrlOrPath;
            } else {
                finalUrl = baseURL + candidateUrlOrPath;
            }
        }

        if (finalUrl) {
            foundUrls.add(finalUrl);
        }
    }

    if (foundUrls.size > 0) {
        foundUrls.forEach(url => {
            const listItem = document.createElement('li');

            const link = document.createElement('a');
            link.href = url;
            link.textContent = url;
            link.target = '_blank'; // Open link in a new tab

            const image = document.createElement('img');
            image.src = url;
            image.alt = 'Extracted Image'; // Generic alt text
            image.style.display = 'block';
            image.style.marginTop = '10px';
            image.style.maxWidth = '100%'; // Make image responsive

            // Handle cases where the image might fail to load
            image.onerror = function() {
                this.alt = 'Failed to load image: ' + url;
                // Optionally, you could hide the broken image or display a placeholder
                // For example: listItem.textContent = `Error loading image: ${url}`;
            };

            listItem.appendChild(link);
            listItem.appendChild(image);
            urlList.appendChild(listItem);
        });
    } else {
        urlList.innerHTML = '<li>No image URLs or paths found in the text.</li>';
    }
});
