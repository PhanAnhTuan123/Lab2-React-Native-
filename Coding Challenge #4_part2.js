const printForecast = (arr) => {
    let forecastArr = [];
    
    for (let i = 0; i < arr.length; i++) {

        forecastArr.push(`... ${arr[i]}°C in ${i + 1} days`);
    }
    

    const forecastString = forecastArr.join(' ');


    console.log(forecastString);
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data1); 
printForecast(data2); 
