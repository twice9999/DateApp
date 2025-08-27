

selectors = {
    dateInfo: '[date-info]',
    getFullDate: '[get-full-date]',
    getDate: '[get-date]',
    getTime: '[getTime]',
    contentAreaController: '[content-area-controller]'
}
const output = document.querySelector(this.selectors.dateInfo);
const fullBtn = document.querySelector(this.selectors.getFullDate);
const dateBtn = document.querySelector(this.selectors.getDate);
const timeBtn = document.querySelector(this.selectors.getTime);




function changeOutPut(key) {
    switch (key) {
        case 'full':
            clearInterval(interval1);
            output.textContent = new Intl.DateTimeFormat('RU', {
                year:"numeric",
                month:"long",
                day: "numeric"
            }).format(new Date());
            break;
        case 'date':
            clearInterval(interval1);
            output.textContent = new Intl.DateTimeFormat('RU', {
                month:"long",
                day:"numeric"
            }).format(new Date());
            break;
        case 'time':
            interval1 = setInterval(() => {
                output.textContent = new Intl.DateTimeFormat('RU', {
                hour:"numeric",
                minute:"numeric",
                second:"numeric",
            }).format(new Date());
            }, 1000);
        default:
            output.textContent = 'Date app';
            break;
    }
}



fullBtn.addEventListener('click', () => {
    changeOutPut('full');
})



dateBtn.addEventListener('click', () => {
    changeOutPut('date');
})


timeBtn.addEventListener('click', () => {
    changeOutPut('time');
})