export const personal = {
  name: "Tashfeen Raza",
  title: "AI & Machine Learning Engineer",
  subtitle: "Agentic AI · LLM Systems · Computer Vision",
  location: "Rawalpindi, Pakistan",
  email: "razatashfeen045@gmail.com",
  phone: "+92-307-5286602",
  roles: [
    "AI Engineer",
    "LLM & Agentic AI Specialist",
    "Computer Vision Engineer",
    "Automation Engineer",
    "Machine Learning Engineer",
  ],
  summary:
    "I design and ship production-grade AI systems — from LLM-powered agents and RAG pipelines to real-time computer-vision models and n8n workflow automation. Currently building intelligent CV systems at Neuronix Technology.",
  socials: {
    github: "https://github.com/tashfeenraza297",
    linkedin: "https://www.linkedin.com/in/tashfeen-raza-2a8b35253",
    fiverr: "https://www.fiverr.com/tashfeen348",
    email: "mailto:razatashfeen045@gmail.com",
  },
};

export const stats = [
  { label: "Projects Completed", value: 12, suffix: "+" },
  { label: "Years Experience", value: 1, suffix: "+" },
  { label: "Technologies", value: 22, suffix: "+" },
  { label: "Certifications", value: 2, suffix: "+" },
];

export const highlights = [
  { icon: "Eye",  title: "Computer Vision",     desc: "Real-time detection, edge deployment, video analytics pipelines." },
  { icon: "Bot",  title: "LLM & Agentic AI",    desc: "RAG systems, multi-agent orchestration, LangChain/LangGraph." },
  { icon: "Zap",  title: "Workflow Automation",  desc: "n8n agents, multi-channel integrations, business process automation." },
  { icon: "Cog",  title: "Production AI",        desc: "FastAPI, Docker, Streamlit — models that ship and scale." },
];

export const skillCategories = [
  {
    name: "LLM / Agentic Systems",
    icon: "Bot",
    skills: ["LangChain", "LangGraph", "RAG", "Prompt Engineering", "Multi-agent Systems", "Function-calling", "LlamaIndex"],
  },
  {
    name: "AI / ML Frameworks",
    icon: "Brain",
    skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Hugging Face Transformers", "YOLOv8", "OpenCV"],
  },
  {
    name: "Languages & Tools",
    icon: "Code2",
    skills: ["Python", "SQL", "C++", "JavaScript", "Git", "Docker", "FastAPI", "Flask", "Streamlit"],
  },
  {
    name: "APIs & Integrations",
    icon: "Plug",
    skills: ["OpenAI", "Google Gemini", "Groq", "Gmail API", "VirusTotal", "AlienVault OTX", "OAuth 2.0"],
  },
  {
    name: "Automation & Workflows",
    icon: "Workflow",
    skills: ["n8n", "Telegram Bot API", "Webhook Integrations", "Airtable", "Twilio"],
  },
  {
    name: "Databases",
    icon: "Database",
    skills: ["SQL", "NoSQL", "ChromaDB", "FAISS", "Pinecone"],
  },
];

export const experience = [
  {
    role: "AI Engineer (Intern)",
    company: "Neuronix Technology",
    duration: "Mar 2026 — Present",
    location: "Islamabad, Pakistan",
    current: true,
    points: [
      "Developing real-time computer vision systems for workplace safety monitoring, translating requirements into deployable AI solutions.",
      "Building and optimizing object detection models for low-latency edge deployment, improving scalability in production environments.",
      "Implementing video analytics pipelines for automated monitoring and alert generation with clear documentation of technical workflows.",
    ],
    stack: ["Computer Vision", "Object Detection", "YOLOv8", "PyTorch", "Edge Deployment", "Video Analytics"],
  },
  {
    role: "LLM Integration & Product Enhancement Engineer",
    company: "DASSOFT, NASTP",
    duration: "Oct 2025 — Dec 2025",
    location: "Rawalpindi, Pakistan",
    current: false,
    points: [
      "Enhanced AI-driven cybersecurity product by integrating LLM capabilities for intelligent security monitoring and executive reporting.",
      "Implemented prompt optimization and workflow automation improving report accuracy and incident response by 30%.",
      "Developed LLM-based modules for log parsing, anomaly detection, and structured report generation using LangChain and FastAPI.",
    ],
    stack: ["LangChain", "FastAPI", "LLM", "Prompt Engineering", "Security Monitoring"],
  },
  {
    role: "AI/ML Intern",
    company: "Siberkoza (Startup), NASTP",
    duration: "Jul 2025 — Aug 2025",
    location: "Rawalpindi, Pakistan",
    current: false,
    points: [
      "Built AI-powered SOC system with Agentic AI to automate L1/L2 analyst tasks, reducing triage time by 40%.",
      "Contributed to LLM automation prototypes using LangGraph and supported RAG-based assistant experimentation.",
      "Evaluated locally deployed cybersecurity LLMs on threat intelligence queries and benchmarked hallucination patterns.",
    ],
    stack: ["LangGraph", "Agentic AI", "RAG", "SOC Automation"],
  },
];

