const { callAI } = require("../services/ai.service");

exports.generateAI = async (req, res) => {
  try {

    const { prompt, mode } = req.body;

    if (!prompt || !mode) {
      return res.status(400).json({
        error: "Prompt and mode required"
      });
    }

    const result = await callAI(prompt, mode);

    res.json({ result });

  } catch (error) {

    console.error("Controller Error:", error.message);

    res.status(500).json({
      error: "AI generation failed"
    });

  }
};