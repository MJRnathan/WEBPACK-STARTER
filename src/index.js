import generateJoke from "./generateJoke";  
import './styles/main.scss';
import laughing from "./assets/icons8-rolling-on-the-floor-laughing-94.png";

const laughImg = document.getElementById('laughImg');
laughImg.src = laughing 

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();