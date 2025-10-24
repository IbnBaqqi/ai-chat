# Chatbrew

Chatbrew is a full-stack chat sample that combines modern technologies to deliver a ChatGPT-like experience.

## High-Level Overview

- **Backend API:**  
  The backend is built with **Express** and interacts with an LLM using **Openai SDK**.

- **AI & Chat Capabilities:**  
  - Uses **Ollama** (via OllamaSharp) for local inference, enabling context-aware responses.  
  - In production, the application switches to [**OpenAI**](https://openai.com/) for LLM capabilities.

- **Frontend UI:**  
  Built with **React**, the user interface offers a modern and interactive chat experience.
