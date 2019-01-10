const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const personalityInsights = new PersonalityInsightsV3({
    username: 'apikey',
    password: 'qT4OIfTXLpxb2qSk5ytcwn_SorECyPCfuUfy-T2tY2zb',
    version: '2017-10-13',
    url: 'https://gateway-fra.watsonplatform.net/personality-insights/api'
});

app.use(bodyParser.text({ type: 'text/plain' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/short', function(request, responseExpress) {
    console.log('receiving data ...'); // eslint-disable-line no-console

    personalityInsights.profile(
    {
        content: request.body,
        content_type: 'text/plain',
        consumption_preferences: true
    },
    function(err, responseIbm) {
        if (err) {
            console.log('error:', err); // eslint-disable-line no-console
        } else {
            console.log('body is ', responseIbm); // eslint-disable-line no-console
            responseExpress.send(JSON.stringify(responseIbm));
        }
    }
    );
});

app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT); // eslint-disable-line no-console
});

