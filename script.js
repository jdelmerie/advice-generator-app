const id = document.getElementById("id");
const text = document.getElementById("text");
const dice = document.getElementById("dice");

const getData = async () => {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const advice = await response.json();
        id.innerText = advice.slip.id
        text.innerText = advice.slip.advice
    } catch (error) {
        console.error("Error fetching data from API: ", error);
    }
};

dice.addEventListener('click', getData)
getData();
