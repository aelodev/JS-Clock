document.addEventListener('DOMContentLoaded', function () {
    const hour = document.getElementById('hour');
    const minute = document.getElementById('minute');
    const second = document.getElementById('second');
    const period = document.getElementById('period');
    const day = document.getElementById('day');
    const month = document.getElementById('month');
    const year = document.getElementById('year');

    function clock(){
        let date = new Date();
        let hh = date.getHours();
        let per = hh >= 12 ? 'PM' : 'AM';
        if (hh > 12) {
            hh = hh - 12;

        } else if (hh === 0) {
            hh = 12;
        }

        let min = date.getMinutes();
        let sec = date.getSeconds();
        let dd = date.getDate();
        let mm = date.getMonth();

        switch (mm) {
            case 1:
                mm = 'January';
                break;
            case 2:
                mm = 'February';
                break;
            case 3:
                mm = 'March';
                break;
            case 4:
                mm = 'April';
                break;
            case 5:
                mm = 'May';
                break;
            case 6:
                mm = 'June';
                break;
            case 7:
                mm = 'July';
                break;
            case 8:
                mm = 'August';
                break;
            case 9:
                mm = 'September';
                break;
            case 10:
                mm = 'October';
                break;
            case 11:
                mm = 'November';
                break;
            case 12:
                mm = 'December';
                break;
            default:
                break;
        }
        let yyyy = date.getFullYear();
        hour.innerHTML = `<p><span class="red">hour</span>: <span class="number">${hh}</span>,</p>`;
        minute.innerHTML = `<p><span class="red">minute</span>: <span class="number">${min}</span>,</p>`
        second.innerHTML = `<p><span class="red">second</span>: <span class="number">${sec}</span>,</p>`;
        period.innerHTML = `<p><span class="red">period</span>: <span class="letter">'${per}'</span>,</p>`;
        day.innerHTML = `<p><span class="red">day</span>: <span class="number">${dd}</span>,</p>`;
        month.innerHTML = `<p><span class="red">month</span>: <span class="letter">'${mm}'</span>,</p>`;
        year.innerHTML = `<p><span class="red">year</span>: <span class="number">${yyyy}</span></p>`;
        setTimeout(clock, 1000);
    }

    clock();
});