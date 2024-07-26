const path = require('path');

module.exports = {
    entry: './src/index.js', // Punto de entrada de la aplicación = archivo de entrada donde empaquetará el webpack
    output: {
       filename: 'bundle.js',Nombre del archivo de salida//
       path: path.resolve(_dirname, 'disk'), // Carpeta de salida
},
 module: {
    rules: [
            {
              test:/\.css$／，  ／／ Regex para identificar archivos CSS
              use: ['style-loader', 'css-loader'], // Loaders para procesar archivos css},

             {test：/\.js＄／， ／／ Regex para identificar archivos js 
             exclude: /node_modules/, // Excluir la carpeta node_modules
             use: {
               loader: 'babel-loader', // Configurar loader para pasar JS moderno a JS antiguo para todos los navegadores
               options:{

                   presets: ['@babel/preset-env'],
                 },
            },
         },
     ],
},
devtool: 'source-map', // Generar source maps para facilitar la depuración}
devServer: {
    contentBase: path.resolve(_dirname, 'dist'), // Carpeta principal del servidor
    compress: true,//Habilitar la compresión gzip
port:9000, // Puerto del servidor de desarrollo
        },
};






