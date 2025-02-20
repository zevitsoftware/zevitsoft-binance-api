const Binance = require( './node-binance-api.js' );
let used = false;
function errorCallback(data){
    if(!used) {
        console.log('____________errorCallback')
        console.log(data.code)
        used = true;
        setTimeout(() => run(), 5000);
    }

}
function subscribed_callback(){
    console.log('subscribed_callback')
}
function account_config_update_callback(){
    console.log('account_config_update_callback')
}

async function run() {
    const exchange = new Binance().options({
        APIKEY: '8YhRPJ0Rc4jTYxZuzTVjp9G3qZZffQ75INLr0GUA8Q3K9k9QITTp09EBY8ghDOKQ',
        APISECRET: 'nsP9axvL4Ub3nYPaYWoymB6jFdgNmdhojAUze4g5RPD8QeIsKMZ2ytz81FD117wI',
        useServerTime: true, // Recommended,
        keepAlive: true,
        recvWindow: 5000,
        family: 4,
        test: false // Set to true for sandbox testing
    });
    try {
        exchange.websockets.userFutureData(function marginCallback(data) {
        }, function accountCallback(data) {
        }, function orderUpdate(data) {
        },subscribed_callback, account_config_update_callback,errorCallback)
        used = false
    } catch (e) {
        console.log('asdasdasdasd')
    }
}


run();
