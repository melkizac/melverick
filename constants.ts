import { 
  Code, 
  Layout, 
  Smartphone, 
  BarChart, 
  Wifi, 
  Layers 
} from 'lucide-react';
import { NavItem, Feature, PortfolioItem, ExperienceItem } from './types';

// NOTE: Please replace this URL with the actual path to your uploaded photo (e.g., ./assets/my-photo.jpg) 
// or a hosted URL of your choice to use your personal photo.
export const PROFILE_IMAGE_URL = "https://xiesmjebrayrjewxugsn.supabase.co/storage/v1/object/public/melverick/melverick%20studio.jpg?q=80&w=1000&auto=format&fit=crop"; 

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'features', label: 'Features', href: '#features' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'resume', label: 'Resume', href: '#resume' },
  { id: 'clients', label: 'Clients', href: '#clients' },
  { id: 'blog', label: 'Blog', href: '#blog' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "AI Strategy",
    description: "I build an AI-native business OS by designing adaptive Agentic systems for finance, ERP, and CRM that learn, evolve, and execute on intent.",
    icon: BarChart
  },
  {
    id: 2,
    title: "AI Adoption",
    description: "Ihelp SMEs move from manual operations to self-evolving systems, enabling processes (finance, inventory) to run autonomously via natural language.",
    icon: Code
  },
  {
    id: 3,
    title: "AI Training",
    description: "I teach non-coders and developers to master Agentic AI workflows, build autonomous systems, and create apps using AI-assisted coding and hackathons.",
    icon: Layout
  },
  {
    id: 4,
    title: "Agentic ERP/CRM",
    description: "I create thinking, deciding, and acting software that executes complex operations (ERP, CRM) across tools based on a user's natural language outcome description.",
    icon: Smartphone
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    category: "Development",
    title: "The services provide for design",
    likes: 600,
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Application",
    title: "Mobile app landing design & app maintain",
    likes: 750,
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Photoshop",
    title: "Logo design creativity & Application",
    likes: 630,
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "Figma",
    title: "Mobile app landing design & Services",
    likes: 350,
    imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    category: "Web Design",
    title: "Design for technology & services",
    likes: 220,
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    category: "Web Design",
    title: "App for technology & services",
    likes: 560,
    imageUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop"
  }
];

export const EDUCATION_DATA: ExperienceItem[] = [
  {
    id: 1,
    title: "BSc in Computer Science",
    subtitle: "University of DVI (2006 - 2010)",
    date: "2006 - 2010",
    description: "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
    score: "3.90/4"
  },
  {
    id: 2,
    title: "AS - Science & Information",
    subtitle: "SuperKing College (2001 - 2005)",
    date: "2001 - 2005",
    description: "Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.",
    score: "4.75/5"
  },
  {
    id: 3,
    title: "Secondary School Certificate",
    subtitle: "Kingstar Secondary School (1998 - 2003)",
    date: "1998 - 2003",
    description: "Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.",
    score: "5.00/5"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 1,
    title: "Sr. Software Engineer",
    subtitle: "Google Inc. (2018 - Present)",
    date: "2018 - Present",
    description: "Leading a team of developers to build scalable web applications using React and Node.js.",
    score: "Remote"
  },
  {
    id: 2,
    title: "Web Developer",
    subtitle: "Creative Agency (2015 - 2018)",
    date: "2015 - 2018",
    description: "Developed responsive websites and e-commerce platforms for various clients.",
    score: "On-site"
  },
  {
    id: 3,
    title: "Junior UI Designer",
    subtitle: "Design Studio (2013 - 2015)",
    date: "2013 - 2015",
    description: "Collaborated with senior designers to create user-friendly interfaces for mobile apps.",
    score: "Hybrid"
  }
];
