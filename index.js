const db = require("./models");
const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(cors());

function success(res, payload) {
    return res.status(200).json(payload);
}

app.get("/words", async (req, res, next) => {
    try {
        const words = await db.Package.find({});
        return success(res, words);
    } catch(err) {
        next({ status: 400, message: "failed to get words" })
    }
})

app.put("/words/:id", async (req, res, next) => {
    try {
        const word = await db.Package.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return success(res, word);
    } catch (err) {
        next({ status: 400, message: "failed to update word"})
    }
})

app.use((err, req, res, next) => {
    return res.status(err.status || 400).json({
      status: err.status || 400,
      message: err.message || "there was an error processing request"
    })
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}.`);
})

