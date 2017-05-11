const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./controllers/middleware');
const mainCtrl = require('./controllers/mainCtrl');


const app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);


app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesByType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyByGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantsByName);

app.put('/name', mainCtrl.updateName);
app.put('/location', mainCtrl.updateLocation);

app.post('/hobbies', mainCtrl.addHobby);
app.post('/occupations', mainCtrl.addOccupations);
app.post('/family', mainCtrl.addFamily);
app.post('/restaurants', mainCtrl.addRestaurants);

app.get('/skillz', mainCtrl.getSkills);

app.post('/skillz', middleware.assignID, mainCtrl.addSkill);

app.get('/secrets/:username/:pin', middleware.auth, mainCtrl.getSecrets)



app.listen(8000, function () {
    console.log("Listening on port:8000")
})

