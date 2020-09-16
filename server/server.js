require('./config/config');
const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/WMS_WAVE_CHANGES', function(req, res) {
    res.json('get WMS_WAVE_CHANGES')
})
app.post('/WMS_WAVE_CHANGES', function(req, res) {

    let body = req.body;
    if (body.wave_id === undefined) {
        res.status(400).json({
            ok: false,
            msg: "wave necesario"
        })
    } else {
        res.json({
            Change: body
        })
    }

})
app.put('/WMS_WAVE_CHANGES/:id', function(req, res) {
    let id = req.params.id;

    res.json({
        Change: body
    })
})
app.delete('/WMS_WAVE_CHANGES', function(req, res) {
    res.json('delete  WMS_WAVE_CHANGES')
})



app.listen(process.env.PORT, () => {
    console.log('listening port');
})