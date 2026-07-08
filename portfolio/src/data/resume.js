export const personal = {
  name: 'Alex Khundongbam',
  title: 'AI Engineer | Autonomous Systems | LLM Architect',
  tagline: 'Building intelligent systems that think, reason, and act.',
  email: 'alexkhundongbam260@gmail.com',
  phone: '+916009285151',
  linkedin: 'https://www.linkedin.com/in/alex-khundongbam-975678223/',
  github: 'https://github.com/alex-kh465',
  website: 'https://alexkhundongbam.framer.ai',
  profile: `AI Engineer specializing in autonomous agent systems, RAG pipelines, and production LLM applications. Experienced in designing and deploying multi-agent architectures using LangChain, LangGraph, and CrewAI, with hands-on expertise in async Python, FastAPI microservices, and workflow orchestration. Skilled in hallucination mitigation, agent evaluation frameworks, and translating complex AI capabilities into reliable, enterprise-grade automation systems.`,
  about: `My path started with a B.Sc. in Physics and Computer Science, and continued into an M.Sc. in Artificial Intelligence and Machine Learning — a combination that grounds my engineering in rigorous, first-principles thinking. Since then, I've focused on building autonomous agent systems and production LLM applications, translating research-grade techniques into reliable, enterprise-ready automation.`,
};

export const heroStats = [
  { value: '4', label: 'Published Papers', href: '#research' },
  { value: '100+', label: 'Docs Automated / Day' },
  { value: '95%', label: 'Model Accuracy' },
  { value: '50k+', label: 'Records Analyzed' },
];

