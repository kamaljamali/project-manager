'use strict';

function BigtableHelper() {}
module.exports = BigtableHelper;

/**
 * load data
 */
BigtableHelper.loadResults = function loadResults() {
    return new Promise((resolve, reject) => {
        // axios
        //     .get(url)
        //     .then(res => {
        // const data = res.data;
        // resolve(data);
        // })
        // .catch(err => reject(err));
        const data = [{
                name: "AMAX",
                executor: "Kamal",
                appointedTime: "1399/05/01",
                finishTime: "1399/05/10"
            },
            {
                name: "HEMMAT",
                executor: "Mohammad",
                appointedTime: "1399/01/01",
                finishTime: "1399/07/10"
            },
            {
                name: "QNG",
                executor: "Hossein",
                appointedTime: "1398/08/01",
                finishTime: "1399/09/10"
            },
            {
                name: "CHARMALBORZ",
                executor: "ALL",
                appointedTime: "1398/01/01",
                finishTime: "1399/06/05"
            },
        ];
        resolve(data);
    });
};