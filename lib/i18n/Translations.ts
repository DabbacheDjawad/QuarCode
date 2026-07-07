// lib/i18n/translations.ts

export type Locale = "en" | "fr" | "ar";

// ── Shared legal content types ─────────────────────────────────────────────────

export type LegalSection = {
  id: string;
  number: string;
  title: string;
  /** Flat text blocks. The page components convert these to styled JSX. */
  intro?: string;
  subSections?: {
    heading: string;
    body?: string;
    bullets?: string[];
  }[];
  bullets?: string[];
  note?: string;
  contact?: {
    company: string;
    email: string;
    address: string;
    website: string;
  };
};

export type LegalPageTranslations = {
  metaTitle: string;
  metaDescription: string;
  badge: string;
  lastUpdated: string;
  contentsLabel: string;
  headline1: string;
  headline2: string;
  sections: LegalSection[];
};

// ─────────────────────────────────────────────────────────────────────────────

export const translations = {
  en: {
    nav: {
      services: "Services",
      about: "About",
      pricing: "Pricings",
      contact: "Contact",
      cta: "Get Started",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      badge: "Engineering Excellence Algeria",
      headline1: "Engineering Digital",
      headline2: "Excellence",
      body: "Algeria's premier partner for custom web and software solutions. We build high-performance digital products that scale with your vision.",
      cta1: "Get a Free Consultation",
      cta2: "View Our Work",
      imageAlt:
        "A sophisticated dark UI dashboard showing intricate data visualizations and code snippets.",
    },
    services: {
      sectionHeadline1: "Solutions Tailored for",
      sectionHeadline2: "Performance",
      sectionBody:
        "We combine global engineering standards with local insights to deliver world-class software from the heart of Algeria.",
      prevLabel: "Previous",
      nextLabel: "Next",
      items: [
        {
          title: "Web Development",
          description:
            "High-speed, SEO-optimized web applications built with the latest frameworks like React and Next.js.",
          features: [
            "Progressive Web Apps",
            "Enterprise E-commerce",
            "Custom CMS Solutions",
          ],
        },
        {
          title: "Custom Software",
          description:
            "Bespoke desktop and mobile software designed to automate complex business workflows and operations.",
          features: [
            "Cloud Architecture",
            "API Integrations",
            "Desktop Applications",
          ],
        },
        {
          title: "Digital Strategy",
          description:
            "Data-driven roadmaps to help your business navigate the digital landscape and achieve sustainable growth.",
          features: [
            "Product Roadmapping",
            "UX/UI Research",
            "Market Analysis",
          ],
        },
      ],
    },
    contact: {
      headline1: "Ready to Build the",
      headline2: "Future",
      body: "Drop us a line to discuss your project. Our engineers are ready to transform your vision into a robust digital solution.",
      emailLabel: "Email us",
      locationLabel: "Our Studio",
      location: "Algiers, Algeria",
      email: "hello@quarcode.com",
      fields: {
        name: "Full Name",
        namePlaceholder: "John Doe",
        email: "Email Address",
        emailPlaceholder: "john@example.com",
        message: "Your Message",
        messagePlaceholder: "Tell us about your project...",
        submit: "Send Message",
      },
    },
    footer: {
      tagline:
        "Engineering Excellence from Algeria. Building the next generation of digital infrastructure.",
      copyright: "© 2026 Quarcode. Engineering Excellence from Algeria.",
      columns: [
        {
          heading: "Company",
          links: [
            { label: "About Us", href: "/About" },
            { label: "Contact", href: "/Contact" },
          ],
        },
        {
          heading: "Connect",
          links: [
            
            { label: "GitHub", href: "https://github.com/DabbacheDjawad" },
            { label: "Instagram", href: "https://www.instagram.com/quarcodeagency/" },
            { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591658214352" },
          ],
        },
      ],
      newsletter: {
        heading: "Newsletter",
        body: "Stay updated with our latest insights.",
        emailPlaceholder: "Email",
        emailLabel: "Email for newsletter",
        subscribeLabel: "Subscribe",
      },
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    // ── About ────────────────────────────────────────────────────────────────
    aboutPage: {
      metaTitle: "About Us | Quarcode – Engineering Excellence",
      footerTagline:
        "Pioneering software engineering excellence in Algeria since 2021.",
      footerCopyright: "© 2026 Quarcode. Engineering Excellence from Algeria.",
      footerColumns: [
        {
          heading: "Quick Links",
          links: [
            { label: "Services", href: "/" },
            { label: "About Us", href: "/about" },
            { label: "Case Studies", href: "#" },
            { label: "Careers", href: "#" },
          ],
        },
        {
          heading: "Connect",
          links: [
            
            { label: "GitHub", href: "https://github.com/DabbacheDjawad" },
            { label: "Instagram", href: "https://www.instagram.com/quarcodeagency/" },
            { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591658214352" },
          ],
        },
        {
          heading: "Legal",
          links: [
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms-of-service" },
          ],
        },
      ],
    },
    aboutHero: {
      badge: "Engineering Algerian Innovation",
      headline1: "Architecting the",
      headline2: "Future of Algeria",
      headline3: "through Code.",
      body: "Quarcode is a premier software solutions agency dedicated to elevating the digital landscape of Algeria. We blend local insight with global engineering standards to build high-performance software.",
    },
    ourStory: {
      badge: "Our Story",
      headline: "From Algeria, For the World",
      body1:
        "Founded in 2021, Quarcode was born from a simple but powerful belief: that world-class software engineering talent exists in Algeria and deserves a world-class stage.",
      body2:
        "We started with a small team of five in a co-working space in Algiers. Today, we operate a full-scale studio with over 45 engineers, designers, and strategists.",
      milestone1Year: "2021",
      milestone1Label: "Founded",
      milestone2Year: "2023",
      milestone2Label: "45+ Engineers",
      milestone3Year: "2024",
      milestone3Label: "120+ Projects",
    },
    missionVision: {
      mission: {
        title: "Our Mission",
        body: "To empower Algerian enterprises with world-class software that drives growth, streamlines operations, and fosters local innovation.",
      },
      vision: {
        title: "Our Vision",
        body: "To become the definitive leader in Algerian digital transformation, recognized globally as the hub for engineering excellence in the Maghreb region.",
      },
    },
    coreValues: {
      sectionTitle: "Our Foundational Values",
      sectionBody:
        "The core principles that guide every line of code we write and every decision we make.",
      items: [
        {
          title: "Quality",
          description:
            "We don't settle for 'functional.' Our code is clean, our architectures are resilient, and our user experiences are flawless.",
        },
        {
          title: "Innovation",
          description:
            "We push boundaries by adopting cutting-edge technologies. From AI integration to advanced cloud-native architectures.",
        },
        {
          title: "Integrity",
          description:
            "Transparency is our default state. We build trust through honest communication and ethical data handling.",
        },
      ],
    },
    leadership: {
      sectionTitle: "The Minds Behind Quarcode",
      sectionBody:
        "Our leadership team consists of seasoned software architects and product strategists with decades of combined experience.",
      stats: [
        { value: "45+", label: "Active Engineers" },
        { value: "120+", label: "Projects Delivered" },
      ],
      leaders: [
        { name: "Amine B.", role: "Chief Architect" },
        { name: "Sara K.", role: "Product Strategy" },
      ],
    },
    aboutCta: {
      headline: "Ready to Build Something Extraordinary?",
      cta1: "Work with Us",
      cta2: "View Our Portfolio",
    },
    // ── Contact ──────────────────────────────────────────────────────────────
    contactPage: {
      metaTitle: "Contact Us | Quarcode Engineering Excellence",
      footerTagline: "Forging the future of software in Algeria and beyond.",
      footerCopyright: "© 2026 Quarcode. Engineering Excellence from Algeria.",
      footerColumns: [
        {
          heading: "Platform",
          links: [
            { label: "Services", href: "/Services" },
            { label: "About", href: "/About" },
            { label: "Work", href: "#" },
          ],
        },
        {
          heading: "Company",
          links: [
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms-of-service" },
          ],
        },
        {
          heading: "Social",
          links: [
            
            { label: "GitHub", href: "https://github.com/DabbacheDjawad" },
          ],
        },
      ],
    },
    contactHero: {
      badge: "READY TO COLLABORATE",
      headline1: "Let's build something",
      headline2: "extraordinary",
      headline3: "together.",
      body: "Based in the heart of Algiers, we bridge the gap between complex engineering and elegant design.",
    },
    contactForm: {
      projectTypes: [
        "Web Development",
        "Mobile Application",
        "Enterprise Software",
        "UI/UX Design",
        "AI/ML Integration",
      ],
      fields: {
        name: "Full Name",
        namePlaceholder: "John Doe",
        email: "Email Address",
        emailPlaceholder: "john@example.com",
        projectType: "Project Type",
        message: "Message",
        messagePlaceholder:
          "Tell us about your project goals, timeline, and any specific requirements...",
        submit: "Send Message",
        sending: "Sending…",
      },
      status: {
        success:
          "Your message has been sent! We'll get back to you within 24 hours.",
        error:
          "Failed to send your message. Please try again or email us directly at hello@quarcode.dz.",
        validationSummary: "Please fix the errors below.",
        fieldErrors: {
          fullName: "Please enter your full name (at least 2 characters).",
          email: "Please enter a valid email address.",
          projectType: "Please select a project type.",
          message: "Please describe your project (at least 20 characters).",
        },
      },
    },
    contactSidebar: {
      officeTitle: "located in",
      officeAddress: "Ali Mendjeli, UV 6 \nConstantine, 25019\nAlgeria",
      emailTitle: "Electronic Mail",
      connectTitle: "Connect with us",
      openInMaps: "Open in Maps",
      mapTitle: "Quarcode office location — Ali Mendjeli, Constantine",
      mapLabel: "Ali Mendjeli · Constantine",
    },
    // ── FAQ ──────────────────────────────────────────────────────────────────
    faqPage: {
      metaTitle: "FAQ | Quarcode – Engineering Excellence",
      metaDescription:
        "Answers to common questions about our pricing, process, timelines, and support services.",
      footerTagline:
        "Engineering Excellence from Algeria. Building tomorrow's digital infrastructure today.",
      footerCopyright: "© 2026 Quarcode. Engineering Excellence from Algeria.",
      footerColumns: [
        {
          heading: "Platform",
          links: [
            { label: "Project Management", href: "#" },
            { label: "Developer Portal", href: "#" },
          ],
        },
        {
          heading: "Company",
          links: [
            { label: "Terms of Service", href: "/terms-of-service" },
            { label: "Privacy Policy", href: "/privacy-policy" },
          ],
        },
        {
          heading: "Connect",
          links: [
            
            { label: "GitHub", href: "https://github.com/DabbacheDjawad" },
          ],
        },
      ],
      hero: {
        badge: "Support Center",
        headline1: "Frequently Asked",
        headline2: "Questions.",
        body: "Everything you need to know about our process, pricing, timelines, and how we build professional websites.",
      },
    },
    faqSidebar: {
      categoriesLabel: "Categories",
      allLabel: "All Questions",
      stillCuriousTitle: "Still Curious?",
      stillCuriousBody:
        "Can't find the answer you're looking for? Chat with our team directly.",
      stillCuriousCta: "Contact Us",
    },
    faqItems: [
      {
        id: "cost",
        question: "How much does a website cost?",
        answer: {
          intro:
            "The cost depends on the type of website and the features you need. Our pricing starts at 30,000 DA for a professional business website.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "timeline",
        question: "How long does it take to build a website?",
        answer: {
          intro: "The timeline depends on the project's complexity:",
          tags: ["Business Website: 5–7 days", "Custom Web App: 2–6 weeks"],
          bullets: [],
          steps: [],
          checks: [],
          note: "A detailed project timeline will be provided before development begins.",
        },
      },
      {
        id: "mobile",
        question: "Will my website work on mobile devices?",
        answer: {
          intro: "Yes. Every website we build is fully responsive.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "cms",
        question: "Can I update my website myself?",
        answer: {
          intro:
            "Yes. If your project includes an admin dashboard, you'll be able to easily manage your content without any technical knowledge.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "seo",
        question: "Is SEO included?",
        answer: {
          intro:
            "Yes. All our websites include basic SEO optimisation. Our Business package also includes advanced SEO.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "hosting",
        question: "Do you provide hosting and domain registration?",
        answer: {
          intro: "Yes. We can handle everything for you, including:",
          tags: [],
          bullets: [
            "Domain registration",
            "Web hosting",
            "SSL certificate (HTTPS)",
            "Server setup and deployment",
          ],
          steps: [],
          checks: [],
          note: "Your website will be delivered ready to go live.",
        },
      },
      {
        id: "maintenance",
        question: "Do you offer website maintenance?",
        answer: {
          intro: "Yes. We provide maintenance services that include:",
          tags: [],
          bullets: [
            "Security updates",
            "Regular backups",
            "Performance monitoring",
            "Bug fixes",
            "Technical support",
          ],
          steps: [],
          checks: [],
          note: "This keeps your website secure, fast, and up to date.",
        },
      },
      {
        id: "revisions",
        question: "Can I request changes after delivery?",
        answer: {
          intro: "Absolutely. Minor revisions are included after delivery.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "remote",
        question: "Do you work only with clients in Algeria?",
        answer: {
          intro:
            "No. We work with businesses and entrepreneurs in Algeria and internationally.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "start",
        question: "How do I get started?",
        answer: {
          intro: "Getting started is simple:",
          tags: [],
          bullets: [],
          steps: [
            "Contact us.",
            "Tell us about your project.",
            "We'll discuss your requirements.",
            "You'll receive a detailed quotation.",
            "Once approved, we'll begin development.",
          ],
          checks: [],
          note: "",
        },
      },
      {
        id: "ownership",
        question: "Will I own my website?",
        answer: {
          intro:
            "Yes. Once the project is completed and the final payment is made, you will have full ownership.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "why",
        question: "Why choose Quarcode?",
        answer: {
          intro: "Here's what sets Quarcode apart:",
          tags: [],
          bullets: [],
          steps: [],
          checks: [
            "Modern and professional design",
            "Fully custom development",
            "Fast, secure, and scalable websites",
            "SEO-friendly structure",
            "Responsive on all devices",
            "Ongoing support after launch",
            "Transparent communication",
            "On-time project delivery",
            "Solutions tailored to your business goals",
          ],
          note: "",
        },
      },
    ],
    // ── Services page ────────────────────────────────────────────────────────
    servicesPage: {
      metaTitle: "Services | Quarcode – Engineering Excellence",
      footerCopyright: "© 2026 Quarcode. Engineering Excellence from Algeria.",
      footerColumns: [
        {
          heading: "Services",
          links: [
            { label: "Website Development", href: "/services" },
            { label: "E-Commerce", href: "/services" },
            { label: "Custom Web Applications", href: "/services" },
            { label: "SEO Optimisation", href: "/services" },
          ],
        },
        {
          heading: "Connect",
          links: [
            
            { label: "GitHub", href: "https://github.com/DabbacheDjawad" },
            { label: "Instagram", href: "https://www.instagram.com/quarcodeagency/" },
            { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591658214352" },
          ],
        },
        {
          heading: "Legal",
          links: [
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms-of-service" },
          ],
        },
      ],
      hero: {
        badge: "Our Services",
        headline1: "Building Digital Solutions That Help Your",
        headline2: "Business Grow",
        body: "At Quarcode, we design and develop modern, high-performance websites and web applications tailored to your business goals.",
      },
      why: {
        sectionTitle: "Why Choose Quarcode?",
        sectionBody:
          "We don't just build websites — we build digital foundations that help your business thrive.",
        items: [
          {
            icon: "bolt",
            title: "Modern Technologies",
            body: "We use reliable and modern technologies to build fast, secure, and scalable websites.",
          },
          {
            icon: "devices",
            title: "Responsive Design",
            body: "Every website looks and performs beautifully on desktops, tablets, and smartphones.",
          },
          {
            icon: "travel_explore",
            title: "SEO-Friendly",
            body: "Our websites are built with search engines in mind to help improve your online visibility.",
          },
          {
            icon: "lock",
            title: "Secure by Default",
            body: "Security is integrated into every project using best practices and modern standards.",
          },
          {
            icon: "tune",
            title: "Tailored Solutions",
            body: "Every business is unique. We build solutions that fit your goals — not generic templates.",
          },
          {
            icon: "support_agent",
            title: "Ongoing Support",
            body: "Our relationship doesn't end at launch. We're here to support you as your business grows.",
          },
        ],
      },
      process: {
        sectionTitle: "Our Process",
        sectionBody:
          "A clear, structured approach so you always know what's happening and what comes next.",
        steps: [
          {
            number: "01",
            title: "Discovery",
            body: "We learn about your business, goals, and requirements.",
          },
          {
            number: "02",
            title: "Planning",
            body: "We define the project scope, structure, and timeline.",
          },
          {
            number: "03",
            title: "Design",
            body: "We create a modern and intuitive user interface.",
          },
          {
            number: "04",
            title: "Development",
            body: "We build your website using modern technologies and best practices.",
          },
          {
            number: "05",
            title: "Testing",
            body: "Every feature is carefully tested to ensure quality, performance, and security.",
          },
          {
            number: "06",
            title: "Launch",
            body: "Your website goes live, fully optimised and ready for your customers.",
          },
        ],
      },
      cta: {
        headline: "Ready to Start Your Project?",
        body: "Let's build a website that represents your brand, attracts customers, and helps your business grow.",
        cta1: "Get a Free Quote",
        cta2: "Read Our FAQ",
      },
      getAQuote: "Get a Quote",
      mainServices: [
        {
          id: "web",
          title: "Website Development",
          description:
            "We create professional websites that showcase your business and help convert visitors into customers.",
          items: [
            "Custom website development",
            "Modern and responsive design",
            "Fast loading performance",
            "Contact forms & Google Maps",
            "SSL (HTTPS) included",
            "Basic SEO optimisation",
            "Cross-browser compatibility",
          ],
          perfectFor: [
            "Small businesses",
            "Restaurants",
            "Doctors",
            "Lawyers",
            "Agencies",
            "Schools",
            "Freelancers",
          ],
        },
        {
          id: "ecom",
          title: "E-Commerce Development",
          description:
            "Sell your products online with a secure, easy-to-manage store built for growth.",
          items: [
            "Product catalog & categories",
            "Shopping cart & checkout",
            "Order & inventory management",
            "Customer accounts",
            "Discount codes",
            "Analytics integration",
          ],
          perfectFor: [],
        },
        {
          id: "app",
          title: "Custom Web Applications",
          description:
            "Need something beyond a standard website? We build bespoke solutions designed around your exact business processes.",
          items: [
            "Booking systems",
            "CRM platforms",
            "Internal dashboards",
            "Client & employee portals",
            "Inventory systems",
          ],
          perfectFor: [],
        },
        {
          id: "design",
          title: "UI/UX Design",
          description:
            "A great website isn't just beautiful — it's easy to use.",
          items: [
            "Clean & modern interfaces",
            "Mobile-first approach",
            "User-focused layouts",
            "Intuitive navigation",
            "Accessibility-ready",
          ],
          perfectFor: [],
        },
        {
          id: "seo",
          title: "SEO Optimisation",
          description:
            "A beautiful website is only valuable if people can find it.",
          items: [
            "Website structure audit",
            "Page speed improvements",
            "Meta tags & schema",
            "Image optimisation",
            "Mobile performance",
            "Technical SEO",
          ],
          perfectFor: [],
        },
        {
          id: "perf",
          title: "Performance Optimisation",
          description:
            "Speed matters. A faster website means happier visitors, lower bounce rates, and higher conversions.",
          items: [
            "Faster loading times",
            "Better Core Web Vitals",
            "Improved user experience",
            "Lower bounce rates",
            "Higher conversion rates",
          ],
          perfectFor: [],
        },
        {
          id: "maintenance",
          title: "Website Maintenance",
          description: "Keep your website secure and running smoothly.",
          items: [
            "Security updates",
            "Bug fixes",
            "Regular backups",
            "Performance monitoring",
            "Content updates",
            "Technical support",
          ],
          perfectFor: [],
        },
        {
          id: "hosting",
          title: "Hosting & Deployment",
          description: "We take care of getting your website online.",
          items: [
            "Domain configuration",
            "Hosting setup",
            "SSL installation",
            "Server deployment",
            "Email configuration",
            "Ongoing monitoring",
          ],
          perfectFor: [],
        },
      ],
    },
    // ── Service detail pages ──────────────────────────────────────────────────
    serviceDetails: {
      backLabel: "All Services",
      getQuoteLabel: "Get a Free Quote",
      includedLabel: "What's Included",
      perfectForLabel: "Perfect For",
      benefitsLabel: "Key Benefits",
      processLabel: "How It Works",
      faqLabel: "Frequently Asked Questions",
      relatedLabel: "Related Services",
      ctaHeadline: "Ready to get started?",
      ctaBody: "Tell us about your project and we'll get back to you within 24 hours.",
      ctaButton: "Start Your Project",
      services: [
        {
          id: "web",
          tagline: "Your business, online and performing.",
          longDescription:
            "A professional website is the foundation of your digital presence. We design and build fast, secure, visually compelling websites that reflect your brand and turn visitors into customers. Every project is custom — no templates, no shortcuts.",
          benefits: [
            { title: "Converts Visitors", body: "Strategically structured pages that guide users toward contact or purchase." },
            { title: "Loads in Under 2s", body: "Performance-first approach with optimised images, lazy loading, and efficient code." },
            { title: "Ranks on Google", body: "Clean HTML structure, semantic markup, and core SEO best practices built in from day one." },
            { title: "Works on Any Device", body: "Fully responsive from mobile to ultrawide — every breakpoint tested before launch." },
          ],
          process: [
            { step: "01", title: "Discovery Call", body: "We learn about your business, target audience, and project goals in a structured briefing session." },
            { step: "02", title: "Wireframes & Sitemap", body: "We map out the site structure and produce low-fidelity wireframes for your approval before any design work." },
            { step: "03", title: "Visual Design", body: "A full UI design matching your brand identity — typography, colours, spacing, and interactive states." },
            { step: "04", title: "Development", body: "We build the site using Next.js or the appropriate stack, with clean, documented code." },
            { step: "05", title: "QA & Testing", body: "Cross-browser testing, mobile checks, form validation, and performance audits." },
            { step: "06", title: "Launch & Handoff", body: "Deployment to your hosting, domain configuration, SSL, and a full handoff with documentation." },
          ],
          faqs: [
            { question: "How long does a website project take?", answer: "Typically 2–5 weeks depending on scope and how quickly you provide feedback and content." },
            { question: "Do I need to provide the content?", answer: "You provide the text and images for your business. We can advise on structure and, optionally, handle copywriting." },
            { question: "Will my website be mobile-friendly?", answer: "Yes — every website we build is fully responsive and tested across phones, tablets, and desktops." },
            { question: "Can I update the website myself after launch?", answer: "We can integrate a simple CMS (like Sanity or Contentful) so you can manage content without touching code." },
          ],
          related: ["ecom", "seo", "design"],
        },
        {
          id: "ecom",
          tagline: "Sell online. Ship faster. Scale further.",
          longDescription:
            "We build e-commerce stores that are fast to browse, easy to manage, and built to convert. Whether you're launching your first product or scaling an existing catalogue, we handle the full stack — store design, checkout flow, inventory, and analytics.",
          benefits: [
            { title: "Secure Checkout", body: "Industry-standard payment integrations with fraud protection and SSL throughout." },
            { title: "Easy to Manage", body: "A clean admin panel so you can update products, process orders, and run promotions without developer help." },
            { title: "Built to Scale", body: "Handles traffic spikes, large catalogues, and growing SKU counts without degrading performance." },
            { title: "Analytics Ready", body: "Integrated with Google Analytics and Meta Pixel for full visibility into customer behaviour." },
          ],
          process: [
            { step: "01", title: "Product & Catalogue Audit", body: "We review your product range, categories, and pricing structure to define the store architecture." },
            { step: "02", title: "Store Design", body: "Custom storefront design focused on product discovery and frictionless checkout." },
            { step: "03", title: "Payment Integration", body: "We integrate your preferred payment gateway and configure tax, shipping, and currency settings." },
            { step: "04", title: "Development & Testing", body: "Full store build, cart and checkout flow, order confirmation emails, and admin panel." },
            { step: "05", title: "Launch", body: "Deployment, domain setup, and a full walkthrough of the admin panel so your team can manage it day one." },
          ],
          faqs: [
            { question: "Which payment gateways do you support?", answer: "We work with Stripe, PayPal, and local Algerian payment providers depending on your market." },
            { question: "Can I manage my own products after launch?", answer: "Yes — the admin panel lets you add, edit, and remove products, manage inventory, and process orders." },
            { question: "Do you handle shipping integrations?", answer: "We can integrate shipping carriers and automatically calculate rates at checkout based on your setup." },
            { question: "Can I sell internationally?", answer: "Yes — we can configure multi-currency support, localised shipping zones, and tax rules for international markets." },
          ],
          related: ["web", "perf", "maintenance"],
        },
        {
          id: "app",
          tagline: "Bespoke software for how your business actually works.",
          longDescription:
            "Off-the-shelf software rarely fits complex operations. We build custom web applications — booking systems, CRMs, internal dashboards, portals — designed precisely around your workflows, so your team works faster and your data stays clean.",
          benefits: [
            { title: "Fits Your Workflow", body: "Built from scratch around your exact business logic — not adapted from a generic template." },
            { title: "Role-Based Access", body: "Multi-user systems with custom permissions so every team member sees only what they need." },
            { title: "Integrates with Your Stack", body: "We connect to your existing tools — CRMs, ERPs, third-party APIs — via clean integrations." },
            { title: "Scales with Your Business", body: "Architecture designed to accommodate growing data volumes, users, and features over time." },
          ],
          process: [
            { step: "01", title: "Requirements Workshop", body: "Deep-dive into your workflows, data model, and user roles to define the full specification." },
            { step: "02", title: "System Architecture", body: "We design the data schema, API structure, and front-end architecture before writing a line of code." },
            { step: "03", title: "Iterative Development", body: "Builds in two-week sprints with working demos at each milestone so you can give feedback early." },
            { step: "04", title: "Integration & Testing", body: "End-to-end testing, security review, and third-party integration QA." },
            { step: "05", title: "Deployment & Training", body: "Staged deployment, team onboarding session, and documentation for your admin users." },
          ],
          faqs: [
            { question: "How is a custom app priced?", answer: "Custom applications are scoped and priced per project after a discovery workshop. Complexity and integrations are the main drivers." },
            { question: "Can you integrate with our existing tools?", answer: "Yes — we've integrated with Salesforce, HubSpot, QuickBooks, and many other platforms via their APIs." },
            { question: "Who owns the code?", answer: "You do. Full source code is delivered and transferred to you at project completion." },
            { question: "Do you offer post-launch support?", answer: "Yes — we offer monthly maintenance retainers covering bug fixes, security updates, and minor feature additions." },
          ],
          related: ["web", "design", "maintenance"],
        },
        {
          id: "design",
          tagline: "Interfaces that are beautiful and built to be used.",
          longDescription:
            "Good design isn't decoration — it's the difference between a product people use confidently and one they abandon. We create clean, modern interfaces with a mobile-first approach, focused on real user behaviour and your brand identity.",
          benefits: [
            { title: "Higher Engagement", body: "Intuitive layouts reduce friction and keep users on the page longer." },
            { title: "Brand Consistency", body: "A unified design system ensures every touchpoint looks and feels like yours." },
            { title: "Accessibility Built In", body: "WCAG-compliant colour contrast, font sizes, and interactive states from the start." },
            { title: "Handoff Ready", body: "All designs delivered in Figma with components, variants, and developer specs." },
          ],
          process: [
            { step: "01", title: "Brand & User Research", body: "We review your brand identity and study your target users to inform every design decision." },
            { step: "02", title: "Wireframes", body: "Low-fidelity wireframes for key pages to validate layout and content hierarchy before visual design." },
            { step: "03", title: "Visual Design", body: "High-fidelity Figma designs with your colour palette, typography, and component system." },
            { step: "04", title: "Prototype & Review", body: "Interactive prototype for stakeholder review and user feedback before handoff." },
            { step: "05", title: "Developer Handoff", body: "Clean Figma file with annotated specs, exported assets, and a component library." },
          ],
          faqs: [
            { question: "Do you work with existing brand guidelines?", answer: "Yes — we work within your existing brand identity or help develop one if you don't have it yet." },
            { question: "What format are the design files delivered in?", answer: "Figma files with a full component library, exported assets, and developer handoff annotations." },
            { question: "Can you design mobile apps too?", answer: "We design for web and mobile web. Native iOS/Android UI design is available on request." },
            { question: "Do you offer design-only without development?", answer: "Yes — we offer standalone design projects that you can hand to your own dev team." },
          ],
          related: ["web", "app", "perf"],
        },
        {
          id: "seo",
          tagline: "Get found by the people who are already looking.",
          longDescription:
            "A great website that no one finds is a missed opportunity. We audit your site's technical health, fix structural issues, and implement on-page SEO that helps search engines understand and rank your content — driving qualified organic traffic.",
          benefits: [
            { title: "More Organic Traffic", body: "Higher rankings on Google mean more visitors without ongoing ad spend." },
            { title: "Faster Site = Better Rank", body: "Page speed directly impacts SEO — we fix the technical issues that hurt your score." },
            { title: "Structured Data", body: "Schema markup helps search engines display rich results (ratings, FAQs, breadcrumbs) in search listings." },
            { title: "Long-Term ROI", body: "Organic traffic compounds over time — unlike paid ads, the results persist after the work is done." },
          ],
          process: [
            { step: "01", title: "Technical Audit", body: "Full crawl of your site to identify broken links, slow pages, missing tags, and indexing issues." },
            { step: "02", title: "Keyword Research", body: "We identify the search terms your target customers use and map them to your site structure." },
            { step: "03", title: "On-Page Optimisation", body: "Titles, meta descriptions, heading structure, image alt tags, and internal linking." },
            { step: "04", title: "Technical Fixes", body: "Resolve crawl errors, sitemap issues, canonical tags, and page speed bottlenecks." },
            { step: "05", title: "Reporting", body: "Monthly rank tracking and traffic reports so you can see exactly what's improving." },
          ],
          faqs: [
            { question: "How long before I see SEO results?", answer: "Most clients see measurable improvement within 2–4 months. SEO is a long-term investment, not a quick fix." },
            { question: "Do you do link building?", answer: "Our core service focuses on technical and on-page SEO. Link building strategies are available as an add-on." },
            { question: "Can you work on a site built by someone else?", answer: "Yes — we audit and optimise any existing website regardless of how it was built." },
            { question: "Do you handle local SEO?", answer: "Yes — we optimise Google Business Profile listings, local citations, and geo-targeted keywords for Algerian businesses." },
          ],
          related: ["web", "perf", "maintenance"],
        },
        {
          id: "perf",
          tagline: "Every second matters. We make yours count.",
          longDescription:
            "Page speed is directly tied to revenue — a 1-second delay can reduce conversions by 7%. We diagnose performance bottlenecks across your front-end, server, and assets, then fix them systematically to deliver measurable speed improvements.",
          benefits: [
            { title: "Lower Bounce Rate", body: "Fast-loading pages keep visitors engaged instead of sending them to a competitor." },
            { title: "Better Core Web Vitals", body: "Improved LCP, FID, and CLS scores directly boost your Google ranking." },
            { title: "Higher Conversions", body: "Faster checkout, faster load, more completed purchases and contact form submissions." },
            { title: "Cheaper Hosting", body: "Optimised code and assets often allow you to run on smaller, cheaper infrastructure." },
          ],
          process: [
            { step: "01", title: "Baseline Audit", body: "We run Lighthouse, WebPageTest, and Core Web Vitals checks to establish your current performance baseline." },
            { step: "02", title: "Root Cause Analysis", body: "Identify the biggest bottlenecks — render-blocking resources, uncompressed images, layout shifts." },
            { step: "03", title: "Optimisation Sprint", body: "Implement fixes: image compression, lazy loading, code splitting, caching headers, font optimisation." },
            { step: "04", title: "Re-Audit & Report", body: "Post-fix audit confirming improvements with before/after metrics across all key performance indicators." },
          ],
          faqs: [
            { question: "What's a good Core Web Vitals score?", answer: "Green on all three: LCP under 2.5s, FID under 100ms, CLS under 0.1. We aim to get your site there." },
            { question: "Will performance work affect the design?", answer: "No visible design changes — all optimisations are technical (code, assets, caching) and don't alter the UI." },
            { question: "How much speed improvement can I expect?", answer: "Varies by starting point, but most sites see 30–60% improvement in load time after a full optimisation audit." },
            { question: "Is this a one-time service or ongoing?", answer: "We offer both a one-time optimisation sprint and a monthly maintenance retainer that includes ongoing monitoring." },
          ],
          related: ["seo", "maintenance", "web"],
        },
        {
          id: "maintenance",
          tagline: "Your website, always running. Always secure.",
          longDescription:
            "Websites need ongoing attention — security patches, dependency updates, content changes, bug fixes, and uptime monitoring. Our maintenance retainers give you a dedicated technical team without the overhead of a full-time hire.",
          benefits: [
            { title: "Zero Downtime", body: "Proactive monitoring with instant alerts and rapid response to any availability issues." },
            { title: "Always Up to Date", body: "Regular dependency and CMS updates prevent vulnerabilities before they're exploited." },
            { title: "Faster Bug Fixes", body: "Direct access to the team that built your site means issues are resolved quickly." },
            { title: "Peace of Mind", body: "Monthly reports keep you informed without needing to think about the technical details yourself." },
          ],
          process: [
            { step: "01", title: "Site Audit", body: "We start with a full audit of your current site health, dependencies, and security posture." },
            { step: "02", title: "Monitoring Setup", body: "Uptime monitoring, error tracking, and automated backup configuration." },
            { step: "03", title: "Monthly Retainer Begins", body: "Regular updates, security patches, and a monthly allocation of hours for content or feature changes." },
            { step: "04", title: "Monthly Reporting", body: "A short report each month covering work completed, uptime stats, and any flagged issues." },
          ],
          faqs: [
            { question: "What's included in the monthly retainer?", answer: "Security updates, dependency patches, uptime monitoring, backups, and a block of hours for content or small feature changes." },
            { question: "Can I cancel the retainer?", answer: "Yes — maintenance retainers are month-to-month with 30 days notice to cancel." },
            { question: "Do you maintain sites you didn't build?", answer: "Yes — we can take over maintenance of any website after an initial onboarding audit." },
            { question: "What happens if my site goes down?", answer: "Our monitoring alerts us immediately and we begin investigating within the hour during business hours." },
          ],
          related: ["hosting", "perf", "web"],
        },
        {
          id: "hosting",
          tagline: "Live. Fast. Reliable. From day one.",
          longDescription:
            "We handle everything needed to get your site online and keep it there — domain configuration, hosting setup, SSL certificates, server deployment, email setup, and ongoing monitoring. You focus on your business; we handle the infrastructure.",
          benefits: [
            { title: "Managed Setup", body: "We configure everything end-to-end — no half-finished deployments or configuration guesswork." },
            { title: "SSL Included", body: "HTTPS on all pages from day one, automatically renewed so it never expires." },
            { title: "Email Configuration", body: "Professional email on your domain — we configure and test it before handoff." },
            { title: "Reliable Uptime", body: "Deployed to proven infrastructure with SLA-backed uptime and automatic failover." },
          ],
          process: [
            { step: "01", title: "Domain & DNS", body: "Domain registration or transfer, DNS configuration, and propagation verification." },
            { step: "02", title: "Hosting Setup", body: "Server provisioning or cloud hosting configuration (Vercel, AWS, DigitalOcean, or your choice)." },
            { step: "03", title: "SSL & Email", body: "SSL certificate installation, automatic renewal setup, and professional email configuration." },
            { step: "04", title: "Deployment & Handoff", body: "Final deployment, uptime monitoring activation, and credentials handoff to you." },
          ],
          faqs: [
            { question: "Which hosting providers do you work with?", answer: "Vercel, Netlify, DigitalOcean, AWS, and Hostinger. We recommend the best fit for your project's needs and budget." },
            { question: "Do I own the hosting account?", answer: "Yes — all accounts are registered in your name with your billing details. We're given access as administrators." },
            { question: "Do you handle domain registration?", answer: "Yes — we can register your domain on your behalf or transfer an existing one." },
            { question: "What if I already have hosting?", answer: "We can deploy to your existing hosting setup and handle configuration from there." },
          ],
          related: ["maintenance", "web", "perf"],
        },
      ],
    },
    // ── Legal pages ───────────────────────────────────────────────────────────
    privacyPolicy: {
      metaTitle: "Privacy Policy | Quarcode",
      metaDescription:
        "How Quarcode collects, uses, and protects your personal data.",
      badge: "Legal",
      lastUpdated: "July 1, 2026",
      contentsLabel: "// contents",
      headline1: "Privacy",
      headline2: "Policy",
      sections: [
        {
          id: "overview",
          number: "01",
          title: "Overview",
          intro:
            'Quarcode ("we," "us," or "our") is a software engineering firm headquartered in Algiers, Algeria. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at quarcode.dz or engage us for professional services. By accessing our website or services, you agree to the terms described here.',
        },
        {
          id: "information-we-collect",
          number: "02",
          title: "Information We Collect",
          subSections: [
            {
              heading: "Information you provide directly",
              bullets: [
                "Contact form submissions (name, email address, company, project description)",
                "Email correspondence and responses to our outreach",
                "Information shared during project discovery calls or meetings",
                "Billing and invoicing details for contracted engagements",
              ],
            },
            {
              heading: "Information collected automatically",
              bullets: [
                "Browser type, operating system, and device identifiers",
                "IP address and approximate geographic location",
                "Pages visited, time spent, and navigation paths on our website",
                "Referrer URLs and search terms that led you to our site",
              ],
            },
            {
              heading: "Information from third parties",
              body: "We may receive information about you from professional networks, analytics providers, or publicly available business directories when we legitimately research potential clients or partners.",
            },
          ],
        },
        {
          id: "how-we-use",
          number: "03",
          title: "How We Use Your Information",
          intro: "We use the information we collect to:",
          bullets: [
            "Respond to contact form submissions and service inquiries",
            "Deliver, manage, and improve contracted software engineering services",
            "Send project-related communications, invoices, and status updates",
            "Improve and optimise our website content and user experience",
            "Comply with legal obligations and enforce our contractual rights",
            "Prevent fraud and protect the security of our systems",
          ],
          note: "We do not sell your personal data to third parties. We do not use your data for unsolicited marketing without your prior consent.",
        },
        {
          id: "legal-basis",
          number: "04",
          title: "Legal Basis for Processing",
          intro:
            "Where applicable under data protection law, we process your data on the following legal bases:",
          bullets: [
            "Contract performance — processing necessary to fulfil a service agreement with you",
            "Legitimate interests — such as improving our website and preventing fraud",
            "Consent — where you have explicitly opted in",
            "Legal obligation — where we are required to process data by applicable law",
          ],
        },
        {
          id: "data-sharing",
          number: "05",
          title: "Data Sharing & Disclosure",
          intro:
            "We may share your information only in the following limited circumstances:",
          bullets: [
            "Service providers — trusted vendors bound by data processing agreements",
            "Legal requirements — disclosure required by law, court order, or government authority",
            "Business transfers — in the event of a merger, acquisition, or sale of assets",
            "Consent — with your explicit permission for any other purpose",
          ],
          note: "We require all third-party processors to maintain appropriate security measures and to use your data only for the purposes we specify.",
        },
        {
          id: "cookies",
          number: "06",
          title: "Cookies & Tracking",
          intro:
            "Our website uses cookies and similar tracking technologies to enhance your experience and analyse usage patterns.",
          subSections: [
            {
              heading: "Types of cookies we use",
              bullets: [
                "Essential cookies — required for basic site functionality and security",
                "Analytics cookies — help us understand how visitors interact with our site",
                "Preference cookies — remember your settings across visits",
              ],
            },
          ],
          note: "You may control cookies through your browser settings. Disabling certain cookies may limit some functionality.",
        },
        {
          id: "data-retention",
          number: "07",
          title: "Data Retention",
          intro: "We retain personal data only for as long as necessary:",
          bullets: [
            "Contact inquiries — 24 months from the date of submission",
            "Active client project data — for the duration of the engagement plus 5 years",
            "Invoicing and financial records — 10 years as required by Algerian tax law",
            "Website analytics — aggregated and anonymised after 26 months",
          ],
          note: "When retention periods expire, we securely delete or anonymise your data.",
        },
        {
          id: "your-rights",
          number: "08",
          title: "Your Rights",
          intro:
            "Depending on your jurisdiction, you may have the following rights:",
          bullets: [
            "Access — request a copy of the personal data we hold about you",
            "Rectification — ask us to correct inaccurate or incomplete data",
            "Erasure — request deletion of your data where no legitimate basis exists to retain it",
            "Restriction — ask us to limit how we process your data",
            "Portability — receive your data in a structured, machine-readable format",
            "Objection — object to processing based on legitimate interests",
            "Withdraw consent — where processing is based on consent, withdraw it at any time",
          ],
          note: "To exercise any of these rights, contact us at privacy@quarcode.dz. We will respond within 30 days.",
        },
        {
          id: "security",
          number: "09",
          title: "Data Security",
          intro:
            "We implement industry-standard technical and organisational measures to protect your data:",
          bullets: [
            "TLS/HTTPS encryption for all data in transit",
            "AES-256 encryption for sensitive data at rest",
            "Access controls and role-based permissions for internal systems",
            "Regular security audits and vulnerability assessments",
          ],
          note: "No method of transmission over the internet is 100% secure, but we take every reasonable precaution.",
        },
        {
          id: "international",
          number: "10",
          title: "International Transfers",
          intro:
            "Quarcode is based in Algeria. If you are accessing our services from outside Algeria, your data may be transferred to and processed in Algeria or by third-party processors in other countries. When we transfer data internationally, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses for transfers from the EEA.",
        },
        {
          id: "children",
          number: "11",
          title: "Children's Privacy",
          intro:
            "Our website and services are not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If you believe we have inadvertently collected such data, please contact us immediately and we will delete it.",
        },
        {
          id: "changes",
          number: "12",
          title: "Changes to This Policy",
          intro:
            "We may update this Privacy Policy periodically to reflect changes in our practices, technologies, or legal requirements. When we make material changes, we will update the Last Updated date at the top of this page. Continued use of our website or services after any update constitutes your acceptance of the revised policy.",
        },
        {
          id: "contact",
          number: "13",
          title: "Contact Us",
          intro:
            "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out:",
          contact: {
            company: "Quarcode",
            email: "privacy@quarcode.dz",
            address: "Algiers, Algeria",
            website: "quarcode.dz",
          },
        },
      ] as LegalSection[],
    },
    termsOfService: {
      metaTitle: "Terms of Service | Quarcode",
      metaDescription:
        "Terms and conditions governing the use of Quarcode's website and professional services.",
      badge: "Legal",
      lastUpdated: "July 1, 2026",
      contentsLabel: "// contents",
      headline1: "Terms of",
      headline2: "Service",
      sections: [
        {
          id: "agreement",
          number: "01",
          title: "Agreement to Terms",
          intro:
            'These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client") and Quarcode, a software engineering firm registered in Algiers, Algeria. By accessing our website at quarcode.dz or entering into a service agreement with us, you confirm that you have read, understood, and agree to be bound by these Terms.',
          note: "If you do not agree to these Terms, you must not use our website or engage our services.",
        },
        {
          id: "services",
          number: "02",
          title: "Our Services",
          intro:
            "Quarcode provides professional software engineering services including, but not limited to:",
          bullets: [
            "Web application design and development",
            "Mobile and cross-platform application development",
            "Backend engineering, API design, and database architecture",
            "Cloud infrastructure setup, DevOps, and CI/CD implementation",
            "UI/UX design and front-end engineering",
            "Technical consulting, code audits, and performance optimisation",
            "Ongoing maintenance, hosting support, and retainer engagements",
          ],
          note: "Specific deliverables, timelines, and pricing are defined in a separate Statement of Work agreed upon in writing by both parties.",
        },
        {
          id: "project-engagement",
          number: "03",
          title: "Project Engagement",
          subSections: [
            {
              heading: "Discovery & Proposal",
              body: "Engagements begin with a discovery phase in which we assess your project requirements. We will then provide a written proposal outlining scope, deliverables, timeline, and pricing. A project begins only after written acceptance of the proposal.",
            },
            {
              heading: "Statements of Work",
              body: "Each project is governed by a Statement of Work signed by both parties. The SOW takes precedence over these general Terms in the event of any conflict.",
            },
            {
              heading: "Changes to Scope",
              body: "Any modifications to the agreed scope must be submitted in writing and approved by Quarcode before work begins. Scope changes may affect the timeline and pricing, documented in a written change order.",
            },
          ],
        },
        {
          id: "payment",
          number: "04",
          title: "Payment Terms",
          subSections: [
            {
              heading: "Payment schedule",
              bullets: [
                "Fixed-price projects: 50% upfront before work commences, 50% upon completion",
                "Retainer engagements: invoiced monthly in advance",
                "Milestone-based projects: payments tied to agreed deliverable milestones",
              ],
            },
            {
              heading: "Invoicing & currency",
              body: "Invoices are issued in USD or DZD as agreed in the SOW and are payable within 14 calendar days of the invoice date unless otherwise specified.",
            },
            {
              heading: "Late payments",
              body: "Overdue invoices accrue interest at 1.5% per month. Quarcode reserves the right to pause or suspend work where payment is more than 14 days overdue.",
            },
            {
              heading: "Refunds",
              body: "Upfront payments are non-refundable once work has commenced. If a project is terminated by the Client after work has begun, fees for work completed to date remain payable.",
            },
          ],
        },
        {
          id: "intellectual-property",
          number: "05",
          title: "Intellectual Property",
          subSections: [
            {
              heading: "Client ownership",
              body: "Upon receipt of full payment, Quarcode assigns to the Client all right, title, and interest in the custom work product created exclusively for that project, including source code, designs, and documentation.",
            },
            {
              heading: "Quarcode retained rights",
              body: "We retain ownership of our pre-existing tools, frameworks, libraries, boilerplate code, methodologies, and proprietary techniques. Where Background IP is incorporated into deliverables, we grant the Client a perpetual, non-exclusive, royalty-free licence to use it within the delivered project.",
            },
            {
              heading: "Portfolio rights",
              body: "Unless the Client requests otherwise in writing, Quarcode reserves the right to reference the project as a portfolio item using only publicly available information.",
            },
          ],
        },
        {
          id: "client-obligations",
          number: "06",
          title: "Client Obligations",
          intro: "To enable successful delivery, the Client agrees to:",
          bullets: [
            "Provide timely access to required materials, assets, credentials, and feedback",
            "Designate a primary point of contact with authority to approve decisions",
            "Review and respond to deliverables within agreed review windows (typically 5 business days)",
            "Ensure all content provided to Quarcode does not infringe third-party rights",
            "Pay invoices by the due date specified",
          ],
          note: "Delays caused by the Client's failure to fulfil these obligations may result in revised timelines and additional costs.",
        },
        {
          id: "confidentiality",
          number: "07",
          title: "Confidentiality",
          intro:
            "Both parties agree to keep confidential any proprietary, technical, or business information shared during the engagement and not to disclose it to third parties without prior written consent, except:",
          bullets: [
            "As required by law or a valid court order",
            "To employees or contractors who need the information to deliver the project",
            "If the information becomes publicly available through no fault of the receiving party",
          ],
          note: "Confidentiality obligations survive the termination of any agreement for a period of 3 years.",
        },
        {
          id: "warranties",
          number: "08",
          title: "Warranties & Representations",
          subSections: [
            {
              heading: "Quarcode warrants that:",
              bullets: [
                "Services will be performed with reasonable skill and care by qualified professionals",
                "Deliverables will materially conform to the agreed specifications at the time of delivery",
                "We have the right to enter into agreements and perform the services described",
              ],
            },
            {
              heading: "Warranty period",
              body: "Quarcode provides a 30-day bug-fix warranty after final delivery. We will remedy defects in the delivered work at no additional charge. This warranty does not cover issues arising from Client modifications or third-party integrations not scoped in the SOW.",
            },
            {
              heading: "Disclaimer",
              body: 'Except as expressly stated, our services are provided "as is." We make no warranties regarding uninterrupted availability or fitness for a particular purpose beyond the agreed scope.',
            },
          ],
        },
        {
          id: "limitation-liability",
          number: "09",
          title: "Limitation of Liability",
          intro: "To the maximum extent permitted by applicable law:",
          bullets: [
            "Quarcode's total liability for any claim shall not exceed the total fees paid by the Client in the 3 months preceding the claim",
            "We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits or loss of data",
            "We are not liable for delays or failures caused by circumstances beyond our reasonable control (force majeure)",
          ],
          note: "Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability for consequential damages.",
        },
        {
          id: "termination",
          number: "10",
          title: "Termination",
          subSections: [
            {
              heading: "Termination by either party",
              body: "Either party may terminate an engagement by providing 14 days written notice. Upon termination, the Client shall pay for all work completed to the termination date.",
            },
            {
              heading: "Termination for cause",
              body: "Either party may terminate immediately upon written notice if the other party materially breaches these Terms and fails to remedy the breach within 10 business days of notice.",
            },
            {
              heading: "Effect of termination",
              bullets: [
                "All outstanding invoices become immediately due and payable",
                "Each party shall return or destroy Confidential Information of the other party",
                "Sections on Intellectual Property, Confidentiality, Warranties, Limitation of Liability, and Governing Law survive termination",
              ],
            },
          ],
        },
        {
          id: "website-use",
          number: "11",
          title: "Website Use",
          intro: "When using our website, you agree not to:",
          bullets: [
            "Use the website for any unlawful purpose or in violation of applicable regulations",
            "Attempt to gain unauthorised access to any part of our systems or infrastructure",
            "Transmit any malware, viruses, or other harmful code",
            "Scrape, crawl, or harvest content from our website without permission",
            "Interfere with or disrupt the integrity or performance of the website",
          ],
        },
        {
          id: "governing-law",
          number: "12",
          title: "Governing Law & Disputes",
          intro:
            "These Terms and any disputes arising from them are governed by the laws of the People's Democratic Republic of Algeria. The parties agree to first attempt to resolve any dispute through good-faith negotiation. If negotiation fails within 30 days, the dispute shall be submitted to the competent courts of Algiers, Algeria, to which both parties irrevocably submit.",
        },
        {
          id: "changes",
          number: "13",
          title: "Changes to These Terms",
          intro:
            "We reserve the right to update these Terms at any time. When we do, we will revise the Last Updated date and, for material changes, notify active clients by email. Continued use of our website or services following any change constitutes acceptance of the updated Terms.",
        },
        {
          id: "contact",
          number: "14",
          title: "Contact",
          intro:
            "For legal enquiries, questions about these Terms, or to report a concern, please contact us:",
          contact: {
            company: "Quarcode",
            email: "legal@quarcode.dz",
            address: "Algiers, Algeria",
            website: "quarcode.dz",
          },
        },
      ] as LegalSection[],
    },
  },

  // ─── FRENCH ────────────────────────────────────────────────────────────────
  fr: {
    nav: {
      services: "Services",
      about: "À propos",
      pricing: "Tarifs",
      contact: "Contact",
      cta: "Commencer",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
    },
    hero: {
      badge: "Excellence Ingénierie Algérie",
      headline1: "L'ingénierie du",
      headline2: "numérique d'excellence",
      body: "Le partenaire de référence en Algérie pour vos solutions web et logicielles sur mesure.",
      cta1: "Consultation gratuite",
      cta2: "Voir nos réalisations",
      imageAlt:
        "Un tableau de bord UI sophistiqué montrant des visualisations de données.",
    },
    services: {
      sectionHeadline1: "Des solutions taillées pour la",
      sectionHeadline2: "Performance",
      sectionBody:
        "Nous combinons les normes d'ingénierie mondiales et les insights locaux pour livrer des logiciels de classe mondiale.",
      prevLabel: "Précédent",
      nextLabel: "Suivant",
      items: [
        {
          title: "Développement Web",
          description: "Applications web ultra-rapides et optimisées SEO.",
          features: [
            "Progressive Web Apps",
            "E-commerce entreprise",
            "Solutions CMS sur mesure",
          ],
        },
        {
          title: "Logiciels sur mesure",
          description:
            "Logiciels desktop et mobile pour automatiser vos flux métier.",
          features: [
            "Architecture cloud",
            "Intégrations API",
            "Applications desktop",
          ],
        },
        {
          title: "Stratégie digitale",
          description:
            "Des feuilles de route fondées sur les données pour votre croissance.",
          features: ["Roadmap produit", "Recherche UX/UI", "Analyse de marché"],
        },
      ],
    },
    contact: {
      headline1: "Prêt à construire le",
      headline2: "futur",
      body: "Contactez-nous pour discuter de votre projet.",
      emailLabel: "Écrivez-nous",
      locationLabel: "Notre studio",
      location: "Alger, Algérie",
      email: "hello@quarcode.com",
      fields: {
        name: "Nom complet",
        namePlaceholder: "Jean Dupont",
        email: "Adresse e-mail",
        emailPlaceholder: "jean@exemple.com",
        message: "Votre message",
        messagePlaceholder: "Parlez-nous de votre projet...",
        submit: "Envoyer le message",
      },
    },
    footer: {
      tagline: "Excellence en ingénierie depuis l'Algérie.",
      copyright: "© 2026 Quarcode. Excellence en ingénierie depuis l'Algérie.",
      columns: [
        {
          heading: "Entreprise",
          links: [
            { label: "À propos", href: "/About" },
            { label: "Contact", href: "/Contact" },
          ],
        },
        {
          heading: "Réseaux",
          links: [
            
            { label: "GitHub", href: "https://github.com/DabbacheDjawad" },
            { label: "Instagram", href: "https://www.instagram.com/quarcodeagency/" },
            { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591658214352" },
          ],
        },
      ],
      newsletter: {
        heading: "Newsletter",
        body: "Restez informé de nos dernières actualités.",
        emailPlaceholder: "E-mail",
        emailLabel: "E-mail pour la newsletter",
        subscribeLabel: "S'abonner",
      },
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
    },
    aboutPage: {
      metaTitle: "À propos | Quarcode",
      footerTagline:
        "Pionniers de l'excellence en ingénierie logicielle en Algérie depuis 2021.",
      footerCopyright: "© 2026 Quarcode.",
      footerColumns: [
        {
          heading: "Liens rapides",
          links: [
            { label: "Services", href: "/Services" },
            { label: "À propos", href: "/About" },
            { label: "Études de cas", href: "#" },
            { label: "Carrières", href: "#" },
          ],
        },
        {
          heading: "Réseaux",
          links: [
            
            { label: "GitHub", href: "https://github.com/DabbacheDjawad" },
            { label: "Instagram", href: "https://www.instagram.com/quarcodeagency/" },
            { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591658214352" },
          ],
        },
        {
          heading: "Légal",
          links: [
            { label: "Politique de confidentialité", href: "/privacy-policy" },
            { label: "Conditions d'utilisation", href: "/terms-of-service" },
          ],
        },
      ],
    },
    aboutHero: {
      badge: "L'innovation algérienne par l'ingénierie",
      headline1: "Architecting the",
      headline2: "l'avenir de l'Algérie",
      headline3: "par le code.",
      body: "Quarcode est une agence de solutions logicielles de premier plan dédiée à l'élévation du paysage numérique algérien.",
    },
    ourStory: {
      badge: "Notre histoire",
      headline: "D'Algérie, pour le monde",
      body1:
        "Fondée en 2021, Quarcode est née d'une conviction simple mais puissante : les talents d'ingénierie de classe mondiale existent en Algérie.",
      body2:
        "Nous avons démarré avec cinq personnes à Alger. Aujourd'hui, nous opérons un studio de plus de 45 ingénieurs.",
      milestone1Year: "2021",
      milestone1Label: "Fondation",
      milestone2Year: "2023",
      milestone2Label: "45+ ingénieurs",
      milestone3Year: "2024",
      milestone3Label: "120+ projets",
    },
    missionVision: {
      mission: {
        title: "Notre Mission",
        body: "Donner aux entreprises algériennes les moyens d'agir grâce à des logiciels de classe mondiale.",
      },
      vision: {
        title: "Notre Vision",
        body: "Devenir le leader incontesté de la transformation numérique algérienne, reconnu mondialement.",
      },
    },
    coreValues: {
      sectionTitle: "Nos valeurs fondatrices",
      sectionBody:
        "Les principes essentiels qui guident chaque ligne de code que nous écrivons.",
      items: [
        {
          title: "Qualité",
          description:
            "Nous ne nous contentons pas du « fonctionnel ». Notre code est propre, nos architectures sont résilientes.",
        },
        {
          title: "Innovation",
          description:
            "Nous repoussons les limites en adoptant des technologies de pointe.",
        },
        {
          title: "Intégrité",
          description:
            "La transparence est notre état par défaut. Nous bâtissons la confiance grâce à une communication honnête.",
        },
      ],
    },
    leadership: {
      sectionTitle: "Les esprits derrière Quarcode",
      sectionBody:
        "Notre équipe dirigeante réunit architectes logiciels chevronnés et stratèges produit.",
      stats: [
        { value: "45+", label: "Ingénieurs actifs" },
        { value: "120+", label: "Projets livrés" },
      ],
      leaders: [
        { name: "Amine B.", role: "Architecte en chef" },
        { name: "Sara K.", role: "Stratégie produit" },
      ],
    },
    aboutCta: {
      headline: "Prêt à construire quelque chose d'extraordinaire ?",
      cta1: "Travailler avec nous",
      cta2: "Voir notre portfolio",
    },
    contactPage: {
      metaTitle: "Contactez-nous | Quarcode",
      footerTagline: "Forgeons ensemble l'avenir du logiciel en Algérie.",
      footerCopyright: "© 2026 Quarcode.",
      footerColumns: [
        {
          heading: "Plateforme",
          links: [
            { label: "Services", href: "/Services" },
            { label: "À propos", href: "/About" },
          ],
        },
        {
          heading: "Entreprise",
          links: [
            { label: "Politique de confidentialité", href: "/privacy-policy" },
            { label: "Conditions d'utilisation", href: "/terms-of-service" },
          ],
        },
        {
          heading: "Réseaux",
          links: [
            
            { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591658214352" },
            { label: "GitHub", href: "https://github.com/DabbacheDjawad" },
            { label: "Instagram", href: "https://www.instagram.com/quarcodeagency/" },
          ],
        },
      ],
    },
    contactHero: {
      badge: "PRÊT À COLLABORER",
      headline1: "Construisons ensemble quelque chose",
      headline2: "d'extraordinaire",
      headline3: ".",
      body: "Basés au cœur d'Alger, nous faisons le pont entre l'ingénierie complexe et le design élégant.",
    },
    contactForm: {
      projectTypes: [
        "Développement Web",
        "Application Mobile",
        "Logiciel d'entreprise",
        "Design UI/UX",
        "Intégration IA/ML",
      ],
      fields: {
        name: "Nom complet",
        namePlaceholder: "Jean Dupont",
        email: "Adresse e-mail",
        emailPlaceholder: "jean@exemple.com",
        projectType: "Type de projet",
        message: "Message",
        messagePlaceholder:
          "Parlez-nous de vos objectifs, délais et exigences spécifiques...",
        submit: "Envoyer le message",
        sending: "Envoi en cours…",
      },
      status: {
        success:
          "Votre message a bien été envoyé ! Nous vous répondrons dans les 24 heures.",
        error:
          "Échec de l'envoi. Veuillez réessayer ou nous contacter directement.",
        validationSummary: "Veuillez corriger les erreurs ci-dessous.",
        fieldErrors: {
          fullName:
            "Veuillez saisir votre nom complet (au moins 2 caractères).",
          email: "Veuillez saisir une adresse e-mail valide.",
          projectType: "Veuillez sélectionner un type de projet.",
          message: "Veuillez décrire votre projet (au moins 20 caractères).",
        },
      },
    },
    contactSidebar: {
      officeTitle: "Situé à",
      officeAddress: "Ali Mendjeli, UV 14\nConstantine, 25019\nAlgérie",
      emailTitle: "Courrier électronique",
      connectTitle: "Nous rejoindre",
      openInMaps: "Ouvrir dans Maps",
      mapTitle: "Bureaux de Quarcode — Ali Mendjeli, Constantine",
      mapLabel: "Ali Mendjeli · Constantine",
    },
    faqPage: {
      metaTitle: "FAQ | Quarcode",
      metaDescription: "Réponses aux questions fréquentes.",
      footerTagline: "Excellence en ingénierie depuis l'Algérie.",
      footerCopyright: "© 2026 Quarcode.",
      footerColumns: [
        {
          heading: "Plateforme",
          links: [
            { label: "Gestion de projets", href: "#" },
            { label: "Portail développeur", href: "#" },
          ],
        },
        {
          heading: "Entreprise",
          links: [
            { label: "Conditions d'utilisation", href: "/terms-of-service" },
            { label: "Politique de confidentialité", href: "/privacy-policy" },
          ],
        },
        {
          heading: "Réseaux",
          links: [
            
            { label: "GitHub", href: "https://github.com/DabbacheDjawad" },
            { label: "Instagram", href: "https://www.instagram.com/quarcodeagency/" },  
            { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591658214352" },
          ],
        },
      ],
      hero: {
        badge: "Centre d'assistance",
        headline1: "Questions",
        headline2: "fréquentes.",
        body: "Tout ce que vous devez savoir sur notre processus, nos tarifs et les délais.",
      },
    },
    faqSidebar: {
      categoriesLabel: "Catégories",
      allLabel: "Toutes les questions",
      stillCuriousTitle: "Encore des questions ?",
      stillCuriousBody:
        "Vous ne trouvez pas la réponse ? Discutez directement avec notre équipe.",
      stillCuriousCta: "Contactez-nous",
    },
    faqItems: [
      {
        id: "cost",
        question: "Combien coûte un site web ?",
        answer: {
          intro:
            "Le coût dépend du type de site. Nos tarifs débutent à 30 000 DA.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "timeline",
        question: "Combien de temps faut-il pour créer un site ?",
        answer: {
          intro: "Le délai dépend de la complexité :",
          tags: [
            "Site vitrine : 5–7 jours",
            "Application web sur mesure : 2–6 semaines",
          ],
          bullets: [],
          steps: [],
          checks: [],
          note: "Un calendrier détaillé sera fourni avant le début du développement.",
        },
      },
      {
        id: "mobile",
        question: "Mon site fonctionnera-t-il sur mobile ?",
        answer: {
          intro: "Oui. Chaque site que nous créons est entièrement responsive.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "cms",
        question: "Puis-je mettre à jour mon site moi-même ?",
        answer: {
          intro:
            "Oui. Si votre projet inclut un tableau de bord administrateur, vous pourrez gérer votre contenu sans aucune connaissance technique.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "seo",
        question: "Le SEO est-il inclus ?",
        answer: {
          intro: "Oui. Tous nos sites incluent une optimisation SEO de base.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "hosting",
        question:
          "Proposez-vous l'hébergement et l'enregistrement de domaine ?",
        answer: {
          intro: "Oui. Nous pouvons tout gérer pour vous :",
          tags: [],
          bullets: [
            "Enregistrement du nom de domaine",
            "Hébergement web",
            "Certificat SSL (HTTPS)",
            "Configuration du serveur et déploiement",
          ],
          steps: [],
          checks: [],
          note: "Votre site sera livré prêt à être mis en ligne.",
        },
      },
      {
        id: "maintenance",
        question: "Proposez-vous la maintenance de sites web ?",
        answer: {
          intro: "Oui. Nos services de maintenance incluent :",
          tags: [],
          bullets: [
            "Mises à jour de sécurité",
            "Sauvegardes régulières",
            "Surveillance des performances",
            "Corrections de bugs",
            "Support technique",
          ],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "revisions",
        question: "Puis-je demander des modifications après la livraison ?",
        answer: {
          intro:
            "Absolument. Des révisions mineures sont incluses après la livraison.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "remote",
        question: "Travaillez-vous uniquement avec des clients en Algérie ?",
        answer: {
          intro:
            "Non. Nous travaillons avec des clients en Algérie et à l'international.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "start",
        question: "Comment commencer ?",
        answer: {
          intro: "Commencer est simple :",
          tags: [],
          bullets: [],
          steps: [
            "Contactez-nous.",
            "Parlez-nous de votre projet.",
            "Nous discuterons de vos besoins.",
            "Vous recevrez un devis détaillé.",
            "Une fois approuvé, nous commencerons.",
          ],
          checks: [],
          note: "",
        },
      },
      {
        id: "ownership",
        question: "Serai-je propriétaire de mon site ?",
        answer: {
          intro:
            "Oui. Une fois le projet terminé et le paiement effectué, vous aurez la pleine propriété.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "why",
        question: "Pourquoi choisir Quarcode ?",
        answer: {
          intro: "Voici ce qui distingue Quarcode :",
          tags: [],
          bullets: [],
          steps: [],
          checks: [
            "Design moderne et professionnel",
            "Développement entièrement sur mesure",
            "Sites rapides, sécurisés et évolutifs",
            "Structure SEO-friendly",
            "Responsive sur tous les appareils",
            "Support continu après le lancement",
            "Communication transparente",
            "Livraison dans les délais",
            "Solutions adaptées à vos objectifs",
          ],
          note: "",
        },
      },
    ],
    servicesPage: {
      metaTitle: "Services | Quarcode",
      footerCopyright: "© 2026 Quarcode.",
      footerColumns: [
        {
          heading: "Services",
          links: [
            { label: "Développement web", href: "/services" },
            { label: "E-Commerce", href: "/services" },
            { label: "Applications web sur mesure", href: "/services" },
            { label: "Optimisation SEO", href: "/services" },
          ],
        },
        {
          heading: "Réseaux",
          links: [
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "https://github.com/DabbacheDjawad" },
            { label: "Instagram", href: "https://www.instagram.com/quarcodeagency/" },
            { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591658214352" },
          ],
        },
        {
          heading: "Légal",
          links: [
            { label: "Politique de confidentialité", href: "/privacy-policy" },
            { label: "Conditions d'utilisation", href: "/terms-of-service" },
          ],
        },
      ],
      hero: {
        badge: "Nos services",
        headline1: "Des solutions numériques pour faire croître votre",
        headline2: "entreprise",
        body: "Chez Quarcode, nous concevons et développons des sites web et applications web modernes et haute performance.",
      },
      why: {
        sectionTitle: "Pourquoi choisir Quarcode ?",
        sectionBody:
          "Nous ne créons pas seulement des sites web — nous posons des fondations numériques qui font prospérer votre entreprise.",
        items: [
          {
            icon: "bolt",
            title: "Technologies modernes",
            body: "Nous utilisons des technologies fiables et modernes.",
          },
          {
            icon: "devices",
            title: "Design responsive",
            body: "Chaque site est magnifique et performant sur tous les appareils.",
          },
          {
            icon: "travel_explore",
            title: "SEO-friendly",
            body: "Nos sites sont conçus pour les moteurs de recherche.",
          },
          {
            icon: "lock",
            title: "Sécurisé par défaut",
            body: "La sécurité est intégrée à chaque projet.",
          },
          {
            icon: "tune",
            title: "Solutions sur mesure",
            body: "Chaque entreprise est unique. Nous construisons des solutions adaptées.",
          },
          {
            icon: "support_agent",
            title: "Support continu",
            body: "Notre relation ne s'arrête pas au lancement.",
          },
        ],
      },
      process: {
        sectionTitle: "Notre processus",
        sectionBody: "Une approche claire et structurée.",
        steps: [
          {
            number: "01",
            title: "Découverte",
            body: "Nous apprenons à connaître votre entreprise.",
          },
          {
            number: "02",
            title: "Planification",
            body: "Nous définissons le périmètre et le calendrier.",
          },
          {
            number: "03",
            title: "Design",
            body: "Nous créons une interface moderne et intuitive.",
          },
          {
            number: "04",
            title: "Développement",
            body: "Nous construisons votre site avec les meilleures pratiques.",
          },
          {
            number: "05",
            title: "Tests",
            body: "Chaque fonctionnalité est soigneusement testée.",
          },
          {
            number: "06",
            title: "Lancement",
            body: "Votre site est mis en ligne, entièrement optimisé.",
          },
        ],
      },
      cta: {
        headline: "Prêt à lancer votre projet ?",
        body: "Créons un site qui représente votre marque et aide votre entreprise à se développer.",
        cta1: "Obtenir un devis gratuit",
        cta2: "Lire notre FAQ",
      },
      getAQuote: "Obtenir un devis",
      mainServices: [
        {
          id: "web",
          title: "Développement web",
          description:
            "Nous créons des sites professionnels qui mettent en valeur votre activité.",
          items: [
            "Développement sur mesure",
            "Design moderne et responsive",
            "Chargement rapide",
            "Formulaires de contact & Google Maps",
            "SSL (HTTPS) inclus",
            "Optimisation SEO de base",
            "Compatibilité multi-navigateurs",
          ],
          perfectFor: [
            "PME",
            "Restaurants",
            "Médecins",
            "Avocats",
            "Agences",
            "Écoles",
            "Freelances",
          ],
        },
        {
          id: "ecom",
          title: "Développement e-commerce",
          description:
            "Vendez vos produits en ligne avec une boutique sécurisée.",
          items: [
            "Catalogue & catégories de produits",
            "Panier & paiement",
            "Gestion des commandes & stocks",
            "Comptes clients",
            "Codes promo",
            "Intégration analytique",
          ],
          perfectFor: [],
        },
        {
          id: "app",
          title: "Applications web sur mesure",
          description:
            "Nous développons des solutions sur mesure autour de vos processus métier.",
          items: [
            "Systèmes de réservation",
            "Plateformes CRM",
            "Tableaux de bord internes",
            "Portails clients & employés",
            "Systèmes d'inventaire",
          ],
          perfectFor: [],
        },
        {
          id: "design",
          title: "Design UI/UX",
          description:
            "Nous concevons des interfaces épurées, modernes, intuitives et adaptées au mobile.",
          items: [
            "Interfaces épurées & modernes",
            "Approche mobile-first",
            "Mises en page centrées utilisateur",
            "Navigation intuitive",
            "Accessible à tous",
          ],
          perfectFor: [],
        },
        {
          id: "seo",
          title: "Optimisation SEO",
          description:
            "Nous aidons votre entreprise à gagner en visibilité sur Google.",
          items: [
            "Audit de structure",
            "Amélioration de la vitesse",
            "Balises meta & schéma",
            "Optimisation des images",
            "Performance mobile",
            "SEO technique",
          ],
          perfectFor: [],
        },
        {
          id: "perf",
          title: "Optimisation des performances",
          description:
            "Un site plus rapide signifie des visiteurs plus satisfaits.",
          items: [
            "Temps de chargement réduits",
            "Meilleurs Core Web Vitals",
            "Expérience utilisateur améliorée",
            "Taux de rebond réduit",
            "Taux de conversion plus élevé",
          ],
          perfectFor: [],
        },
        {
          id: "maintenance",
          title: "Maintenance du site",
          description: "Gardez votre site sécurisé et opérationnel.",
          items: [
            "Mises à jour de sécurité",
            "Corrections de bugs",
            "Sauvegardes régulières",
            "Surveillance des performances",
            "Mises à jour de contenu",
            "Support technique",
          ],
          perfectFor: [],
        },
        {
          id: "hosting",
          title: "Hébergement & déploiement",
          description: "Nous nous occupons de mettre votre site en ligne.",
          items: [
            "Configuration du domaine",
            "Mise en place de l'hébergement",
            "Installation SSL",
            "Déploiement serveur",
            "Configuration e-mail",
            "Surveillance continue",
          ],
          perfectFor: [],
        },
      ],
    },
    // ── Service detail pages — French ────────────────────────────────────────
    serviceDetails: {
      backLabel: "Tous les services",
      getQuoteLabel: "Obtenir un devis gratuit",
      includedLabel: "Ce qui est inclus",
      perfectForLabel: "Idéal pour",
      benefitsLabel: "Avantages clés",
      processLabel: "Comment ça marche",
      faqLabel: "Questions fréquentes",
      relatedLabel: "Services associés",
      ctaHeadline: "Prêt à démarrer ?",
      ctaBody: "Parlez-nous de votre projet et nous vous répondrons dans les 24 heures.",
      ctaButton: "Lancer mon projet",
      services: [
        {
          id: "web",
          tagline: "Votre entreprise, en ligne et performante.",
          longDescription: "Un site web professionnel est le socle de votre présence numérique. Nous concevons et développons des sites rapides, sécurisés et visuellement percutants qui reflètent votre marque et transforment les visiteurs en clients.",
          benefits: [
            { title: "Convertit vos visiteurs", body: "Des pages structurées stratégiquement pour guider les utilisateurs vers la prise de contact." },
            { title: "Charge en moins de 2s", body: "Approche performance-first avec images optimisées et code efficace." },
            { title: "Référencé sur Google", body: "Structure HTML propre, balisage sémantique et bonnes pratiques SEO intégrées dès le départ." },
            { title: "Fonctionne sur tous les appareils", body: "Entièrement responsive, testé sur tous les formats d'écran avant la mise en ligne." },
          ],
          process: [
            { step: "01", title: "Appel de découverte", body: "Nous apprenons à connaître votre activité, votre audience et vos objectifs." },
            { step: "02", title: "Wireframes & plan de site", body: "Nous cartographions la structure du site et produisons des maquettes basse fidélité." },
            { step: "03", title: "Design visuel", body: "Un design UI complet correspondant à votre identité de marque." },
            { step: "04", title: "Développement", body: "Nous construisons le site avec Next.js ou la stack adaptée, avec un code propre et documenté." },
            { step: "05", title: "QA & tests", body: "Tests multi-navigateurs, vérifications mobiles, validation des formulaires et audits de performance." },
            { step: "06", title: "Mise en ligne & remise", body: "Déploiement, configuration du domaine, SSL et remise complète avec documentation." },
          ],
          faqs: [
            { question: "Combien de temps prend un projet de site web ?", answer: "En général 2 à 5 semaines selon la complexité et la rapidité avec laquelle vous fournissez vos retours." },
            { question: "Dois-je fournir le contenu ?", answer: "Vous fournissez les textes et images. Nous pouvons conseiller sur la structure ou prendre en charge la rédaction." },
            { question: "Le site sera-t-il adapté au mobile ?", answer: "Oui — tous nos sites sont entièrement responsive, testés sur mobiles, tablettes et ordinateurs." },
            { question: "Puis-je mettre à jour le site moi-même ?", answer: "Oui — nous pouvons intégrer un CMS simple pour gérer le contenu sans toucher au code." },
          ],
          related: ["ecom", "seo", "design"],
        },
        {
          id: "ecom",
          tagline: "Vendez en ligne. Livrez plus vite. Évoluez loin.",
          longDescription: "Nous créons des boutiques e-commerce rapides à parcourir, faciles à gérer et conçues pour convertir. Du design à la configuration du paiement, nous gérons l'ensemble de la stack.",
          benefits: [
            { title: "Paiement sécurisé", body: "Intégrations de paiement conformes aux standards du secteur avec protection contre la fraude." },
            { title: "Facile à gérer", body: "Un panneau d'administration clair pour mettre à jour les produits et gérer les commandes." },
            { title: "Conçu pour évoluer", body: "Gère les pics de trafic et les grands catalogues sans dégrader les performances." },
            { title: "Analytics intégrés", body: "Connecté à Google Analytics et Meta Pixel pour une visibilité complète sur le comportement client." },
          ],
          process: [
            { step: "01", title: "Audit produits & catalogue", body: "Nous analysons votre gamme pour définir l'architecture de la boutique." },
            { step: "02", title: "Design de la boutique", body: "Design sur mesure axé sur la découverte produit et un parcours d'achat fluide." },
            { step: "03", title: "Intégration des paiements", body: "Configuration de votre passerelle de paiement, TVA, frais de livraison et devises." },
            { step: "04", title: "Développement & tests", body: "Construction complète, panier, confirmation de commande par e-mail et panneau d'administration." },
            { step: "05", title: "Mise en ligne", body: "Déploiement, configuration du domaine et formation à l'utilisation du back-office." },
          ],
          faqs: [
            { question: "Quelles passerelles de paiement supportez-vous ?", answer: "Stripe, PayPal et les prestataires algériens selon votre marché." },
            { question: "Puis-je gérer mes produits après la mise en ligne ?", answer: "Oui — le panneau admin vous permet d'ajouter, modifier et supprimer des produits." },
            { question: "Gérez-vous les intégrations de livraison ?", answer: "Oui — nous pouvons intégrer des transporteurs et calculer automatiquement les frais." },
            { question: "Puis-je vendre à l'international ?", answer: "Oui — nous configurons le multi-devises, les zones d'expédition et les règles fiscales." },
          ],
          related: ["web", "perf", "maintenance"],
        },
        {
          id: "app",
          tagline: "Un logiciel sur mesure pour vos processus réels.",
          longDescription: "Les logiciels standard correspondent rarement aux opérations complexes. Nous développons des applications web personnalisées — systèmes de réservation, CRM, tableaux de bord, portails — conçus autour de vos flux de travail.",
          benefits: [
            { title: "Adapté à vos processus", body: "Développé depuis zéro autour de votre logique métier — pas un template générique." },
            { title: "Accès par rôles", body: "Systèmes multi-utilisateurs avec permissions personnalisées." },
            { title: "S'intègre à votre stack", body: "Connexion à vos outils existants via des intégrations propres." },
            { title: "Évolue avec vous", body: "Architecture conçue pour accueillir davantage de données, d'utilisateurs et de fonctionnalités." },
          ],
          process: [
            { step: "01", title: "Atelier de cadrage", body: "Analyse en profondeur de vos flux de travail, de votre modèle de données et de vos rôles utilisateurs." },
            { step: "02", title: "Architecture système", body: "Conception du schéma de données, de la structure API et de l'architecture front-end." },
            { step: "03", title: "Développement itératif", body: "Sprints de deux semaines avec démos fonctionnelles à chaque jalon." },
            { step: "04", title: "Intégration & tests", body: "Tests de bout en bout, revue de sécurité et QA des intégrations tierces." },
            { step: "05", title: "Déploiement & formation", body: "Déploiement progressif, formation de l'équipe et documentation." },
          ],
          faqs: [
            { question: "Comment est tarifée une application sur mesure ?", answer: "Par projet, après un atelier de découverte. La complexité et les intégrations sont les principaux facteurs." },
            { question: "Pouvez-vous vous intégrer à nos outils existants ?", answer: "Oui — nous avons intégré Salesforce, HubSpot, QuickBooks et de nombreuses autres plateformes." },
            { question: "À qui appartient le code ?", answer: "À vous. Le code source complet est livré et transféré à la fin du projet." },
            { question: "Proposez-vous un support après la mise en production ?", answer: "Oui — nous proposons des contrats de maintenance mensuels couvrant corrections, mises à jour et petits ajouts." },
          ],
          related: ["web", "design", "maintenance"],
        },
        {
          id: "design",
          tagline: "Des interfaces belles et conçues pour être utilisées.",
          longDescription: "Un bon design n'est pas de la décoration — c'est la différence entre un produit que les gens utilisent avec confiance et un produit qu'ils abandonnent. Nous créons des interfaces épurées et modernes, centrées sur l'utilisateur.",
          benefits: [
            { title: "Engagement plus élevé", body: "Des parcours intuitifs réduisent la friction et maintiennent l'utilisateur sur la page." },
            { title: "Cohérence de marque", body: "Un système de design unifié pour que chaque point de contact soit reconnaissable." },
            { title: "Accessibilité intégrée", body: "Contrastes WCAG, tailles de police et états interactifs conformes dès le début." },
            { title: "Prêt pour la remise", body: "Tous les designs livrés en Figma avec composants, variantes et specs développeur." },
          ],
          process: [
            { step: "01", title: "Recherche marque & utilisateurs", body: "Nous analysons votre identité et étudions vos utilisateurs cibles." },
            { step: "02", title: "Wireframes", body: "Maquettes basse fidélité pour valider la structure et la hiérarchie du contenu." },
            { step: "03", title: "Design visuel", body: "Maquettes haute fidélité avec votre palette, typographie et composants." },
            { step: "04", title: "Prototype & revue", body: "Prototype interactif pour retours des parties prenantes avant remise." },
            { step: "05", title: "Remise développeur", body: "Fichier Figma annoté avec assets exportés et bibliothèque de composants." },
          ],
          faqs: [
            { question: "Travaillez-vous avec des chartes existantes ?", answer: "Oui — nous travaillons dans votre identité de marque existante ou vous aidons à en créer une." },
            { question: "Sous quel format les fichiers sont-ils livrés ?", answer: "Fichiers Figma avec bibliothèque de composants, assets exportés et annotations." },
            { question: "Pouvez-vous designer des applications mobiles ?", answer: "Nous designons pour le web et le web mobile. L'UI native iOS/Android est disponible sur demande." },
            { question: "Proposez-vous du design sans développement ?", answer: "Oui — nous proposons des projets de design standalone que vous pouvez confier à votre équipe dev." },
          ],
          related: ["web", "app", "perf"],
        },
        {
          id: "seo",
          tagline: "Soyez trouvé par ceux qui vous cherchent déjà.",
          longDescription: "Un beau site que personne ne trouve est une opportunité manquée. Nous auditons la santé technique de votre site, corrigeons les problèmes structurels et implémentons un SEO on-page qui aide les moteurs de recherche à comprendre et classer votre contenu.",
          benefits: [
            { title: "Plus de trafic organique", body: "Un meilleur classement sur Google signifie plus de visiteurs sans dépenses publicitaires." },
            { title: "Vitesse = meilleur classement", body: "La vitesse impacte directement le SEO — nous corrigeons les problèmes techniques." },
            { title: "Données structurées", body: "Le balisage Schema aide les moteurs à afficher des résultats enrichis dans les SERP." },
            { title: "ROI long terme", body: "Le trafic organique se capitalise dans le temps, contrairement aux annonces payantes." },
          ],
          process: [
            { step: "01", title: "Audit technique", body: "Exploration complète pour identifier liens brisés, pages lentes, balises manquantes et erreurs d'indexation." },
            { step: "02", title: "Recherche de mots-clés", body: "Identification des termes utilisés par vos clients cibles, mappés sur la structure de votre site." },
            { step: "03", title: "Optimisation on-page", body: "Titres, méta descriptions, structure des titres, attributs alt et maillage interne." },
            { step: "04", title: "Corrections techniques", body: "Résolution des erreurs de crawl, sitemaps, balises canoniques et ralentissements." },
            { step: "05", title: "Reporting", body: "Suivi mensuel des positions et du trafic pour mesurer les progrès." },
          ],
          faqs: [
            { question: "Combien de temps avant de voir des résultats SEO ?", answer: "La plupart des clients constatent une amélioration mesurable sous 2 à 4 mois." },
            { question: "Faites-vous du netlinking ?", answer: "Notre service principal se concentre sur le SEO technique et on-page. Le netlinking est disponible en option." },
            { question: "Pouvez-vous travailler sur un site existant ?", answer: "Oui — nous auditons et optimisons tout site existant quelle que soit sa technologie." },
            { question: "Gérez-vous le SEO local ?", answer: "Oui — nous optimisons les fiches Google Business Profile et le référencement local pour les entreprises algériennes." },
          ],
          related: ["web", "perf", "maintenance"],
        },
        {
          id: "perf",
          tagline: "Chaque seconde compte. Nous la rentabilisons.",
          longDescription: "La vitesse des pages est directement liée au chiffre d'affaires — 1 seconde de délai peut réduire les conversions de 7 %. Nous diagnostiquons les goulots d'étranglement et les corrigeons pour des améliorations mesurables.",
          benefits: [
            { title: "Taux de rebond réduit", body: "Des pages rapides retiennent les visiteurs au lieu de les envoyer chez un concurrent." },
            { title: "Meilleurs Core Web Vitals", body: "Des scores LCP, FID et CLS améliorés boostent directement votre classement Google." },
            { title: "Conversions plus élevées", body: "Un checkout plus rapide, une charge plus rapide, plus de commandes et de formulaires complétés." },
            { title: "Hébergement moins coûteux", body: "Le code et les assets optimisés permettent souvent de tourner sur une infrastructure plus légère." },
          ],
          process: [
            { step: "01", title: "Audit initial", body: "Lighthouse, WebPageTest et Core Web Vitals pour établir la baseline de performance." },
            { step: "02", title: "Analyse des causes", body: "Identification des goulots majeurs — ressources bloquantes, images non compressées, décalages de mise en page." },
            { step: "03", title: "Sprint d'optimisation", body: "Compression d'images, lazy loading, code splitting, cache, optimisation des polices." },
            { step: "04", title: "Re-audit & rapport", body: "Audit post-correction confirmant les améliorations avec métriques avant/après." },
          ],
          faqs: [
            { question: "Qu'est-ce qu'un bon score Core Web Vitals ?", answer: "Vert sur les trois : LCP < 2,5s, FID < 100ms, CLS < 0,1. Nous visons cela pour votre site." },
            { question: "Les optimisations affecteront-elles le design ?", answer: "Non — toutes les optimisations sont techniques et ne modifient pas l'interface." },
            { question: "De quelle amélioration puis-je espérer ?", answer: "La plupart des sites voient 30 à 60 % d'amélioration du temps de chargement après un audit complet." },
            { question: "Est-ce un service ponctuel ou récurrent ?", answer: "Nous proposons les deux : un sprint ponctuel et un contrat mensuel avec surveillance continue." },
          ],
          related: ["seo", "maintenance", "web"],
        },
        {
          id: "maintenance",
          tagline: "Votre site, toujours en ligne. Toujours sécurisé.",
          longDescription: "Les sites ont besoin d'attention continue — correctifs de sécurité, mises à jour, corrections de bugs et surveillance. Nos contrats de maintenance vous offrent une équipe technique dédiée sans les coûts d'un employé permanent.",
          benefits: [
            { title: "Zéro interruption", body: "Surveillance proactive avec alertes immédiates et intervention rapide." },
            { title: "Toujours à jour", body: "Mises à jour régulières des dépendances et du CMS pour prévenir les vulnérabilités." },
            { title: "Corrections rapides", body: "L'équipe qui a construit votre site résout les problèmes rapidement." },
            { title: "Tranquillité d'esprit", body: "Des rapports mensuels pour rester informé sans avoir à penser aux détails techniques." },
          ],
          process: [
            { step: "01", title: "Audit du site", body: "Audit complet de la santé actuelle, des dépendances et de la posture de sécurité." },
            { step: "02", title: "Mise en place de la surveillance", body: "Monitoring de disponibilité, suivi des erreurs et configuration des sauvegardes automatiques." },
            { step: "03", title: "Début du contrat mensuel", body: "Mises à jour régulières, correctifs de sécurité et allocation mensuelle d'heures." },
            { step: "04", title: "Rapport mensuel", body: "Un rapport court chaque mois couvrant les travaux effectués, les stats de disponibilité et les problèmes signalés." },
          ],
          faqs: [
            { question: "Qu'inclut le contrat mensuel ?", answer: "Mises à jour de sécurité, dépendances, surveillance, sauvegardes et un quota d'heures pour des modifications." },
            { question: "Puis-je résilier le contrat ?", answer: "Oui — les contrats sont mensuels avec 30 jours de préavis." },
            { question: "Maintenez-vous des sites que vous n'avez pas construits ?", answer: "Oui — après un audit d'intégration initial." },
            { question: "Que se passe-t-il si mon site tombe ?", answer: "Notre monitoring nous alerte immédiatement et nous commençons à investiguer dans l'heure." },
          ],
          related: ["hosting", "perf", "web"],
        },
        {
          id: "hosting",
          tagline: "En ligne. Rapide. Fiable. Dès le premier jour.",
          longDescription: "Nous gérons tout le nécessaire pour mettre votre site en ligne — configuration du domaine, hébergement, SSL, déploiement, e-mail et surveillance continue.",
          benefits: [
            { title: "Configuration clé en main", body: "Nous configurons tout de bout en bout — aucun déploiement inachevé." },
            { title: "SSL inclus", body: "HTTPS sur toutes les pages dès le premier jour, renouvelé automatiquement." },
            { title: "Configuration e-mail", body: "E-mail professionnel sur votre domaine, configuré et testé avant la remise." },
            { title: "Disponibilité fiable", body: "Déployé sur une infrastructure éprouvée avec basculement automatique." },
          ],
          process: [
            { step: "01", title: "Domaine & DNS", body: "Enregistrement ou transfert du domaine, configuration DNS et vérification de la propagation." },
            { step: "02", title: "Configuration de l'hébergement", body: "Provisionnement du serveur ou configuration du cloud (Vercel, AWS, DigitalOcean ou votre choix)." },
            { step: "03", title: "SSL & e-mail", body: "Installation du certificat SSL, renouvellement automatique et configuration de l'e-mail professionnel." },
            { step: "04", title: "Déploiement & remise", body: "Déploiement final, activation de la surveillance et remise des accès." },
          ],
          faqs: [
            { question: "Avec quels hébergeurs travaillez-vous ?", answer: "Vercel, Netlify, DigitalOcean, AWS et Hostinger. Nous recommandons le meilleur choix pour votre projet." },
            { question: "Suis-je propriétaire du compte d'hébergement ?", answer: "Oui — tous les comptes sont enregistrés à votre nom avec vos coordonnées de facturation." },
            { question: "Gérez-vous l'enregistrement du domaine ?", answer: "Oui — nous pouvons enregistrer votre domaine en votre nom ou transférer un domaine existant." },
            { question: "Et si j'ai déjà un hébergement ?", answer: "Nous pouvons déployer sur votre hébergement existant et gérer la configuration depuis là." },
          ],
          related: ["maintenance", "web", "perf"],
        },
      ],
    },
    // ── Legal pages — French ─────────────────────────────────────────────────
    privacyPolicy: {
      metaTitle: "Politique de confidentialité | Quarcode",
      metaDescription:
        "Comment Quarcode collecte, utilise et protège vos données personnelles.",
      badge: "Légal",
      lastUpdated: "1 juillet 2026",
      contentsLabel: "// sommaire",
      headline1: "Politique de",
      headline2: "confidentialité",
      sections: [
        {
          id: "overview",
          number: "01",
          title: "Présentation",
          intro:
            "Quarcode (« nous », « notre ») est une société d'ingénierie logicielle dont le siège est à Alger, Algérie. Cette Politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez quarcode.dz ou faites appel à nos services. En accédant à notre site ou à nos services, vous acceptez les termes décrits ici.",
        },
        {
          id: "information-we-collect",
          number: "02",
          title: "Informations que nous collectons",
          subSections: [
            {
              heading: "Informations que vous fournissez directement",
              bullets: [
                "Soumissions de formulaires de contact (nom, e-mail, société, description du projet)",
                "Correspondances par e-mail et réponses à nos communications",
                "Informations partagées lors des appels de découverte ou des réunions",
                "Détails de facturation pour les missions contractuelles",
              ],
            },
            {
              heading: "Informations collectées automatiquement",
              bullets: [
                "Type de navigateur, système d'exploitation et identifiants d'appareils",
                "Adresse IP et localisation géographique approximative",
                "Pages visitées, temps passé et parcours de navigation",
                "URLs de référence et termes de recherche qui vous ont conduit sur notre site",
              ],
            },
            {
              heading: "Informations provenant de tiers",
              body: "Nous pouvons recevoir des informations vous concernant provenant de réseaux professionnels, de fournisseurs d'analytique ou d'annuaires professionnels accessibles au public.",
            },
          ],
        },
        {
          id: "how-we-use",
          number: "03",
          title: "Comment nous utilisons vos informations",
          intro: "Nous utilisons les informations collectées pour :",
          bullets: [
            "Répondre aux soumissions de formulaires de contact et aux demandes de services",
            "Livrer, gérer et améliorer les services d'ingénierie logicielle contractés",
            "Envoyer des communications liées aux projets, des factures et des mises à jour",
            "Améliorer le contenu et l'expérience utilisateur de notre site web",
            "Respecter les obligations légales et faire valoir nos droits contractuels",
            "Prévenir la fraude et protéger la sécurité de nos systèmes",
          ],
          note: "Nous ne vendons pas vos données personnelles à des tiers. Nous n'utilisons pas vos données à des fins de marketing non sollicité sans votre consentement préalable.",
        },
        {
          id: "legal-basis",
          number: "04",
          title: "Base juridique du traitement",
          intro:
            "Lorsque le droit applicable à la protection des données l'exige, nous traitons vos données sur les bases juridiques suivantes :",
          bullets: [
            "Exécution du contrat — traitement nécessaire à l'exécution d'un accord de service",
            "Intérêts légitimes — améliorer notre site et prévenir la fraude",
            "Consentement — lorsque vous avez explicitement opté pour cela",
            "Obligation légale — lorsque nous sommes tenus de traiter les données par la loi applicable",
          ],
        },
        {
          id: "data-sharing",
          number: "05",
          title: "Partage et divulgation des données",
          intro:
            "Nous ne partageons vos informations que dans les circonstances limitées suivantes :",
          bullets: [
            "Prestataires de services — fournisseurs de confiance liés par des accords de traitement des données",
            "Exigences légales — divulgation requise par la loi, une ordonnance judiciaire ou une autorité gouvernementale",
            "Transferts d'entreprise — en cas de fusion, acquisition ou vente d'actifs",
            "Consentement — avec votre autorisation explicite pour tout autre objectif",
          ],
          note: "Nous exigeons de tous les sous-traitants tiers qu'ils maintiennent des mesures de sécurité appropriées.",
        },
        {
          id: "cookies",
          number: "06",
          title: "Cookies et suivi",
          intro:
            "Notre site utilise des cookies et des technologies de suivi similaires.",
          subSections: [
            {
              heading: "Types de cookies utilisés",
              bullets: [
                "Cookies essentiels — nécessaires au fonctionnement de base du site",
                "Cookies analytiques — nous aident à comprendre comment les visiteurs interagissent avec le site",
                "Cookies de préférence — mémorisent vos paramètres entre les visites",
              ],
            },
          ],
          note: "Vous pouvez contrôler les cookies via les paramètres de votre navigateur. La désactivation de certains cookies peut limiter certaines fonctionnalités.",
        },
        {
          id: "data-retention",
          number: "07",
          title: "Conservation des données",
          intro:
            "Nous conservons les données personnelles uniquement le temps nécessaire :",
          bullets: [
            "Demandes de contact — 24 mois à compter de la date de soumission",
            "Données de projet client actif — pendant la durée de la mission plus 5 ans",
            "Registres comptables et financiers — 10 ans conformément au droit fiscal algérien",
            "Analytique web — agrégée et anonymisée après 26 mois",
          ],
          note: "À l'expiration des délais de conservation, nous supprimons ou anonymisons vos données de manière sécurisée.",
        },
        {
          id: "your-rights",
          number: "08",
          title: "Vos droits",
          intro:
            "Selon votre juridiction, vous pouvez bénéficier des droits suivants :",
          bullets: [
            "Accès — demander une copie des données personnelles que nous détenons sur vous",
            "Rectification — nous demander de corriger des données inexactes ou incomplètes",
            "Effacement — demander la suppression de vos données",
            "Limitation — nous demander de limiter le traitement de vos données",
            "Portabilité — recevoir vos données dans un format structuré et lisible par machine",
            "Opposition — vous opposer au traitement fondé sur des intérêts légitimes",
            "Retrait du consentement — retirer votre consentement à tout moment",
          ],
          note: "Pour exercer l'un de ces droits, contactez-nous à privacy@quarcode.dz. Nous répondrons dans un délai de 30 jours.",
        },
        {
          id: "security",
          number: "09",
          title: "Sécurité des données",
          intro:
            "Nous mettons en œuvre des mesures techniques et organisationnelles conformes aux normes du secteur :",
          bullets: [
            "Chiffrement TLS/HTTPS pour toutes les données en transit",
            "Chiffrement AES-256 pour les données sensibles au repos",
            "Contrôles d'accès et autorisations basées sur les rôles",
            "Audits de sécurité réguliers et évaluations des vulnérabilités",
          ],
          note: "Aucune méthode de transmission sur Internet n'est sûre à 100 %, mais nous prenons toutes les précautions raisonnables.",
        },
        {
          id: "international",
          number: "10",
          title: "Transferts internationaux",
          intro:
            "Quarcode est basée en Algérie. Si vous accédez à nos services depuis l'étranger, vos données peuvent être transférées et traitées en Algérie ou par des sous-traitants dans d'autres pays. Lors des transferts internationaux, nous veillons à ce que des garanties appropriées soient en place, telles que les Clauses Contractuelles Types pour les transferts depuis l'EEE.",
        },
        {
          id: "children",
          number: "11",
          title: "Vie privée des enfants",
          intro:
            "Notre site et nos services ne sont pas destinés aux personnes de moins de 16 ans. Nous ne collectons pas sciemment de données personnelles d'enfants. Si vous pensez que nous avons collecté de telles données par inadvertance, veuillez nous contacter immédiatement et nous les supprimerons.",
        },
        {
          id: "changes",
          number: "12",
          title: "Modifications de la présente politique",
          intro:
            "Nous pouvons mettre à jour cette Politique de confidentialité périodiquement. En cas de modifications importantes, nous mettrons à jour la date de « Dernière mise à jour ». L'utilisation continue de notre site ou de nos services après toute mise à jour vaut acceptation de la politique révisée.",
        },
        {
          id: "contact",
          number: "13",
          title: "Nous contacter",
          intro:
            "Pour toute question ou demande concernant cette politique, veuillez nous contacter :",
          contact: {
            company: "Quarcode",
            email: "privacy@quarcode.dz",
            address: "Alger, Algérie",
            website: "quarcode.dz",
          },
        },
      ] as LegalSection[],
    },
    termsOfService: {
      metaTitle: "Conditions d'utilisation | Quarcode",
      metaDescription:
        "Conditions générales régissant l'utilisation du site web et des services professionnels de Quarcode.",
      badge: "Légal",
      lastUpdated: "1 juillet 2026",
      contentsLabel: "// sommaire",
      headline1: "Conditions",
      headline2: "d'utilisation",
      sections: [
        {
          id: "agreement",
          number: "01",
          title: "Acceptation des conditions",
          intro:
            "Les présentes Conditions d'utilisation (« Conditions ») constituent un accord juridiquement contraignant entre vous (« Client ») et Quarcode, société d'ingénierie logicielle enregistrée à Alger, Algérie. En accédant à quarcode.dz ou en concluant un accord de service avec nous, vous confirmez avoir lu, compris et accepté les présentes Conditions.",
          note: "Si vous n'acceptez pas ces Conditions, vous ne devez pas utiliser notre site ni faire appel à nos services.",
        },
        {
          id: "services",
          number: "02",
          title: "Nos services",
          intro:
            "Quarcode fournit des services d'ingénierie logicielle professionnels, notamment :",
          bullets: [
            "Conception et développement d'applications web",
            "Développement d'applications mobiles et multiplateformes",
            "Ingénierie backend, conception d'API et architecture de bases de données",
            "Configuration d'infrastructure cloud, DevOps et implémentation CI/CD",
            "Conception UI/UX et ingénierie front-end",
            "Conseil technique, audits de code et optimisation des performances",
            "Maintenance continue, support d'hébergement et missions en régie",
          ],
          note: "Les livrables spécifiques, les délais et les prix sont définis dans un Cahier des charges signé par les deux parties.",
        },
        {
          id: "project-engagement",
          number: "03",
          title: "Déroulement des missions",
          subSections: [
            {
              heading: "Découverte et proposition",
              body: "Les missions débutent par une phase de découverte au cours de laquelle nous évaluons vos besoins. Nous fournissons ensuite une proposition écrite détaillant le périmètre, les livrables, le calendrier et les prix. La mission ne commence qu'après acceptation écrite de la proposition.",
            },
            {
              heading: "Cahier des charges",
              body: "Chaque projet est régi par un Cahier des charges signé par les deux parties. En cas de conflit, le Cahier des charges prévaut sur les présentes Conditions générales.",
            },
            {
              heading: "Modifications du périmètre",
              body: "Toute modification du périmètre convenu doit être soumise par écrit et approuvée par Quarcode avant le début des travaux. Les modifications peuvent affecter le calendrier et les prix, documentés dans un avenant.",
            },
          ],
        },
        {
          id: "payment",
          number: "04",
          title: "Conditions de paiement",
          subSections: [
            {
              heading: "Calendrier de paiement",
              bullets: [
                "Projets à prix fixe : 50 % à l'avance avant le début des travaux, 50 % à la livraison",
                "Missions en régie : facturées mensuellement à l'avance",
                "Projets par jalons : paiements liés aux jalons de livraison convenus",
              ],
            },
            {
              heading: "Facturation et devise",
              body: "Les factures sont émises en USD ou en DZD selon les termes du Cahier des charges et sont payables dans un délai de 14 jours calendaires à compter de la date de facturation.",
            },
            {
              heading: "Retards de paiement",
              body: "Les factures en souffrance génèrent des intérêts de retard de 1,5 % par mois. Quarcode se réserve le droit de suspendre les travaux lorsque le paiement accuse plus de 14 jours de retard.",
            },
            {
              heading: "Remboursements",
              body: "Les acomptes sont non remboursables une fois les travaux commencés. En cas de résiliation par le Client après le début des travaux, les honoraires correspondant aux travaux effectués restent dus.",
            },
          ],
        },
        {
          id: "intellectual-property",
          number: "05",
          title: "Propriété intellectuelle",
          subSections: [
            {
              heading: "Propriété du Client",
              body: "Après réception du paiement intégral, Quarcode cède au Client tous les droits, titres et intérêts sur les livrables créés exclusivement pour ce projet, y compris le code source, les designs et la documentation.",
            },
            {
              heading: "Droits conservés par Quarcode",
              body: "Nous conservons la propriété de nos outils préexistants, frameworks, bibliothèques, code de base, méthodologies et techniques propriétaires. Lorsque ces éléments sont intégrés aux livrables, nous accordons au Client une licence perpétuelle, non exclusive et libre de redevances pour les utiliser dans le cadre du projet livré.",
            },
            {
              heading: "Droits de référence portfolio",
              body: "Sauf demande contraire écrite du Client, Quarcode se réserve le droit de mentionner le projet dans son portfolio en utilisant uniquement des informations accessibles au public.",
            },
          ],
        },
        {
          id: "client-obligations",
          number: "06",
          title: "Obligations du Client",
          intro: "Pour permettre une livraison réussie, le Client s'engage à :",
          bullets: [
            "Fournir un accès en temps utile aux matériaux, actifs, identifiants et retours nécessaires",
            "Désigner un interlocuteur principal habilité à approuver les décisions",
            "Examiner les livrables et y répondre dans les délais convenus (généralement 5 jours ouvrables)",
            "S'assurer que tout contenu fourni à Quarcode ne porte pas atteinte aux droits de tiers",
            "Régler les factures à la date d'échéance",
          ],
          note: "Les retards causés par le non-respect de ces obligations par le Client peuvent entraîner des révisions de calendrier et des coûts supplémentaires.",
        },
        {
          id: "confidentiality",
          number: "07",
          title: "Confidentialité",
          intro:
            "Les deux parties s'engagent à garder confidentielles les informations propriétaires, techniques ou commerciales partagées pendant la mission, sauf :",
          bullets: [
            "Si la loi ou une ordonnance judiciaire valide l'impose",
            "Si les employés ou sous-traitants ont besoin de ces informations pour exécuter le projet",
            "Si les informations deviennent publiques sans faute de la partie réceptrice",
          ],
          note: "Les obligations de confidentialité survivent à la résiliation de tout accord pendant une période de 3 ans.",
        },
        {
          id: "warranties",
          number: "08",
          title: "Garanties et déclarations",
          subSections: [
            {
              heading: "Quarcode garantit que :",
              bullets: [
                "Les services seront exécutés avec les compétences et le soin raisonnables",
                "Les livrables seront conformes aux spécifications convenues au moment de la livraison",
                "Nous avons le droit de conclure des accords et d'exécuter les services décrits",
              ],
            },
            {
              heading: "Période de garantie",
              body: "Quarcode fournit une garantie de correction de bugs de 30 jours après la livraison finale. Cette garantie ne couvre pas les problèmes résultant de modifications du Client ou d'intégrations tierces non incluses dans le Cahier des charges.",
            },
            {
              heading: "Avertissement",
              body: "Sauf disposition expresse contraire, nos services sont fournis « en l'état ». Nous ne garantissons pas la disponibilité ininterrompue ni l'adéquation à un usage particulier au-delà du périmètre convenu.",
            },
          ],
        },
        {
          id: "limitation-liability",
          number: "09",
          title: "Limitation de responsabilité",
          intro: "Dans toute la mesure permise par le droit applicable :",
          bullets: [
            "La responsabilité totale de Quarcode pour toute réclamation ne dépassera pas le total des honoraires payés par le Client au cours des 3 mois précédant la réclamation",
            "Nous ne serons pas responsables des dommages indirects, accessoires, spéciaux ou consécutifs, y compris la perte de profits ou de données",
            "Nous ne sommes pas responsables des retards ou défaillances dus à des circonstances indépendantes de notre volonté (force majeure)",
          ],
          note: "Certaines juridictions n'autorisent pas l'exclusion de certaines garanties ou la limitation de responsabilité.",
        },
        {
          id: "termination",
          number: "10",
          title: "Résiliation",
          subSections: [
            {
              heading: "Résiliation par l'une ou l'autre des parties",
              body: "Chaque partie peut résilier une mission en donnant un préavis écrit de 14 jours. À la résiliation, le Client paiera tous les travaux effectués jusqu'à la date de résiliation.",
            },
            {
              heading: "Résiliation pour faute",
              body: "Chaque partie peut résilier immédiatement par notification écrite si l'autre partie manque matériellement aux présentes Conditions et ne remédie pas à ce manquement dans un délai de 10 jours ouvrables suivant la notification.",
            },
            {
              heading: "Effets de la résiliation",
              bullets: [
                "Toutes les factures en souffrance deviennent immédiatement exigibles",
                "Chaque partie restitue ou détruit les Informations confidentielles de l'autre partie",
                "Les clauses relatives à la Propriété intellectuelle, la Confidentialité, les Garanties, la Limitation de responsabilité et le Droit applicable survivent à la résiliation",
              ],
            },
          ],
        },
        {
          id: "website-use",
          number: "11",
          title: "Utilisation du site web",
          intro: "En utilisant notre site, vous acceptez de ne pas :",
          bullets: [
            "Utiliser le site à des fins illégales ou en violation de la réglementation applicable",
            "Tenter d'obtenir un accès non autorisé à nos systèmes ou infrastructures",
            "Transmettre des logiciels malveillants, virus ou autres codes nuisibles",
            "Récupérer du contenu de notre site sans autorisation",
            "Perturber l'intégrité ou les performances du site",
          ],
        },
        {
          id: "governing-law",
          number: "12",
          title: "Droit applicable et litiges",
          intro:
            "Les présentes Conditions sont régies par les lois de la République Algérienne Démocratique et Populaire. Les parties s'engagent à tenter de résoudre tout litige par voie de négociation de bonne foi. À défaut d'accord dans un délai de 30 jours, le litige sera soumis aux tribunaux compétents d'Alger, Algérie.",
        },
        {
          id: "changes",
          number: "13",
          title: "Modifications des présentes Conditions",
          intro:
            "Nous nous réservons le droit de modifier les présentes Conditions à tout moment. En cas de modifications importantes, nous notifierons les clients actifs par e-mail. L'utilisation continue de notre site ou de nos services vaut acceptation des Conditions mises à jour.",
        },
        {
          id: "contact",
          number: "14",
          title: "Contact",
          intro:
            "Pour toute question juridique ou signalement, veuillez nous contacter :",
          contact: {
            company: "Quarcode",
            email: "legal@quarcode.dz",
            address: "Alger, Algérie",
            website: "quarcode.dz",
          },
        },
      ] as LegalSection[],
    },
  },

  // ─── ARABIC ────────────────────────────────────────────────────────────────
  ar: {
    nav: {
      services: "الخدمات",
      about: "من نحن",
      pricing: "الأسعار",
      contact: "تواصل معنا",
      cta: "ابدأ الآن",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
    },
    hero: {
      badge: "التميز الهندسي – الجزائر",
      headline1: "هندسة التميز",
      headline2: "الرقمي",
      body: "شريكك الرائد في الجزائر للحلول الإلكترونية والبرمجية المخصصة.",
      cta1: "احصل على استشارة مجانية",
      cta2: "اطّلع على أعمالنا",
      imageAlt: "لوحة تحكم واجهة مستخدم متطورة.",
    },
    services: {
      sectionHeadline1: "حلول مصممة لتحقيق",
      sectionHeadline2: "الأداء",
      sectionBody:
        "نجمع بين معايير الهندسة العالمية والرؤى المحلية لتقديم برمجيات عالمية المستوى.",
      prevLabel: "السابق",
      nextLabel: "التالي",
      items: [
        {
          title: "تطوير الويب",
          description: "تطبيقات ويب فائقة السرعة ومُحسَّنة لمحركات البحث.",
          features: [
            "تطبيقات الويب التقدمية",
            "التجارة الإلكترونية للمؤسسات",
            "حلول إدارة المحتوى المخصصة",
          ],
        },
        {
          title: "البرمجيات المخصصة",
          description: "برمجيات مُصمَّمة خصيصاً لأتمتة سير العمل المعقد.",
          features: [
            "البنية التحتية السحابية",
            "تكامل واجهات برمجة التطبيقات",
            "تطبيقات سطح المكتب",
          ],
        },
        {
          title: "الاستراتيجية الرقمية",
          description: "خرائط طريق مبنية على البيانات لتحقيق نمو مستدام.",
          features: [
            "خارطة طريق المنتج",
            "أبحاث تجربة المستخدم",
            "تحليل السوق",
          ],
        },
      ],
    },
    contact: {
      headline1: "مستعد لبناء",
      headline2: "المستقبل",
      body: "تواصل معنا لمناقشة مشروعك.",
      emailLabel: "راسلنا",
      locationLabel: "مقرّنا",
      location: "الجزائر العاصمة، الجزائر",
      email: "hello@quarcode.com",
      fields: {
        name: "الاسم الكامل",
        namePlaceholder: "محمد الأمين",
        email: "البريد الإلكتروني",
        emailPlaceholder: "mohammed@example.com",
        message: "رسالتك",
        messagePlaceholder: "أخبرنا عن مشروعك...",
        submit: "إرسال الرسالة",
      },
    },
    footer: {
      tagline: "التميز الهندسي من الجزائر.",
      copyright: "© 2026 Quarcode. التميز الهندسي من الجزائر.",
      columns: [
        {
          heading: "الشركة",
          links: [
            { label: "من نحن", href: "/About" },
            { label: "تواصل معنا", href: "/Contact" },
          ],
        },
        {
          heading: "تواصل",
          links: [
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "https://github.com/DabbacheDjawad" },
            { label: "Instagram", href: "https://www.instagram.com/quarcodeagency/" },
            { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591658214352" },
          ],
        },
      ],
      newsletter: {
        heading: "النشرة الإخبارية",
        body: "ابقَ على اطّلاع بأحدث رؤانا.",
        emailPlaceholder: "البريد الإلكتروني",
        emailLabel: "بريدك الإلكتروني للاشتراك",
        subscribeLabel: "اشترك",
      },
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
    },
    aboutPage: {
      metaTitle: "من نحن | Quarcode",
      footerTagline: "رواد التميز في هندسة البرمجيات بالجزائر منذ 2021.",
      footerCopyright: "© 2026 Quarcode.",
      footerColumns: [
        {
          heading: "روابط سريعة",
          links: [
            { label: "الخدمات", href: "/Services" },
            { label: "من نحن", href: "/About" },
            { label: "الوظائف", href: "/Jobs" },
          ],
        },
        {
          heading: "تواصل",
          links: [
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "https://github.com/DabbacheDjawad" },
            { label: "Instagram", href: "https://www.instagram.com/quarcodeagency/" },
            { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591658214352" },
          ],
        },
        {
          heading: "قانوني",
          links: [
            { label: "سياسة الخصوصية", href: "/privacy-policy" },
            { label: "شروط الاستخدام", href: "/terms-of-service" },
          ],
        },
      ],
    },
    aboutHero: {
      badge: "الابتكار الجزائري بالهندسة",
      headline1: "نؤسّس",
      headline2: "مستقبل الجزائر",
      headline3: "بالكود.",
      body: "Quarcode وكالة رائدة لحلول البرمجيات، متخصصة في رفع مستوى المشهد الرقمي الجزائري.",
    },
    ourStory: {
      badge: "قصتنا",
      headline: "من الجزائر إلى العالم",
      body1:
        "تأسست Quarcode عام 2021 انطلاقاً من قناعة بسيطة: الكفاءات الهندسية البرمجية عالمية المستوى موجودة في الجزائر.",
      body2:
        "بدأنا بفريق صغير في الجزائر العاصمة. اليوم نُدير استوديو يضم أكثر من 45 مهندساً.",
      milestone1Year: "2021",
      milestone1Label: "التأسيس",
      milestone2Year: "2023",
      milestone2Label: "+45 مهندساً",
      milestone3Year: "2024",
      milestone3Label: "+120 مشروعاً",
    },
    missionVision: {
      mission: {
        title: "مهمتنا",
        body: "تمكين الشركات الجزائرية من برمجيات عالمية تدفع النمو وتُبسّط العمليات.",
      },
      vision: {
        title: "رؤيتنا",
        body: "أن نصبح القائد الأبرز في التحول الرقمي الجزائري، معترفاً بنا عالمياً.",
      },
    },
    coreValues: {
      sectionTitle: "قيمنا الأساسية",
      sectionBody: "المبادئ الجوهرية التي توجّه كل سطر كود نكتبه.",
      items: [
        {
          title: "الجودة",
          description: "لا نكتفي بـ«يعمل». كودنا نظيف، وبنيتنا التحتية راسخة.",
        },
        {
          title: "الابتكار",
          description: "نتجاوز الحدود بتبني أحدث التقنيات.",
        },
        {
          title: "النزاهة",
          description:
            "الشفافية هي وضعنا الافتراضي. نبني الثقة من خلال التواصل الصادق.",
        },
      ],
    },
    leadership: {
      sectionTitle: "العقول وراء Quarcode",
      sectionBody: "فريق قيادي من مهندسين متمرسين واستراتيجيين ذوي خبرة واسعة.",
      stats: [
        { value: "+45", label: "مهندس نشط" },
        { value: "+120", label: "مشروع مُسلَّم" },
      ],
      leaders: [
        { name: "أمين ب.", role: "المهندس المعماري الأول" },
        { name: "سارة ك.", role: "استراتيجية المنتج" },
      ],
    },
    aboutCta: {
      headline: "مستعد لبناء شيء استثنائي؟",
      cta1: "اعمل معنا",
      cta2: "اطّلع على معرض أعمالنا",
    },
    contactPage: {
      metaTitle: "تواصل معنا | Quarcode",
      footerTagline: "نصنع مستقبل البرمجيات في الجزائر وخارجها.",
      footerCopyright: "© 2026 Quarcode.",
      footerColumns: [
        {
          heading: "المنصة",
          links: [
            { label: "الخدمات", href: "/Services" },
            { label: "من نحن", href: "/About" },
          ],
        },
        {
          heading: "الشركة",
          links: [
            { label: "سياسة الخصوصية", href: "/privacy-policy" },
            { label: "شروط الاستخدام", href: "/terms-of-service" },
          ],
        },
        {
          heading: "تواصل اجتماعي",
          links: [
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "https://github.com/DabbacheDjawad" },
            { label: "Instagram", href: "https://www.instagram.com/quarcodeagency/" },
            { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591658214352" },
          ],
        },
      ],
    },
    contactHero: {
      badge: "مستعدون للتعاون",
      headline1: "لنبني معاً شيئاً",
      headline2: "استثنائياً",
      headline3: ".",
      body: "انطلاقاً من قلب الجزائر العاصمة، نسد الفجوة بين الهندسة المعقدة والتصميم الأنيق.",
    },
    contactForm: {
      projectTypes: [
        "تطوير الويب",
        "تطبيق جوّال",
        "برمجيات المؤسسات",
        "تصميم UI/UX",
        "تكامل الذكاء الاصطناعي",
      ],
      fields: {
        name: "الاسم الكامل",
        namePlaceholder: "محمد الأمين",
        email: "البريد الإلكتروني",
        emailPlaceholder: "mohammed@example.com",
        projectType: "نوع المشروع",
        message: "الرسالة",
        messagePlaceholder:
          "أخبرنا عن أهداف مشروعك والجدول الزمني وأي متطلبات خاصة...",
        submit: "إرسال الرسالة",
        sending: "جارٍ الإرسال…",
      },
      status: {
        success: "تم إرسال رسالتك بنجاح! سنرد عليك في غضون 24 ساعة.",
        error: "فشل إرسال رسالتك. يرجى المحاولة مجدداً.",
        validationSummary: "يرجى تصحيح الأخطاء أدناه.",
        fieldErrors: {
          fullName: "يرجى إدخال اسمك الكامل (حرفان على الأقل).",
          email: "يرجى إدخال عنوان بريد إلكتروني صحيح.",
          projectType: "يرجى اختيار نوع المشروع.",
          message: "يرجى وصف مشروعك (20 حرفاً على الأقل).",
        },
      },
    },
    contactSidebar: {
      officeTitle: "موقعنا",
      officeAddress: "علي منجلي، UV 14\nقسنطينة، 25019\nالجزائر",
      emailTitle: "البريد الإلكتروني",
      connectTitle: "تواصل معنا",
      openInMaps: "فتح في الخرائط",
      mapTitle: "موقع مكتب Quarcode — علي منجلي، قسنطينة",
      mapLabel: "علي منجلي · قسنطينة",
    },
    faqPage: {
      metaTitle: "الأسئلة الشائعة | Quarcode",
      metaDescription: "إجابات على الأسئلة الشائعة.",
      footerTagline: "التميز الهندسي من الجزائر.",
      footerCopyright: "© 2026 Quarcode.",
      footerColumns: [
        {
          heading: "المنصة",
          links: [
            { label: "إدارة المشاريع", href: "#" },
            { label: "بوابة المطورين", href: "#" },
          ],
        },
        {
          heading: "الشركة",
          links: [
            { label: "شروط الاستخدام", href: "/terms-of-service" },
            { label: "سياسة الخصوصية", href: "/privacy-policy" },
          ],
        },
        {
          heading: "تواصل",
          links: [
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "https://github.com/DabbacheDjawad" },
            { label: "Instagram", href: "https://www.instagram.com/quarcodeagency/" },
            { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591658214352" },
          ],
        },
      ],
      hero: {
        badge: "مركز الدعم",
        headline1: "الأسئلة",
        headline2: "المتكررة.",
        body: "كل ما تحتاج معرفته عن عملياتنا وأسعارنا والجداول الزمنية.",
      },
    },
    faqSidebar: {
      categoriesLabel: "الفئات",
      allLabel: "كل الأسئلة",
      stillCuriousTitle: "هل لديك مزيد من الأسئلة؟",
      stillCuriousBody: "لم تجد ما تبحث عنه؟ تحدث مباشرة مع فريقنا.",
      stillCuriousCta: "تواصل معنا",
    },
    faqItems: [
      {
        id: "cost",
        question: "كم تكلفة إنشاء موقع إلكتروني؟",
        answer: {
          intro: "تعتمد التكلفة على نوع الموقع. تبدأ أسعارنا من 30,000 دج.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "timeline",
        question: "كم يستغرق إنشاء الموقع؟",
        answer: {
          intro: "يعتمد الجدول الزمني على تعقيد المشروع:",
          tags: ["موقع الأعمال: 5–7 أيام", "تطبيق ويب مخصص: 2–6 أسابيع"],
          bullets: [],
          steps: [],
          checks: [],
          note: "سيُقدَّم جدول زمني تفصيلي قبل بدء التطوير.",
        },
      },
      {
        id: "mobile",
        question: "هل سيعمل موقعي على الأجهزة المحمولة؟",
        answer: {
          intro: "نعم. كل موقع نبنيه متجاوب بالكامل.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "cms",
        question: "هل يمكنني تحديث موقعي بنفسي؟",
        answer: {
          intro:
            "نعم. إذا تضمّن مشروعك لوحة تحكم، ستتمكن من إدارة المحتوى بسهولة.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "seo",
        question: "هل يشمل الخدمة تحسين محركات البحث؟",
        answer: {
          intro: "نعم. تتضمن جميع مواقعنا تحسيناً أساسياً لمحركات البحث.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "hosting",
        question: "هل توفرون الاستضافة وتسجيل النطاق؟",
        answer: {
          intro: "نعم. يمكننا التعامل مع كل شيء نيابةً عنك، بما في ذلك:",
          tags: [],
          bullets: [
            "تسجيل اسم النطاق",
            "استضافة الويب",
            "شهادة SSL (HTTPS)",
            "إعداد الخادم والنشر",
          ],
          steps: [],
          checks: [],
          note: "سيُسلَّم موقعك جاهزاً للإطلاق.",
        },
      },
      {
        id: "maintenance",
        question: "هل تقدمون صيانة للمواقع؟",
        answer: {
          intro: "نعم. نقدم خدمات صيانة تشمل:",
          tags: [],
          bullets: [
            "تحديثات الأمان",
            "نسخ احتياطية منتظمة",
            "مراقبة الأداء",
            "إصلاح الأخطاء",
            "الدعم الفني",
          ],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "revisions",
        question: "هل يمكنني طلب تعديلات بعد التسليم؟",
        answer: {
          intro: "بالتأكيد. التعديلات الطفيفة مشمولة بعد التسليم.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "remote",
        question: "هل تعملون فقط مع عملاء في الجزائر؟",
        answer: {
          intro: "لا. نعمل مع الشركات في الجزائر وعلى المستوى الدولي.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "start",
        question: "كيف أبدأ؟",
        answer: {
          intro: "البداية بسيطة:",
          tags: [],
          bullets: [],
          steps: [
            "تواصل معنا.",
            "أخبرنا عن مشروعك.",
            "سنناقش متطلباتك.",
            "ستتلقى عرضاً تفصيلياً.",
            "بعد الموافقة، نبدأ التطوير.",
          ],
          checks: [],
          note: "",
        },
      },
      {
        id: "ownership",
        question: "هل سأمتلك موقعي الإلكتروني؟",
        answer: {
          intro:
            "نعم. بمجرد اكتمال المشروع وسداد الدفعة الأخيرة، ستمتلك الموقع بالكامل.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "why",
        question: "لماذا تختار Quarcode؟",
        answer: {
          intro: "إليك ما يميّز Quarcode:",
          tags: [],
          bullets: [],
          steps: [],
          checks: [
            "تصميم حديث واحترافي",
            "تطوير مخصص بالكامل",
            "مواقع سريعة وآمنة وقابلة للتوسع",
            "هيكل صديق لمحركات البحث",
            "متجاوب على جميع الأجهزة",
            "دعم مستمر بعد الإطلاق",
            "تواصل شفاف",
            "تسليم في الوقت المحدد",
            "حلول مصمّمة لأهداف عملك",
          ],
          note: "",
        },
      },
    ],
    servicesPage: {
      metaTitle: "الخدمات | Quarcode",
      footerCopyright: "© 2026 Quarcode.",
      footerColumns: [
        {
          heading: "الخدمات",
          links: [
            { label: "تطوير المواقع", href: "/services" },
            { label: "التجارة الإلكترونية", href: "/services" },
            { label: "تطبيقات ويب مخصصة", href: "/services" },
            { label: "تحسين محركات البحث", href: "/services" },
          ],
        },
        {
          heading: "تواصل",
          links: [
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "https://github.com/DabbacheDjawad" },
            { label: "Instagram", href: "https://www.instagram.com/quarcodeagency/" },
            { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591658214352" }
          ],
        },
        {
          heading: "قانوني",
          links: [
            { label: "سياسة الخصوصية", href: "/privacy-policy" },
            { label: "شروط الاستخدام", href: "/terms-of-service" },
          ],
        },
      ],
      hero: {
        badge: "خدماتنا",
        headline1: "حلول رقمية تُنمّي",
        headline2: "أعمالك",
        body: "في Quarcode، نصمم ونطور مواقع إلكترونية وتطبيقات ويب حديثة وعالية الأداء.",
      },
      why: {
        sectionTitle: "لماذا تختار Quarcode؟",
        sectionBody:
          "لا نبني مواقع فحسب — نبني أسساً رقمية تُزدهر معها أعمالك.",
        items: [
          {
            icon: "bolt",
            title: "تقنيات حديثة",
            body: "نستخدم تقنيات موثوقة وحديثة.",
          },
          {
            icon: "devices",
            title: "تصميم متجاوب",
            body: "كل موقع يبدو رائعاً على جميع الأجهزة.",
          },
          {
            icon: "travel_explore",
            title: "صديق لمحركات البحث",
            body: "مواقعنا مبنية مع مراعاة محركات البحث.",
          },
          {
            icon: "lock",
            title: "آمن افتراضياً",
            body: "الأمان مدمج في كل مشروع.",
          },
          {
            icon: "tune",
            title: "حلول مخصصة",
            body: "نبني حلولاً تتناسب مع أهدافك.",
          },
          {
            icon: "support_agent",
            title: "دعم مستمر",
            body: "علاقتنا لا تنتهي عند الإطلاق.",
          },
        ],
      },
      process: {
        sectionTitle: "طريقة عملنا",
        sectionBody: "منهجية واضحة ومنظمة.",
        steps: [
          { number: "01", title: "الاستكشاف", body: "نتعرف على عملك وأهدافك." },
          {
            number: "02",
            title: "التخطيط",
            body: "نحدد نطاق المشروع والجدول الزمني.",
          },
          { number: "03", title: "التصميم", body: "نبتكر واجهة مستخدم حديثة." },
          {
            number: "04",
            title: "التطوير",
            body: "نبني موقعك باستخدام أفضل الممارسات.",
          },
          {
            number: "05",
            title: "الاختبار",
            body: "كل ميزة تُختبر لضمان الجودة.",
          },
          {
            number: "06",
            title: "الإطلاق",
            body: "يصبح موقعك متاحاً ومحسَّناً بالكامل.",
          },
        ],
      },
      cta: {
        headline: "مستعد لإطلاق مشروعك؟",
        body: "لنبني معاً موقعاً يمثّل علامتك التجارية ويُنمّي أعمالك.",
        cta1: "احصل على عرض سعر مجاني",
        cta2: "اقرأ الأسئلة الشائعة",
      },
      getAQuote: "احصل على عرض سعر",
      mainServices: [
        {
          id: "web",
          title: "تطوير المواقع الإلكترونية",
          description: "نبني مواقع احترافية تُبرز أعمالك.",
          items: [
            "تطوير مخصص",
            "تصميم حديث ومتجاوب",
            "أداء تحميل سريع",
            "نماذج تواصل وخرائط غوغل",
            "شهادة SSL مشمولة",
            "تحسين SEO أساسي",
            "توافق مع كل المتصفحات",
          ],
          perfectFor: [
            "الشركات الصغيرة",
            "المطاعم",
            "الأطباء",
            "المحامون",
            "الوكالات",
            "المدارس",
            "المستقلون",
          ],
        },
        {
          id: "ecom",
          title: "تطوير التجارة الإلكترونية",
          description: "بِع منتجاتك عبر الإنترنت.",
          items: [
            "كتالوج المنتجات والفئات",
            "سلة التسوق والدفع",
            "إدارة الطلبات والمخزون",
            "حسابات العملاء",
            "رموز الخصم",
            "تكامل التحليلات",
          ],
          perfectFor: [],
        },
        {
          id: "app",
          title: "تطبيقات ويب مخصصة",
          description: "نبني حلولاً مصمَّمة حول عمليات أعمالك.",
          items: [
            "أنظمة حجز",
            "منصات CRM",
            "لوحات تحكم داخلية",
            "بوابات العملاء والموظفين",
            "أنظمة المخزون",
          ],
          perfectFor: [],
        },
        {
          id: "design",
          title: "تصميم UI/UX",
          description: "نصمم واجهات نظيفة وبديهية.",
          items: [
            "واجهات نظيفة وحديثة",
            "نهج mobile-first",
            "تصاميم تتمحور حول المستخدم",
            "تنقل بديهي",
            "إمكانية الوصول للجميع",
          ],
          perfectFor: [],
        },
        {
          id: "seo",
          title: "تحسين محركات البحث",
          description: "نساعد أعمالك على اكتساب مزيد من الظهور.",
          items: [
            "تدقيق هيكل الموقع",
            "تحسين سرعة الصفحة",
            "الوسوم الوصفية والمخططات",
            "تحسين الصور",
            "أداء الجوال",
            "SEO تقني",
          ],
          perfectFor: [],
        },
        {
          id: "perf",
          title: "تحسين الأداء",
          description: "موقع أسرع يعني تحويلات أعلى.",
          items: [
            "أوقات تحميل أسرع",
            "Core Web Vitals أفضل",
            "تجربة مستخدم محسّنة",
            "معدل ارتداد أقل",
            "معدل تحويل أعلى",
          ],
          perfectFor: [],
        },
        {
          id: "maintenance",
          title: "صيانة الموقع",
          description: "حافظ على أمان موقعك وسلاسة تشغيله.",
          items: [
            "تحديثات الأمان",
            "إصلاح الأخطاء",
            "نسخ احتياطية منتظمة",
            "مراقبة الأداء",
            "تحديثات المحتوى",
            "الدعم الفني",
          ],
          perfectFor: [],
        },
        {
          id: "hosting",
          title: "الاستضافة والنشر",
          description: "نتكفل بنشر موقعك على الإنترنت.",
          items: [
            "إعداد النطاق",
            "ضبط الاستضافة",
            "تثبيت SSL",
            "نشر الخادم",
            "إعداد البريد الإلكتروني",
            "مراقبة مستمرة",
          ],
          perfectFor: [],
        },
      ],
    },
    // ── Service detail pages — Arabic ────────────────────────────────────────
    serviceDetails: {
      backLabel: "جميع الخدمات",
      getQuoteLabel: "احصل على عرض مجاني",
      includedLabel: "ما يتضمنه",
      perfectForLabel: "مثالي لـ",
      benefitsLabel: "الفوائد الرئيسية",
      processLabel: "كيف يعمل",
      faqLabel: "الأسئلة الشائعة",
      relatedLabel: "خدمات ذات صلة",
      ctaHeadline: "هل أنت مستعد للبدء؟",
      ctaBody: "أخبرنا عن مشروعك وسنرد عليك خلال 24 ساعة.",
      ctaButton: "ابدأ مشروعك",
      services: [
        {
          id: "web",
          tagline: "عملك، على الإنترنت وبأعلى أداء.",
          longDescription: "موقع الويب الاحترافي هو أساس حضورك الرقمي. نصمم وننشئ مواقع سريعة وآمنة وجذابة بصريًا تعكس علامتك التجارية وتحوّل الزوار إلى عملاء.",
          benefits: [
            { title: "يحوّل الزوار", body: "صفحات منظمة استراتيجيًا لتوجيه المستخدمين نحو التواصل أو الشراء." },
            { title: "تحميل في أقل من ثانيتين", body: "نهج يُركّز على الأداء مع صور محسّنة وكود فعّال." },
            { title: "مصنّف على جوجل", body: "بنية HTML نظيفة وترميز دلالي وأفضل ممارسات SEO منذ اليوم الأول." },
            { title: "يعمل على جميع الأجهزة", body: "متجاوب تمامًا، مختبر على جميع أحجام الشاشات قبل الإطلاق." },
          ],
          process: [
            { step: "01", title: "مكالمة الاكتشاف", body: "نتعرف على عملك وجمهورك وأهدافك." },
            { step: "02", title: "الأطر السلكية وخريطة الموقع", body: "نرسم بنية الموقع وننتج مخططات بدقة منخفضة للموافقة." },
            { step: "03", title: "التصميم البصري", body: "تصميم UI كامل يتوافق مع هويتك البصرية." },
            { step: "04", title: "التطوير", body: "نبني الموقع باستخدام Next.js أو المكدس المناسب بكود نظيف وموثّق." },
            { step: "05", title: "ضمان الجودة والاختبار", body: "اختبار متعدد المتصفحات وفحوصات الجوال والأداء." },
            { step: "06", title: "الإطلاق والتسليم", body: "النشر وإعداد النطاق وشهادة SSL وتسليم كامل مع التوثيق." },
          ],
          faqs: [
            { question: "كم يستغرق مشروع موقع الويب؟", answer: "عادةً من 2 إلى 5 أسابيع حسب النطاق وسرعة تقديم ملاحظاتك." },
            { question: "هل أحتاج إلى تقديم المحتوى؟", answer: "تقدم النصوص والصور. يمكننا تقديم المشورة حول البنية أو تولي كتابة المحتوى." },
            { question: "هل سيكون الموقع متوافقًا مع الجوال؟", answer: "نعم — كل موقع نبنيه متجاوب تمامًا ومختبر على الهواتف والأجهزة اللوحية وأجهزة سطح المكتب." },
            { question: "هل يمكنني تحديث الموقع بنفسي؟", answer: "يمكننا دمج نظام إدارة محتوى بسيط حتى تتمكن من إدارة المحتوى دون لمس الكود." },
          ],
          related: ["ecom", "seo", "design"],
        },
        {
          id: "ecom",
          tagline: "بع عبر الإنترنت. شحن أسرع. نمو أكبر.",
          longDescription: "نبني متاجر إلكترونية سريعة التصفح وسهلة الإدارة ومصممة للتحويل. من التصميم إلى إعداد الدفع، نتولى المكدس بالكامل.",
          benefits: [
            { title: "دفع آمن", body: "تكاملات دفع بمعايير الصناعة مع حماية من الاحتيال." },
            { title: "سهل الإدارة", body: "لوحة إدارة واضحة لتحديث المنتجات ومعالجة الطلبات." },
            { title: "مبني للتوسع", body: "يتعامل مع ذروات الزيارات والكتالوجات الكبيرة دون تدهور الأداء." },
            { title: "تحليلات جاهزة", body: "متكامل مع Google Analytics وMeta Pixel للرؤية الكاملة لسلوك العملاء." },
          ],
          process: [
            { step: "01", title: "مراجعة المنتجات والكتالوج", body: "نحلل نطاق منتجاتك لتحديد بنية المتجر." },
            { step: "02", title: "تصميم المتجر", body: "تصميم واجهة مخصصة تركز على اكتشاف المنتج وتدفق سلس للدفع." },
            { step: "03", title: "تكامل الدفع", body: "إعداد بوابة الدفع والضرائب والشحن والعملات." },
            { step: "04", title: "التطوير والاختبار", body: "بناء المتجر الكامل وسلة الشراء وإيميلات تأكيد الطلب ولوحة الإدارة." },
            { step: "05", title: "الإطلاق", body: "النشر وإعداد النطاق وجلسة كاملة لتدريب فريقك." },
          ],
          faqs: [
            { question: "ما بوابات الدفع التي تدعمها؟", answer: "Stripe وPayPal ومزودي الدفع الجزائريين المحليين حسب سوقك." },
            { question: "هل يمكنني إدارة منتجاتي بعد الإطلاق؟", answer: "نعم — تتيح لوحة الإدارة إضافة المنتجات وتعديلها وحذفها وإدارة المخزون." },
            { question: "هل تتعاملون مع تكاملات الشحن؟", answer: "نعم — يمكننا دمج شركات الشحن وحساب الأسعار تلقائيًا." },
            { question: "هل يمكنني البيع دوليًا؟", answer: "نعم — يمكننا إعداد دعم متعدد العملات ومناطق الشحن والقواعد الضريبية." },
          ],
          related: ["web", "perf", "maintenance"],
        },
        {
          id: "app",
          tagline: "برمجيات مخصصة لطريقة عمل عملك الفعلية.",
          longDescription: "نادرًا ما يتناسب البرنامج الجاهز مع العمليات المعقدة. نبني تطبيقات ويب مخصصة — أنظمة حجز، CRM، لوحات تحكم، بوابات — مصممة حول سير عملك تمامًا.",
          benefits: [
            { title: "يتناسب مع سير عملك", body: "مبني من الصفر حول منطق عملك — لا قوالب جاهزة." },
            { title: "وصول يعتمد على الأدوار", body: "أنظمة متعددة المستخدمين بصلاحيات مخصصة." },
            { title: "يتكامل مع مكدسك", body: "نتصل بأدواتك الموجودة عبر تكاملات نظيفة." },
            { title: "يتوسع مع عملك", body: "معمارية مصممة لاستيعاب بيانات ومستخدمين وميزات متزايدة." },
          ],
          process: [
            { step: "01", title: "ورشة المتطلبات", body: "تحليل عميق لسير عملك ونموذج البيانات وأدوار المستخدمين." },
            { step: "02", title: "معمارية النظام", body: "تصميم مخطط البيانات وبنية API والواجهة الأمامية." },
            { step: "03", title: "التطوير التكراري", body: "سبرينتات أسبوعين مع عروض عملية عند كل معلم." },
            { step: "04", title: "التكامل والاختبار", body: "اختبار شامل ومراجعة أمنية وضمان جودة التكاملات." },
            { step: "05", title: "النشر والتدريب", body: "نشر مرحلي وجلسة تأهيل للفريق وتوثيق للمشرفين." },
          ],
          faqs: [
            { question: "كيف يتم تسعير التطبيق المخصص؟", answer: "لكل مشروع بعد ورشة اكتشاف. التعقيد والتكاملات هي المحركات الرئيسية." },
            { question: "هل يمكنكم التكامل مع أدواتنا الموجودة؟", answer: "نعم — تكاملنا مع Salesforce وHubSpot وQuickBooks وكثير من المنصات." },
            { question: "من يملك الكود؟", answer: "أنت. يُسلَّم الكود المصدري الكامل ويُنقل إليك عند إتمام المشروع." },
            { question: "هل تقدمون دعمًا بعد الإطلاق؟", answer: "نعم — نقدم صيانة شهرية تشمل إصلاح الأخطاء والتحديثات الأمنية والإضافات الصغيرة." },
          ],
          related: ["web", "design", "maintenance"],
        },
        {
          id: "design",
          tagline: "واجهات جميلة ومصممة للاستخدام.",
          longDescription: "التصميم الجيد ليس زينة — بل هو الفرق بين منتج يستخدمه الناس بثقة ومنتج يتركونه. نصمم واجهات نظيفة وحديثة تركز على سلوك المستخدم الفعلي.",
          benefits: [
            { title: "تفاعل أعلى", body: "تخطيطات بديهية تقلل الاحتكاك وتبقي المستخدمين في الصفحة." },
            { title: "اتساق العلامة التجارية", body: "نظام تصميم موحد يجعل كل نقطة تواصل تبدو كعلامتك." },
            { title: "إمكانية الوصول مدمجة", body: "تباين WCAG وأحجام الخط والحالات التفاعلية من البداية." },
            { title: "جاهز للتسليم", body: "جميع التصاميم تُسلَّم بـ Figma مع مكونات ومواصفات المطور." },
          ],
          process: [
            { step: "01", title: "بحث العلامة والمستخدم", body: "نراجع هويتك البصرية وندرس مستخدميك المستهدفين." },
            { step: "02", title: "الأطر السلكية", body: "مخططات بدقة منخفضة للصفحات الرئيسية للتحقق من التخطيط." },
            { step: "03", title: "التصميم البصري", body: "تصاميم Figma عالية الدقة بلوحة الألوان والطباعة ونظام المكونات." },
            { step: "04", title: "النموذج الأولي والمراجعة", body: "نموذج تفاعلي لمراجعة أصحاب المصلحة قبل التسليم." },
            { step: "05", title: "تسليم المطور", body: "ملف Figma موضّح مع الأصول المصدّرة ومكتبة المكونات." },
          ],
          faqs: [
            { question: "هل تعملون مع دليل العلامة الموجود؟", answer: "نعم — نعمل ضمن هويتك الموجودة أو نساعد في بناء واحدة." },
            { question: "بأي صيغة تُسلَّم ملفات التصميم؟", answer: "ملفات Figma مع مكتبة مكونات كاملة وأصول مصدّرة." },
            { question: "هل يمكنكم تصميم تطبيقات الجوال؟", answer: "نصمم للويب وويب الجوال. تصميم UI الأصلي لـ iOS/Android متاح عند الطلب." },
            { question: "هل تقدمون التصميم فقط دون تطوير؟", answer: "نعم — نقدم مشاريع تصميم مستقلة يمكنك تسليمها لفريق التطوير الخاص بك." },
          ],
          related: ["web", "app", "perf"],
        },
        {
          id: "seo",
          tagline: "كن موجودًا أمام من يبحث عنك بالفعل.",
          longDescription: "موقع رائع لا يجده أحد فرصة ضائعة. نراجع الصحة التقنية لموقعك ونصلح المشكلات الهيكلية وننفذ SEO داخل الصفحة لمساعدة محركات البحث على فهم محتواك وترتيبه.",
          benefits: [
            { title: "مزيد من الزيارات العضوية", body: "ترتيب أعلى على جوجل يعني مزيدًا من الزوار بدون إنفاق إعلاني." },
            { title: "السرعة = ترتيب أفضل", body: "سرعة الصفحة تؤثر مباشرة على SEO — نصلح المشكلات التقنية." },
            { title: "البيانات المنظمة", body: "ترميز Schema يساعد محركات البحث على عرض نتائج غنية." },
            { title: "عائد طويل الأمد", body: "الزيارات العضوية تتراكم مع الوقت على عكس الإعلانات المدفوعة." },
          ],
          process: [
            { step: "01", title: "المراجعة التقنية", body: "زحف كامل للموقع لتحديد الروابط المعطلة والصفحات البطيئة والعلامات المفقودة." },
            { step: "02", title: "بحث الكلمات المفتاحية", body: "تحديد المصطلحات التي يستخدمها عملاؤك المستهدفون وتخصيصها لبنية موقعك." },
            { step: "03", title: "التحسين داخل الصفحة", body: "العناوين والأوصاف والهيكل وعلامات alt والربط الداخلي." },
            { step: "04", title: "الإصلاحات التقنية", body: "حل أخطاء الزحف وخرائط الموقع والعلامات الأصلية وعوامل تباطؤ الصفحة." },
            { step: "05", title: "التقارير", body: "تتبع شهري للترتيب والزيارات لرؤية ما يتحسن بالضبط." },
          ],
          faqs: [
            { question: "كم يستغرق رؤية نتائج SEO؟", answer: "معظم العملاء يرون تحسنًا قابلًا للقياس خلال 2 إلى 4 أشهر." },
            { question: "هل تقومون ببناء الروابط؟", answer: "خدمتنا الأساسية تركز على SEO التقني وداخل الصفحة. بناء الروابط متاح كإضافة." },
            { question: "هل يمكنكم العمل على موقع أنشأه شخص آخر؟", answer: "نعم — نراجع ونحسّن أي موقع بغض النظر عن تقنية بنائه." },
            { question: "هل تتعاملون مع SEO المحلي؟", answer: "نعم — نحسّن قوائم Google Business Profile والكلمات الجغرافية للشركات الجزائرية." },
          ],
          related: ["web", "perf", "maintenance"],
        },
        {
          id: "perf",
          tagline: "كل ثانية تهم. نجعلها تستحق.",
          longDescription: "سرعة الصفحة مرتبطة مباشرة بالإيرادات — تأخير ثانية واحدة يمكن أن يقلل التحويلات بنسبة 7٪. نشخّص عوامل التباطؤ ونصلحها لتحقيق تحسينات قابلة للقياس.",
          benefits: [
            { title: "معدل ارتداد أقل", body: "الصفحات السريعة تبقي الزوار بدلًا من إرسالهم للمنافس." },
            { title: "Core Web Vitals أفضل", body: "تحسين درجات LCP وFID وCLS يرفع ترتيبك مباشرة." },
            { title: "تحويلات أعلى", body: "دفع أسرع، تحميل أسرع، مزيد من الطلبات المكتملة." },
            { title: "استضافة أرخص", body: "الكود والأصول المحسّنة تسمح بتشغيل بنية تحتية أخف وأرخص." },
          ],
          process: [
            { step: "01", title: "مراجعة الأساس", body: "Lighthouse وWebPageTest وCore Web Vitals لتحديد نقطة البداية." },
            { step: "02", title: "تحليل الأسباب الجذرية", body: "تحديد أكبر عوامل التباطؤ — موارد تحجب العرض، صور غير مضغوطة، انزياحات التخطيط." },
            { step: "03", title: "سبرينت التحسين", body: "ضغط الصور، التحميل الكسول، تقسيم الكود، رؤوس التخزين المؤقت، تحسين الخطوط." },
            { step: "04", title: "إعادة المراجعة والتقرير", body: "مراجعة ما بعد الإصلاح مع مقاييس قبل/بعد لجميع مؤشرات الأداء." },
          ],
          faqs: [
            { question: "ما هو درجة Core Web Vitals الجيدة؟", answer: "أخضر على الثلاثة: LCP أقل من 2.5 ثانية، FID أقل من 100 مللي ثانية، CLS أقل من 0.1." },
            { question: "هل ستؤثر التحسينات على التصميم؟", answer: "لا تغييرات مرئية — كل التحسينات تقنية ولا تعدّل الواجهة." },
            { question: "كم تحسن يمكن توقعه؟", answer: "معظم المواقع ترى تحسنًا بنسبة 30-60٪ في وقت التحميل بعد مراجعة كاملة." },
            { question: "هل هذه خدمة لمرة واحدة أم متكررة؟", answer: "نقدم كليهما: سبرينت لمرة واحدة وعقد شهري مع مراقبة مستمرة." },
          ],
          related: ["seo", "maintenance", "web"],
        },
        {
          id: "maintenance",
          tagline: "موقعك، يعمل دائمًا. آمن دائمًا.",
          longDescription: "المواقع تحتاج اهتمامًا مستمرًا — تصحيحات أمنية وتحديثات وإصلاح أخطاء ومراقبة. تعاقداتنا الشهرية تمنحك فريقًا تقنيًا مخصصًا دون تكاليف موظف دائم.",
          benefits: [
            { title: "صفر انقطاع", body: "مراقبة استباقية مع تنبيهات فورية واستجابة سريعة." },
            { title: "دائمًا محدّث", body: "تحديثات منتظمة للتبعيات وCMS لمنع الثغرات قبل استغلالها." },
            { title: "إصلاح أسرع للأخطاء", body: "الفريق الذي بنى موقعك يحل المشكلات بسرعة." },
            { title: "راحة بال", body: "تقارير شهرية لإبقائك على علم دون الحاجة للتفكير في التفاصيل التقنية." },
          ],
          process: [
            { step: "01", title: "مراجعة الموقع", body: "مراجعة كاملة للصحة الحالية والتبعيات والوضع الأمني." },
            { step: "02", title: "إعداد المراقبة", body: "مراقبة التوفر وتتبع الأخطاء وإعداد النسخ الاحتياطية التلقائية." },
            { step: "03", title: "بدء العقد الشهري", body: "تحديثات منتظمة وتصحيحات أمنية وحصة شهرية من الساعات." },
            { step: "04", title: "التقرير الشهري", body: "تقرير قصير شهريًا يغطي العمل المنجز وإحصاءات التوفر والمشكلات المُبلَّغ عنها." },
          ],
          faqs: [
            { question: "ما الذي يتضمنه العقد الشهري؟", answer: "تحديثات أمنية وتصحيحات التبعيات والمراقبة والنسخ الاحتياطية وحصة ساعات للتعديلات." },
            { question: "هل يمكنني إلغاء العقد؟", answer: "نعم — العقود شهرية مع إشعار مسبق 30 يومًا للإلغاء." },
            { question: "هل تصونون مواقع لم تبنوها؟", answer: "نعم — بعد مراجعة استيعابية أولية." },
            { question: "ماذا يحدث إذا تعطل موقعي؟", answer: "تنبّهنا المراقبة فورًا ونبدأ التحقيق خلال ساعة في أوقات العمل." },
          ],
          related: ["hosting", "perf", "web"],
        },
        {
          id: "hosting",
          tagline: "على الإنترنت. سريع. موثوق. من اليوم الأول.",
          longDescription: "نتولى كل ما يلزم لإطلاق موقعك وإبقائه يعمل — إعداد النطاق والاستضافة وSSL والنشر والبريد الإلكتروني والمراقبة المستمرة.",
          benefits: [
            { title: "إعداد متكامل", body: "نضبط كل شيء من الألف إلى الياء — لا نشر ناقص ولا تخمين في الإعداد." },
            { title: "SSL مدرج", body: "HTTPS على جميع الصفحات من اليوم الأول، يتجدد تلقائيًا." },
            { title: "إعداد البريد الإلكتروني", body: "بريد احترافي على نطاقك، يُضبط ويُختبر قبل التسليم." },
            { title: "توفر موثوق", body: "نشر على بنية تحتية مثبتة مع ضمان مستوى الخدمة وتبادل تلقائي." },
          ],
          process: [
            { step: "01", title: "النطاق وDNS", body: "تسجيل النطاق أو نقله وإعداد DNS والتحقق من النشر." },
            { step: "02", title: "إعداد الاستضافة", body: "توفير الخادم أو إعداد السحابة (Vercel أو AWS أو DigitalOcean أو اختيارك)." },
            { step: "03", title: "SSL والبريد الإلكتروني", body: "تثبيت شهادة SSL وإعداد التجديد التلقائي وتهيئة البريد الاحترافي." },
            { step: "04", title: "النشر والتسليم", body: "النشر النهائي وتفعيل المراقبة وتسليم بيانات الاعتماد إليك." },
          ],
          faqs: [
            { question: "مع أي مزودي استضافة تعملون؟", answer: "Vercel وNetlify وDigitalOcean وAWS وHostinger. نوصي بالأنسب لاحتياجات وميزانية مشروعك." },
            { question: "هل أملك حساب الاستضافة؟", answer: "نعم — كل الحسابات مسجلة باسمك ومعلومات فوترتك." },
            { question: "هل تتعاملون مع تسجيل النطاق؟", answer: "نعم — يمكننا تسجيل نطاقك بالنيابة عنك أو نقل نطاق موجود." },
            { question: "ماذا لو كان لديّ استضافة موجودة؟", answer: "يمكننا النشر على استضافتك الموجودة والتعامل مع الإعداد منها." },
          ],
          related: ["maintenance", "web", "perf"],
        },
      ],
    },
    // ── Legal pages — Arabic ─────────────────────────────────────────────────
    privacyPolicy: {
      metaTitle: "سياسة الخصوصية | Quarcode",
      metaDescription: "كيف تجمع Quarcode بياناتك الشخصية وتستخدمها وتحميها.",
      badge: "قانوني",
      lastUpdated: "1 يوليو 2026",
      contentsLabel: "// المحتويات",
      headline1: "سياسة",
      headline2: "الخصوصية",
      sections: [
        {
          id: "overview",
          number: "01",
          title: "نظرة عامة",
          intro:
            "Quarcode (يُشار إليها بـ«نحن» أو «خاصتنا») شركة هندسة برمجيات يقع مقرها في الجزائر العاصمة، الجزائر. تشرح هذه السياسة كيفية جمع معلوماتك واستخدامها والإفصاح عنها وحمايتها عند زيارة موقعنا quarcode.dz أو الاستعانة بخدماتنا. بالوصول إلى موقعنا أو خدماتنا، فإنك توافق على الشروط الواردة هنا.",
        },
        {
          id: "information-we-collect",
          number: "02",
          title: "المعلومات التي نجمعها",
          subSections: [
            {
              heading: "المعلومات التي تقدمها مباشرةً",
              bullets: [
                "طلبات نماذج التواصل (الاسم، البريد الإلكتروني، الشركة، وصف المشروع)",
                "المراسلات البريدية والردود على تواصلنا",
                "المعلومات المشاركة خلال مكالمات الاستكشاف أو الاجتماعات",
                "تفاصيل الفوترة للمشاركات التعاقدية",
              ],
            },
            {
              heading: "المعلومات المجمَّعة تلقائياً",
              bullets: [
                "نوع المتصفح ونظام التشغيل ومعرّفات الأجهزة",
                "عنوان IP والموقع الجغرافي التقريبي",
                "الصفحات المزارة ومدة البقاء ومسارات التصفح",
                "عناوين URL المرجعية ومصطلحات البحث",
              ],
            },
            {
              heading: "المعلومات من جهات خارجية",
              body: "قد نتلقى معلومات عنك من الشبكات المهنية أو مزودي التحليلات أو الأدلة التجارية العامة عند البحث عن عملاء أو شركاء محتملين.",
            },
          ],
        },
        {
          id: "how-we-use",
          number: "03",
          title: "كيفية استخدام معلوماتك",
          intro: "نستخدم المعلومات التي نجمعها من أجل:",
          bullets: [
            "الرد على طلبات نماذج التواصل واستفسارات الخدمات",
            "تقديم خدمات الهندسة البرمجية التعاقدية وإدارتها وتحسينها",
            "إرسال مراسلات المشاريع والفواتير والتحديثات",
            "تحسين محتوى موقعنا وتجربة المستخدم",
            "الامتثال للالتزامات القانونية وإنفاذ حقوقنا التعاقدية",
            "منع الاحتيال وحماية أمن أنظمتنا",
          ],
          note: "لا نبيع بياناتك الشخصية لأطراف ثالثة. ولا نستخدم بياناتك في التسويق غير المرغوب فيه دون موافقتك المسبقة.",
        },
        {
          id: "legal-basis",
          number: "04",
          title: "الأساس القانوني للمعالجة",
          intro:
            "حيثما ينطبق قانون حماية البيانات، نعالج بياناتك على الأسس القانونية التالية:",
          bullets: [
            "تنفيذ العقد — المعالجة اللازمة لتنفيذ اتفاقية خدمة معك",
            "المصالح المشروعة — كتحسين موقعنا ومنع الاحتيال",
            "الموافقة — عند الاشتراك صراحةً",
            "الالتزام القانوني — حيثما يلزم القانون ذلك",
          ],
        },
        {
          id: "data-sharing",
          number: "05",
          title: "مشاركة البيانات والإفصاح عنها",
          intro: "لا نشارك معلوماتك إلا في الحالات المحدودة التالية:",
          bullets: [
            "مزودو الخدمات — موردون موثوقون مقيَّدون باتفاقيات معالجة البيانات",
            "المتطلبات القانونية — الإفصاح المطلوب بموجب القانون أو أمر المحكمة",
            "نقل الأعمال — في حالة الاندماج أو الاستحواذ أو بيع الأصول",
            "الموافقة — بإذنك الصريح لأي غرض آخر",
          ],
          note: "نطلب من جميع المعالجين من الأطراف الثالثة الحفاظ على تدابير الأمان المناسبة.",
        },
        {
          id: "cookies",
          number: "06",
          title: "ملفات تعريف الارتباط والتتبع",
          intro: "يستخدم موقعنا ملفات تعريف الارتباط وتقنيات تتبع مماثلة.",
          subSections: [
            {
              heading: "أنواع ملفات تعريف الارتباط التي نستخدمها",
              bullets: [
                "ملفات أساسية — ضرورية للوظائف الأساسية للموقع",
                "ملفات تحليلية — تساعدنا على فهم كيفية تفاعل الزوار مع الموقع",
                "ملفات التفضيلات — تتذكر إعداداتك بين الزيارات",
              ],
            },
          ],
          note: "يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات متصفحك.",
        },
        {
          id: "data-retention",
          number: "07",
          title: "الاحتفاظ بالبيانات",
          intro: "نحتفظ بالبيانات الشخصية فقط للمدة الضرورية:",
          bullets: [
            "استفسارات التواصل — 24 شهراً من تاريخ التقديم",
            "بيانات مشروع العميل النشط — طوال مدة المشاركة بالإضافة إلى 5 سنوات",
            "سجلات الفوترة والمالية — 10 سنوات وفقاً للقانون الضريبي الجزائري",
            "تحليلات الموقع — تُجمَّع وتُجهَّل بعد 26 شهراً",
          ],
          note: "عند انتهاء فترات الاحتفاظ، نحذف بياناتك أو نجهّلها بشكل آمن.",
        },
        {
          id: "your-rights",
          number: "08",
          title: "حقوقك",
          intro: "اعتماداً على ولايتك القضائية، يحق لك:",
          bullets: [
            "الوصول — طلب نسخة من البيانات الشخصية التي نحتفظ بها عنك",
            "التصحيح — مطالبتنا بتصحيح البيانات غير الدقيقة أو الناقصة",
            "المحو — طلب حذف بياناتك حيث لا توجد قاعدة مشروعة للاحتفاظ بها",
            "التقييد — مطالبتنا بتقييد معالجة بياناتك",
            "قابلية النقل — استلام بياناتك بتنسيق منظم وقابل للقراءة آلياً",
            "الاعتراض — الاعتراض على المعالجة المبنية على المصالح المشروعة",
            "سحب الموافقة — سحب موافقتك في أي وقت",
          ],
          note: "لممارسة أي من هذه الحقوق، تواصل معنا على privacy@quarcode.dz. سنرد خلال 30 يوماً.",
        },
        {
          id: "security",
          number: "09",
          title: "أمن البيانات",
          intro: "نطبّق تدابير تقنية وتنظيمية وفق معايير الصناعة:",
          bullets: [
            "تشفير TLS/HTTPS لجميع البيانات أثناء النقل",
            "تشفير AES-256 للبيانات الحساسة في حالة الراحة",
            "ضوابط الوصول والأذونات المبنية على الأدوار",
            "عمليات تدقيق أمني منتظمة وتقييمات الثغرات",
          ],
          note: "لا توجد طريقة نقل عبر الإنترنت آمنة بنسبة 100%، لكننا نتخذ كل احتياط معقول.",
        },
        {
          id: "international",
          number: "10",
          title: "عمليات النقل الدولية",
          intro:
            "Quarcode مقرها في الجزائر. إذا كنت تصل إلى خدماتنا من خارجها، فقد تُنقل بياناتك وتُعالَج في الجزائر أو بواسطة معالجين من أطراف ثالثة في دول أخرى. عند نقل البيانات دولياً، نضمن وجود ضمانات مناسبة، كالبنود التعاقدية القياسية للنقل من المنطقة الاقتصادية الأوروبية.",
        },
        {
          id: "children",
          number: "11",
          title: "خصوصية الأطفال",
          intro:
            "لا يُوجَّه موقعنا وخدماتنا للأفراد دون سن 16 عاماً. لا نجمع بياناتهم عن قصد. إذا كنت تعتقد أننا جمعنا بيانات أحد الأطفال عن غير قصد، يرجى التواصل معنا فوراً وسنحذفها.",
        },
        {
          id: "changes",
          number: "12",
          title: "التغييرات على هذه السياسة",
          intro:
            "قد نحدّث هذه السياسة بشكل دوري. عند إجراء تغييرات جوهرية، سنحدّث تاريخ «آخر تحديث». يُعدّ الاستمرار في استخدام موقعنا أو خدماتنا بعد أي تحديث قبولاً للسياسة المُعدَّلة.",
        },
        {
          id: "contact",
          number: "13",
          title: "تواصل معنا",
          intro:
            "لأي استفسارات أو طلبات تتعلق بهذه السياسة، يرجى التواصل معنا:",
          contact: {
            company: "Quarcode",
            email: "privacy@quarcode.dz",
            address: "الجزائر العاصمة، الجزائر",
            website: "quarcode.dz",
          },
        },
      ] as LegalSection[],
    },
    termsOfService: {
      metaTitle: "شروط الاستخدام | Quarcode",
      metaDescription:
        "الشروط والأحكام التي تحكم استخدام موقع Quarcode وخدماتها المهنية.",
      badge: "قانوني",
      lastUpdated: "1 يوليو 2026",
      contentsLabel: "// المحتويات",
      headline1: "شروط",
      headline2: "الاستخدام",
      sections: [
        {
          id: "agreement",
          number: "01",
          title: "الموافقة على الشروط",
          intro:
            "تُشكّل شروط الاستخدام هذه («الشروط») اتفاقية ملزمة قانونياً بينك («العميل») وبين Quarcode، شركة هندسة برمجيات مسجَّلة في الجزائر العاصمة. بالوصول إلى quarcode.dz أو إبرام اتفاقية خدمة معنا، تؤكد قراءة هذه الشروط وفهمها والموافقة على الالتزام بها.",
          note: "إذا لم توافق على هذه الشروط، يجب ألا تستخدم موقعنا أو خدماتنا.",
        },
        {
          id: "services",
          number: "02",
          title: "خدماتنا",
          intro:
            "تقدم Quarcode خدمات هندسة برمجيات مهنية تشمل على سبيل المثال لا الحصر:",
          bullets: [
            "تصميم وتطوير تطبيقات الويب",
            "تطوير تطبيقات الجوّال والتطبيقات متعددة المنصات",
            "هندسة الواجهة الخلفية وتصميم واجهات برمجة التطبيقات وبنية قواعد البيانات",
            "إعداد البنية التحتية السحابية وعمليات التطوير وتنفيذ CI/CD",
            "تصميم UI/UX وهندسة الواجهة الأمامية",
            "الاستشارات التقنية وعمليات تدقيق الكود وتحسين الأداء",
            "الصيانة المستمرة ودعم الاستضافة ومشاركات الاحتفاظ",
          ],
          note: "تُحدَّد التسليمات والجداول الزمنية والأسعار المحددة في كراسة شروط منفصلة موقَّعة من الطرفين.",
        },
        {
          id: "project-engagement",
          number: "03",
          title: "مشاركة المشروع",
          subSections: [
            {
              heading: "الاستكشاف والمقترح",
              body: "تبدأ المشاركات بمرحلة استكشاف نُقيّم فيها متطلبات مشروعك، ثم نقدم مقترحاً خطياً يوضح النطاق والتسليمات والجدول الزمني والأسعار. لا يبدأ المشروع إلا بعد القبول الخطي للمقترح.",
            },
            {
              heading: "كراسات الشروط",
              body: "يخضع كل مشروع لكراسة شروط موقَّعة من الطرفين. تسود كراسة الشروط على هذه الشروط العامة في حال أي تعارض خاص بذلك المشروع.",
            },
            {
              heading: "تغييرات النطاق",
              body: "يجب تقديم أي تعديلات على النطاق المتفق عليه خطياً والموافقة عليها من Quarcode قبل بدء العمل. قد تؤثر تغييرات النطاق على الجدول الزمني والأسعار وتُوثَّق في أمر تغيير خطي.",
            },
          ],
        },
        {
          id: "payment",
          number: "04",
          title: "شروط الدفع",
          subSections: [
            {
              heading: "جدول الدفع",
              bullets: [
                "المشاريع ذات السعر الثابت: 50% مقدماً قبل البدء، 50% عند الاكتمال",
                "مشاركات الاحتفاظ: تُفوتَر شهرياً مقدماً",
                "المشاريع القائمة على المعالم: مدفوعات مرتبطة بمعالم التسليم المتفق عليها",
              ],
            },
            {
              heading: "الفوترة والعملة",
              body: "تُصدَر الفواتير بالدولار الأمريكي أو الدينار الجزائري كما هو متفق عليه في كراسة الشروط، وتستحق الدفع خلال 14 يوماً تقويمياً من تاريخ الفاتورة.",
            },
            {
              heading: "التأخر في السداد",
              body: "تتراكم الفواتير المتأخرة فائدة بنسبة 1.5% شهرياً. تحتفظ Quarcode بالحق في تعليق العمل عندما يتأخر الدفع أكثر من 14 يوماً.",
            },
            {
              heading: "المبالغ المُستردة",
              body: "الدفعات المقدمة غير قابلة للاسترداد بمجرد بدء العمل. في حال إنهاء العميل للمشروع بعد البدء، تظل رسوم العمل المنجز مستحقة.",
            },
          ],
        },
        {
          id: "intellectual-property",
          number: "05",
          title: "الملكية الفكرية",
          subSections: [
            {
              heading: "ملكية العميل",
              body: "عند استلام الدفع الكامل، تُحوِّل Quarcode إلى العميل كافة الحقوق والعنوان والمصلحة في المنتجات المُنجزة حصرياً لذلك المشروع، بما يشمل الكود المصدري والتصاميم والوثائق.",
            },
            {
              heading: "الحقوق المحتفظ بها لـ Quarcode",
              body: "نحتفظ بملكية أدواتنا وأُطر العمل والمكتبات والكود الأساسي والمنهجيات والتقنيات الخاصة الموجودة مسبقاً. عند دمجها في التسليمات، نمنح العميل ترخيصاً دائماً وغير حصري وخالياً من الإتاوات لاستخدامها داخل المشروع المُسلَّم.",
            },
            {
              heading: "حقوق محفظة الأعمال",
              body: "ما لم يطلب العميل خلاف ذلك خطياً، تحتفظ Quarcode بالحق في الإشارة إلى المشروع كعنصر في محفظة أعمالها باستخدام المعلومات المتاحة للعموم فقط.",
            },
          ],
        },
        {
          id: "client-obligations",
          number: "06",
          title: "التزامات العميل",
          intro: "لتمكين التسليم الناجح، يوافق العميل على:",
          bullets: [
            "توفير الوصول في الوقت المناسب للمواد والأصول وبيانات الاعتماد والتغذية الراجعة المطلوبة",
            "تحديد نقطة اتصال رئيسية لها صلاحية الموافقة على القرارات",
            "مراجعة التسليمات والرد عليها ضمن نوافذ المراجعة المتفق عليها (عادةً 5 أيام عمل)",
            "التأكد من أن جميع المحتويات المقدمة لـ Quarcode لا تنتهك حقوق الأطراف الثالثة",
            "سداد الفواتير بحلول تاريخ الاستحقاق المحدد",
          ],
          note: "قد تؤدي التأخيرات الناجمة عن إخفاق العميل في الوفاء بهذه الالتزامات إلى تعديل الجداول الزمنية وتكاليف إضافية.",
        },
        {
          id: "confidentiality",
          number: "07",
          title: "السرية",
          intro:
            "يوافق الطرفان على الحفاظ على سرية أي معلومات خاصة أو تقنية أو تجارية مُشاركة خلال المشاركة، وعدم الإفصاح عنها لأطراف ثالثة دون موافقة خطية مسبقة، إلا:",
          bullets: [
            "عند الضرورة القانونية أو بموجب أمر قضائي صالح",
            "للموظفين أو المقاولين الذين يحتاجون المعلومات لتنفيذ المشروع",
            "إذا أصبحت المعلومات متاحة للعموم بغير خطأ من الطرف المتلقي",
          ],
          note: "تبقى التزامات السرية سارية بعد إنهاء أي اتفاقية لمدة 3 سنوات.",
        },
        {
          id: "warranties",
          number: "08",
          title: "الضمانات والتعهدات",
          subSections: [
            {
              heading: "تضمن Quarcode ما يلي:",
              bullets: [
                "ستُنفَّذ الخدمات بالمهارة والعناية المعقولتين من قِبل محترفين مؤهلين",
                "ستتوافق التسليمات مادياً مع المواصفات المتفق عليها وقت التسليم",
                "لدينا الحق في إبرام الاتفاقيات وأداء الخدمات الموصوفة",
              ],
            },
            {
              heading: "فترة الضمان",
              body: "تقدم Quarcode ضمان إصلاح الأخطاء لمدة 30 يوماً بعد التسليم النهائي. لا يشمل هذا الضمان المشكلات الناجمة عن تعديلات العميل أو تكاملات الأطراف الثالثة غير المشمولة في كراسة الشروط.",
            },
            {
              heading: "إخلاء المسؤولية",
              body: "باستثناء ما هو منصوص عليه صراحةً، تُقدَّم خدماتنا «كما هي». لا نضمن التوفر المستمر أو الملاءمة لغرض معين يتجاوز النطاق المتفق عليه.",
            },
          ],
        },
        {
          id: "limitation-liability",
          number: "09",
          title: "تحديد المسؤولية",
          intro: "بالقدر الأقصى الذي يسمح به القانون المعمول به:",
          bullets: [
            "لن تتجاوز المسؤولية الإجمالية لـ Quarcode عن أي مطالبة إجمالي الرسوم التي دفعها العميل خلال 3 أشهر قبل المطالبة",
            "لن نكون مسؤولين عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية بما فيها خسارة الأرباح أو البيانات",
            "لسنا مسؤولين عن التأخيرات أو الإخفاقات الناجمة عن ظروف خارجة عن إرادتنا (القوة القاهرة)",
          ],
          note: "بعض الولايات القضائية لا تسمح باستثناء ضمانات معينة أو تحديد المسؤولية عن الأضرار التبعية.",
        },
        {
          id: "termination",
          number: "10",
          title: "الإنهاء",
          subSections: [
            {
              heading: "الإنهاء من قِبل أي من الطرفين",
              body: "يجوز لأي من الطرفين إنهاء المشاركة بإشعار خطي مدته 14 يوماً. عند الإنهاء، يدفع العميل مقابل جميع الأعمال المنجزة حتى تاريخ الإنهاء.",
            },
            {
              heading: "الإنهاء للسبب",
              body: "يجوز لأي من الطرفين الإنهاء الفوري بإشعار خطي إذا انتهك الطرف الآخر هذه الشروط انتهاكاً جوهرياً ولم يعالج الخرق خلال 10 أيام عمل من الإشعار.",
            },
            {
              heading: "آثار الإنهاء",
              bullets: [
                "تصبح جميع الفواتير المعلقة مستحقة فوراً",
                "يُعيد كل طرف أو يتلف المعلومات السرية للطرف الآخر",
                "تبقى أحكام الملكية الفكرية والسرية والضمانات وتحديد المسؤولية والقانون الحاكم سارية بعد الإنهاء",
              ],
            },
          ],
        },
        {
          id: "website-use",
          number: "11",
          title: "استخدام الموقع",
          intro: "عند استخدام موقعنا، توافق على عدم:",
          bullets: [
            "استخدام الموقع لأي غرض غير قانوني أو بالمخالفة للأنظمة المعمول بها",
            "محاولة الوصول غير المصرح به إلى أي جزء من أنظمتنا أو بنيتنا التحتية",
            "إرسال أي برامج ضارة أو فيروسات أو رموز مؤذية أخرى",
            "استخراج محتوى موقعنا بدون إذن",
            "التدخل في سلامة أو أداء الموقع أو تعطيلهما",
          ],
        },
        {
          id: "governing-law",
          number: "12",
          title: "القانون الحاكم وتسوية النزاعات",
          intro:
            "تخضع هذه الشروط وأي نزاعات ناشئة عنها لقوانين الجمهورية الجزائرية الديمقراطية الشعبية. يوافق الطرفان على محاولة حل أي نزاع أولاً عن طريق التفاوض بحسن نية. في حال فشل التفاوض خلال 30 يوماً، يُحال النزاع إلى المحاكم المختصة في الجزائر العاصمة.",
        },
        {
          id: "changes",
          number: "13",
          title: "التغييرات على هذه الشروط",
          intro:
            "نحتفظ بالحق في تحديث هذه الشروط في أي وقت. عند إجراء تغييرات جوهرية، سنُحدِّث تاريخ «آخر تحديث» وسنُخطر العملاء النشطين عبر البريد الإلكتروني. يُعدّ الاستمرار في استخدام موقعنا أو خدماتنا قبولاً للشروط المحدَّثة.",
        },
        {
          id: "contact",
          number: "14",
          title: "تواصل معنا",
          intro:
            "للاستفسارات القانونية أو الأسئلة المتعلقة بهذه الشروط، يرجى التواصل معنا:",
          contact: {
            company: "Quarcode",
            email: "legal@quarcode.dz",
            address: "الجزائر العاصمة، الجزائر",
            website: "quarcode.dz",
          },
        },
      ] as LegalSection[],
    },
  },
} as const;

export type Translations = (typeof translations)["en"];