'use strict';

export default function TaskHelper() { }

/**
 * load data
 */
TaskHelper.loadTasks = async function loadTasks(projectId, employee) {
    // axios
    //     .get(url)
    //     .then(res => {
    // const data = res.data;
    // resolve(data);
    // })
    // .catch(err => reject(err));
    const data = [{
        ID: "T1",
        name: "T1",
        description: "AMAX TASK I",
        project_id: "P1",
        start: "1399/05/01",
        appointedTime: "1399/05/01",
        finishTime: "1399/05/10",
        employee_id: "Kamal",
        cast: "10$"
    },
    {
        ID: "T2",
        name: "T2",
        description: "AMAX TASK II",
        project_id: "P1",
        start: "1399/05/01",
        appointedTime: "1399/05/01",
        finishTime: "1399/05/10",
        employee_id: "Mohammad",
        cast: "10$"
    }, {
        ID: "T3",
        name: "T3",
        description: "AMAX TASK III",
        project_id: "P1",
        start: "1399/05/01",
        appointedTime: "1399/05/01",
        finishTime: "1399/05/10",
        employee_id: "Mohammad",
        cast: "10$"
    }, {
        ID: "T1",
        name: "T1",
        description: "TASK I",
        project_id: "P2",
        start: "1399/05/01",
        appointedTime: "1399/05/01",
        finishTime: "1399/05/10",
        employee_id: "Kamal",
        cast: "10$"
    },
    {
        ID: "T2",
        name: "T2",
        description: "TASK II",
        project_id: "P2",
        start: "1399/05/01",
        appointedTime: "1399/05/01",
        finishTime: "1399/05/10",
        employee_id: "Hossein",
        cast: "10$"
    }, {
        ID: "T1",
        name: "T1",
        description: "TASK I",
        project_id: "P3",
        start: "1399/05/01",
        appointedTime: "1399/05/01",
        finishTime: "1399/05/10",
        employee_id: "Mohammad",
        cast: "10$"
    },
    ];
    let row = []
    if (!employee || employee == '*') {
        row = data.filter(item => item.project_id == projectId);
    } else {
        row = data.filter(item => (item.project_id == projectId && item.employee_id == employee));
    }
    return row;
};
