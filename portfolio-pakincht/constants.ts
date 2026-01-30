import { Experience, Project, SideProject, SocialLink } from './types';

export const NAME = "Pakin Chitwaranggoon";
export const TAGLINE = "Product Designer with 7 years experience | Bridging Business Strategy, User Experience, and AI-Powered Product Development through Technical Engineering";

export const INTRO_TEXT = `Bridging Business Strategy, User Experience, and AI-Powered Product Development through Technical Engineering.`;

export const ABOUT_TEXT = `
  I am a Product Designer with over 7 years of experience in creating digital products that balance business needs with exceptional user experiences. My approach blends design thinking with a deep understanding of technical feasibility and strategic outcomes.

  Throughout my career, I've had the privilege of working within diverse environments—from major financial institutions like SCB TechX and SCB Digital Bank to agile product studios like Celestial Code. I specialize in taking complex problems and transforming them into simple, user-friendly, and delightful interfaces.

  With a background in Finance from Thammasat University, I bring a unique analytical perspective to my design process, ensuring that every pixel serves a purpose and contributes to the bottom line.
`;

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    period: 'FEB 2022 — PRESENT',
    role: 'Product Designer',
    company: 'SCB TechX',
    description: 'Leading project delivery by defining scope and goals with stakeholders. Crafting high-fidelity visual designs and prototypes for complex systems while ensuring design consistency across cross-functional teams.',
    skills: ['Figma', 'Design System', 'Prototyping', 'User Experience'],
    link: 'https://scbtechx.io'
  },
  {
    id: '2',
    period: 'DEC 2020 — JAN 2022',
    role: 'UX Designer',
    company: 'SCB Digital Bank',
    description: 'Defining interaction models and user task flows. Responsible for discovering and defining problems, conducting user testing, and maintaining comprehensive design wireframes and specifications.',
    skills: ['User Research', 'Usability Testing', 'Wireframing', 'UX Strategy'],
    link: 'https://www.scb.co.th'
  },
  {
    id: '3',
    period: 'AUG 2018 — NOV 2020',
    role: 'Designer & Developer',
    company: 'Celestial Code',
    description: 'Managed end-to-end project cycles including design, prototyping, and frontend development for web and mobile applications across various client sectors.',
    skills: ['HTML/CSS', 'React', 'Project Management', 'UI Development'],
    link: 'https://celestialcode.io/'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p5',
    title: 'xPlatform',
    year: '2024',
    description: 'Enterprise Self-Service DevOps Portal accelerating time-to-market from 5 days to 2 hours.',
    image: 'https://i.postimg.cc/NM1TVR00/Frame-14535.png',
    logo: 'https://i.postimg.cc/3RsPn5cC/logo-xplatform.png',
    cardBgColor: '#111827',
    technologies: ['Enterprise UX', 'Cloud Governance', 'DevOps'],
    stats: [
      { label: 'Time-to-Market', value: '5 Days → 2 Hours' },
      { label: 'Excellence Award', value: 'Asian Mgmt 2024' },
      { label: 'Platform Scale', value: 'Enterprise' }
    ],
    details: {
      overview: "xPlatform is a productivity multiplier that transforms a 5-day manual process into a 2-hour automated one while providing full financial governance. For the Design Team, it represents a complex UI/UX challenge successfully met by standardizing DevOps best practices into an intuitive, scalable, and secure Self-Service ecosystem.",
      goal: "Reduce cognitive load and friction by empowering developers to complete complex tasks independently through automated configuration validation and a robust 'Self-Service' philosophy.",
      roleDescription: "As the Lead Designer, I architected the end-to-end UX strategy, designed the Information Architecture (Dashboard, Management, Security, Setup), and established a design system using the Inter typeface with semantic tokens for enterprise-grade scalability.",
      challenge: "Traditional software deployment typically took 3-5 days, creating a significant lag in product launches. DevOps teams were overwhelmed by manual support requests, and business stakeholders lacked real-time visibility into cloud costs.",
      solution: "A centralized DevOps portal featuring Software & IaC Catalogs, 'Single Pane of Control' for financial governance, and integrated DevSecOps scan results in the approval flow.",
      impact: "This innovative approach resulted in xPlatform winning the 'Team of the Year – Technology' at the Asian Management Excellence Awards 2024, directly enhancing the organization’s competitive edge.",
      process: [
        {
          sectionTitle: "Executive Vision: Accelerating Time-to-Market",
          content: "Identifying the business bottleneck where manual deployment processes hindered product launches.",
          points: [
            "DevOps as a Service: Designing an automated portal to reduce lead time from days to hours.",
            "Business Impact: Directly accelerating the organization’s time-to-market and competitive speed.",
            "Award Recognition: Winner of 'Team of the Year – Technology' at Asian Management Excellence Awards 2024."
          ]
        },
        {
          sectionTitle: "Design Architecture: Standardization & Scalability",
          content: "Developing a robust design system to ensure visual and functional consistency across a complex enterprise platform.",
          image: "https://i.postimg.cc/kgxgYLkG/281shots-so.png",
          points: [
            "Inter Typeface & Semantic Tokens: A scalable design language for deep technical configurations.",
            "IaC Catalogs: One-click project kickstarts supporting React, Flutter, Kotlin, and more.",
            "Modular IA: Clear partitioning into Dashboard, Management, Security, and Setup modules."
          ]
        },
        {
          sectionTitle: "Financial Governance: The Single Pane of Control",
          content: "Providing CEOs and Product Owners with total oversight of resources and budget optimization.",
          points: [
            "Cloud Cost Visibility: Real-time dashboards for cloud costs and transaction loads.",
            "Waste Mitigation: Features like Automated Start/Stop Schedulers and Environment TTL (Time-to-Live).",
            "Asset Management: Centralized IT asset inventory and team member management."
          ]
        },
        {
          sectionTitle: "DevSecOps & Operational Excellence",
          content: "Incorporating security at the earliest stage and establishing robust feedback loops for users.",
          points: [
            "Shift-Left Security: Integrated vulnerability scans (AquaSec, Prisma) directly into the approval UX.",
            "CAB System: Change Advisory Board oversight for ISO-compliant software changes.",
            "Support Portal UX: Dedicated Knowledge Base and FAQ to reduce resolution time."
          ]
        }
      ],
      features: [
        { title: "Self-Service Catalog", description: "One-click deployment archetypes with pre-defined standards for React, Kotlin, and more.", image: "https://i.postimg.cc/NM1TVR00/Frame-14535.png" },
        { title: "Financial Dashboard", description: "Real-time visibility into cloud expenses with automated waste mitigation tools like TTL.", image: "https://i.postimg.cc/NM1TVR00/Frame-14535.png" },
        { title: "Shift-Left Security", description: "Vulnerability scans integrated into the UI for stakeholders to review during approval flows.", image: "https://i.postimg.cc/NM1TVR00/Frame-14535.png" },
        { title: "CAB Governance", description: "Structured Change Advisory Board system ensuring international audit standards and ISO compliance.", image: "https://i.postimg.cc/NM1TVR00/Frame-14535.png" }
      ]
    }
  },
  {
    id: 'p3',
    title: 'RERD',
    year: '2025',
    description: 'Market data visualization and AI-powered strategic insights for real estate developers.',
    image: 'https://i.postimg.cc/3J3jsfmH/Frame-14536.png',
    cardBgColor: '#152529',
    technologies: ['Real estate','Banking','AI Insights', 'Data Viz'],
    stats: [{ label: 'Data Points', value: '5M+' }],
    details: {
      overview: "The RERD project is a testament to my ability to lead Digital Transformation. By integrating Google Gemini AI into a high-performance TypeScript environment, I have created a prototype that reduces the cognitive load of real estate professionals, proving that design leadership is about technical feasibility and business intelligence just as much as user experience.",
      goal: "To bridge the gap between complex Business/Financial data and an intuitive user interface, allowing stakeholders to make data-driven decisions in seconds rather than hours.",
      roleDescription: "As the Product Lead and Design Technologist, I spearheaded the project's 'Design-to-Code' fluency, syncing design vision with AI-powered technical implementation using the Google Gemini framework.",
      challenge: "Traditional real estate market analysis is manual, time-consuming, and prone to information overload. Decision-makers often rely on fragmented, delayed reports for multi-million dollar investments.",
      solution: "Developed the Real Estate Radius Dashboard (RERD), an intelligent system that 'understands' reports and provides instant, localized property insights through AI-driven synthesis.",
      impact: "By automating report summaries, RERD addresses the 'App Modernization' needs of real estate teams looking to scale, significantly reducing time-to-insight for feasibility studies.",
      process: [
        {
          sectionTitle: "Strategic Vision – Automating Intelligence",
          content: "Focused on solving the manual, time-consuming nature of market analysis by developing RERD to provide instant, localized property insights.",
          points: [
            "Identified information overload as the primary blocker for real estate developers.",
            "Developed the 'Real Estate Radius' concept for localized property trends.",
            "Bridged complex financial data with an intuitive, interactive UI."
          ]
        },
        {
          sectionTitle: "AI-First Architecture – Powered by Google Gemini",
          content: "Leveraged Large Language Models to transform raw market data into automated strategic reports.",
          image: "https://i.postimg.cc/8zbpDMwv/829shots-so.png",
          points: [
            "Integrated Google Gemini AI Studio framework for intelligent data synthesis.",
            "Utilized GEMINI_API_KEY for advanced prompt engineering and processing.",
            "Moved beyond static dashboards to create a system that 'understands' textual reports."
          ]
        },
        {
          sectionTitle: "Technical Leadership & High-Performance Execution",
          content: "Demonstrated Design-to-Code fluency where vision and implementation are perfectly synced.",
          points: [
            "Functioned as a Design Technologist to ensure perfect fidelity between research and code.",
            "Optimized data visualization layers for high-performance map-based analytics.",
            "Developed a scalable foundation using the rerd-base architecture."
          ]
        },
        {
          sectionTitle: "Business Impact & Industry Focus",
          content: "Specifically targeted the Real Estate and Financial Services sectors to drive operational efficiency.",
          points: [
            "Radius-based IA: Simplified geographic and demographic data into a single cohesive view.",
            "Operational Efficiency: Directly addressed App Modernization needs for scaling teams.",
            "Strategic Summaries: Automated analysis processes previously requiring hours of manual labor."
          ]
        }
      ],
      features: [
        { title: "AI-Driven Strategic Reporting", description: "Transforms raw data into automated reports, reducing manual research time by 70%.", image: "https://i.postimg.cc/3J3jsfmH/Frame-14536.png" },
        { title: "Localized Radius Analytics", description: "Provides deep geographic insights and property trends based on specific site locations.", image: "https://i.postimg.cc/3J3jsfmH/Frame-14536.png" },
        { title: "Data-Centric UI/UX", description: "Visualizes complex real estate metrics in a centralized, high-performance dashboard.", image: "https://i.postimg.cc/3J3jsfmH/Frame-14536.png" }
      ]
    }
  },
  {
    id: 'p1',
    title: 'SmashX',
    year: '2026',
    description: 'A fresh platform for friend groups to organize, book, and gamify badminton sessions.',
    image: 'https://i.postimg.cc/LXcrNKbp/smashx.png',
    cardBgColor: '#131B27',
    technologies: ['Social Design', 'Gamification', 'GenAI'],
    stats: [
      { label: 'Active Users', value: '10K+' },
      { label: 'Avg. Retention', value: '65%' },
      { label: 'Sessions Created', value: '25K+' }
    ],
    details: {
      overview: "SmashX is a social-sports ecosystem that transforms casual badminton sessions into high-stakes competitive arenas. It handles session scheduling, player rankings, and automated financial settlements across mobile platforms.",
      goal: "Reduce 'Social Friction' by automating logistics and fostering long-term engagement through an integrated Elo-based ranking system.",
      roleDescription: "I led the project from conceptualization to engineering, collaborating with active players to define the core loop and building the real-time sync engine using Supabase.",
      impact: "Transformed casual sports meetups into a high-engagement digital arena, reducing scheduling friction by 40% and fostering long-term social commitment through gamified progression.",
      process: [
        {
          sectionTitle: "Problem Identification & Strategic Vision",
          content: "Positioned SmashX as a social platform that transforms casual meetups into high-engagement competitive experiences.",
          points: [
            "The 'Social Friction' Problem: Identified three core pain points: scheduling chaos, lock of competitive engagement, and financial ambiguity.",
            "The 'Digital Arena' Solution: Focused on creating a 'Social Commitment' space that builds a stronger contract among users than standard messaging.",
            "Business Value: Driving higher retention and platform loyalty through social commitment."
          ]
        },
        {
          sectionTitle: "AI Integration & Tech Ecosystem",
          content: "Leveraged Google AI Studio and Supabase to transition from a design concept to a fully functional, real-time product.",
          image: "https://i.postimg.cc/VkDcypbg/smashx-tech.png",
          points: [
            "Google AI Studio: Rapidly prototyped and fine-tuned GenAI prompts to automate the extraction of session details (date, time, venue) from messy chat text.",
            "Supabase Integration: Implemented a robust real-time database, enabling frictionless player join flows and instant data synchronization across friend groups.",
            "Full-Cycle Experience: This stack allowed me to open the world of end-to-end product development, proving that designers can architect functional systems."
          ]
        },
        {
          sectionTitle: "Gamification & Behavioral Design",
          content: "Designed an Elo-based system to add a layer of adrenaline and social status to every match.",
          image: "https://i.postimg.cc/NMzdYyrg/417shots-so.png",
          points: [
            "The 'Elo' Addiction: Ranking Point (RP) system borrow logic from competitive video games.",
            "Visual Status & Tiers: Dynamic tier system ('Unpolished' to 'Ascended') using advanced CSS animations (glowing, burning, glitching).",
            "Social Proofing: Instagram-ready report generation turning user progress into organic marketing."
          ]
        },
        
      ],
      features: [
        { title: "Personalized Avatars", description: "Users can select their favorite avatar and background color to personalize their profile.", image: "https://i.postimg.cc/GtjVR3dm/878shots-so.png" },
        { title: "Elo-based Ranking", description: "Competitive points system with animated rank tiers.", image: "https://i.postimg.cc/NMzdYyrg/417shots-so.png" },
        { title: "Smart Court Management", description: "Real-time sync and fair rotation logic for hosts.", image: "https://i.postimg.cc/CMnXzd2f/877shots-so.png" },
        { title: "Automated Bill Calculator", description: "Resolve cost-splitting friction with transparent weighted billing.", image: "https://i.postimg.cc/wjxSk2bh/smashx-bill.png" }
      ]
    }
  },
  {
    id: 'p4',
    title: 'QChang',
    year: '2022',
    description: 'Home and living digital platform bridging customers and service providers.',
    image: 'https://i.postimg.cc/TwBXFWpT/qchang.png',
    logo: 'https://i.postimg.cc/vmjjZwMK/logo-qchang.png',
    cardBgColor: '#051A29',
    technologies: ['Marketplace', 'Mobile'],
    stats: [
        { label: 'User Rating', value: '4.89/5' },
        { label: 'Total Reviews', value: '3.1K+' },
        { label: 'Providers', value: '2k+' }
    ],
    details: {
      overview: "Q-CHANG is a home service platform with a clear mission: To help homeowners find reliable services, support technicians to grow their income, and ensure safety for all stakeholders. This redesign transformed a complex, structureless platform into a streamlined, high-rating digital experience.",
      goal: "To walk aspiring UX/UI designers through the redesign of a home service platform, illustrating how structured thinking turns complex user challenges into elegant solutions.",
      roleDescription: "As the Product Design Lead, I managed the end-to-end redesign process: from the initial website audit and sitemap analysis to architecting a new Information Architecture and establishing a scalable Design System.",
      challenge: "While Q-CHANG offered many services, its structure was not user-friendly. Fragmented resource gathering and a lack of clear blueprint led to a confusing experience for homeowners looking to book maintenance.",
      solution: "A meticulous 4-stage redesign process (Audit, IA, Design System, UI) focused on discoverability, logical navigation, and a cohesive visual language.",
      impact: "The redesign achieved an impressive average rating of 4.89 out of 5 based on 3.1K reviews, validating the effectiveness of the new user flow and service accessibility.",
      process: [
        {
          sectionTitle: "The Foundation: Website Audit & Discovery",
          content: "A comprehensive health check-up to diagnose structural problems and gather existing resources.",
          points: [
            "Resource Gathering: Collected a complete inventory of every screen, feature, and content piece.",
            "Sitemap Analysis: Maped the existing structure to identify deep-seated usability issues.",
            "Identifying Friction: Pinpointed where the information architecture was failing homeowners."
          ]
        },
        {
          sectionTitle: "Building the Blueprint: Designing a New IA",
          content: "Organizing content logically—like a well-laid-out grocery store—to ensure users find services with minimal effort.",
          points: [
            "Streamlined User Flow: Home -> Services -> Choose Sub-service -> Package Detail -> Info -> Confirm -> Payment -> Success.",
            "Discoverability Focus: Reorganized services into a central hub for easier exploration.",
            "Cognitive Load Reduction: Ensured a logical step-by-step path from starting point to successful booking."
          ]
        },
        {
          sectionTitle: "Creating Consistency: The Design System",
          content: "Establishing a single source of truth for the design team to ensure scalability and visual cohesion.",
          points: [
            "Typography: Standardized on DB Heavent to ensure high legibility and reduce eye strain.",
            "Color Palette: Implemented Primary Red for key actions, conditioning users to recognize interactive elements.",
            "UI Components: Unified button styles (e.g., 'ENQUIRE') to eliminate user guesswork."
          ]
        },
        {
          sectionTitle: "Bringing it to Life: Finalizing the UI",
          content: "Combining strategic blueprints with visual language to create a polished, pixel-perfect product.",
          points: [
            "Polishing Details: Applied the design system to every screen, ensuring brand alignment.",
            "Wording Refinement: Adjusted copy to align precisely with Q-CHANG's brand characteristics.",
            "Mobile-First Execution: Crafted clean, modern mobile screens for browsing and reviewing technicians."
          ]
        },
        {
          sectionTitle: "Measuring Success: The Impact",
          content: "Validating the redesign through real-world engagement and positive user sentiment.",
          points: [
            "High User Satisfaction: Achieved a 4.89/5 average rating across 3,100+ active users.",
            "Continuous Improvement: Established a feedback loop to iterate based on detailed user suggestions.",
            "Business Validation: Successfully bridged the trust gap between homeowners and service providers."
          ]
        }
      ],
      features: [
        { title: "Standardized Service Hub", description: "Centralized location for all 2,000+ service providers with clear categorization.", image: "https://i.postimg.cc/65fXpy7y/676shots-so.png" },
        { title: "Fixed Price Booking Flow", description: "Transparent user flow that removes financial ambiguity before confirmation.", image: "https://i.postimg.cc/65fXpy7y/676shots-so.png" },
        { title: "Verified Reviews System", description: "Integrated feedback mechanism that drove a 4.89 star satisfaction rate.", image: "https://i.postimg.cc/65fXpy7y/676shots-so.png" }
      ]
    }
  }
];

export const SIDE_PROJECTS: SideProject[] = [
  {
    id: 'sp_emoji',
    title: 'Emoji Soundboard',
    description: 'A lively visual experience transforming audio interaction via Web Audio API.',
    category: 'Experiments',
    image: 'https://i.postimg.cc/5tCyCQ2G/372shots-so.png',
    link: 'https://soundboard-emoji.vercel.app/'
  }
];

export const SOCIALS: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pakincht/', icon: 'Linkedin' },
  { name: 'Github', url: 'https://github.com', icon: 'Github' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
];