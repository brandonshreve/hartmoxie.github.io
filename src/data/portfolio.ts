import { MediaItem } from '../components/PortfolioSection';

export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  objectives?: string[];
  outcomes?: string[];
  media: MediaItem[];
  skills: string[];
  role: string;
  timeline: string;
  client?: string;
  tools?: string[];
  externalLink?: string;
}

export interface PortfolioSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  timeline: string;
  skills: string[];
  tools: string[];
  projects: Project[];
}

export const portfolioData: PortfolioSection[] = [
  {
    id: 'learning-design',
    title: 'Learning Experience Design',
    subtitle: 'Creating Engaging Digital Learning Experiences',
    description: 'A collection of learning experience design projects that demonstrate my ability to create effective, engaging, and measurable learning solutions. These projects showcase a mix of self-directed eLearning and instructor-led training experiences.',
    role: 'Learning Experience Designer',
    timeline: '2020 - Present',
    skills: [
      'Instructional Design',
      'eLearning Development',
      'Training Design',
      'Learning Analytics',
      'User Research',
      'Content Strategy'
    ],
    tools: [
      'Articulate 360',
      'Adobe Captivate',
      'Camtasia',
      'Vyond',
      'Learning Management Systems',
      'SCORM',
      'xAPI',
      'Google Analytics'
    ],
    projects: [
      {
        id: 'perfect-margarita',
        title: 'The Perfect Margarita',
        type: 'Self-directed eLearning',
        description: 'An interactive eLearning module designed to teach bartenders the art of crafting the perfect margarita. This project combines instructional design principles with engaging multimedia to create an effective learning experience.',
        objectives: [
          'Identify the key components of a perfect margarita',
          'Demonstrate proper mixing techniques',
          'Understand the importance of ingredient quality and proportions',
          'Apply knowledge to create consistent, high-quality margaritas'
        ],
        outcomes: [
          'Increased consistency in margarita preparation across locations',
          'Improved customer satisfaction ratings',
          'Reduced ingredient waste through proper measurement',
          'Enhanced bartender confidence in cocktail preparation'
        ],
        media: [
          {
            type: 'image' as const,
            url: 'https://placehold.co/1200x600/009345/ffffff?text=Perfect+Margarita+Module',
            alt: 'Perfect Margarita eLearning Module',
            caption: 'Interactive Learning Module Interface'
          },
          {
            type: 'image' as const,
            url: 'https://placehold.co/1200x600/009345/ffffff?text=Ingredient+Selection',
            alt: 'Ingredient Selection Screen',
            caption: 'Interactive Ingredient Selection Exercise'
          },
          {
            type: 'video' as const,
            url: '/videos/margarita-mixing.mp4',
            caption: 'Mixing Technique Demonstration'
          }
        ],
        skills: [
          'Instructional Design',
          'eLearning Development',
          'Interactive Design',
          'Video Production',
          'Assessment Design'
        ],
        role: 'Learning Experience Designer',
        timeline: 'Q2 2022',
        client: 'Hospitality Training Solutions'
      },
      {
        id: 'rev-101',
        title: 'REV 101 Training',
        type: 'Self-directed eLearning',
        description: 'A comprehensive training program for new employees on company processes and procedures.',
        media: [
          {
            type: 'image' as const,
            url: 'https://placehold.co/1200x600/009345/ffffff?text=REV+101',
            alt: 'REV 101 Training Module',
            caption: 'REV 101 Training Interface'
          }
        ],
        skills: [
          'Instructional Design',
          'eLearning Development',
          'Process Documentation',
          'Assessment Design'
        ],
        role: 'Learning Experience Designer',
        timeline: 'Q3 2022'
      },
      {
        id: 'ambassador-training',
        title: 'Ambassador Training',
        type: 'Instructor-led training',
        description: 'A comprehensive training program for brand ambassadors, focusing on product knowledge and customer engagement.',
        media: [
          {
            type: 'image' as const,
            url: 'https://placehold.co/1200x600/009345/ffffff?text=Ambassador',
            alt: 'Ambassador Training Materials',
            caption: 'Training Materials and Resources'
          }
        ],
        skills: [
          'Training Design',
          'Facilitation',
          'Content Development',
          'Assessment Design'
        ],
        role: 'Learning Experience Designer',
        timeline: 'Q4 2022'
      },
      {
        id: 'star-method',
        title: 'STAR Method Training',
        type: 'Self-directed eLearning',
        description: 'An interactive module teaching the STAR method for behavioral interview responses.',
        media: [
          {
            type: 'image' as const,
            url: 'https://placehold.co/1200x600/009345/ffffff?text=STAR+Method',
            alt: 'STAR Method Training Module',
            caption: 'STAR Method Training Interface'
          }
        ],
        skills: [
          'Instructional Design',
          'eLearning Development',
          'Interactive Design',
          'Assessment Design'
        ],
        role: 'Learning Experience Designer',
        timeline: 'Q1 2023'
      }
    ]
  },
  {
    id: 'technical-writing',
    title: 'Technical Writing',
    subtitle: 'Simplifying Complex Concepts Through Clear Documentation',
    description: 'A showcase of technical writing projects that demonstrate my ability to transform complex technical information into clear, accessible, and engaging content.',
    role: 'Technical Writer',
    timeline: '2019 - Present',
    skills: [
      'Technical Documentation',
      'API Documentation',
      'User Guides',
      'Content Strategy',
      'Information Architecture',
      'Technical Editing'
    ],
    tools: [
      'Markdown',
      'Git',
      'Confluence',
      'Jira',
      'Swagger',
      'Postman',
      'VS Code',
      'Adobe FrameMaker'
    ],
    projects: [
      {
        id: 'sticky-note-printer',
        title: 'Reset Your Smart Sticky Note Printer',
        type: 'Troubleshooting Guide',
        description: 'A comprehensive troubleshooting guide developed to help customers reset their Smart Sticky Note Printer. The guide provides clear, step-by-step instructions with visual aids to ensure users can successfully troubleshoot and reset their device.',
        media: [
          {
            type: 'image',
            url: '/images/amazon-sticky-printer.jpg',
            alt: 'Sticky Note Printer Troubleshooting Guide',
            caption: 'Troubleshooting Guide Screenshot'
          }
        ],
        skills: [
          'Technical Writing',
          'User Documentation',
          'Troubleshooting Guides',
          'Visual Communication',
          'Content Organization'
        ],
        role: 'Technical Writer',
        timeline: 'Q2 2023',
        client: 'Smart Office Solutions',
        tools: [
          'Microsoft Word',
          'SDL Tridion'
        ],
        externalLink: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=G4UXV3RG3C9G56UH'
      },
      {
        id: 'api-documentation',
        title: 'API Documentation',
        type: 'Technical Documentation',
        description: 'Comprehensive API documentation for a cloud-based service platform.',
        media: [
          {
            type: 'image' as const,
            url: 'https://placehold.co/1200x600/930045/ffffff?text=API+Docs',
            alt: 'API Documentation',
            caption: 'API Documentation Example'
          }
        ],
        skills: [
          'API Documentation',
          'Technical Writing',
          'Information Architecture'
        ],
        role: 'Technical Writer',
        timeline: 'Q2 2021'
      }
    ]
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    subtitle: 'Creating Visually Stunning Designs That Communicate Effectively',
    description: 'A collection of graphic design projects that showcase my ability to create compelling visual content that effectively communicates messages and enhances user experiences.',
    role: 'Graphic Designer',
    timeline: '2018 - Present',
    skills: [
      'Brand Identity',
      'Digital Design',
      'Visual Communication',
      'Typography',
      'Layout Design',
      'Adobe Creative Suite'
    ],
    tools: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe InDesign',
      'Figma',
      'Sketch',
      'Canva',
      'Procreate',
      'After Effects'
    ],
    projects: [
      {
        id: 'brand-identity',
        title: 'Brand Identity',
        type: 'Visual Design',
        description: 'Development of a comprehensive brand identity system for a tech startup.',
        media: [
          {
            type: 'image' as const,
            url: 'https://placehold.co/1200x600/939300/ffffff?text=Brand+Identity',
            alt: 'Brand Identity Project',
            caption: 'Brand Identity System'
          }
        ],
        skills: [
          'Brand Identity',
          'Visual Design',
          'Typography',
          'Layout Design'
        ],
        role: 'Graphic Designer',
        timeline: 'Q3 2021'
      }
    ]
  }
]; 