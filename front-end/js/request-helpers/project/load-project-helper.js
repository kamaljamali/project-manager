'use strict';

export default function ProjectHelper() { }

/**
 * load data
 */
ProjectHelper.loadProjects = async function loadProjects() {
    // axios
    //     .get(url)
    //     .then(res => {
    // const data = res.data;
    // resolve(data);
    // })
    // .catch(err => reject(err));
    const data = [{
        ID: "P1",
        name: "AMAX",
        start: "1399/05/01",
        appointedTime: "1399/05/01",
        finishTime: "1399/05/10"
    },
    {
        ID: "P2",
        name: "HEMMAT",
        start: "1399/05/01",
        appointedTime: "1399/01/01",
        finishTime: "1399/07/10"
    },
    {
        ID: "P3",
        name: "QNG",
        start: "1399/05/01",
        appointedTime: "1398/08/01",
        finishTime: "1399/09/10"
    },
    {
        ID: "P4",
        name: "CHARMALBORZ",
        start: "1399/05/01",
        appointedTime: "1398/01/01",
        finishTime: "1399/06/05"
    },
    ];

    return data;
};