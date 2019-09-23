const express = require('express');
const https = require('https')
const fs = require('fs');


// const geoip = require('geoip-lite');

//nohup node index.js >> app.log 2>&1 &






//init app
var app = express();
var server = require('http').createServer(app);


function wwwRedirect(req, res, next) {
    if (req.headers.host.slice(0, 4) === 'www.') {
        var newHost = req.headers.host.slice(4);
        return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl);
    }
    next();
};
app.set('trust proxy', true);
app.use(wwwRedirect);

app.use((req, res, next) => {

  var ip = req.ip.replace('::ffff:', '');
  // var geo = geoip.lookup(ip);

  var now = new Date().toString();
  var log = `${now}: IP is ${ip} -- Country is  | ${req.method} ${req.url} -- Ref: ${req.headers.referer}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server log');
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

app.use(express.static(__dirname+'/build'));

app.use(express.static(__dirname+'/.well-known/acme-challenge'));
app.use(express.static(__dirname, { dotfiles: 'allow' } ));
// app.use (function (req, res, next) {
//         if (req.secure) {
//                 // request was via https, so do no special handling
//                 next();
//         } else {
//                 // request was via http, so redirect to https
//                 res.redirect('https://' + req.headers.host + req.url);
//         }
// });



app.get('*', (req, res) => {
  res.sendFile('200.html', { root: __dirname+'/build/' });
});





app.listen(80, () => {
  console.log('Listening on port 80.');
});

// var server = https.createServer({
//   key: fs.readFileSync('/etc/letsencrypt/live/forkoasisdex.com/privkey.pem'),
//   cert: fs.readFileSync('/etc/letsencrypt/live/forkoasisdex.com/cert.pem'),
//   ca: fs.readFileSync('/etc/letsencrypt/live/forkoasisdex.com/chain.pem')
// }, app).listen(443, () => {
//   console.log('Listening on port 443.');
// })




    //
    // var lastBlock;
    // function logEvery2Seconds(i) {
    //     setTimeout(() => {
    //       Block.find().limit(1).sort({timestamp: -1}).then((block) => {
    //         if (lastBlock == null) {
    //           io.sockets.emit('newBlock', block);
    //           console.log('pushed new block.');
    //         } else if (block[0].blockNumber != lastBlock) {
    //           io.sockets.emit('newBlock', block);
    //           console.log('pushed new block.');
    //         }
    //         lastBlock = block[0].blockNumber;
    //       }, (e) => {
    //         console.log('Error retrieving block.');
    //       });
    //
    //         logEvery2Seconds(++i);
    //     }, 2000)
    // }
    // logEvery2Seconds(0);
    // let i = 0;
    // setInterval(() => {
    //     console.log('Infinite Loop Test interval n:', i++);
    // }, 2000);

// // ES5 style
// const thorify = require("thorify").thorify;
// const Web3 = require("web3");
//
// const web3 = thorify(new Web3(), "http://localhost:8669");
//
// web3.eth.getBlock("latest").then(res => console.log(res));
// // Best block info will be displayed
