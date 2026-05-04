export const personal = {
  name: "Tashfeen Raza",
  title: "AI Engineer",
  subtitle: "I build LLM Agents, Automation Systems, Computer Vision & ML Solutions  saving businesses time and money\nAvailable for freelance & full-time roles",
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
    "I help businesses eliminate manual work and build smarter systems using AI. From automating lead pipelines and building intelligent chatbots to deploying machine learning and computer vision systems in production I focus on AI that actually works and delivers measurable results. Currently building intelligent CV systems at Neuronix Technology.",
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
  { icon: "Eye",  title: "Computer Vision",     desc: "Safety monitoring, object detection & video analytics deployed at the edge for real-time operations." },
  { icon: "Bot",  title: "LLM & Agentic AI",    desc: "AI assistants, document Q&A, and multi-agent systems that automate complex business workflows." },
  { icon: "Zap",  title: "Workflow Automation",  desc: "End-to-end automation with n8n lead qualification, CRM sync, alerts, and multi-channel notifications." },
  { icon: "Cog",  title: "Production AI",        desc: "From prototype to deployed API containerized, monitored, and built to scale in production environments." },
];

export const services = [
  {
    icon: "Workflow",
    title: "AI Workflow Automation",
    desc: "Eliminate repetitive manual tasks with intelligent automation. Lead qualification, CRM updates, email/WhatsApp/Telegram alerts, invoice processing all on autopilot.",
    bestFor: "Agencies, e-commerce stores, service businesses",
  },
  {
    icon: "Bot",
    title: "AI Chatbots & Agents",
    desc: "Custom AI assistants that handle customer queries, book appointments, answer FAQs, and escalate to humans when needed available 24/7.",
    bestFor: "Clinics, coaches, SaaS products, support teams",
  },
  {
    icon: "Eye",
    title: "Computer Vision Systems",
    desc: "Real-time object detection, workplace safety monitoring, activity recognition, and video analytics deployed on edge devices or cloud.",
    bestFor: "Manufacturing, security, healthcare, logistics",
  },
  {
    icon: "Brain",
    title: "Custom LLM Solutions",
    desc: "RAG-powered document Q&A, multi-agent pipelines, internal knowledge bases, and LLM integrations into your existing product or workflow.",
    bestFor: "Startups, SaaS companies, data-heavy teams",
  },
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
    skills: ["OpenAI", "Google Gemini", "Groq", "Gmail API", "VirusTotal", "AlienVault OTX", "OAuth 2.0","WhatsApp Business API"],
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
      "Reduced manual surveillance review time through automated video analytics pipelines with real-time alert generation.",
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
      "Built agentic AI system automating L1/L2 SOC analyst tasks — reduced threat triage time by 40% and cut manual investigation workload significantly.",
      "Contributed to LLM automation prototypes using LangGraph and supported RAG-based assistant experimentation.",
      "Evaluated locally deployed cybersecurity LLMs on threat intelligence queries and benchmarked hallucination patterns.",
    ],
    stack: ["LangGraph", "Agentic AI", "RAG", "SOC Automation"],
  },
];

