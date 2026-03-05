const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

exports.callAI = async (userInput, mode) => {

  let prompt = "";

  // Explain Concept Mode
  if (mode === "explain") {
    prompt = `
You are an experienced university instructor.

Task:
Explain the following concept to a beginner-level student.

Rules:
- Use simple and clear language.
- Limit the explanation to 150 words.
- Focus on the core idea.
- If you are unsure about the information, clearly say you are unsure instead of guessing.

Concept:
${userInput}
`;
  }

  // Summarize Mode
  if (mode === "summarize") {
    prompt = `
You are an academic assistant that summarizes educational content.

Task:
Provide a concise summary of the following text.

Rules:
- Limit the summary to 5 sentences.
- Preserve the key ideas.
- Do not introduce new information.
- If the text is unclear, state that the content cannot be summarized accurately.

Text:
${userInput}
`;
  }

  // Improve Writing Mode
  if (mode === "improve") {
    prompt = `
You are a professional writing assistant.

Task:
Improve the grammar, clarity, and readability of the following text.

Rules:
- Do not change the meaning of the original content.
- Correct grammar and sentence structure.
- Make the text easier to read.

Text:
${userInput}
`;
  }

  // Generate MCQ Mode
  if (mode === "mcq") {
    prompt = `
You are a university exam question generator.

Task:
Generate 3 multiple-choice questions based on the topic.

Rules:
- Output must be valid JSON.
- Each question must contain exactly 4 options.
- Provide the correct answer clearly.
- Do not include explanations.

Output format:

{
 "questions":[
   {
     "question":"",
     "options":["A","B","C","D"],
     "answer":""
   }
 ]
}

Topic:
${userInput}
`;
  }

  try {

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: "You are a reliable AI teaching assistant that provides accurate educational responses."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.3
    });

    return completion.choices[0].message.content;

  } catch (error) {

    console.error("Groq Error:", error);

    throw new Error("AI service failed");

  }

};