const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://femi:codeblooded007@ds045795.mlab.com:45795/pusherpoll')
.then(() => console.log('Mongo DB connected'))
.catch(err => console.log(err));