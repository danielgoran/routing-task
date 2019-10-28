let express = require('express');
let app = express();
let joke = require('one-liner-joke');

app.get('/joke/:number', (req, resp)=> {
    let num = req.params.number;
    let result = '';
    for(let i = 0; i < num; i++) {
        result += `<h4>${joke.getRandomJoke().body}</h4>***`; 
    }
    resp.send(result);
})

app.listen(3000, () => {
    console.log('Listening 3000...');
})


