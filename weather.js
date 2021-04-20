
var d = new Date();
console.log(d);
document.getElementById("date").value = d.toDateString();





// JavaScript function for Unix Timestamp Conversion
const timeStampConverter=(timestamp,timezone)=>{
    
    const objectOfDate= new Date(timestamp*1000+timezone*1000)
    const utcString=objectOfDate.toUTCString()
    return utcString
}

$("#city1,input[name='gender']").change(function(){
    
    if($("#city1").val()!==''){
        $.ajax({
            type: "GET",  
            url: "https://api.openweathermap.org/data/2.5/weather?q="+ $("#city1").val()+"&appid=c94d5c09ee0b607656c756c3f5cd8622",  
            headers:{'Content-Type': 'application/json','Access-Control-Allow-Origin':"*"},
            crossDomain:true,
            dataType: "jsonp",
            success: function(res){
                
                
                
              
                $.ajax({
                    type: "GET",  
                  url: "https://api.openweathermap.org/data/2.5/onecall?lat="+res.coord.lat+"&lon="+res.coord.lon+"&units="+$("input[name='gender']:checked").val()+"&exclude=daily,minutely,alerts&appid=c94d5c09ee0b607656c756c3f5cd8622",  
                     headers:{'Content-Type': 'application/json','Access-Control-Allow-Origin':"*"},
                     crossDomain:true,
                     dataType: "jsonp",
                     success: function(Res){
                       // Calling the timeStampconverter function to convert different times for readability
                         const currentTime=timeStampConverter(Res.current.dt,Res.timezone_offset)
                         const sunriseTime=timeStampConverter(Res.current.sunrise,Res.timezone_offset)
                         const sunsetTime=timeStampConverter(Res.current.sunset,Res.timezone_offset)
                         const hourly1st1=timeStampConverter(Res.hourly[0].dt,Res.timezone_offset)
                         const hourly2nd1=timeStampConverter(Res.hourly[1].dt,Res.timezone_offset)
                         const hourly3rd1=timeStampConverter(Res.hourly[2].dt,Res.timezone_offset)

                         // Setting the field values for current weather forcast
                           $("#wheatherdescription1").val(Res.current.weather[0].description)
                           $("#latitude1").val(Res.lat)
                           $("#longitude1").val(Res.lon)
                           $("#temprature1").val(Res.current.temp)
                           $("#pressure1").val(Res.current.pressure)
                           $("#currenttime1").val(currentTime)
                           $("#sunrisetime1").val(sunriseTime)
                           $("#sunsettime1").val(sunsetTime)
                           $("#windspeed1").val(Res.current.wind_speed)
                           $("#winddirection1").val(Res.current.wind_deg)
                           $("#currentCity1").attr( "src","http://openweathermap.org/img/wn/"+Res.current.weather[0].icon+"@2x.png")
                           
                        
                          $("#hourly1st1").val(hourly1st1)
                          $("#hourly1st1weatherdescription").val(Res.hourly[0].weather[0].description)
                          $("#hourly1st1temp").val(Res.hourly[0].temp)
                          $("#hourly1st1pressure").val(Res.hourly[0].pressure)
                          $("#hourly1st1windspeed").val(Res.hourly[0].wind_speed)
                          $("#hourly1st1winddirection").val(Res.hourly[0].wind_deg)
                          $("#hourly1st1pop").val(Res.hourly[0].pop)
                          $("#hourly1st1icon").attr( "src","http://openweathermap.org/img/wn/"+Res.hourly[0].weather[0].icon+"@2x.png")

                          $("#hourly2nd1").val(hourly2nd1)
                          $("#hourly2nd1weatherdescription").val(Res.hourly[1].weather[0].description)
                          $("#hourly2nd1temp").val(Res.hourly[1].temp)
                          $("#hourly2nd1pressure").val(Res.hourly[1].pressure)
                          $("#hourly2nd1windspeed").val(Res.hourly[1].wind_speed)
                          $("#hourly2nd1winddirection").val(Res.hourly[1].wind_deg)
                          $("#hourly2nd1pop").val(Res.hourly[1].pop)
                          $("#hourly2nd1icon").attr( "src","http://openweathermap.org/img/wn/"+Res.hourly[1].weather[0].icon+"@2x.png")
                          
                          $("#hourly3rd1").val(hourly3rd1)
                          $("#hourly3rd1weatherdescription").val(Res.hourly[2].weather[0].description)
                          $("#hourly3rd1temp").val(Res.hourly[2].temp)
                          $("#hourly3rd1pressure").val(Res.hourly[2].pressure)
                          $("#hourly3rd1windspeed").val(Res.hourly[2].wind_speed)
                          $("#hourly3rd1winddirection").val(Res.hourly[2].wind_deg)
                          $("#hourly3rd1pop").val(Res.hourly[2].pop)
                          $("#hourly3rd1icon").attr( "src","http://openweathermap.org/img/wn/"+Res.hourly[2].weather[0].icon+"@2x.png")

             },error:function(err){alert("Wheather Forcast Unavailable For The City Name")}})
              
            
        },error:function(err){alert("City Name Not Found")}
           })
    }
 })

    $("#city2,input[name='gender']").change(function(){
    if($("#city2").val()!==''){
        $.ajax({
            type: "GET",  
            url: "https://api.openweathermap.org/data/2.5/weather?q="+ $("#city2").val()+"&appid=c94d5c09ee0b607656c756c3f5cd8622",  
            headers:{'Content-Type': 'application/json','Access-Control-Allow-Origin':"*"},
            crossDomain:true,
            dataType: "jsonp",
            success: function(res){
                
            
                $.ajax({
                    type: "GET",  
                    url: "https://api.openweathermap.org/data/2.5/onecall?lat="+res.coord.lat+"&lon="+res.coord.lon+"&units="+$("input[name='gender']:checked").val()+"&exclude=daily,minutely,alerts&appid=c94d5c09ee0b607656c756c3f5cd8622",  
                    headers:{'Content-Type': 'application/json','Access-Control-Allow-Origin':"*"},
                    crossDomain:true,
                    dataType: "jsonp",
                    success: function(Res){
                        // Calling the timeStampconverter function to convert different times for readability
                        const currentTime=timeStampConverter(Res.current.dt,Res.timezone_offset)
                        const sunriseTime=timeStampConverter(Res.current.sunrise,Res.timezone_offset)
                        const sunsetTime=timeStampConverter(Res.current.sunset,Res.timezone_offset)
                        const hourly1st2=timeStampConverter(Res.hourly[0].dt,Res.timezone_offset)
                        const hourly2nd2=timeStampConverter(Res.hourly[1].dt,Res.timezone_offset)
                        const hourly3rd2=timeStampConverter(Res.hourly[2].dt,Res.timezone_offset)



                        // Setting the field values for current weather forcast
                          $("#wheatherdescription2").val(Res.current.weather[0].description)
                          $("#latitude2").val(Res.lat)
                          $("#longitude2").val(Res.lon)
                          $("#temprature2").val(Res.current.temp)
                          $("#pressure2").val(Res.current.pressure)
                          $("#currenttime2").val(currentTime)
                          $("#sunrisetime2").val(sunriseTime)
                          $("#sunsettime2").val(sunsetTime)
                          $("#windspeed2").val(Res.current.wind_speed)
                          $("#winddirection2").val(Res.current.wind_deg)
                          $("#currentCity2").attr( "src","http://openweathermap.org/img/wn/"+Res.current.weather[0].icon+"@2x.png")


                          $("#hourly1st2").val(hourly1st2)
                          $("#hourly1st2weatherdescription").val(Res.hourly[0].weather[0].description)
                          $("#hourly1st2temp").val(Res.hourly[0].temp)
                          $("#hourly1st2pressure").val(Res.hourly[0].pressure)
                          $("#hourly1st2windspeed").val(Res.hourly[0].wind_speed)
                          $("#hourly1st2winddirection").val(Res.hourly[0].wind_deg)
                          $("#hourly1st2pop").val(Res.hourly[0].pop)
                          $("#hourly1st2icon").attr( "src","http://openweathermap.org/img/wn/"+Res.hourly[0].weather[0].icon+"@2x.png")

                          $("#hourly2nd2").val(hourly2nd2)
                          $("#hourly2nd2weatherdescription").val(Res.hourly[1].weather[0].description)
                          $("#hourly2nd2temp").val(Res.hourly[1].temp)
                          $("#hourly2nd2pressure").val(Res.hourly[1].pressure)
                          $("#hourly2nd2windspeed").val(Res.hourly[1].wind_speed)
                          $("#hourly2nd2winddirection").val(Res.hourly[1].wind_deg)
                          $("#hourly2nd2pop").val(Res.hourly[1].pop)
                          $("#hourly2nd2icon").attr( "src","http://openweathermap.org/img/wn/"+Res.hourly[1].weather[0].icon+"@2x.png")
                          
                          $("#hourly3rd2").val(hourly3rd2)
                          $("#hourly3rd2weatherdescription").val(Res.hourly[2].weather[0].description)
                          $("#hourly3rd2temp").val(Res.hourly[2].temp)
                          $("#hourly3rd2pressure").val(Res.hourly[2].pressure)
                          $("#hourly3rd2windspeed").val(Res.hourly[2].wind_speed)
                          $("#hourly3rd2winddirection").val(Res.hourly[2].wind_deg)
                          $("#hourly3rd2pop").val(Res.hourly[2].pop)
                          $("#hourly3rd2icon").attr( "src","http://openweathermap.org/img/wn/"+Res.hourly[2].weather[0].icon+"@2x.png")



                    
                    },error:function(err){alert("Wheather Forcast Unavailable For The City Name")}
                  })
            
            },error:function(err){alert("City Name Not Found")}})
    } 
    
    })


