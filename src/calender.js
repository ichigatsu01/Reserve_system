document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');

    function isBusinessHours(date, businessHours) {
        const day = date.getDay()
        const time = date.toTimeString().slice(0, 5) // "HH:MM"

        console.log(businessHours)
        return businessHours.some(bg => {
            return bg.daysOfWeek.includes(day) &&
                    time >= bg.startTime &&
                    time < bg.endTime
        });
        }
    
    // const calendar = new FullCalendar.Calendar(calendarEl, { // script.jsへ引き渡すためにwindow.を付ける
    window.calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridWeek',
    initialDate: "2025-05-25",  //あくまでサンプル表示のため、カレンダーの開始日を固定
    locale: 'ja',
    events: [
        // 営業時間外の色を強調したい
        {
        daysOfWeek: [0, 3],
        display: 'background',
        color: '#000'
        },
        {
        startTime: '13:00',
        endTime: '16:00',
        daysOfWeek: [1, 2, 4, 5],
        display: 'background',
        color: '#000'
        },
        {
        startTime: '13:00',
        endTime: '21:00',
        daysOfWeek: [6],
        display: 'background',
        color: '#000'
        },
        {
        title: 'テスト1',
        start: '2025-05-26T12:00:00',
        end: '2025-05-26T12:30:00',
        },
        {
        title: 'テスト2',
        start: '2025-05-27T16:00:00',
        end: '2025-05-27T16:30:00'
        },
        {
        title: 'テスト3',
        start: '2025-05-29T20:00:00',
        end: '2025-05-29T20:30:00'
        },
        {
        title: 'テスト4',
        start: '2025-05-30T10:00:00',
        end: '2025-05-30T10:30:00'
        },
        {
        title: 'テスト5',
        start: '2025-05-31T09:00:00',
        end: '2025-05-31T09:30:00'
        },
        {
        title: '休診日',
        start: '2025-06-02T09:00:00',
        end: '2025-06-02T21:00:00'
        },
    ],
    eventColor: '#888',
    slotMinTime: '09:00:00', // 表示する時間（始）
    slotMaxTime: '21:00:00', // 表示する時間（終）
    height: 'auto',          // ←自動で収まるように（または固定値でもOK）
    slotDuration: '00:30:00',
    businessHours: [ // 配列を渡して営業時間を表示している
        {
            // 午前の診療時間
            daysOfWeek: [1, 2, 4, 5, 6], // 月・火・木・金・土
            startTime: '08:00',
            endTime: '13:00'
        },
        {
            // 午後の診療時間
            daysOfWeek: [1, 2, 4, 5], // 月・火・木・金
            startTime: '16:00',
            endTime: '21:00'
            }
        ],
    eventContent: function(arg) {
        return {
            html: `${arg.event.title}`  // 最終的に患者の予約なら「予約済み」そうでないなら設定した内容にしたい（休診日など）
        };
    },
    dateClick: function(info) { // イベントの入っていない日付をクリックした場合の処理
        console.log(info)
        bh = calendar.getOption('businessHours')
        if (info.allDay) {
            alert('allDayを触らないでくださいっていうか表示されちゃうの邪魔だよねこれ')
        } else if (isBusinessHours(info.date, bh)) {
            alert('予約可能なエリアです')
        } else {
            alert('営業時間外のため、予約できません')
            
        }
    },
    eventClick: function(info) {
        if (info.event.display === 'background') { // 背景クリック → 無視する
            return;
        } else {
            alert('その時間に予約することは出来ません')
        }
    }
    
    });
// calendar.render();
});