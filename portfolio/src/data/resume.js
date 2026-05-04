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
};

export const experience = [
  {
    id: 1,
    role: 'AI Analyst / AI Engineer',
    company: 'LeadWalnut',
    location: 'Bangalore',
    period: 'Jan 2026 – Present',
    type: 'Full-time',
    color: '#4F8EF7',
    achievements: [
      'Designed and deployed autonomous document processing agents using event-driven triggers and API-driven workflow orchestration (n8n), handling 100+ invoice documents/day with end-to-end validation and error recovery.',
      'Architected multi-stage AI pipelines with structured output parsing, JSON extraction, and schema validation layers — reducing hallucinations and extraction errors by enforcing strict output contracts.',
      'Built async FastAPI microservices for scalable document ingestion, agent task routing, and accounting system integration, ensuring non-blocking throughput under concurrent document loads.',
      'Implemented agent monitoring and observability systems including structured logging, workflow state tracking, and failure alerting to ensure production reliability.',
      'Developed Python-based AI and analytics tools analyzing 50k+ SEO and CRM records to support keyword intelligence, competitor analysis, and marketing performance optimization.',
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
      'Designed and deployed async FastAPI-based AI microservices for document processing, form automation, and internal reporting workflows integrated with the university ERP system.',
      'Implemented agent safety guardrails and output validation layers to ensure reliable and consistent responses from LLM-powered features in production.',
      'Improved system observability through structured logging and monitoring dashboards, enabling rapid identification of agent failures and performance bottlenecks.',
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
      'Developed and orchestrated autonomous AI agents using LangChain, LangGraph, and n8n — integrating tool use, vector store retrieval, and document loaders to build functional multi-agent pipelines.',
      'Built and evaluated RAG systems using Pinecone and Chroma vector databases, applying chunking strategies and embedding optimization to improve retrieval precision.',
      'Applied Chain-of-Thought (CoT) prompting and PEFT fine-tuning for performance optimization of transformer models, including hallucination reduction through structured prompt constraints.',
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
      'Processed and cleaned 500k+ data points to improve data quality and enhance downstream model performance and reliability.',
      'Developed a churn prediction model achieving 95% accuracy, enabling proactive customer retention strategies.',
      'Built a recommendation system that increased user engagement by 20% through personalized content and behavioral analysis.',
      'Designed a time-series forecasting model to support demand planning and improve operational decision-making.',
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Multi-Agent Workout Planner',
    description: 'A multi-agent AI system using LangChain and tool-based agents with structured reasoning pipelines. Features output evaluation logic to validate plan coherence and flag hallucinated or unsafe recommendations before delivery.',
    tags: ['LangChain', 'Multi-Agent', 'Python', 'RAG', 'Evaluation'],
    color: '#4F8EF7',
    icon: '🤖',
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'SpeakFiction',
    description: 'RAG-based conversational AI enabling users to interact with fictional characters from uploaded books. Implements chunking, embedding optimization, and context injection strategies to minimize hallucinations and improve retrieval faithfulness.',
    tags: ['RAG', 'LangChain', 'Pinecone', 'FastAPI', 'NLP'],
    color: '#7C3AED',
    icon: '📚',
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Christ IntelliTeach',
    description: 'Data-driven web platform for educators with automated LLM-powered content generation, structured document processing, and usage analytics. Supports concurrent multi-user access via async API services.',
    tags: ['FastAPI', 'LLM', 'Async Python', 'Analytics', 'Education'],
    color: '#22D3EE',
    icon: '🎓',
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'LLM Distillation',
    description: 'Applied quantization and PEFT fine-tuning for optimized transformer inference on limited hardware, with structured output validation to maintain response quality post-compression.',
    tags: ['PEFT', 'Quantization', 'PyTorch', 'Fine-tuning', 'Optimization'],
    color: '#C9A84C',
    icon: '⚡',
    github: '#',
    live: '#',
  },
];

export const research = [
  {
    id: 1,
    title: 'Systematic Evaluation of Vision Transformer Robustness under Gradient, Optimization, and Black-Box Attacks with Hybrid Defense Mechanisms',
    description: 'Comprehensive study evaluating ViT model resilience against adversarial attack vectors and proposing hybrid defense strategies.',
    tags: ['Vision Transformers', 'Adversarial ML', 'Defense Mechanisms'],
    color: '#4F8EF7',
  },
  {
    id: 2,
    title: 'Classic Models, Modern Threats: A Study on Adversarial Attack and Defense for Traditional ML Models',
    description: 'Analysis of adversarial vulnerabilities in classical machine learning models and evaluation of contemporary defense strategies.',
    tags: ['Adversarial Attacks', 'ML Security', 'Defense'],
    color: '#7C3AED',
  },
  {
    id: 3,
    title: 'Investigating the Impact of Feedback Loop Training on Machine Learning Model Performance in Time Series Data',
    description: 'Research into how feedback-loop training mechanisms influence long-term model accuracy and stability in temporal forecasting tasks.',
    tags: ['Time Series', 'Feedback Learning', 'Model Performance'],
    color: '#22D3EE',
  },
  {
    id: 4,
    title: 'Assessing the Impact of COVID-19 on Inflation Dynamics in India: A Machine Learning Approach',
    description: 'ML-driven macroeconomic study analyzing COVID-19\'s causal influence on inflation patterns using regression and time-series models.',
    tags: ['Economics', 'Time Series', 'ML', 'Policy Analysis'],
    color: '#C9A84C',
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