export const projects = [
  {
    title: "Smart Extract — AI Surveillance System",
    description: "Final-year project. Automatically detects and extracts fire and accident events from long surveillance videos with severity classification.",
    tags: ["CV"],
    tech: ["PyTorch", "TensorFlow", "YOLOv8", "OpenCV", "React", "FastAPI"],
    metrics: ["94.68% fire detection accuracy (ensemble)", "88% accident detection (YOLOv8n)", "Fast / Accurate / Hybrid processing modes"],
    demo: "https://drive.google.com/file/d/1Jht80mhhcLy3zKue-T5wEQ9kRDRjRIwG/view",
    code: "",
    codeNote: "Available upon request",
  },
  {
    title: "COVID-19 CT Scan Detection System",
    description: "Enterprise-grade AI web app detecting COVID-19 from chest CT scans using ensemble deep learning with <2s inference time.",
    tags: ["CV"],
    tech: ["React", "Material-UI", "FastAPI", "TensorFlow", "Keras"],
    metrics: ["84.45% ensemble accuracy", "ResNet50 + VGG16 + Xception fusion", "<2s inference time"],
    demo: "https://drive.google.com/file/d/1DV4lfy7oihqompDGTNybRS7_rBKDAlKo/view",
    code: "https://github.com/tashfeenraza297/covid19-ct-scan-detector",
  },
  {
    title: "PhishGuard — AI Phishing Detection",
    description: "Chrome extension with agentic workflow for multi-layer phishing detection: rule-based, VirusTotal, AlienVault OTX, and Gemini AI with 0–100 risk scoring.",
    tags: ["LLM", "Agents"],
    tech: ["LangChain", "FastAPI", "Chrome Extension", "Gemini AI", "Gmail API"],
    metrics: ["Scans inbox every 30s", "0–100 risk score with LLM reasoning", "CSV forensic report export"],
    demo: "https://drive.google.com/file/d/1E-9IslydR2zR_NWOE2DVOtO74DDlWY1A/view",
    code: "https://github.com/tashfeenraza297/Gmail-Phishing-Guard",
  },
  {
    title: "AI Voice Agent — Multi-Model RAG Platform",
    description: "Enterprise voice assistant with real-time STT via Groq Whisper and parallel LLM comparison (Gemini, Kimi, Llama 3.3). Deployed on Streamlit Cloud at $0/mo.",
    tags: ["LLM"],
    tech: ["LangChain", "RAG", "ChromaDB", "Streamlit", "Groq Whisper"],
    metrics: ["79-chunk ChromaDB knowledge base", "3 parallel LLMs compared", "$0/month deployment cost"],
    demo: "https://drive.google.com/file/d/1s3HvzqKjVE9iJ5KBph6piIovo_VWYYk8/view",
    code: "https://github.com/tashfeenraza297/enterprise-ai-voice-agent-",
  },
  {
    title: "TechNova AI Receptionist",
    description: "AI-powered multi-tool receptionist agent using Gemini 2.5 Flash and FAISS RAG, automating front-desk operations with agentic AI workflows for enterprise environments.",
    tags: ["LLM", "Agents"],
    tech: ["LangChain", "FAISS", "Gemini 2.5 Flash", "RAG", "FastAPI"],
    metrics: ["Multi-tool agent system", "FAISS vector search", "Enterprise automation"],
    demo: "",
    code: "https://github.com/tashfeenraza297/TechNova-AI-Receptionist",
  },
  {
    title: "AI-Powered Telegram Assistant",
    description: "Intelligent Telegram bot handling voice and text messages. Auto-transcribes voice via Gemini 2.5 Flash and responds using OpenAI GPT with session-based chat memory.",
    tags: ["Automation", "LLM"],
    tech: ["n8n", "OpenAI GPT", "Gemini 2.5 Flash", "Telegram Bot API", "LangChain Memory"],
    metrics: ["Voice-to-text auto transcription", "Multi-turn chat memory", "Real-time AI responses"],
    demo: "https://drive.google.com/file/d/1YXwMmzLK94H_9-X3OM6lP-k3GxK7rriE/view",
    code: "https://github.com/tashfeenraza297/Telegram_AI_Assistant_n8n",
  },
  {
    title: "AI Lead Qualification Engine",
    description: "SaaS-style lead qualification system that classifies leads as Hot/Warm/Cold (1–100 score), stores in Airtable CRM, and triggers multi-channel alerts with auto-drafted replies.",
    tags: ["Automation", "LLM"],
    tech: ["n8n", "OpenAI GPT", "Airtable", "Twilio", "Gmail API", "Telegram Bot API"],
    metrics: ["Hot/Warm/Cold AI scoring", "Airtable CRM auto-storage", "Email, Telegram & WhatsApp alerts"],
    demo: "https://drive.google.com/file/d/1ac-AK4Z0Gxe7OIXUezv7qKGCM6aoZHw_/view",
    code: "https://github.com/tashfeenraza297/AI-Lead-Qualifier-n8n",
  },
];

export const projectFilters = ["All", "LLM", "Agents", "CV", "Automation"];

export const education = [
  {
    type: "education",
    title: "BS Artificial Intelligence",
    org: "National University of Modern Languages (NUML), Islamabad",
    duration: "Feb 2022 — Jan 2026",
    desc: "Relevant coursework: Machine Learning, Deep Learning, NLP, Computer Vision, Speech Processing, Reinforcement Learning.",
  },
  {
    type: "certification",
    title: "Machine Learning Specialization",
    org: "Coursera (Andrew Ng)",
    duration: "2024",
    desc: "Supervised learning, unsupervised learning, and practical best practices for ML systems.",
  },
  {
    type: "certification",
    title: "LangChain & Agentic AI",
    org: "DeepLearning.AI",
    duration: "2024",
    desc: "Building LLM-powered applications, agents, RAG systems, and multi-agent workflows.",
  },
];
