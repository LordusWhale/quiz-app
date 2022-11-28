
// Drops down error message
export const showError = async (message) => {
    const errorMessage = document.getElementById('error')
    errorMessage.innerText = message;
    errorMessage.style.opacity = 1;
    errorMessage.style.transform = 'translateY(60px)'
    await sleep(2000);
    errorMessage.innerHTML = "";
    errorMessage.style.opacity = '0';
    errorMessage.style.transform = 'translateY(0)';
}

// Simple 'sleep' function
export const sleep = async (time) => {
    await new Promise(r=>setTimeout(r, time));
}

// Create unique ID that can be used to delete.
export const createID =() => {
    const id = Date.now().toString(30);
    return id;
  }