const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ilya:ilya@clusterv.jvdaz.mongodb.net/SApp?retryWrites=true&w=majority", {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.set("debug", true);
mongoose.Promise = Promise;

module.exports.Package = require("./model");
