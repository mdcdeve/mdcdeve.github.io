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

                const pica = window.pica();
                const outputCanvas = document.createElement('canvas');
                outputCanvas.width = img.width;
                outputCanvas.height = img.height;

                pica.resize(canvas, outputCanvas)
                    .then(() => pica.toBlob(outputCanvas, 'image/jpeg', 1.0))
                    .then((blob) => {
                        const url = URL.createObjectURL(blob);
                        document.getElementById('output').src = url;
                    })
                    .catch((error) => console.error(error));
            }
            img.src = e.target.result;
        }
        reader.readAsDataURL(file);
    } else {
        alert('Please upload a PNG file.');
    }
});
