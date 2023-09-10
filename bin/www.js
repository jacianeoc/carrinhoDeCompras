const app = require ('../app');

try{
    app.listen(process.env.PORT || 3333);
    console.log('servidor iniciado...');

} catch (e) {
    throw e;
}