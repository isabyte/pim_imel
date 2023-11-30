
//Calendario
  
  $(document).ready(function () {
    const prevButton = $('#prev');
    const nextButton = $('#next');
    const monthYear = $('#monthYear');
    const calendarBody = $('#calendarBody');

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    let selectedDay = null;

    function updateCalendar() {
        calendarBody.empty();

        const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
        const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
        monthYear.text(`${firstDayOfMonth.toLocaleString('default', { month: 'long' })} ${currentYear}`);

        const daysInMonth = lastDayOfMonth.getDate();
        const startingDay = firstDayOfMonth.getDay();

        let dayIndex = 1;
        for (let i = 0; i < 6; i++) {
            const row = $('<tr></tr>');
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < startingDay) {
                    const cell = $('<td></td>').text('');
                    row.append(cell);
                } else if (dayIndex <= daysInMonth) {
                    const cell = $('<td></td>').text(dayIndex);
                    cell.addClass('selectable');
                    if (selectedDay === dayIndex) {
                        cell.addClass('selected');
                    }
                    cell.on('click', function () {
                        selectedDay = dayIndex;
                        $('.selectable').removeClass('selected');
                        $(this).addClass('selected');
                    });
                    row.append(cell);
                    dayIndex++;
                } else {
                    const cell = $('<td></td>').text('');
                    row.append(cell);
                }
            }
            calendarBody.append(row);
        }
    }

    prevButton.on('click', function () {
        currentMonth -= 1;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear -= 1;
        }
        selectedDay = null;
        updateCalendar();
    });

    nextButton.on('click', function () {
        currentMonth += 1;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear += 1;
        }
        selectedDay = null;
        updateCalendar();
    });

    updateCalendar();
});

//Galeria

function GaleriaAtualizarAno()
{
    var select = document.querySelector('#selecionar');
    
    var h3 = document.querySelector('.Year-Header h3');

    var selectedIndex = select.selectedIndex;
    var selectedOption = select.options[selectedIndex];

    h3.textContent = selectedOption.textContent;

}

function Recentes()
{
    var select = document.querySelector('.form-select');
    
    var h3 = document.querySelector('.Year-Header h3');

    h3.innerText = '2023'

}

function Recentes()
{
    var h3 = document.querySelector('.Year-Header h3');

    h3.innerText = '2023'

}

function Antigos()
{
    var h3 = document.querySelector('.Year-Header h3');

    h3.innerText = '2012'

}
