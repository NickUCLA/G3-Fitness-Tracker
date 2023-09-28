const router = require("express").Router();
const { OpenAI } = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.post("/", async (req, res) => {
 const chatCompletion = await openai.chat.completions.create({
    ...req.body
 });

 res.json(chatCompletion.choices[0])
})

module.exports = router