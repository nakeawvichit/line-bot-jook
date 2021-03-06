const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken
    reply(reply_token)
    res.sendStatus(200)
})
app.listen(port)
function reply(reply_token) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer Vfs5sqZiOV9d5GwIZ23wvnNB92gLsGraSN38MTNCMIziMsObTse60tHXjP2/V5kHkr5OM41WawMgFKDbVlmdI9CC3wnmQjed6qeOLdA+IHBfh4dLXGtEG8vOiJ+45BXAH73HNUJsD4zcBEQ9elQ4xgdB04t89/1O/w1cDnyilFU='
    }
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            type: 'text',
            text: 'line://app/1603877870-aLBzZRXq'
        }]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}