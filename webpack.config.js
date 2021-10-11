// Node.js модуль для разрешения путей файлов
const path = require('path');
module.exports = {
    entry: './src/App/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
};








