const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');

let generate = async () => {
    const url = "https://official-joke-api.appspot.com/random_joke";
    const response = await fetch(url);
    if (response.status === 200) {
        const d = await response.json();
        const setup = d.setup;
        const punchLine = d.punchline;

        text1.textContent = setup;
        text2.textContent = punchLine;
    }
}
