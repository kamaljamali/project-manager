'use strict';

export default function EmployeeHelper() { }

/**
 * load data
 */
EmployeeHelper.loadEmployees = async function loadEmployees(projectId) {
    // axios
    //     .get(url)
    //     .then(res => {
    // const data = res.data;
    // resolve(data);
    // })
    // .catch(err => reject(err));
    const data = [{
        name: "Hossein",
    },
    {
        name: "Mohammad",
    }, {
        name: "Kamal",
    },
    ];
    const rows = data.filter(item => item.project_id == projectId);
    return rows;
};