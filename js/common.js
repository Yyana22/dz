const message = document.querySelector('.message');
let val;
export default function renderError(text) {
    message.textContent = text;
}

export function resetMessage() {
    message.textContent = '';
}

export function renderDiff(diff) {
    message.innerHTML = `<span>
    Года: ${diff.years}
    Месяца: ${diff.months}
    Дни: ${diff.days}
    </span>`;
}


export function createAudio() {
    let audio = document.createElement('audio');
    audio.src = 'sound.mp3';
    audio.autoplay = true;
}

