const fs = require('fs');
const xlsx = require('xlsx');

const filePath = "C:/Users/ORC/Documents/enviaEmail/planilha.xlsx";

async function dataViewer() {

    if (fs.existsSync(filePath)) {

        try {
            const view = xlsx.readFile(filePath);

            console.log("Abas disponíveis no arquivo:", view.SheetNames);

            const ws = view.Sheets['Sheet1']; 
            
            if (!ws) {
                console.error(`A aba '${ws}' não foi encontrada no arquivo.`);
                return;
            }
            
            const data = xlsx.utils.sheet_to_json(ws);

            const emails = data.map(item => item.Email);

            // console.log("Emails extraídos",emails);

            // console.log(data);

            return emails;

        } catch (error) {
            console.error("Erro ao processar o arquivo Excel:", error.message);
            return [];
        }
    } else {
        console.error("Arquivo não encontrado:", filePath);
    };
};

module.exports = {
    dataViewer,
};
