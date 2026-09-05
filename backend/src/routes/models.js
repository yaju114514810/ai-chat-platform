const express = require('express');
const router = express.Router();

// List all available AI models
router.get('/', (req, res) => {
  const models = [
    // Lightweight Models
    {
      id: 'phi-2',
      name: 'Phi-2',
      type: 'lightweight',
      description: '2.7B parameter model - Fast and efficient',
      provider: 'Microsoft'
    },
    {
      id: 'phi-3',
      name: 'Phi-3',
      type: 'lightweight',
      description: '3.8B parameter model - Improved over Phi-2',
      provider: 'Microsoft'
    },
    {
      id: 'tinyllama',
      name: 'TinyLLaMA',
      type: 'lightweight',
      description: '1.1B parameter model - Ultra-fast',
      provider: 'TinyLLaMA'
    },
    {
      id: 'distilbert',
      name: 'DistilBERT',
      type: 'lightweight',
      description: 'Lightweight transformer - 40% smaller than BERT',
      provider: 'Hugging Face'
    },
    // Medium Models
    {
      id: 'mistral-7b',
      name: 'Mistral 7B',
      type: 'medium',
      description: '7B parameter model - High quality outputs',
      provider: 'Mistral AI'
    },
    {
      id: 'llama2-7b',
      name: 'Llama 2 7B',
      type: 'medium',
      description: '7B parameter model - Great balance',
      provider: 'Meta'
    },
    {
      id: 'llama2-13b',
      name: 'Llama 2 13B',
      type: 'medium',
      description: '13B parameter model - Better reasoning',
      provider: 'Meta'
    },
    {
      id: 'neural-chat-7b',
      name: 'Neural Chat 7B',
      type: 'medium',
      description: '7B optimized for chat - Conversational',
      provider: 'Intel'
    },
    // High-Performance Models
    {
      id: 'llama2-70b',
      name: 'Llama 2 70B',
      type: 'high-performance',
      description: '70B parameter model - Advanced reasoning',
      provider: 'Meta'
    },
    {
      id: 'mixtral-8x7b',
      name: 'Mixtral 8x7B',
      type: 'high-performance',
      description: 'Mixture of Experts - 56B active parameters',
      provider: 'Mistral AI'
    },
    {
      id: 'wizardlm-70b',
      name: 'WizardLM 70B',
      type: 'high-performance',
      description: '70B fine-tuned for instruction following',
      provider: 'Microsoft'
    },
    {
      id: 'orca-2-13b',
      name: 'Orca 2 13B',
      type: 'high-performance',
      description: '13B optimized for complex tasks',
      provider: 'Microsoft'
    }
  ];

  res.json(models);
});

// Get model details
router.get('/:modelId', (req, res) => {
  const models = {
    'phi-2': {
      id: 'phi-2',
      name: 'Phi-2',
      type: 'lightweight',
      description: '2.7B parameter model - Fast and efficient',
      provider: 'Microsoft',
      maxTokens: 2048,
      temperature: 0.7,
      speedRating: 9,
      qualityRating: 6
    },
    'mistral-7b': {
      id: 'mistral-7b',
      name: 'Mistral 7B',
      type: 'medium',
      description: '7B parameter model - High quality outputs',
      provider: 'Mistral AI',
      maxTokens: 4096,
      temperature: 0.7,
      speedRating: 7,
      qualityRating: 8
    },
    'llama2-70b': {
      id: 'llama2-70b',
      name: 'Llama 2 70B',
      type: 'high-performance',
      description: '70B parameter model - Advanced reasoning',
      provider: 'Meta',
      maxTokens: 4096,
      temperature: 0.7,
      speedRating: 4,
      qualityRating: 9
    }
  };

  const model = models[req.params.modelId];
  if (!model) {
    return res.status(404).json({ error: 'Model not found' });
  }

  res.json(model);
});

module.exports = router;
