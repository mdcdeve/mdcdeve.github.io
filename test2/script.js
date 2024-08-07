document.getElementById('upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type === 'image/png') {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.getElementById('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);

                canvas.toBlob((blob) => {
                    const url = URL.createObjectURL(blob);
                    document.getElementById('output').src = url;
                }, 'image/jpeg', 1.0);
            }
            img.src = e.target.result;
        }
        reader.readAsDataURL(file);
    } else {
        alert('Please upload a PNG file.');
    }
});
