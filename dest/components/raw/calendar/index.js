/* /js/modules/Calendar.js */

export function calendar() {
  const week = ['月', '火', '水', '木', '金', '土', '日'];
  const date = new Date();
  const name = document.querySelector('#name');
  const buttonPrev = document.getElementById('js-calendar-prev');
  const buttonNext = document.getElementById('js-calendar-next');
  const showDate = new Date(date.getFullYear(), date.getMonth(), 1);
  const calendarBody = document.querySelector('#calendar-body');

  if(name) {
    showProcess(date, calendar);

    buttonPrev.addEventListener('click', () => {
      prev();
    });

    buttonNext.addEventListener('click', () => {
      next();
    });
  }

  // 前の月表示
  function prev() {
    showDate.setMonth(showDate.getMonth() - 1);
    showProcess(showDate);
  }

  // 次の月表示
  function next() {
    showDate.setMonth(showDate.getMonth() + 1);
    showProcess(showDate);
  }

  // カレンダー表示
  function showProcess(date) {
    let year = date.getFullYear();
    let month = date.getMonth();
    name.innerHTML = year + '年' + (month + 1) + '月のカレンダー';

    let calendar = createProcess(year, month);
    calendarBody.innerHTML = calendar;
  }

  // カレンダー作成
  function createProcess(year, month) {
    // 曜日
    let calendar = '';
    calendar += '';

    let count = 0;
    let startDayOfWeek = new Date(year, month, 0).getDay();
    let endDate = new Date(year, month + 1, 0).getDate();
    let lastMonthEndDate = new Date(year, month, 0).getDate();
    let row = Math.ceil((startDayOfWeek + endDate) / week.length);

    // 1行ずつ設定
    for (let i = 0; i < row; i++) {
      calendar += '<tr>';
      // 1colum単位で設定
      for (let j = 0; j < week.length; j++) {
        if (i == 0 && j < startDayOfWeek) {
          // 1行目で1日まで先月の日付を設定
          calendar += '<td class="prev-month-day">' + (lastMonthEndDate - startDayOfWeek + j + 1) + '</td>';
        } else if (count >= endDate) {
          // 最終行で最終日以降、翌月の日付を設定
          count++;
          calendar += '<td class="next-month-day">' + (count - endDate) + '</td>';
        } else {
          // 当月の日付を曜日に照らし合わせて設定
          count++;
          if(year == date.getFullYear()
            && month == (date.getMonth())
            && count == date.getDate()){
              calendar += '<td class="today"><span class="deco">' + count + '</span></td>';
          } else {
              calendar += '<td>' + count + '</td>';
          }
        }
      }
      calendar += '</tr>';
    }
    return calendar;
  }
}