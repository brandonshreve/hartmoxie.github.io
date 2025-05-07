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
  client?: string;
  tools?: string[];
  externalLink?: string;
}

export interface PortfolioSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
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
            type: 'image',
            url: '/assets/learning-design/perfect-margarita/Title Slide.jpg',
            alt: 'Perfect Margarita Title Slide',
            caption: 'Title Slide'
          },
          {
            type: 'image',
            url: '/assets/learning-design/perfect-margarita/Key Ingredients.jpg',
            alt: 'Key Ingredients for Perfect Margarita',
            caption: 'Key Ingredients'
          },
          {
            type: 'image',
            url: '/assets/learning-design/perfect-margarita/Steps.jpg',
            alt: 'Steps to Create Perfect Margarita',
            caption: 'Steps'
          },
          {
            type: 'image',
            url: '/assets/learning-design/perfect-margarita/KC.jpg',
            alt: 'Knowledge Check',
            caption: 'Knowledge Check'
          },
          {
            type: 'image',
            url: '/assets/learning-design/perfect-margarita/Congrats.jpg',
            alt: 'Completion Screen',
            caption: 'Completion Screen'
          }
        ],
        skills: [
          'Instructional Design',
          'eLearning Development',
          'Interactive Design',
          'Video Production',
          'Assessment Design'
        ],
        client: 'Hospitality Training Solutions'
      },
      {
        id: 'rev-101',
        title: 'REV 101 Training',
        type: 'Self-directed eLearning',
        description: 'A comprehensive training program for new employees on company processes and procedures.',
        media: [
          {
            type: 'image',
            url: '/assets/learning-design/rev-101/REV 101.jpg',
            alt: 'REV 101 Training Module',
            caption: 'REV 101 Training Interface'
          },
          {
            type: 'image',
            url: '/assets/learning-design/rev-101/Slide1.jpeg',
            alt: 'Slide 1',
            caption: 'Introduction'
          },
          {
            type: 'image',
            url: '/assets/learning-design/rev-101/Slide2.jpeg',
            alt: 'Slide 2',
            caption: 'Overview'
          },
          {
            type: 'image',
            url: '/assets/learning-design/rev-101/Slide3.jpeg',
            alt: 'Slide 3',
            caption: 'Key Concepts'
          },
          {
            type: 'image',
            url: '/assets/learning-design/rev-101/Slide4.jpeg',
            alt: 'Slide 4',
            caption: 'Process Steps'
          },
          {
            type: 'image',
            url: '/assets/learning-design/rev-101/Slide5.jpeg',
            alt: 'Slide 5',
            caption: 'Best Practices'
          },
          {
            type: 'image',
            url: '/assets/learning-design/rev-101/Slide6.jpeg',
            alt: 'Slide 6',
            caption: 'Summary'
          }
        ],
        skills: [
          'Instructional Design',
          'eLearning Development',
          'Process Documentation',
          'Assessment Design'
        ],
        client: 'Hospitality Training Solutions'
      },
      {
        id: 'ambassador-training',
        title: 'Ambassador Training',
        type: 'Instructor-led training',
        description: 'A comprehensive training program for brand ambassadors, focusing on product knowledge and customer engagement.',
        media: [
          {
            type: 'image',
            url: '/assets/learning-design/ambassador-training/Opening 1.jpeg',
            alt: 'Training Opening',
            caption: 'Training Opening'
          },
          {
            type: 'image',
            url: '/assets/learning-design/ambassador-training/Engagement 2.jpeg',
            alt: 'Engagement Strategies',
            caption: 'Engagement Strategies'
          },
          {
            type: 'image',
            url: '/assets/learning-design/ambassador-training/Personal Motivation 3.jpeg',
            alt: 'Personal Motivation',
            caption: 'Personal Motivation'
          },
          {
            type: 'image',
            url: '/assets/learning-design/ambassador-training/Learner Motivation 4.jpeg',
            alt: 'Learner Motivation',
            caption: 'Learner Motivation'
          },
          {
            type: 'image',
            url: '/assets/learning-design/ambassador-training/Associate Motivation 5.jpeg',
            alt: 'Associate Motivation',
            caption: 'Associate Motivation'
          },
          {
            type: 'image',
            url: '/assets/learning-design/ambassador-training/How to Coach 6.jpeg',
            alt: 'How to Coach',
            caption: 'How to Coach'
          },
          {
            type: 'image',
            url: '/assets/learning-design/ambassador-training/How to Give Feedback 7.jpeg',
            alt: 'How to Give Feedback',
            caption: 'How to Give Feedback'
          },
          {
            type: 'image',
            url: '/assets/learning-design/ambassador-training/Feedback Examples 8.jpeg',
            alt: 'Feedback Examples',
            caption: 'Feedback Examples'
          }
        ],
        skills: [
          'Training Design',
          'Facilitation',
          'Content Development',
          'Assessment Design'
        ],
        client: 'Hospitality Training Solutions'
      },
      {
        id: 'star-method',
        title: 'STAR Method Training',
        type: 'Self-directed eLearning',
        description: 'An interactive module teaching the STAR method for behavioral interview responses.',
        media: [
          {
            type: 'image',
            url: '/assets/learning-design/star-method/Title Slides 1.png',
            alt: 'Title Slide',
            caption: 'Title Slide'
          },
          {
            type: 'image',
            url: '/assets/learning-design/star-method/Learning Outcomes 2.png',
            alt: 'Learning Outcomes',
            caption: 'Learning Outcomes'
          },
          {
            type: 'image',
            url: '/assets/learning-design/star-method/What is the STAR method 3.png',
            alt: 'What is the STAR Method',
            caption: 'What is the STAR Method'
          },
          {
            type: 'image',
            url: '/assets/learning-design/star-method/Components of the STAR method 4.png',
            alt: 'Components of the STAR Method',
            caption: 'Components of the STAR Method'
          },
          {
            type: 'image',
            url: '/assets/learning-design/star-method/STAR Example 5.png',
            alt: 'STAR Example',
            caption: 'STAR Example'
          },
          {
            type: 'image',
            url: '/assets/learning-design/star-method/STAR Knowledge Check 6.png',
            alt: 'STAR Knowledge Check',
            caption: 'STAR Knowledge Check'
          }
        ],
        skills: [
          'Instructional Design',
          'eLearning Development',
          'Interactive Design',
          'Assessment Design'
        ],
        client: 'Hospitality Training Solutions'
      }
    ]
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    subtitle: 'Visual Communication & Brand Identity',
    description: 'Creating compelling visual designs that communicate ideas effectively and build strong brand identities.',
    skills: ['Brand Identity', 'UI/UX Design', 'Visual Communication', 'Typography', 'Color Theory'],
    tools: ['Adobe Creative Suite', 'Figma', 'Sketch', 'Procreate'],
    projects: [
      {
        id: 'strongform',
        title: 'StrongForm',
        type: 'Graphic Design',
        description: 'Designed a modern and intuitive logo and app interface for a fitness tracking application.',
        skills: ['Logo Design', 'UI Design', 'Brand Identity', 'Typography'],
        tools: ['Adobe Illustrator', 'Figma', 'Adobe XD'],
        media: [
          {
            type: 'image',
            url: '/images/strongform.jpg',
            alt: 'StrongForm Logo and App Design',
            caption: 'Logo and App Design for StrongForm'
          }
        ]
      },
      {
        id: 'politicus',
        title: 'Politicus',
        type: 'Graphic Design',
        description: 'Created a clean and professional webpage design for a political news platform.',
        skills: ['Web Design', 'UI/UX', 'Visual Hierarchy', 'Responsive Design'],
        tools: ['Figma', 'Adobe Photoshop', 'Sketch'],
        media: [
          {
            type: 'image',
            url: '/images/politicus.jpg',
            alt: 'Politicus Webpage Design',
            caption: 'Webpage Design for Politicus'
          }
        ]
      },
      {
        id: 'tacos-las-delicias',
        title: 'Tacos Las Delicias',
        type: 'Graphic Design',
        description: 'Developed a vibrant and engaging web design for a local Mexican restaurant.',
        skills: ['Web Design', 'Brand Identity', 'Color Theory', 'Typography'],
        tools: ['Adobe XD', 'Adobe Photoshop', 'Illustrator'],
        media: [
          {
            type: 'image',
            url: '/images/tacos-las-delicias.jpg',
            alt: 'Tacos Las Delicias Web Design',
            caption: 'Web Design for Tacos Las Delicias'
          }
        ]
      },
      {
        id: 'cash-crop',
        title: 'Cash Crop',
        type: 'Graphic Design',
        description: 'Designed a user-friendly app interface for an agricultural management platform.',
        skills: ['App Design', 'UI/UX', 'User Flow', 'Wireframing'],
        tools: ['Sketch', 'Adobe XD', 'Figma'],
        media: [
          {
            type: 'image',
            url: '/images/cash-crop.jpg',
            alt: 'Cash Crop App Design',
            caption: 'App Design for Cash Crop'
          }
        ]
      },
      {
        id: '404-error-pages',
        title: '404 Error Pages',
        type: 'Graphic Design',
        description: 'Created a series of creative and engaging 404 error pages for various websites.',
        skills: ['Web Design', 'Illustration', 'User Experience', 'Creativity'],
        tools: ['Adobe Illustrator', 'Photoshop', 'Figma'],
        media: [
          {
            type: 'image',
            url: '/images/404-error-pages.jpg',
            alt: '404 Error Pages Design',
            caption: 'Collection of 404 Error Pages'
          }
        ]
      }
    ]
  },
  {
    id: 'technical-writing',
    title: 'Technical Writing',
    subtitle: 'Simplifying Complex Concepts Through Clear Documentation',
    description: 'A showcase of technical writing projects that demonstrate my ability to transform complex technical information into clear, accessible, and engaging content.',
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
        client: 'Amazon',
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
        client: 'Cloud Service Platform'
      }
    ]
  }
]; 