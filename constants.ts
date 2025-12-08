import { 
  Code, 
  Layout, 
  Smartphone, 
  BarChart, 
  Wifi, 
  Layers 
} from 'lucide-react';
import { NavItem, Feature, PortfolioItem, ExperienceItem, CareerItem, Testimonial } from './types';

// NOTE: Please replace this URL with the actual path to your uploaded photo (e.g., ./assets/my-photo.jpg) 
// or a hosted URL of your choice to use your personal photo.
export const PROFILE_IMAGE_URL = "https://xiesmjebrayrjewxugsn.supabase.co/storage/v1/object/public/melverick/melverick%20studio.jpg?q=80&w=1000&auto=format&fit=crop"; 
export const JOURNEY_IMAGE_URL = "https://xiesmjebrayrjewxugsn.supabase.co/storage/v1/object/public/melverick/Melverick%20Journey.jpg";
export const NEXIUS_LABS_LOGO_URL = "https://xiesmjebrayrjewxugsn.supabase.co/storage/v1/object/public/melverick/NexiusLabs_Logo-removebg-preview-removebg-preview.png";

export const LINKEDIN_URL = "https://www.linkedin.com/in/melverick/";
export const FACEBOOK_URL = "https://www.facebook.com/melverick.ng.1";
export const TWITTER_URL = "https://x.com/melkizach";
export const BOOKING_URL = "https://outlook.office.com/bookwithme/user/1a3b3c1b65044d24b6cddcc6b42c8ecb@nexiuslabs.com/meetingtype/rQlRqMpqtECRRRNfXW-T9A2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile";

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
    description: "I offer structured AI strategy (3 phases) for businesses to rapidly adopt and implement AI across their value chain, transforming operations into an adaptive, intelligence-driven organization for exponential growth.",
    icon: BarChart
  },
  {
    id: 2,
    title: "AI Adoption",
    description: "I establish AI fluency among employees, enabling them to build custom automation tools using simplified, powerful coding methods. This creates a foundation for complex AI agent systems.",
    icon: Code
  },
  {
    id: 3,
    title: "AI Training",
    description: "I teach non-coders and developers to master Agentic AI workflows, build autonomous systems, and create apps using AI-assisted coding.",
    icon: Layout
  },
  {
    id: 4,
    title: "Agentic ERP/CRM",
    description: "I create thinking, deciding, and acting software that executes complex operations (ERP, CRM, Finance) across tools based on a user's natural language outcome description.",
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

export const CAREER_PHASE_A: CareerItem[] = [
  { id: 1, year: '1997-1999', company: 'Asahi Glass Co.', description: 'SAP Analyst' },
  { id: 2, year: '1999-2000', company: 'Oasis Consulting', description: 'SAP Implementations' },
  { id: 3, year: '2000-2002', company: 'Exxonmobil', description: 'SAP Roll-outs' },
  { id: 4, year: '2002-2008', company: 'ISS Consulting', description: 'SAP Implementations' },
  { id: 5, year: '2009-2010', company: 'Johnson & Johnson', description: 'SAP Roll-outs' }
];

export const CAREER_PHASE_B: CareerItem[] = [
  { id: 1, year: '2010-2023', company: 'Inner City Offices', description: 'Coworking Space Operator' },
  { id: 2, year: '2011-Present', company: 'Voplus Consulting', description: 'Corporate Secretary & Accounting' },
  { id: 3, year: '2011-2014', company: 'AdHocSpace', description: 'Event Space Marketplace' },
  { id: 4, year: '2014-2015', company: 'BookQuickly', description: 'Beauty Services Marketplace' },
  { id: 5, year: '2015-2020', company: 'PlusMargin', description: 'eCommerce Conversion Rate Optimisation' },
  { id: 6, year: '2022-2025', company: 'Mezza Tech', description: 'Business Process Automation' },
  { id: 7, year: '2025-Current', company: 'Nexius Labs', description: 'Agentic AI', url: 'https://nexiuslabs.com' }
];

export const PROJECT_LOGOS = [
  { name: 'ExxonMobil', url: 'https://logo.clearbit.com/exxonmobil.com' },
  { name: 'Johnson & Johnson', url: 'https://logo.clearbit.com/jnj.com' },
  { name: 'HP', url: 'https://logo.clearbit.com/hp.com' },
  { name: 'Sembcorp', url: 'https://logo.clearbit.com/sembcorp.com' },
  { name: 'Tyco', url: 'https://logo.clearbit.com/tyco.com' },
  { name: 'RGE', url: 'https://logo.clearbit.com/rgei.com' },
  { name: 'Venture', url: 'https://logo.clearbit.com/venture.com.sg' },
  { name: 'Teco', url: 'https://logo.clearbit.com/teco.com.sg' },
  { name: 'NIE', url: 'https://xiesmjebrayrjewxugsn.supabase.co/storage/v1/object/public/melverick/nie_logo.png' },
  { name: 'NTU', url: 'https://logo.clearbit.com/ntu.edu.sg' },
  { name: 'SIM', url: 'https://logo.clearbit.com/sim.edu.sg' },
  { name: 'Temasek Polytechnic', url: 'https://logo.clearbit.com/tp.edu.sg' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: `We are grateful for the highly insightful sessions and the team's generosity in sharing invaluable materials. The practical advice, clear demonstrations, and comprehensive resources provided by Melverick's team will be instrumental in our effective adoption of AI tools. We look forward to future collaborations.`,
    name: "Jacky Wong",
    role: "Chief Librarian",
    company: "NIE",
    avatar: "https://xiesmjebrayrjewxugsn.supabase.co/storage/v1/object/public/melverick/jacky_wong.jpeg"
  },
  {
    id: 4,
    quote: `Thank you Melverick for the clear structured guidance and explanations! I have been struggling with my startup for months. I tried many things but somehow I could not get it right. You saw how my business could go on the very first session. I appreciate the step by step guidance over the sessions we had. If you would like to see some light for your business, Melverick is the one to go to! `,
    name: "Hui Fang, Lee",
    role: "Founder",
    company: "Ouch Pte Ltd",
    avatar: "https://xiesmjebrayrjewxugsn.supabase.co/storage/v1/object/public/melverick/huifang.jpeg"
  },
  {
    id: 5,
    quote: `I impressed at his wealth of knowledge and experience, but even more so with his humility and thoughtfulness. Over the past few years, Melverick has been an invaluable source of advice, counsel and mentorship, and his strong business acumen is evident through his various business ventures, either as an entrepreneur or an angel investor. Beyond his role as a mentor and investor, Melverick genuinely cares for the people who he works with, and places people above all else.`,
    name: "Qin En, Looi",
    role: "Managing Partner",
    company: "Onigiri Capital",
    avatar: "https://xiesmjebrayrjewxugsn.supabase.co/storage/v1/object/public/melverick/Qinen.jpeg"
  },
  {
    id: 8,
    quote: `Melverick was an excellent Project Manager and a Mentor. He has demonstrated an analytical approach to resolving technical hurdles and his capabilities in managing the project team, cleverly crafting a well-balanced relationship between the client and the team.`,
    name: "Hwee Ling, Tay",
    role: "SAP Professional",
    company: "Roche",
    avatar: "https://xiesmjebrayrjewxugsn.supabase.co/storage/v1/object/public/melverick/hwee_ling.jpeg"
  },
  {
    id: 9,
    quote: `Being our Consulting Manager, he is someone who is fair, unbiased and consistently pleasant to work with.Apart from being a joy to work with, his experience, and Project Management skills contributed to the successful delivery of one of the toughest SAP projects on time.`,
    name: "Roy Lee",
    role: "Lead IT Architect",
    company: "NCS",
    avatar: "https://xiesmjebrayrjewxugsn.supabase.co/storage/v1/object/public/melverick/roy_lee.jpeg"
  },
  {
    id: 10,
    quote: `I have learnt a lot of things from Melverick during days that we are in projects together. He is well dedicated to his work and handles a team extremely well. People skill, communication skill, management skill ain't a hurdle to him.`,
    name: "Jave Loo",
    role: "SAP Professional",
    company: "IBM",
    avatar: "https://xiesmjebrayrjewxugsn.supabase.co/storage/v1/object/public/melverick/jave_loo.jpeg"
  }
];