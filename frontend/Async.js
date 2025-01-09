function getWeather(){
    return new Promise(function(resolve, reject){
        reject("Rainy");
    })
}


const promise = getWeather();
promise.then(
    function(data){
        console.log(data);
    },
    function(data){
        console.log(`data is ${data}`);
    }
)