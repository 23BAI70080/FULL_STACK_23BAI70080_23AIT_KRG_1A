const express = require('express');
const cors = require('cors');
const OpenAI = require('openai'); // Note: require('openai')
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Use Ollama in OpenAI compatible mode
const openai = new OpenAI({
  baseURL: 'http://localhost:11434/v1', // Ollama API endpoint
  apiKey: 'ollama',                     // placeholder, Ollama ignores this
});

// Your backend route with custom format instruction
app.post('/api/generate-reply', async (req, res) => {
  const { message, mood } = req.body;

  if (!message || !mood) {
    return res.status(400).json({ error: 'Missing "message" or "mood".' });
  }

  // System instruction and few-shot examples to enforce reply format
  const systemContent = `
You are an AI assistant. You always reply in this format: "Sure, [repeat the user message], have a nice day!"
Do NOT deviate from this format. Respond in the user's selected mood ("${mood}").
`;

  // Optionally, add few-shot learning examples for even stronger format adherence
  const userPrompt = `
Example 1:
User: I am going to the park.
Reply: Sure, I am going to the park, have a nice day!

Example 2:
User: Can you help with my homework?
Reply: Sure, Can you help with my homework?, have a nice day!

Now, for this input, reply in the same format:
User: ${message}
Reply:
  `;

  try {
    const response = await openai.chat.completions.create({
      model: 'llama3', // Or another pulled model name
      messages: [
        { role: 'system', content: systemContent },
        { role: 'user', content: userPrompt }
      ],
      max_tokens: 100,
      temperature: 0.7,
    });

    const aiReply =
      response.choices?.[0]?.message?.content?.trim() ||
      'No reply generated.';

    res.json({ reply: aiReply });
  } catch (error) {
    console.error('Error communicating with Ollama:', error);
    res.status(500).json({ error: 'Failed to generate reply.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