export const projects = [
  {
    title: "Smart Extract — AI Surveillance System",
    description: "Saves security teams 85% of manual video review time by automatically detecting and extracting incidents. Final-year project. Automatically detects and extracts fire and accident events from long surveillance videos with severity classification.",
    tags: ["CV"],
    tech: ["PyTorch", "TensorFlow", "YOLOv8", "OpenCV", "React", "FastAPI"],
    metrics: ["94.68% fire detection accuracy (ensemble)", "88% accident detection (YOLOv8n)", "Fast / Accurate / Hybrid processing modes"],
    demo: "https://drive.google.com/file/d/1Jht80mhhcLy3zKue-T5wEQ9kRDRjRIwG/view",
    code: "",
    codeNote: "Available upon request",
  },
  {
    title: "COVID-19 CT Scan Detection System",
    description: "Medical imaging AI that assists radiologists with fast, accurate COVID-19 detection from CT scans. Enterprise-grade AI web app detecting COVID-19 from chest CT scans using ensemble deep learning with <2s inference time.",
    tags: ["CV"],
    tech: ["React", "Material-UI", "FastAPI", "TensorFlow", "Keras"],
    metrics: ["84.45% ensemble accuracy", "ResNet50 + VGG16 + Xception fusion", "<2s inference time"],
    demo: "https://drive.google.com/file/d/1DV4lfy7oihqompDGTNybRS7_rBKDAlKo/view",
    code: "https://github.com/tashfeenraza297/covid19-ct-scan-detector",
  },
  {
    title: "PhishGuard — AI Phishing Detection",
    description: "Protects businesses from phishing attacks with real-time AI-powered email threat detection. Chrome extension with agentic workflow for multi-layer phishing detection: rule-based, VirusTotal, AlienVault OTX, and Gemini AI with 0–100 risk scoring.",
    tags: ["LLM", "Agents"],
    tech: ["LangChain", "FastAPI", "Chrome Extension", "Gemini AI", "Gmail API"],
    metrics: ["Scans inbox every 30s", "0–100 risk score with LLM reasoning", "CSV forensic report export"],
    demo: "https://drive.google.com/file/d/1E-9IslydR2zR_NWOE2DVOtO74DDlWY1A/view",
    code: "https://github.com/tashfeenraza297/Gmail-Phishing-Guard",
  },
  {
    title: "AI Voice Agent — Multi-Model RAG Platform",
    description: "Enterprise voice assistant that lets teams query their knowledge base using natural language  deployed at $0/month. Built with real-time STT via Groq Whisper and parallel LLM comparison (Gemini, Kimi, Llama 3.3).",
    tags: ["LLM"],
    tech: ["LangChain", "RAG", "ChromaDB", "Streamlit", "Groq Whisper"],
    metrics: ["79-chunk ChromaDB knowledge base", "3 parallel LLMs compared", "$0/month deployment cost"],
    demo: "https://drive.google.com/file/d/1s3HvzqKjVE9iJ5KBph6piIovo_VWYYk8/view",
    code: "https://github.com/tashfeenraza297/enterprise-ai-voice-agent-",
  },
  {
    title: "TechNova AI Receptionist",
    description: "Automates front-desk operations for businesses  handles queries, bookings, and routing without human intervention. AI-powered multi-tool receptionist agent using Gemini 2.5 Flash and FAISS RAG with agentic AI workflows.",
    tags: ["LLM", "Agents"],
    tech: ["LangChain", "FAISS", "Gemini 2.5 Flash", "RAG", "FastAPI"],
    metrics: ["Multi-tool agent system", "FAISS vector search", "Enterprise automation"],
    demo: "",
    code: "https://github.com/tashfeenraza297/TechNova-AI-Receptionist",
  },
  {
    title: "AI-Powered Telegram Assistant",
    description: "24/7 AI assistant for businesses on Telegram handles voice and text, remembers context, responds instantly. Auto-transcribes voice via Gemini 2.5 Flash and responds using OpenAI GPT with session-based chat memory.",
    tags: ["Automation", "LLM"],
    tech: ["n8n", "OpenAI GPT", "Gemini 2.5 Flash", "Telegram Bot API", "LangChain Memory"],
    metrics: ["Voice-to-text auto transcription", "Multi-turn chat memory", "Real-time AI responses"],
    demo: "https://drive.google.com/file/d/1YXwMmzLK94H_9-X3OM6lP-k3GxK7rriE/view",
    code: "https://github.com/tashfeenraza297/Telegram_AI_Assistant_n8n",
  },
  {
    title: "AI Lead Qualification Engine",
    description: "Automatically scores and routes inbound leads as Hot/Warm/Cold so your sales team only talks to people ready to buy. Classifies leads (1–100 score), stores in Airtable CRM, and triggers multi-channel alerts with auto-drafted replies.",
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
