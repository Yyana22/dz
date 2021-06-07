import renderError, { resetMessage, renderDiff } from './common.js'
import { diffDates } from './calc.js'

const form = document.getElementById('dateForm');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    resetMessage();
    const formData = new FormData(evt.target);
    let date1 = formData.get('date1');
    let date2 = formData.get('date2');
    if (!date1 || !date2) {
        renderError('Error');
    } else {
        if (date1 > date2) {
            [date2, date1] = [date1, date2];
        }
        const result = diffDates(date1, date2);
        renderDiff(result);
    }
})
