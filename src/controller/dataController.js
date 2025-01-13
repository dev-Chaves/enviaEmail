const emailModels = require('../models/emailsModel');

const view = async (req, res) => {
    try {
        const data = await emailModels.dataViewer();

        if (!data || data.length === 0) {
            return res.status(404).json({ message: "Nenhum dado encontrado no arquivo Excel." });
        }

        return res.status(200).json(data);
    } catch (error) {
        console.error("Erro no controlador:", error.message);
        return res.status(500).json({ error: "Erro interno do servidor." });
    }
};

module.exports = {
    view,
};