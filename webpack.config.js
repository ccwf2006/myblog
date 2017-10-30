module.exports = {
    devtool:'source-map',
    entry:__dirname+'/pages/main.js',
    output:{ path: __dirname+'/public', 
          filename:'bundle.js'  
        }
}
