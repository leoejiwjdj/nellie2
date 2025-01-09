/* Allmän stil */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
}

header {
    text-align: center;
    margin: 20px;
}

h1 {
    font-size: 2em;
    margin: 10px 0;
}

#controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

button {
    padding: 10px;
    font-size: 1em;
    margin: 5px;
    cursor: pointer;
}

#image-container {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 20px;
}

.image-row {
    display: flex;
    justify-content: center;
    margin: 10px;
}

img {
    max-width: 30%;
    height: auto;
    margin: 5px;
    border-radius: 10px;
    border: 2px solid gray;
}

/* För olika bakgrundsfärger */
body.dark-theme {
    background-color: black;
    color: white;
}

body.dark-theme button {
    background-color: white;
    color: black;
}

/* Layout för en bild per rad */
.one-column .image-row {
    flex-direction: column;
}

.three-columns .image-row {
    flex-direction: row;
}

/* Styla för knappar och layout */
button {
    background-color: #f0f0f0;
    border: 1px solid #ddd;
}

button:hover {
    background-color: #e0e0e0;
}
