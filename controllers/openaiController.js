import dotenv from "dotenv"
dotenv.config();
    import OpenAI from "openai";
const openai = new OpenAI({
  apiKey:process.env.OPENAI_API_KEY
})

export const summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: 'user', content: text }],
    });

    const chatResponse = response.data.choices[0].text;
    res.json({ chatResponse });
  
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};