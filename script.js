async function generateImage() {
    let prompt = document.getElementById("prompt").value;
    if (!prompt) {
        alert("Please enter a prompt!");
        return;
    }

    let response = await fetch("http://127.0.0.1:5000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: prompt })
    });

    let result = await response.json();
    document.getElementById("output").innerHTML = `<img src="${result.image_url}" alt="Generated Image">`;
}
