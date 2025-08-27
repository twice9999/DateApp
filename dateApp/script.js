selectors = {
    dateInfo: '[date-info]',
    getFullDate: '[get-full-date]',
    getDate: '[get-date]',
    getTime: '[getTime]',
    contentAreaController: '[content-area-controller]'
}
dateInfoElement = document.querySelector(this.selectors.dateInfo);
getFullDateButton = document.querySelector(this.selectors.getFullDate);
getDateButton = document.querySelector(this.selectors.getDate);
getTimeButton = document.querySelector(this.selectors.getTime);
contentAreaControllerElement =  document.querySelector(this.selectors.contentAreaController);
let showtimeon = undefined;
const date = new Date();

let showFullDateincluded = false;
let showDateIncluded = false;
let showTimeincluded = false;

const formatDateRU = new Intl.DateTimeFormat('ru', {
        day: 'numeric',
        month: 'long'
    });

function showFullDate() {
    const formatFullDateRU = new Intl.DateTimeFormat('ru', {
        year:'numeric',
        day: 'numeric',
        month: 'long'
    })
    dateInfoElement.innerText = formatFullDateRU.format(new Date());
    contentAreaControllerElement.style.width = '300px';
    
}

function showDate() {
    const formatDateRU = new Intl.DateTimeFormat('ru', {
        day: 'numeric',
        month: 'long'
    })

    dateInfoElement.innerText = formatDateRU.format(new Date());
}

function showTime() {
    const formatTimeRU = new Intl.DateTimeFormat('RU', {
        hour:"numeric",
        minute:"numeric",
        second:"numeric"
    })
    dateInfoElement.innerText = formatTimeRU.format(new Date());
}

getDateButton.addEventListener('click', () => {
    clearInterval(interval1);
    showtimeon = undefined;
    getTimeButton.innerText = "Время";
    showDate();
})



getFullDateButton.addEventListener('click', ()=> {
    clearInterval(interval1);
    showtimeon = undefined;
    getTimeButton.innerText = "Время";
    showFullDate();
})

getTimeButton.addEventListener('click', () => {
    if(showtimeon == false || showtimeon == undefined) {
        interval1 = setInterval(() => {
            showTime();
        }, 1000);
        showtimeon = true;
    }
})

