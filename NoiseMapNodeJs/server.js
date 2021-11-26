const express = require('express');
const path = require('path');
var cors = require('cors')


const app = express();
const router = express.Router();

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
    app.use(express.static(path.join(__dirname, 'public')))
    //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
