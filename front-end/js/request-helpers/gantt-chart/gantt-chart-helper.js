'use strict';

import dayjs from "dayjs";

const AxiosHelper = require("@HELPERS/axios-helper");
export default function GanttChartHelper() { }


/*
 *   get date methods
 */
function getDate(hours) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const timeStamp = new Date(
        currentYear,
        currentMonth,
        currentDay,
        0,
        0,
        0
    ).getTime();
    return new Date(timeStamp + hours * 60 * 60 * 1000).getTime();
};

/*
*   duration time
*/
function durationTime(time) {
    return time * 24 * 60 * 60 * 1000
}
/**
 * load data
 */
GanttChartHelper.loadTasks = async function loadTasks(url) {

    const tasks = [
        {
            id: 1,
            label: "Task I",
            user: "Kamal",
            start: getDate(-12),
            duration: durationTime(2),
            progress: 35,
            type: "task",
            // collapsed: true,
        },
        {
            id: 2,
            label: "Task II",
            user: "Mohammad",
            start: getDate(0),
            duration: durationTime(1),
            progress: 35,
            type: "task",
            // collapsed: true,
            style: {
                base: {
                    fill: "#1EBC61",
                    stroke: "#0EAC51",
                },
                'tree-row-bar': {
                    fill: '#1EBC61',
                    stroke: '#0EAC51'
                },
                'tree-row-bar-polygon': {
                    stroke: '#0EAC51'
                }
            },
        },
        {
            id: 3,
            label: "Task III",
            user: "Hossein",
            parentId: 1,
            start: getDate(4),
            duration: durationTime(2),
            progress: 50,
            type: "milestone",
            collapsed: true,
            style: {
                base: {
                    fill: "#1E0561",
                    stroke: "#0EAC51",
                },
                'tree-row-bar': {
                    fill: '#1E0561',
                    stroke: '#0EAC51'
                },
                'tree-row-bar-polygon': {
                    stroke: '#0EAC51'
                }
            },
        },
        // {
        //     id: 3,
        //     label: "Task III",
        //     user: "Mohammad",
        //     parentId: 2,
        //     start: getDate(-24 * 3),
        //     duration: durationTime(1),
        //     progress: 100,
        //     type: "task",
        // },
        // {
        //     id: 4,
        //     label: "Task IV",
        //     user: "MissMohammadi",
        //     start: getDate(-24 * 2),
        //     duration: durationTime(2),
        //     progress: 50,
        //     type: "task",
        //     dependentOn: [3],
        // },
    ];

    const options = {
        maxRows: 100,
        maxHeight: 700,
        title: {
            label: "Your project title as html (link or whatever...)",
            html: false,
        },
        row: {
            height: 24,
        },
        calendar: {
            hour: {
                display: false,
            },
        },
        chart: {
            progress: {
                bar: false,
            },
            expander: {
                display: true,
            },
        },
        taskList: {
            expander: {
                straight: false,
            },
            columns: [
                {
                    id: 1,
                    label: "ID",
                    value: "id",
                    width: 40,
                },
                {
                    id: 2,
                    label: "Description",
                    value: "label",
                    width: 200,
                    expander: true,
                    html: true,
                    events: {
                        click({ data, column }) {
                            alert("description clicked!\n" + data.label);
                        },
                    },
                },
                {
                    id: 3,
                    label: "Assigned to",
                    value: "user",
                    width: 130,
                    html: true,
                },
                {
                    id: 3,
                    label: "Start",
                    value: (task) => dayjs(task.start).format("YYYY-MM-DD"),
                    width: 78,
                },
                {
                    id: 4,
                    label: "Type",
                    value: "type",
                    width: 68,
                },
                {
                    id: 5,
                    label: "%",
                    value: "progress",
                    width: 35,
                    style: {
                        "task-list-header-label": {
                            "text-align": "center",
                            width: "100%",
                        },
                        "task-list-item-value-container": {
                            "text-align": "center",
                            width: "100%",
                        },
                    },
                },
            ],
        },
        // locale: {
        //     name: 'pl', // name String
        //     weekdays: 'شنبه_یک شنبه_دوشنبه_سه شنبه_چهارشنبه_پنج شنبه_جمعه'.split('_'), // weekdays Array
        //     // weekdaysShort: 'شنبه_یک_دو_سه_چهار_پنج_جمعه'.split('_'), // OPTIONAL, short weekdays Array, use first three letters if not provided
        //     // weekdaysMin: 'شن_ی_دو_سه_چهار_پن_جم'.split('_'), // OPTIONAL, min weekdays Array, use first two letters if not provided
        //     months: 'فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_Wrzesień_Październik_Listopad_Grudzień'.split('_'), // months Array
        //     monthsShort: 'Sty_Lut_Mar_Kwi_Maj_Cze_Lip_Sie_Wrz_Paź_Lis_Gru'.split('_'), // OPTIONAL, short months Array, use first three letters if not provided
        //     ordinal: n => `${n}`, // ordinal Function (number) => return number + output
        //     relativeTime: { // relative time format strings, keep %s %d as the same
        //         future: 'za %s', // e.g. in 2 hours, %s been replaced with 2hours
        //         past: '%s temu',
        //         s: 'kilka sekund',
        //         m: 'minutę',
        //         mm: '%d minut',
        //         h: 'godzinę',
        //         hh: '%d godzin', // e.g. 2 hours, %d been replaced with 2
        //         d: 'dzień',
        //         dd: '%d dni',
        //         M: 'miesiąc',
        //         MM: '%d miesięcy',
        //         y: 'rok',
        //         yy: '%d lat'
        //     }
        // }
    };

    return {
        tasks,
        options
    };
    // return new Promise((resolve, reject) => {
    //     AxiosHelper.send("get", url).then((res) => {
    //         if (res.data.success) {
    //             resolve(res.data.data);
    //         }
    //         else {
    //             resolve([]);
    //         }
    //     })
    //         .catch((err) => {
    //             reject(err)
    //         });
    // });
};
