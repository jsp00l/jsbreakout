let KEYS_DOWN = new Set();

let A_KEY_DOWN = false;
let D_KEY_DOWN = false;


document.addEventListener("keydown", (event) => {
    KEYS_DOWN.add(event.key);
    if (event.key === "a") {
        A_KEY_DOWN = true;
    }
    if (event.key === "d") {
        D_KEY_DOWN = true;
    }
});

document.addEventListener("keyup", (event) => {
    KEYS_DOWN.delete(event.key);
    if (event.key === "a") {
        A_KEY_DOWN = false;
    }
    if (event.key === "d") {
        D_KEY_DOWN = false;
    }
});