export const experience = [
  {
    id: 1,
    role: 'AI and Data Engineer',
    company: 'LeadWalnut',
    location: 'Bangalore',
    period: 'Jan 2026 – Present',
    type: 'Full-time',
    color: '#4F8EF7',
    achievements: [
      'Built autonomous document-processing agents handling 100+ invoices/day with automated validation.',
      'Designed AI pipelines with structured output validation to cut hallucinations and extraction errors.',
      'Built async FastAPI microservices for document ingestion and accounting system integration.',
      'Built AI analytics tools processing 50k+ SEO/CRM records for marketing insights.',
      'Owned production NFRs — security, observability, reliability, and cost — across deployed systems.',
    ],
  },
  {
    id: 2,
    role: 'AI Engineering Intern – ERP Systems',
    company: 'Christ University, Centre for Digital Innovation',
    location: 'Bangalore',
    period: 'Jul 2025 – Dec 2025',
    type: 'Internship',
    color: '#7C3AED',
    achievements: [
      'Built FastAPI microservices automating document processing and forms for the university ERP system.',
      'Added safety guardrails and validation to keep LLM features reliable in production.',
      'Built monitoring dashboards for faster detection of agent failures.',
    ],
  },
  {
    id: 3,
    role: 'AI/ML R&D Intern',
    company: 'Christ University',
    location: 'Bangalore',
    period: 'Nov 2024 – May 2025',
    type: 'Internship',
    color: '#22D3EE',
    achievements: [
      'Built multi-agent AI pipelines with LangChain, LangGraph, and n8n.',
      'Built RAG systems with Pinecone and Chroma, improving retrieval accuracy.',
      'Fine-tuned transformer models (PEFT) and reduced hallucinations via prompt engineering.',
    ],
  },
  {
    id: 4,
    role: 'Data Science Intern',
    company: 'Solar Secure Solutions',
    location: 'Remote, Bengaluru',
    period: 'Nov 2023 – Feb 2024',
    type: 'Internship',
    color: '#C9A84C',
    achievements: [
      'Cleaned and processed 500k+ data points to improve model reliability.',
      'Built a churn prediction model with 95% accuracy.',
      'Built a recommendation system that boosted engagement by 20%.',
      'Built a time-series model to support demand planning.',
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'EverMind LongContext Agent',
    description: 'Conversational agent with hybrid memory (SQLite + ChromaDB) that compresses long context 3:1 while keeping 96% Q&A accuracy and sub-1.5s response latency.',
    tags: ['FastAPI', 'Python', 'React/TypeScript', 'ChromaDB', 'RAG', 'OpenAI Embeddings', 'Async/Parallel Processing'],
    color: '#4F8EF7',
    icon: '🧠',
    demo: '/evermind-demo.gif',
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'SpeakFiction',
    description: 'RAG-powered chat with fictional characters from any uploaded book, tuned to minimize hallucinations.',
    tags: ['RAG', 'LangChain', 'Pinecone', 'FastAPI', 'NLP'],
    color: '#7C3AED',
    icon: '📚',
    demo: '/speakfiction-demo.gif',
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Christ IntelliTeach',
    description: 'AI platform for educators to auto-generate lesson content and materials, with built-in usage analytics.',
    tags: ['FastAPI', 'LLM', 'Async Python', 'Analytics', 'Education'],
    color: '#22D3EE',
    icon: '🎓',
    demo: '/intelliteach-demo.gif',
    github: '#',
    live: '#',
    badge: 'Patent Pending',
  },
  {
    id: 4,
    title: 'CompressLM — LLM Compression & Distillation Pipeline',
    description: 'Compressed a 3B-parameter instruct LLM into a 0.5B student via LoRA + KL-divergence distillation, then INT4-quantized it — 19x smaller and 7.5x faster inference, retaining 93% teacher-level accuracy and 97% JSON-schema validity.',
    tags: ['PEFT (LoRA)', 'Knowledge Distillation', 'Quantization (INT4)', 'PyTorch', 'Transformers', 'Structured Output Validation'],
    color: '#C9A84C',
    icon: '🗜️',
    demo: '/compresslm-demo.gif',
    github: '#',
    live: '#',
  },
];

export const research = [
  {
    id: 1,
    title: 'Systematic Evaluation of Vision Transformer Robustness under Gradient, Optimization, and Black-Box Attacks with Hybrid Defense Mechanisms',
    description: 'Evaluates ViT robustness against adversarial attacks and proposes hybrid defenses.',
    tags: ['Vision Transformers', 'Adversarial ML', 'Defense Mechanisms'],
    color: '#4F8EF7',
    publisher: 'CRC Press',
    publisherIcon: 'CRC',
    url: null,
  },
  {
    id: 2,
    title: 'Classic Models, Modern Threats: A Study on Adversarial Attack and Defense for Traditional ML Models',
    description: 'Analyzes adversarial vulnerabilities in classical ML models and evaluates modern defenses.',
    tags: ['Adversarial Attacks', 'ML Security', 'Defense'],
    color: '#7C3AED',
    publisher: 'Springer Nature',
    publisherIcon: 'SN',
    url: 'https://link.springer.com/chapter/10.1007/978-3-032-10016-0_20',
  },
  {
    id: 3,
    title: 'Investigating the Impact of Feedback Loop Training on Machine Learning Model Performance in Time Series Data',
    description: 'Studies how feedback-loop training affects long-term accuracy and stability in time-series forecasting.',
    tags: ['Time Series', 'Feedback Learning', 'Model Performance'],
    color: '#22D3EE',
    publisher: 'IEEE Xplore',
    publisherIcon: 'IEEE',
    url: 'https://ieeexplore.ieee.org/document/10581164',
  },
  {
    id: 4,
    title: 'Assessing the Impact of COVID-19 on Inflation Dynamics in India: A Machine Learning Approach',
    description: 'ML study on COVID-19\'s causal impact on inflation in India using regression and time-series models.',
    tags: ['Economics', 'Time Series', 'ML', 'Policy Analysis'],
    color: '#C9A84C',
    publisher: 'IEEE Xplore',
    publisherIcon: 'IEEE',
    url: 'https://ieeexplore.ieee.org/document/10690053',
  },
];

export const skills = {
  'LLM & Agentic AI': [
    'LangChain', 'LangGraph', 'CrewAI', 'AutoGen', 'RAG', 'PEFT',
    'Prompt Engineering', 'Hallucination Mitigation', 'CoT Prompting',
  ],
  'Agent Evaluation & Safety': [
    'Output Validation', 'Guardrails', 'RAGAS Evaluation',
    'Structured Output Contracts', 'Agent Monitoring',
  ],
  'MLOps & Deployment': [
    'FastAPI', 'Flask', 'Docker', 'Weights & Biases',
    'AWS', 'GCP', 'Vercel', 'CI/CD Pipelines',
  ],
  'Data & Analytics': [
    'Pandas', 'NumPy', 'Spark', 'Scikit-Learn',
    'PyTorch', 'TensorFlow', 'XGBoost',
  ],
  'Vector Databases': [
    'Pinecone', 'Chroma', 'Weaviate',
  ],
  'Languages & Systems': [
    'Python (asyncio)', 'SQL', 'JavaScript', 'Java', 'C',
    'Microservices', 'API Design', 'Event-driven Architecture',
  ],
};

export const education = [
  {
    degree: 'M.Sc. in Artificial Intelligence and Machine Learning',
    institution: 'Christ University, Central Campus',
    location: 'Bangalore',
    period: '2024 – Present',
  },
  {
    degree: 'B.Sc. in Physics and Computer Science',
    institution: 'Kristu Jayanti College',
    location: 'Bangalore',
    period: '2021 – 2024',
    note: '8.45 CGPA | First Rank Holder',
  },
];