{/*
 // Res.hourly.map((item)=>{
                     //   const hourlytime=timeStampConverter(item.dt,Res.timezone_offset)
                       // console.log(item.weather[0].description)
                   // })
//$(document).ready(()=>{
    //const me=document.getElementsById('celcius').value
   // console.log(me)
  // $("#fahrenheit").prop('checked', true);  
//})

  console.log(`Name:${res.name}, Latitude:${Res.lat},Longitude:${Res.lon}, Current Time:${currentTime}, Sunrise Time:${sunriseTime},
                         Sunset Time:${sunsetTime}, Temperature:${Res.current.temp}Fahrenheit, Pressure:${Res.current.pressure}, 
                         Wind Speed:${Res.current.wind_speed}, Wind Direction:${Res.current.wind_deg},
                          Weather Description:${Res.current.weather[0].description}`)

                           console.log(`Name:${res.name}, Latitude:${Res.lat},Longitude:${Res.lon}, Current Time:${currentTime}, Sunrise Time:${sunriseTime},
                          Sunset Time:${sunsetTime}, Temperature:${Res.current.temp}Fahrenheit, Pressure:${Res.current.pressure}, 
                          Wind Speed:${Res.current.wind_speed}, Wind Direction:${Res.current.wind_deg},
                           Weather Description:${Res.current.weather[0].description}`)

*/}