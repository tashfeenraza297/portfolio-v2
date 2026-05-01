export const personal = {
  name: "Tashfeen Raza",
  title: "AI & Machine Learning Engineer",
  subtitle: "Agentic AI & LLM Systems Specialist",
  location: "Rawalpindi, Pakistan",
  email: "tashfeen.raza@gmail.com",
  roles: [
    "LLM Engineer",
    "Agentic AI Specialist",
    "Automation Engineer",
    "Computer Vision Engineer",
  ],
  summary:
    "I design and ship production-grade AI systems — from LLM-powered agents and RAG pipelines to computer-vision models and end-to-end automation. Currently building intelligent products at Neuronix Technology.",
  socials: {
    github: "https://github.com/tashfeenraza",
    linkedin: "https://www.linkedin.com/in/tashfeenraza",
    fiverr: "https://www.fiverr.com/tashfeenraza",
    email: "mailto:tashfeen.raza@gmail.com",
  },
};

export const stats = [
  { label: "Projects Completed", value: 12, suffix: "+" },
  { label: "Years Experience", value: 1, suffix: "+" },
  { label: "Technologies", value: 22, suffix: "+" },
  { label: "Certifications", value: 2, suffix: "+" },
];

export const highlights = [
  { icon: "Eye", title: "Computer Vision", desc: "Detection, segmentation, OCR pipelines." },
  { icon: "Bot", title: "LLM & Agentic AI", desc: "RAG, tool-use, multi-agent orchestration." },
  { icon: "Zap", title: "Automation", desc: "Workflow agents, scrapers, integrations." },
  { icon: "Cog", title: "MLOps", desc: "Training, evaluation, deployment, monitoring." },
];

export const skillCategories = [
  {
    name: "LLM / Agentic Systems",
    icon: "Bot",
    skills: ["LangChain", "LangGraph", "LlamaIndex", "CrewAI", "AutoGen", "RAG", "Vector DBs", "Prompt Engineering"],
  },
  {
    name: "AI / ML Frameworks",
    icon: "Brain",
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "scikit-learn", "OpenCV", "YOLO", "Transformers"],
  },
  {
    name: "Tools & Languages",
    icon: "Code2",
    skills: ["Python", "TypeScript", "FastAPI", "Docker", "Git", "Linux", "CUDA"],
  },
  {
    name: "APIs & Integrations",
    icon: "Plug",
    skills: ["OpenAI", "Anthropic", "Gemini", "Groq", "Replicate", "Stripe", "Twilio"],
  },
  {
    name: "Automation",
    icon: "Workflow",
    skills: ["n8n", "Make", "Zapier", "Selenium", "Playwright", "Cron"],
  },
  {
    name: "Databases",
    icon: "Database",
    skills: ["PostgreSQL", "MongoDB", "Pinecone", "Qdrant", "Chroma", "Redis", "Supabase"],
  },
];

export const experience = [
  {
    role: "AI Engineer",
    company: "Neuronix Technology",
    duration: "2024 — Present",
    location: "Remote",
    points: [
      "Architected agentic LLM workflows that reduced manual processing time by 40%.",
      "Built RAG pipelines over 100k+ docs with sub-second retrieval latency.",
      "Deployed CV models with 30% accuracy improvement over baselines.",
    ],
    stack: ["LangGraph", "OpenAI", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    role: "ML Research Intern",
    company: "Independent / Freelance",
    duration: "2023 — 2024",
    location: "Rawalpindi, PK",
    points: [
      "Delivered 8+ end-to-end CV and NLP projects for international clients.",
      "Fine-tuned transformer models, cutting inference cost by ~35%.",
    ],
    stack: ["PyTorch", "Hugging Face", "YOLOv8", "OpenCV"],
  },
];

export const projects = [
  {
    title: "Agentic Research Assistant",
    description: "Multi-agent system that plans, searches, and synthesizes research reports with citations.",
    tags: ["LLM", "Agents"],
    tech: ["LangGraph", "OpenAI", "Tavily", "FastAPI"],
    metrics: ["92% citation accuracy", "60% faster than manual"],
    demo: "#",
    code: "#",
  },
  {
    title: "Enterprise RAG Platform",
    description: "Production RAG over 100k+ documents with hybrid search, reranking, and access control.",
    tags: ["LLM"],
    tech: ["LlamaIndex", "Qdrant", "Cohere", "Postgres"],
    metrics: ["<800ms p95 latency", "Top-3 recall 94%"],
    demo: "#",
    code: "#",
  },
  {
    title: "Real-time Object Detection",
    description: "Edge-deployed YOLOv8 model for inventory tracking with custom dataset & augmentation.",
    tags: ["CV"],
    tech: ["YOLOv8", "PyTorch", "ONNX", "OpenCV"],
    metrics: ["mAP@50: 0.91", "45 FPS on Jetson"],
    demo: "#",
    code: "#",
  },
  {
    title: "Document OCR & Extraction",
    description: "Pipeline that extracts structured data from invoices and forms with LLM verification.",
    tags: ["CV", "LLM"],
    tech: ["PaddleOCR", "GPT-4o", "Pydantic"],
    metrics: ["98% field accuracy", "5x throughput"],
    demo: "#",
    code: "#",
  },
  {
    title: "WhatsApp Automation Agent",
    description: "Conversational sales agent with CRM sync, scheduling, and multi-language support.",
    tags: ["Automation", "LLM"],
    tech: ["n8n", "Twilio", "OpenAI", "Supabase"],
    metrics: ["24/7 coverage", "30% lead conversion lift"],
    demo: "#",
    code: "#",
  },
  {
    title: "AI Content Pipeline",
    description: "End-to-end automation: research → draft → image gen → schedule across channels.",
    tags: ["Automation"],
    tech: ["LangChain", "Replicate", "Make", "Notion"],
    metrics: ["10x output volume", "Zero manual steps"],
    demo: "#",
    code: "#",
  },
];

export const projectFilters = ["All", "LLM", "Agents", "CV", "Automation"];

export const education = [
  {
    type: "education",
    title: "BS Artificial Intelligence",
    org: "National University of Modern Languages (NUML)",
    duration: "2021 — 2025",
    desc: "Specialization in Machine Learning, Deep Learning, and NLP.",
  },
  {
    type: "certification",
    title: "Deep Learning Specialization",
    org: "DeepLearning.AI / Coursera",
    duration: "2023",
    desc: "Andrew Ng's 5-course specialization on neural networks and sequence models.",
  },
  {
    type: "certification",
    title: "LangChain & Agentic AI",
    org: "DeepLearning.AI",
    duration: "2024",
    desc: "Building LLM-powered applications, agents, and RAG systems.",
  },
];
