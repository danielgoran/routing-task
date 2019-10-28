let express = require('express');
let app = express();
let joke = require('one-liner-joke');

let availableTags = ['sport', 'IT', 'attitude', 'love'];

app.get('/joke/:number', (req, resp)=> {
    let num = req.params.number;
    let result = '';
    for(let i = 0; i < num; i++) {
        result += `<h4>${joke.getRandomJoke().body}</h4>***`; 
    }
    resp.send(result);
})

app.get('/joke/:tag/:number', (req, resp)=> {
    let tag = req.params.tag;
    let num = req.params.number;
    let result = '';
    if(availableTags.includes(tag)) {
        for(let i = 0; i < num; i++) {
            result += `<h4>${joke.getRandomJokeWithTag(tag).body}</h4>***`; 
        }
    } else {
        result = 'No joke for this';
    }

    resp.send(result);
})

app.get('*', (req, resp) => {
    resp.send('<h1>404 - It\'s not funny!</h1>')
})

app.listen(3000, () => {
    console.log('Listening 3000...');
})


