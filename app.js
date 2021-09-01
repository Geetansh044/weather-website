const express=require('express');
const  https=require('https');
const BodyParser=require('body-parser');
const app=express();
app.use(BodyParser.urlencoded({extended: true}));
app.get("/",function(re,res){
  res.sendFile(__dirname+"/index.html");
})
app.post("/",function(req,reso){
   console.log(req.body.num1);

    /*const url="https://api.openweathermap.org/data/2.5/weather?q="+city1+"&appid=ed94d9c2d65363277549804087f37892&units=metric";
    https.get(url,function(resp){
      resp.on("data",function(data){
           const ww=JSON.parse(data);
           const ll=ww.main.temp
            const l1=ww.weather[0].description
            const ii=ww.weather[0].icon
            const im="http://openweathermap.org/img/wn/"+ii+"@2x.png"
            reso.write("<p>Weather Discription is " +l1+" today</p>");
           reso.write("<h1>Temperature in "+ city1+" is "+ll+" in celcius </h1>");
            reso.write("<img src="+im+">");
            reso.send()
        })
    })*/
    })


app.listen(3000,function(){
    console.log("running on 3000");
});