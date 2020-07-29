console.log('Client side javascript file loaded .test')


const LocationInput = document.getElementById('LocationInput')

// Reference to an ID is done by # 
const currentweather = document.querySelector('#current-weather')
const dailyweather = document.querySelector('#daily-weather')
const locationn = document.querySelector('#location')
const currenttemp = document.querySelector('#currenttemp')
const rainprob = document.querySelector('#rainprob')
const tempmax = document.querySelector('#tempmax')
const tempmaxtime = document.querySelector('#tempmaxtime')
const tempmin = document.querySelector('#tempmin')
const tempmintime = document.querySelector('#tempmintime')

// messageone.textContent = 'From Javascript'

document.getElementById('submitbutton').addEventListener('click',function(){

    console.log(LocationInput.value)



fetch('/weather?adress=' + LocationInput.value).then((response) => {

    document.getElementById("summary").style.visibility = "visible";
    document.getElementById("cards").style.visibility = "visible";
    


    response.json().then((data) => {
        if (data.error) {
            locationn.textContent = data.error
            clearrest()
           
        } else {
            console.log(data)
            locationn.textContent = data.location
            currentweather.textContent = data.forecast.current
            dailyweather.textContent = data.forecast.daily
            currenttemp.textContent = data.forecast.currenttemp
            rainprob.textContent = data.forecast.rainprob
            tempmax.textContent = data.forecast.tempmax
            tempmaxtime.textContent = data.forecast.tempmaxtime
            tempmin.textContent = data.forecast.tempmin
            tempmintime.textContent = data.forecast.tempmintime
        }
    })

})








})


const clearrest = ()=>{
    currentweather.textContent = ''
    dailyweather.textContent = ''
    currenttemp.textContent = ''
    rainprob.textContent = ''
    tempmax.textContent = ''
    tempmaxtime.textContent = ''
    tempmin.textContent = ''
    tempmintime.textContent = ''


}