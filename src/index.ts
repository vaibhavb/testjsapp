#!/usr/bin/env node

const MODELS_SUPPORTED = [
  {name: "GPT-4", model: "gpt-turbo-4.0", description: "top of line"}
]

const choices = [
      ...MODELS_SUPPORTED.map((model) => ({
        name: model.name,
        value: model.model,
        description: model.description
      }))
]

console.log(`Hello via ${choices[0].value}`);
