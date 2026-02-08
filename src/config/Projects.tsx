import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import Sanity from '@/components/technologies/Sanity';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';
import { tr } from 'date-fns/locale';

export const projects: Project[] = [
  {
    title: 'Translate-Call',
    description:
      'Offline real-time translation app for Android using Meta NLLB and OpenAI Whisper.',
    image: 'https://opengraph.githubassets.com/1/thekarampuri/Translate-Call',
    video: '',
    link: '',
    technologies: [
      { name: 'Android', icon: <ReactIcon key="android" /> },
      { name: 'Kotlin', icon: <ReactIcon key="kotlin" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Meta NLLB', icon: <Python key="nllb" /> },
      { name: 'OpenAI Whisper', icon: <Python key="whisper" /> },
    ],
    github: 'https://github.com/thekarampuri/Translate-Call',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/translate_call',
    isWorking: true,
  },
  {
    title: 'CrowdVision AI',
    description:
      'Advanced real-time surveillance ecosystem for crowd monitoring and safety insights.',
    image: 'https://opengraph.githubassets.com/1/thekarampuri/CrowdVision-AI',
    video: '',
    link: '',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'YOLOv8', icon: <Python key="yolo" /> },
      { name: 'Android', icon: <ReactIcon key="android" /> },
      { name: 'Firebase', icon: <MongoDB key="firebase" /> },
    ],
    github: 'https://github.com/thekarampuri/CrowdVision-AI',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/crowdvision_ai',
    isWorking: true,
  },
  {
    title: 'DataQuery AI Assistant',
    description:
      'Intuitive data analysis tool enabling natural language queries and interactive visualizations.',
    image: 'https://opengraph.githubassets.com/1/thekarampuri/DataQuery-AI-Assistant',
    video: '',
    link: '',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'NLP', icon: <Python key="nlp" /> },
      { name: 'Data Visualization', icon: <ReactIcon key="dataviz" /> },
    ],
    github: 'https://github.com/thekarampuri/DataQuery-AI-Assistant',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/dataquery_ai',
    isWorking: true,
  },
  {
    title: 'CHD Prediction Model',
    description:
      'Machine Learning model to predict Coronary Heart Disease risk using clinical data.',
    image: 'https://opengraph.githubassets.com/1/thekarampuri/CHD-prediction',
    video: '',
    link: '',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Scikit-learn', icon: <Python key="sklearn" /> },
      { name: 'Pandas', icon: <Python key="pandas" /> },
      { name: 'API', icon: <ReactIcon key="api" /> },
    ],
    github: 'https://github.com/thekarampuri/CHD-prediction',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/chd_prediction',
    isWorking: true,
  },
];
