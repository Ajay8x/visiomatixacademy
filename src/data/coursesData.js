export const COURSES = [
  {
    id: 'full-stack-web-dev',
    category: 'tech',
    title: 'Full Stack Web Development (with AI)',
    badge: 'Flagship Tech Track',
    duration: '6 Months',
    mode: 'Practical Studio & Lab',
    level: 'Beginner to Advanced',
    image: '/courses/web-dev.jpg',
    shortDesc: 'Master front-end and back-end development with modern JavaScript, React, Node.js, databases, and AI-assisted engineering workflows on real client projects.',
    skills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React 19', 'Node.js & Express', 'MongoDB / SQL', 'REST APIs & Git', 'AI Coding Tools'],
    outcomes: [
      'Build 4+ production-grade web applications from scratch',
      'Integrate modern AI workflow tools into web development pipelines',
      'Learn deployment, API architecture, and database design',
      'Eligible for 3 to 6-month hands-on agency internship'
    ],
    modules: [
      { title: 'Module 1: Web Fundamentals & Modern CSS', topics: ['Semantic HTML5, CSS Grid, Flexbox, responsive layouts, TailwindCSS, accessible UI design'] },
      { title: 'Module 2: Advanced JavaScript & Asynchronous Programming', topics: ['DOM manipulation, ES6+ modules, Promises, Async/Await, Fetch API, TypeScript basics'] },
      { title: 'Module 3: Front-End Mastery with React', topics: ['Components, Hooks, State Management, React Router, Next.js fundamentals, UI libraries'] },
      { title: 'Module 4: Back-End & Database Engineering', topics: ['Node.js runtime, Express server architecture, MongoDB & PostgreSQL, JWT authentication, CRUD APIs'] },
      { title: 'Module 5: AI-Assisted Development & Deployment', topics: ['AI workflow integration, Git version control, CI/CD, cloud deployment on Vercel/Render'] },
      { title: 'Module 6: Capstone Project & Agency Internship', topics: ['Full cycle development of a real-world client brief, code reviews, technical interview prep'] }
    ]
  },
  {
    id: 'ui-ux-design-figma',
    category: 'design',
    title: 'UI/UX Design Masterclass (Figma & Systems)',
    badge: 'High Demand',
    duration: '4 Months',
    mode: 'Studio Workshops',
    level: 'All Levels',
    image: '/courses/ui-ux.jpg',
    shortDesc: 'From user research and information architecture to high-fidelity Figma prototypes and scalable design systems for modern digital products.',
    skills: ['Figma Masterclass', 'Design Thinking', 'Wireframing & Prototyping', 'Design Systems', 'Micro-interactions', 'User Testing'],
    outcomes: [
      'Complete 2 comprehensive end-to-end UX case studies',
      'Create production-ready design systems with Figma auto-layout and components',
      'Conduct usability tests and user journey mapping',
      'Industry-ready portfolio presentation for design roles'
    ],
    modules: [
      { title: 'Module 1: UX Foundations & User Research', topics: ['Design thinking principles, user personas, empathy mapping, user interview methodologies'] },
      { title: 'Module 2: Information Architecture & Wireframing', topics: ['User flows, sitemaps, low-fidelity sketching, clickable wireframe testing'] },
      { title: 'Module 3: Visual Design & Figma Advanced Features', topics: ['Color theory, typography hierarchy, Figma auto-layout, variants, design tokens'] },
      { title: 'Module 4: Interactive Prototyping & Motion UI', topics: ['Smart animate, interactive components, micro-interactions, responsive mobile & desktop viewports'] },
      { title: 'Module 5: Capstone Product Case Study', topics: ['Full product redesign, client presentation decks, portfolio curation'] }
    ]
  },
  {
    id: 'digital-marketing-growth',
    category: 'marketing',
    title: 'Digital Marketing & Performance Strategy',
    badge: 'Industry Essential',
    duration: '4 Months',
    mode: 'Live Agency Campaigns',
    level: 'Beginner to Intermediate',
    image: '/courses/marketing.jpg',
    shortDesc: 'Learn performance-driven growth marketing, search engine optimization (SEO), social media branding, Google Ads, and analytics directly from active marketers.',
    skills: ['SEO & SEM', 'Meta & Google Ads', 'Content Strategy', 'Social Media Branding', 'Google Analytics 4', 'Email & Funnel Marketing'],
    outcomes: [
      'Manage mock and live campaign budgets with real ROI tracking',
      'Execute on-page and technical SEO audits with professional tools',
      'Design conversion-focused landing pages and lead funnels',
      'Portfolio of executed campaigns and analytics reports'
    ],
    modules: [
      { title: 'Module 1: Marketing Fundamentals & Market Research', topics: ['Target audience segmentation, competitor analysis, customer journey mapping, brand positioning'] },
      { title: 'Module 2: Search Engine Optimization (SEO)', topics: ['Keyword research, technical SEO, on-page optimization, backlink strategies, search console'] },
      { title: 'Module 3: Performance Ads & Paid Media', topics: ['Google Search & Display ads, Meta Ads Manager, audience targeting, A/B ad creative testing'] },
      { title: 'Module 4: Social Media Strategy & Content Marketing', topics: ['Visual storytelling, organic reach strategies, editorial calendars, brand partnerships'] },
      { title: 'Module 5: Web Analytics & Conversion Rate Optimization', topics: ['GA4 setup, event tracking, heatmaps, conversion rate optimization (CRO), reporting'] }
    ]
  },
  {
    id: 'cgi-vfx-3d-modeling',
    category: 'creative',
    title: 'CGI Advertising, 3D Modeling & Motion Graphics',
    badge: 'Creative Specialization',
    duration: '6 Months',
    mode: 'Creative Studio Lab',
    level: 'Beginner to Advanced',
    image: '/courses/3d-cgi.gif',
    shortDesc: 'Enter the world of commercial 3D modeling, hyper-realistic CGI advertising, visual effects (VFX), and motion design used by global brands and agencies.',
    skills: ['Blender / Maya', '3D Asset Modeling', 'Texturing & Lighting', 'Commercial CGI Ads', 'After Effects', 'Motion Graphics'],
    outcomes: [
      'Build realistic 3D product visualizations and cinematic commercials',
      'Master lighting, material shaders, and camera staging',
      'Create high-impact motion graphics reels for digital advertising',
      'Studio showreel demonstrating professional 3D and VFX workflows'
    ],
    modules: [
      { title: 'Module 1: 3D Modeling Fundamentals', topics: ['Topology, polygonal modeling, hard-surface modeling, geometry workflows'] },
      { title: 'Module 2: Texturing, Shading & Materials', topics: ['PBR materials, procedural textures, UV unwrapping, photo-realistic material creation'] },
      { title: 'Module 3: Studio Lighting & Rendering Engines', topics: ['Studio lighting setups, HDRI environments, render optimization, composition'] },
      { title: 'Module 4: CGI Commercial Advertising & Product Animation', topics: ['Camera motion, physics simulations, product explosion views, commercial pacing'] },
      { title: 'Module 5: After Effects & Motion Design', topics: ['Kinetic typography, compositing, visual effects integration, color grading'] },
      { title: 'Module 6: Showreel Production', topics: ['Curating a dynamic showreel, client project review, studio presentation'] }
    ]
  },
  {
    id: 'data-analytics-bi',
    category: 'tech',
    title: 'Data Analytics & Business Intelligence',
    badge: 'Career Accelerator',
    duration: '4 Months',
    mode: 'Hands-on Datasets',
    level: 'Beginner to Intermediate',
    image: '/courses/data-analytics.jpg',
    shortDesc: 'Transform raw data into meaningful business insights. Learn SQL querying, Excel dashboards, Python data libraries, and Power BI visualization tools.',
    skills: ['Advanced Excel', 'SQL Querying', 'Power BI & Tableau', 'Python for Data', 'Data Cleaning', 'Business Dashboarding'],
    outcomes: [
      'Build dynamic executive dashboards in Power BI and Tableau',
      'Write complex SQL queries for multi-table business databases',
      'Perform exploratory data analysis (EDA) with Python pandas & seaborn',
      'Real-world business case studies portfolio'
    ],
    modules: [
      { title: 'Module 1: Advanced Excel for Analytics', topics: ['Pivot tables, lookup functions, data cleaning, automated formulas, charts'] },
      { title: 'Module 2: Relational Databases & SQL', topics: ['Database schemas, SELECT queries, JOINs, aggregations, CTEs, subqueries'] },
      { title: 'Module 3: Business Intelligence with Power BI', topics: ['Data modeling, DAX formulas, interactive dashboards, KPI visualization'] },
      { title: 'Module 4: Python for Data Analysis', topics: ['Python basics, Pandas, NumPy, data wrangling, Matplotlib & Seaborn visualizations'] },
      { title: 'Module 5: Industry Case Studies & Capstone', topics: ['End-to-end business intelligence report solving actual market problems'] }
    ]
  },
  {
    id: 'graphic-design-branding',
    category: 'design',
    title: 'Graphic Design & Brand Identity Systems',
    badge: 'Visual Creative',
    duration: '3 Months',
    mode: 'Creative Studio',
    level: 'All Levels',
    image: '/courses/graphic-design.jpg',
    shortDesc: 'Master the visual art of brand communication. Create logos, marketing collateral, social media assets, and complete brand identity guidelines.',
    skills: ['Adobe Illustrator', 'Photoshop', 'Typography', 'Logo Design', 'Brand Identity', 'Print & Digital Layouts'],
    outcomes: [
      'Develop complete corporate visual identity guidelines for 2 brands',
      'Master vector illustrations, logo design, and brand asset generation',
      'Create high-converting social media and print marketing collateral',
      'Curated Behance/Dribbble portfolio presentation'
    ],
    modules: [
      { title: 'Module 1: Visual Design Principles & Typography', topics: ['Color harmonies, layout balance, hierarchy, font pairing, design psychology'] },
      { title: 'Module 2: Vector Art & Logo Design in Illustrator', topics: ['Pen tool mastery, vector geometry, emblem design, icon sets'] },
      { title: 'Module 3: Photo Manipulation & Posters in Photoshop', topics: ['Masking, blending modes, digital compositions, social media ad creative design'] },
      { title: 'Module 4: Complete Brand Identity Project', topics: ['Logo guidelines, brand books, packaging concepts, presentation mockups'] }
    ]
  }
];

export const COURSE_CATEGORIES = [
  { id: 'all', label: 'All Programs' },
  { id: 'tech', label: 'Technology & AI' },
  { id: 'design', label: 'UI/UX & Design' },
  { id: 'marketing', label: 'Digital Marketing' },
  { id: 'creative', label: '3D CGI & VFX' }
];
