const {getData, getRowsData} = require('../utils/gAnalytics')

/**
 * @api {get} /api/analytics?metrics=users&&startDate=2022-10-15&&endDate=2022-10-16 Get data google analytics
 * @apiName getAnaytics
 * @apiGroup GoogleAnalytics
 * @apiDescription methode API for get data google analytics mertic google analytics users sessions pageviews totalevents visitors pageviewsPerSession
 * @apiDescription Exemple mertic of google analytics : users, sessions, pageviews, totalevents, visitors, pageviewsPerSession,
 * @apiSuccess {Object} google Object data google analytics
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *   {
 *      "data": {
 *          "ga:users": {
 *              "value": 11,
 *              "start": "2022-10-15",
 *              "end": "2022-10-16"
 *          }
 *      }
 *  }
 * @apiSampleRequest http://127.0.0.1:5000/api/analytics?metrics=users&&startDate=2022-10-15&&endDate=2022-10-16
 */
module.exports.getAnaytics = (req, res) => {
    const { metrics, startDate, endDate } = req.query;
    Promise.all(getData(metrics ? metrics.split(',') : metrics, startDate, endDate))
    .then((data) => {
        // flatten list of objects into one object
        const body = {};
        Object.values(data).forEach((value) => {
            Object.keys(value).forEach((key) => {
            body[key] = value[key];
            });
        });
        res.send({ data: body });
    })
    .catch((err) => {
        console.log('Error:');
        console.log(err);
        res.send({ status: 'Error getting a metric', message: `${err}` });
    });
};

module.exports.getRowAnaytics = (req, res) => {
    const { metrics, dimensions, startDate, endDate } = req.query;
    Promise.all(getRowsData(metrics ? metrics.split(',') : metrics, dimensions, startDate, endDate))
    .then((data) => {
        // flatten list of objects into one object
        const body = {};
        Object.values(data).forEach((value) => {
            Object.keys(value).forEach((key) => {
            body[key] = value[key];
            });
        });
        res.send({ data: body });
    })
    .catch((err) => {
        console.log('Error:');
        console.log(err);
        res.send({ status: 'Error getting a metric', message: `${err}` });
    });
};