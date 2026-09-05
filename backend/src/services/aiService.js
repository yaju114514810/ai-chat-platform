const axios = require('axios');

const AI_MODELS = {
  'phi-2': {
    endpoint: process.env.OLLAMA_URL || 'http://localhost:11434',
    model: 'phi:2.0'
  },
  'phi-3': {
    endpoint: process.env.OLLAMA_URL || 'http://localhost:11434',
    model: 'phi:3.0'
  },
  'mistral-7b': {
    endpoint: process.env.OLLAMA_URL || 'http://localhost:11434',
    model: 'mistral'
  },
  'llama2-7b': {
    endpoint: process.env.OLLAMA_URL || 'http://localhost:11434',
    model: 'llama2:7b'
  },
  'llama2-13b': {
    endpoint: process.env.OLLAMA_URL || 'http://localhost:11434',
    model: 'llama2:13b'
  },
  'llama2-70b': {
    endpoint: process.env.OLLAMA_URL || 'http://localhost:11434',
    model: 'llama2:70b'
  },
  'neural-chat-7b': {
    endpoint: process.env.OLLAMA_URL || 'http://localhost:11434',
    model: 'neural-chat'
  },
  'mixtral-8x7b': {
    endpoint: process.env.OLLAMA_URL || 'http://localhost:11434',
    model: 'mixtral'
  }
};

async function queryAIModel(modelId, message, history = []) {
  try {
    const modelConfig = AI_MODELS[modelId];
    if (!modelConfig) {
      throw new Error(`Unknown model: ${modelId}`);
    }

    // Format conversation history
    let prompt = '';
    for (const msg of history) {
      if (msg.role === 'user') {
        prompt += `User: ${msg.content}\n`;
      } else {
        prompt += `Assistant: ${msg.content}\n`;
      }
    }
    prompt += `User: ${message}\nAssistant:`;

    // Query Ollama or compatible API
    const response = await axios.post(
      `${modelConfig.endpoint}/api/generate`,
      {
        model: modelConfig.model,
        prompt: prompt,
        stream: false
      },
      {
        timeout: 120000
      }
    );

    return response.data.response.trim();
  } catch (error) {
    console.error('AI Model Error:', error.message);
    return 'Sorry, I encountered an error processing your request. Please try again.';
  }
}

async function queryAIModelStreaming(modelId, message, history = []) {
  try {
    const modelConfig = AI_MODELS[modelId];
    if (!modelConfig) {
      throw new Error(`Unknown model: ${modelId}`);
    }

    // Format conversation history
    let prompt = '';
    for (const msg of history) {
      if (msg.role === 'user') {
        prompt += `User: ${msg.content}\n`;
      } else {
        prompt += `Assistant: ${msg.content}\n`;
      }
    }
    prompt += `User: ${message}\nAssistant:`;

    const response = await axios.post(
      `${modelConfig.endpoint}/api/generate`,
      {
        model: modelConfig.model,
        prompt: prompt,
        stream: true
      },
      {
        timeout: 120000
      }
    );

    return response.data;
  } catch (error) {
    console.error('AI Model Streaming Error:', error.message);
    throw error;
  }
}

module.exports = {
  queryAIModel,
  queryAIModelStreaming
};
