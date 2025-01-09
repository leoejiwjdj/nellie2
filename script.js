const fileInput = document.getElementById("file-input");
const imageContainer = document.getElementById("image-container");
const themeToggleButton = document.getElementById("theme-toggle");
let currentTheme = 'light';

fileInput.addEventListener("change", handleFileUpload);
themeToggleButton.addEventListener("click", toggleTheme);

function handleFileUpload(event) {
    const files = event.target.files;
    const rows = document.querySelectorAll('.image-row');
    let rowIndex = 0;

    for (let i = 0; i < files.length; i++) {
        if (rowIndex > 2) {
            break; // Max 3 rows
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            rows[rowIndex].appendChild(img);
        }
        reader.readAsDataURL(files[i]);

        if (rows[rowIndex].children.length >= 3) {
            rowIndex++;
        }
    }
}

function toggleTheme() {
    if (currentTheme === 'light') {
        document.body.classList.add('dark-theme');
        currentTheme = 'dark';
    } else {
        document.body.classList.remove('dark-theme');
        currentTheme = 'light';
    }
}
