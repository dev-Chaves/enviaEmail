const emailModels = require('../models/emailsModel');

const view = async(req, res) => {

    const data = await emailModels.dataViewer();

    return res.status(200).json(data);

};

module.exports = {

    view,

};