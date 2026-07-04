// lib/i18n/translations.ts

export type Locale = "en" | "fr" | "ar";

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
      copyright: "© 2024 Quarcode. Engineering Excellence from Algeria.",
      columns: [
        {
          heading: "Company",
          links: [
            { label: "About Us", href: "/about" },
            { label: "Careers", href: "#" },
            { label: "Our Process", href: "#" },
            { label: "Contact", href: "/contact" },
          ],
        },
        {
          heading: "Connect",
          links: [
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "#" },
            { label: "Twitter / X", href: "#" },
            { label: "Dribbble", href: "#" },
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
    aboutPage: {
      metaTitle: "About Us | Quarcode – Engineering Excellence",
      footerTagline: "Pioneering software engineering excellence in Algeria since 2021.",
      footerCopyright: "© 2024 Quarcode. Engineering Excellence from Algeria.",
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
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "#" },
            { label: "Twitter", href: "#" },
            { label: "Facebook", href: "#" },
          ],
        },
        {
          heading: "Legal",
          links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
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
      body1: "Founded in 2021, Quarcode was born from a simple but powerful belief: that world-class software engineering talent exists in Algeria and deserves a world-class stage. Our founders, a group of engineers with experience across Europe and North America, returned home with a mission.",
      body2: "We started with a small team of five in a co-working space in Algiers. Today, we operate a full-scale studio with over 45 engineers, designers, and strategists, delivering complex digital solutions for clients across Algeria, France, and the wider MENA region.",
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
        body: "To empower Algerian enterprises with world-class software that drives growth, streamlines operations, and fosters local innovation. We are committed to nurturing the next generation of Algerian engineers through mentorship and high-standard project execution.",
      },
      vision: {
        title: "Our Vision",
        body: "To become the definitive leader in Algerian digital transformation, recognized globally as the hub for engineering excellence in the Maghreb region. We envision a future where 'Built by Quarcode' is synonymous with uncompromising quality.",
      },
    },
    coreValues: {
      sectionTitle: "Our Foundational Values",
      sectionBody: "The core principles that guide every line of code we write and every decision we make.",
      items: [
        {
          title: "Quality",
          description: "We don't settle for 'functional.' Our code is clean, our architectures are resilient, and our user experiences are flawless. Every project undergoes rigorous testing to meet enterprise benchmarks.",
        },
        {
          title: "Innovation",
          description: "We push boundaries by adopting cutting-edge technologies. From AI integration to advanced cloud-native architectures, we bring the latest global trends to the Algerian market.",
        },
        {
          title: "Integrity",
          description: "Transparency is our default state. We build trust through honest communication, ethical data handling, and a commitment to long-term partnerships over short-term gains.",
        },
      ],
    },
    leadership: {
      sectionTitle: "The Minds Behind Quarcode",
      sectionBody: "Our leadership team consists of seasoned software architects, product strategists, and business consultants with decades of combined experience in both local and international tech sectors. We believe in leading by example, which is why our directors are still hands-on with our most complex technical challenges.",
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
    contactPage: {
      metaTitle: "Contact Us | Quarcode Engineering Excellence",
      footerTagline: "Forging the future of software in Algeria and beyond.",
      footerCopyright: "© 2024 Quarcode. Engineering Excellence from Algeria.",
      footerColumns: [
        {
          heading: "Platform",
          links: [
            { label: "Services", href: "/" },
            { label: "About", href: "/about" },
            { label: "Work", href: "#" },
          ],
        },
        {
          heading: "Company",
          links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
          ],
        },
        {
          heading: "Social",
          links: [
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "#" },
          ],
        },
      ],
    },
    contactHero: {
      badge: "READY TO COLLABORATE",
      headline1: "Let's build something",
      headline2: "extraordinary",
      headline3: "together.",
      body: "Based in the heart of Algiers, we bridge the gap between complex engineering and elegant design. Reach out to start your digital transformation.",
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
        messagePlaceholder: "Tell us about your project goals, timeline, and any specific requirements...",
        submit: "Send Message",
        sending: "Sending…",
      },
      status: {
        success: "Your message has been sent! We'll get back to you within 24 hours.",
        error: "Failed to send your message. Please try again or email us directly at hello@quarcode.dz.",
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
    faqPage: {
      metaTitle: "FAQ | Quarcode – Engineering Excellence",
      metaDescription: "Answers to common questions about our pricing, process, timelines, and support services.",
      footerTagline: "Engineering Excellence from Algeria. Building tomorrow's digital infrastructure today.",
      footerCopyright: "© 2024 Quarcode. Engineering Excellence from Algeria.",
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
            { label: "Terms of Service", href: "#" },
            { label: "Privacy Policy", href: "#" },
          ],
        },
        {
          heading: "Connect",
          links: [
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "#" },
          ],
        },
      ],
      hero: {
        badge: "Support Center",
        headline1: "Frequently Asked",
        headline2: "Questions.",
        body: "Everything you need to know about our process, pricing, timelines, and how we build professional websites for businesses in Algeria and worldwide.",
      },
    },
    faqSidebar: {
      categoriesLabel: "Categories",
      allLabel: "All Questions",
      stillCuriousTitle: "Still Curious?",
      stillCuriousBody: "Can't find the answer you're looking for? Chat with our team directly.",
      stillCuriousCta: "Contact Us",
    },
    faqItems: [
      {
        id: "cost",
        question: "How much does a website cost?",
        answer: {
          intro: "The cost depends on the type of website and the features you need. Our pricing starts at 30,000 DA for a professional business website. For custom projects, we provide a personalised quote based on your specific requirements.",
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
          intro: "Yes. Every website we build is fully responsive, ensuring an excellent experience on desktops, tablets, and smartphones.",
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
          intro: "Yes. If your project includes an admin dashboard, you'll be able to easily manage your content, products, images, and blog posts without any technical knowledge.",
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
          intro: "Yes. All our websites include basic SEO optimisation to help search engines understand your website. Our Business package also includes advanced SEO for improved online visibility.",
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
          bullets: ["Domain registration", "Web hosting", "SSL certificate (HTTPS)", "Server setup and deployment"],
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
          bullets: ["Security updates", "Regular backups", "Performance monitoring", "Bug fixes", "Technical support"],
          steps: [],
          checks: [],
          note: "This keeps your website secure, fast, and up to date.",
        },
      },
      {
        id: "revisions",
        question: "Can I request changes after delivery?",
        answer: {
          intro: "Absolutely. Minor revisions are included after delivery. If you need additional features or significant changes later, we offer flexible upgrade and maintenance services.",
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
          intro: "No. We work with businesses and entrepreneurs in Algeria and internationally. The entire project can be completed remotely through online communication.",
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
          steps: ["Contact us.", "Tell us about your project.", "We'll discuss your requirements.", "You'll receive a detailed quotation.", "Once approved, we'll begin development."],
          checks: [],
          note: "",
        },
      },
      {
        id: "ownership",
        question: "Will I own my website?",
        answer: {
          intro: "Yes. Once the project is completed and the final payment is made, you will have full ownership of your website and its content, according to the terms of our agreement.",
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
    servicesPage: {
      metaTitle: "Services | Quarcode – Engineering Excellence",
      footerCopyright: "© 2024 Quarcode. Engineering Excellence from Algeria.",
      footerColumns: [
        {
          heading: "Services",
          links: [
            { label: "Website Development",     href: "/services" },
            { label: "E-Commerce",              href: "/services" },
            { label: "Custom Web Applications", href: "/services" },
            { label: "SEO Optimisation",        href: "/services" },
          ],
        },
        {
          heading: "Connect",
          links: [
            { label: "LinkedIn",    href: "#" },
            { label: "GitHub",      href: "#" },
            { label: "Twitter / X", href: "#" },
          ],
        },
        {
          heading: "Legal",
          links: [
            { label: "Privacy Policy",   href: "#" },
            { label: "Terms of Service", href: "#" },
          ],
        },
      ],
      hero: {
        badge: "Our Services",
        headline1: "Building Digital Solutions That Help Your",
        headline2: "Business Grow",
        body: "At Quarcode, we design and develop modern, high-performance websites and web applications tailored to your business goals. Secure, scalable, and user-friendly digital solutions that make an impact.",
      },
      why: {
        sectionTitle: "Why Choose Quarcode?",
        sectionBody: "We don't just build websites — we build digital foundations that help your business thrive.",
        items: [
          { icon: "bolt",           title: "Modern Technologies", body: "We use reliable and modern technologies to build fast, secure, and scalable websites." },
          { icon: "devices",        title: "Responsive Design",   body: "Every website looks and performs beautifully on desktops, tablets, and smartphones." },
          { icon: "travel_explore", title: "SEO-Friendly",        body: "Our websites are built with search engines in mind to help improve your online visibility." },
          { icon: "lock",           title: "Secure by Default",   body: "Security is integrated into every project using best practices and modern standards." },
          { icon: "tune",           title: "Tailored Solutions",  body: "Every business is unique. We build solutions that fit your goals — not generic templates." },
          { icon: "support_agent",  title: "Ongoing Support",     body: "Our relationship doesn't end at launch. We're here to support you as your business grows." },
        ],
      },
      process: {
        sectionTitle: "Our Process",
        sectionBody: "A clear, structured approach so you always know what's happening and what comes next.",
        steps: [
          { number: "01", title: "Discovery",   body: "We learn about your business, goals, and requirements." },
          { number: "02", title: "Planning",    body: "We define the project scope, structure, and timeline." },
          { number: "03", title: "Design",      body: "We create a modern and intuitive user interface." },
          { number: "04", title: "Development", body: "We build your website using modern technologies and best practices." },
          { number: "05", title: "Testing",     body: "Every feature is carefully tested to ensure quality, performance, and security." },
          { number: "06", title: "Launch",      body: "Your website goes live, fully optimised and ready for your customers." },
        ],
      },
      cta: {
        headline: "Ready to Start Your Project?",
        body: "Let's build a website that represents your brand, attracts customers, and helps your business grow. Contact Quarcode today for a free consultation and personalised quote.",
        cta1: "Get a Free Quote",
        cta2: "Read Our FAQ",
      },
      getAQuote: "Get a Quote",
      mainServices: [
        {
          id: "web",
          title: "Website Development",
          description: "We create professional websites that showcase your business and help convert visitors into customers. Every site is built for speed, security, and results.",
          items: ["Custom website development", "Modern and responsive design", "Fast loading performance", "Contact forms & Google Maps", "SSL (HTTPS) included", "Basic SEO optimisation", "Cross-browser compatibility"],
          perfectFor: ["Small businesses", "Restaurants", "Doctors", "Lawyers", "Agencies", "Schools", "Freelancers"],
        },
        {
          id: "ecom",
          title: "E-Commerce Development",
          description: "Sell your products online with a secure, easy-to-manage store built for growth.",
          items: ["Product catalog & categories", "Shopping cart & checkout", "Order & inventory management", "Customer accounts", "Discount codes", "Analytics integration"],
          perfectFor: [],
        },
        {
          id: "app",
          title: "Custom Web Applications",
          description: "Need something beyond a standard website? We build bespoke solutions designed around your exact business processes.",
          items: ["Booking systems", "CRM platforms", "Internal dashboards", "Client & employee portals", "Inventory systems"],
          perfectFor: [],
        },
        {
          id: "design",
          title: "UI/UX Design",
          description: "A great website isn't just beautiful — it's easy to use. We design interfaces that are clean, modern, intuitive, and mobile-friendly.",
          items: ["Clean & modern interfaces", "Mobile-first approach", "User-focused layouts", "Intuitive navigation", "Accessibility-ready"],
          perfectFor: [],
        },
        {
          id: "seo",
          title: "SEO Optimisation",
          description: "A beautiful website is only valuable if people can find it. We help your business gain more visibility on Google.",
          items: ["Website structure audit", "Page speed improvements", "Meta tags & schema", "Image optimisation", "Mobile performance", "Technical SEO"],
          perfectFor: [],
        },
        {
          id: "perf",
          title: "Performance Optimisation",
          description: "Speed matters. A faster website means happier visitors, lower bounce rates, and higher conversions.",
          items: ["Faster loading times", "Better Core Web Vitals", "Improved user experience", "Lower bounce rates", "Higher conversion rates"],
          perfectFor: [],
        },
        {
          id: "maintenance",
          title: "Website Maintenance",
          description: "Keep your website secure and running smoothly. Focus on your business while we handle the technical side.",
          items: ["Security updates", "Bug fixes", "Regular backups", "Performance monitoring", "Content updates", "Technical support"],
          perfectFor: [],
        },
        {
          id: "hosting",
          title: "Hosting & Deployment",
          description: "We take care of getting your website online. Your site will be ready for visitors from day one.",
          items: ["Domain configuration", "Hosting setup", "SSL installation", "Server deployment", "Email configuration", "Ongoing monitoring"],
          perfectFor: [],
        },
        {
          id: "brand",
          title: "Logo & Brand Identity",
          description: "Your brand deserves a strong visual identity. A consistent identity builds trust and recognition.",
          items: ["Professional logos", "Colour palettes", "Typography selection", "Brand guidelines", "Social media branding"],
          perfectFor: [],
        },
      ],
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
      body: "Le partenaire de référence en Algérie pour vos solutions web et logicielles sur mesure. Nous créons des produits numériques haute performance qui évoluent avec votre vision.",
      cta1: "Consultation gratuite",
      cta2: "Voir nos réalisations",
      imageAlt:
        "Un tableau de bord UI sophistiqué montrant des visualisations de données et des extraits de code.",
    },
    services: {
      sectionHeadline1: "Des solutions taillées pour la",
      sectionHeadline2: "Performance",
      sectionBody:
        "Nous combinons les normes d'ingénierie mondiales et les insights locaux pour livrer des logiciels de classe mondiale depuis le cœur de l'Algérie.",
      prevLabel: "Précédent",
      nextLabel: "Suivant",
      items: [
        {
          title: "Développement Web",
          description:
            "Applications web ultra-rapides et optimisées SEO, construites avec les derniers frameworks comme React et Next.js.",
          features: [
            "Progressive Web Apps",
            "E-commerce entreprise",
            "Solutions CMS sur mesure",
          ],
        },
        {
          title: "Logiciels sur mesure",
          description:
            "Logiciels desktop et mobile conçus pour automatiser les flux métier complexes de votre entreprise.",
          features: [
            "Architecture cloud",
            "Intégrations API",
            "Applications desktop",
          ],
        },
        {
          title: "Stratégie digitale",
          description:
            "Des feuilles de route fondées sur les données pour naviguer dans le paysage numérique et atteindre une croissance durable.",
          features: [
            "Roadmap produit",
            "Recherche UX/UI",
            "Analyse de marché",
          ],
        },
      ],
    },
    contact: {
      headline1: "Prêt à construire le",
      headline2: "futur",
      body: "Contactez-nous pour discuter de votre projet. Nos ingénieurs sont prêts à transformer votre vision en une solution digitale robuste.",
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
      tagline:
        "Excellence en ingénierie depuis l'Algérie. Construire la prochaine génération d'infrastructure numérique.",
      copyright: "© 2024 Quarcode. Excellence en ingénierie depuis l'Algérie.",
      columns: [
        {
          heading: "Entreprise",
          links: [
            { label: "À propos", href: "/about" },
            { label: "Carrières", href: "#" },
            { label: "Notre processus", href: "#" },
            { label: "Contact", href: "/contact" },
          ],
        },
        {
          heading: "Réseaux",
          links: [
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "#" },
            { label: "Twitter / X", href: "#" },
            { label: "Dribbble", href: "#" },
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
      metaTitle: "À propos | Quarcode – Excellence en ingénierie",
      footerTagline: "Pionniers de l'excellence en ingénierie logicielle en Algérie depuis 2021.",
      footerCopyright: "© 2024 Quarcode. Excellence en ingénierie depuis l'Algérie.",
      footerColumns: [
        {
          heading: "Liens rapides",
          links: [
            { label: "Services", href: "/" },
            { label: "À propos", href: "/about" },
            { label: "Études de cas", href: "#" },
            { label: "Carrières", href: "#" },
          ],
        },
        {
          heading: "Réseaux",
          links: [
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "#" },
            { label: "Twitter", href: "#" },
            { label: "Facebook", href: "#" },
          ],
        },
        {
          heading: "Légal",
          links: [
            { label: "Politique de confidentialité", href: "#" },
            { label: "Conditions d'utilisation", href: "#" },
          ],
        },
      ],
    },
    aboutHero: {
      badge: "L'innovation algérienne par l'ingénierie",
      headline1: "Architecting the",
      headline2: "l'avenir de l'Algérie",
      headline3: "par le code.",
      body: "Quarcode est une agence de solutions logicielles de premier plan dédiée à l'élévation du paysage numérique algérien. Nous allions expertise locale et normes d'ingénierie mondiales pour concevoir des logiciels haute performance.",
    },
    ourStory: {
      badge: "Notre histoire",
      headline: "D'Algérie, pour le monde",
      body1: "Fondée en 2021, Quarcode est née d'une conviction simple mais puissante : les talents d'ingénierie logicielle de classe mondiale existent en Algérie et méritent une scène à leur hauteur. Nos fondateurs, des ingénieurs expérimentés en Europe et en Amérique du Nord, sont rentrés au pays avec une mission.",
      body2: "Nous avons démarré avec une petite équipe de cinq personnes dans un espace de coworking à Alger. Aujourd'hui, nous exploitons un studio à part entière avec plus de 45 ingénieurs, designers et stratèges, livrant des solutions numériques complexes à des clients en Algérie, en France et dans la région MENA.",
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
        body: "Donner aux entreprises algériennes les moyens d'agir grâce à des logiciels de classe mondiale qui stimulent la croissance, rationalisent les opérations et favorisent l'innovation locale. Nous nous engageons à former la prochaine génération d'ingénieurs algériens par le mentorat et l'exécution de projets à haute exigence.",
      },
      vision: {
        title: "Notre Vision",
        body: "Devenir le leader incontesté de la transformation numérique algérienne, reconnu mondialement comme le pôle d'excellence technologique au Maghreb. Nous imaginons un futur où « Conçu par Quarcode » rime avec qualité sans compromis.",
      },
    },
    coreValues: {
      sectionTitle: "Nos valeurs fondatrices",
      sectionBody: "Les principes essentiels qui guident chaque ligne de code que nous écrivons et chaque décision que nous prenons.",
      items: [
        {
          title: "Qualité",
          description: "Nous ne nous contentons pas du « fonctionnel ». Notre code est propre, nos architectures sont résilientes et nos expériences utilisateur sont irréprochables. Chaque projet est soumis à des tests rigoureux selon les standards enterprise.",
        },
        {
          title: "Innovation",
          description: "Nous repoussons les limites en adoptant des technologies de pointe. De l'intégration de l'IA aux architectures cloud-native avancées, nous apportons les dernières tendances mondiales sur le marché algérien.",
        },
        {
          title: "Intégrité",
          description: "La transparence est notre état par défaut. Nous bâtissons la confiance grâce à une communication honnête, un traitement éthique des données et un engagement envers des partenariats durables plutôt que des gains à court terme.",
        },
      ],
    },
    leadership: {
      sectionTitle: "Les esprits derrière Quarcode",
      sectionBody: "Notre équipe dirigeante est composée d'architectes logiciels chevronnés, de stratèges produit et de consultants business avec des décennies d'expérience combinée dans les secteurs tech locaux et internationaux. Nous croyons en l'exemplarité, c'est pourquoi nos directeurs restent impliqués dans nos défis techniques les plus complexes.",
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
      metaTitle: "Contactez-nous | Quarcode Excellence en ingénierie",
      footerTagline: "Forgeons ensemble l'avenir du logiciel en Algérie et au-delà.",
      footerCopyright: "© 2024 Quarcode. Excellence en ingénierie depuis l'Algérie.",
      footerColumns: [
        {
          heading: "Plateforme",
          links: [
            { label: "Services", href: "/" },
            { label: "À propos", href: "/about" },
            { label: "Réalisations", href: "#" },
          ],
        },
        {
          heading: "Entreprise",
          links: [
            { label: "Politique de confidentialité", href: "#" },
            { label: "Conditions d'utilisation", href: "#" },
          ],
        },
        {
          heading: "Réseaux",
          links: [
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "#" },
          ],
        },
      ],
    },
    contactHero: {
      badge: "PRÊT À COLLABORER",
      headline1: "Construisons ensemble quelque chose",
      headline2: "d'extraordinaire",
      headline3: ".",
      body: "Basés au cœur d'Alger, nous faisons le pont entre l'ingénierie complexe et le design élégant. Contactez-nous pour lancer votre transformation digitale.",
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
        messagePlaceholder: "Parlez-nous de vos objectifs, délais et exigences spécifiques...",
        submit: "Envoyer le message",
        sending: "Envoi en cours…",
      },
      status: {
        success: "Votre message a bien été envoyé ! Nous vous répondrons dans les 24 heures.",
        error: "Échec de l'envoi. Veuillez réessayer ou nous contacter directement à hello@quarcode.dz.",
        validationSummary: "Veuillez corriger les erreurs ci-dessous.",
        fieldErrors: {
          fullName: "Veuillez saisir votre nom complet (au moins 2 caractères).",
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
      metaTitle: "FAQ | Quarcode – Excellence en ingénierie",
      metaDescription: "Réponses aux questions fréquentes sur nos tarifs, notre processus, les délais et nos services de support.",
      footerTagline: "Excellence en ingénierie depuis l'Algérie. Construire l'infrastructure numérique de demain.",
      footerCopyright: "© 2024 Quarcode. Excellence en ingénierie depuis l'Algérie.",
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
            { label: "Conditions d'utilisation", href: "#" },
            { label: "Politique de confidentialité", href: "#" },
          ],
        },
        {
          heading: "Réseaux",
          links: [
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "#" },
          ],
        },
      ],
      hero: {
        badge: "Centre d'assistance",
        headline1: "Questions",
        headline2: "fréquentes.",
        body: "Tout ce que vous devez savoir sur notre processus, nos tarifs, les délais et la façon dont nous créons des sites web professionnels pour les entreprises en Algérie et dans le monde entier.",
      },
    },
    faqSidebar: {
      categoriesLabel: "Catégories",
      allLabel: "Toutes les questions",
      stillCuriousTitle: "Encore des questions ?",
      stillCuriousBody: "Vous ne trouvez pas la réponse que vous cherchez ? Discutez directement avec notre équipe.",
      stillCuriousCta: "Contactez-nous",
    },
    faqItems: [
      {
        id: "cost",
        question: "Combien coûte un site web ?",
        answer: {
          intro: "Le coût dépend du type de site et des fonctionnalités dont vous avez besoin. Nos tarifs débutent à 30 000 DA pour un site professionnel. Pour les projets sur mesure, nous fournissons un devis personnalisé selon vos exigences.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "timeline",
        question: "Combien de temps faut-il pour créer un site web ?",
        answer: {
          intro: "Le délai dépend de la complexité du projet :",
          tags: ["Site vitrine : 5–7 jours", "Application web sur mesure : 2–6 semaines"],
          bullets: [],
          steps: [],
          checks: [],
          note: "Un calendrier de projet détaillé sera fourni avant le début du développement.",
        },
      },
      {
        id: "mobile",
        question: "Mon site fonctionnera-t-il sur mobile ?",
        answer: {
          intro: "Oui. Chaque site que nous créons est entièrement responsive, garantissant une expérience optimale sur ordinateurs, tablettes et smartphones.",
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
          intro: "Oui. Si votre projet inclut un tableau de bord administrateur, vous pourrez gérer facilement votre contenu, vos produits, images et articles de blog sans aucune connaissance technique.",
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
          intro: "Oui. Tous nos sites incluent une optimisation SEO de base pour aider les moteurs de recherche à comprendre votre site. Notre offre Business inclut également un SEO avancé pour une meilleure visibilité en ligne.",
          tags: [],
          bullets: [],
          steps: [],
          checks: [],
          note: "",
        },
      },
      {
        id: "hosting",
        question: "Proposez-vous l'hébergement et l'enregistrement de domaine ?",
        answer: {
          intro: "Oui. Nous pouvons tout gérer pour vous, notamment :",
          tags: [],
          bullets: ["Enregistrement du nom de domaine", "Hébergement web", "Certificat SSL (HTTPS)", "Configuration du serveur et déploiement"],
          steps: [],
          checks: [],
          note: "Votre site sera livré prêt à être mis en ligne.",
        },
      },
      {
        id: "maintenance",
        question: "Proposez-vous la maintenance de sites web ?",
        answer: {
          intro: "Oui. Nous proposons des services de maintenance qui incluent :",
          tags: [],
          bullets: ["Mises à jour de sécurité", "Sauvegardes régulières", "Surveillance des performances", "Corrections de bugs", "Support technique"],
          steps: [],
          checks: [],
          note: "Votre site restera sécurisé, rapide et à jour.",
        },
      },
      {
        id: "revisions",
        question: "Puis-je demander des modifications après la livraison ?",
        answer: {
          intro: "Absolument. Des révisions mineures sont incluses après la livraison. Pour des fonctionnalités supplémentaires ou des modifications importantes, nous proposons des services de mise à niveau et de maintenance flexibles.",
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
          intro: "Non. Nous travaillons avec des entreprises et des entrepreneurs en Algérie et à l'international. L'ensemble du projet peut être réalisé à distance via la communication en ligne.",
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
          steps: ["Contactez-nous.", "Parlez-nous de votre projet.", "Nous discuterons de vos besoins.", "Vous recevrez un devis détaillé.", "Une fois approuvé, nous commencerons le développement."],
          checks: [],
          note: "",
        },
      },
      {
        id: "ownership",
        question: "Serai-je propriétaire de mon site ?",
        answer: {
          intro: "Oui. Une fois le projet terminé et le paiement final effectué, vous aurez la pleine propriété de votre site et de son contenu, conformément aux termes de notre accord.",
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
            "Solutions adaptées à vos objectifs commerciaux",
          ],
          note: "",
        },
      },
    ],
    servicesPage: {
      metaTitle: "Services | Quarcode – Excellence en ingénierie",
      footerCopyright: "© 2024 Quarcode. Excellence en ingénierie depuis l'Algérie.",
      footerColumns: [
        {
          heading: "Services",
          links: [
            { label: "Développement web",          href: "/services" },
            { label: "E-Commerce",                 href: "/services" },
            { label: "Applications web sur mesure",href: "/services" },
            { label: "Optimisation SEO",           href: "/services" },
          ],
        },
        {
          heading: "Réseaux",
          links: [
            { label: "LinkedIn",    href: "#" },
            { label: "GitHub",      href: "#" },
            { label: "Twitter / X", href: "#" },
          ],
        },
        {
          heading: "Légal",
          links: [
            { label: "Politique de confidentialité", href: "#" },
            { label: "Conditions d'utilisation",    href: "#" },
          ],
        },
      ],
      hero: {
        badge: "Nos services",
        headline1: "Des solutions numériques pour faire croître votre",
        headline2: "entreprise",
        body: "Chez Quarcode, nous concevons et développons des sites web et applications web modernes et haute performance, adaptés à vos objectifs. Des solutions numériques sécurisées, évolutives et conviviales qui font la différence.",
      },
      why: {
        sectionTitle: "Pourquoi choisir Quarcode ?",
        sectionBody: "Nous ne créons pas seulement des sites web — nous posons des fondations numériques qui font prospérer votre entreprise.",
        items: [
          { icon: "bolt",           title: "Technologies modernes",   body: "Nous utilisons des technologies fiables et modernes pour créer des sites rapides, sécurisés et évolutifs." },
          { icon: "devices",        title: "Design responsive",       body: "Chaque site est magnifique et performant sur ordinateurs, tablettes et smartphones." },
          { icon: "travel_explore", title: "SEO-friendly",            body: "Nos sites sont conçus pour les moteurs de recherche afin d'améliorer votre visibilité en ligne." },
          { icon: "lock",           title: "Sécurisé par défaut",    body: "La sécurité est intégrée à chaque projet grâce aux meilleures pratiques et aux normes modernes." },
          { icon: "tune",           title: "Solutions sur mesure",    body: "Chaque entreprise est unique. Nous construisons des solutions adaptées à vos objectifs — pas des modèles génériques." },
          { icon: "support_agent",  title: "Support continu",         body: "Notre relation ne s'arrête pas au lancement. Nous sommes là pour vous accompagner dans la croissance de votre activité." },
        ],
      },
      process: {
        sectionTitle: "Notre processus",
        sectionBody: "Une approche claire et structurée pour que vous sachiez toujours ce qui se passe et ce qui vient ensuite.",
        steps: [
          { number: "01", title: "Découverte",    body: "Nous apprenons à connaître votre entreprise, vos objectifs et vos besoins." },
          { number: "02", title: "Planification", body: "Nous définissons le périmètre, la structure et le calendrier du projet." },
          { number: "03", title: "Design",        body: "Nous créons une interface utilisateur moderne et intuitive." },
          { number: "04", title: "Développement", body: "Nous construisons votre site avec des technologies modernes et les meilleures pratiques." },
          { number: "05", title: "Tests",         body: "Chaque fonctionnalité est soigneusement testée pour garantir qualité, performance et sécurité." },
          { number: "06", title: "Lancement",     body: "Votre site est mis en ligne, entièrement optimisé et prêt pour vos clients." },
        ],
      },
      cta: {
        headline: "Prêt à lancer votre projet ?",
        body: "Créons un site qui représente votre marque, attire des clients et aide votre entreprise à se développer. Contactez Quarcode aujourd'hui pour une consultation gratuite et un devis personnalisé.",
        cta1: "Obtenir un devis gratuit",
        cta2: "Lire notre FAQ",
      },
      getAQuote: "Obtenir un devis",
      mainServices: [
        {
          id: "web",
          title: "Développement web",
          description: "Nous créons des sites professionnels qui mettent en valeur votre activité et transforment les visiteurs en clients. Chaque site est conçu pour la vitesse, la sécurité et les résultats.",
          items: ["Développement sur mesure", "Design moderne et responsive", "Chargement rapide", "Formulaires de contact & Google Maps", "SSL (HTTPS) inclus", "Optimisation SEO de base", "Compatibilité multi-navigateurs"],
          perfectFor: ["PME", "Restaurants", "Médecins", "Avocats", "Agences", "Écoles", "Freelances"],
        },
        {
          id: "ecom",
          title: "Développement e-commerce",
          description: "Vendez vos produits en ligne avec une boutique sécurisée et facile à gérer, conçue pour la croissance.",
          items: ["Catalogue & catégories de produits", "Panier & paiement", "Gestion des commandes & stocks", "Comptes clients", "Codes promo", "Intégration analytique"],
          perfectFor: [],
        },
        {
          id: "app",
          title: "Applications web sur mesure",
          description: "Vous avez besoin de plus qu'un site standard ? Nous développons des solutions sur mesure autour de vos processus métier.",
          items: ["Systèmes de réservation", "Plateformes CRM", "Tableaux de bord internes", "Portails clients & employés", "Systèmes d'inventaire"],
          perfectFor: [],
        },
        {
          id: "design",
          title: "Design UI/UX",
          description: "Un excellent site n'est pas seulement beau — il est facile à utiliser. Nous concevons des interfaces épurées, modernes, intuitives et adaptées au mobile.",
          items: ["Interfaces épurées & modernes", "Approche mobile-first", "Mises en page centrées utilisateur", "Navigation intuitive", "Accessible à tous"],
          perfectFor: [],
        },
        {
          id: "seo",
          title: "Optimisation SEO",
          description: "Un beau site n'a de valeur que si les gens peuvent le trouver. Nous aidons votre entreprise à gagner en visibilité sur Google.",
          items: ["Audit de structure", "Amélioration de la vitesse", "Balises meta & schéma", "Optimisation des images", "Performance mobile", "SEO technique"],
          perfectFor: [],
        },
        {
          id: "perf",
          title: "Optimisation des performances",
          description: "La vitesse compte. Un site plus rapide signifie des visiteurs plus satisfaits, un taux de rebond plus faible et plus de conversions.",
          items: ["Temps de chargement réduits", "Meilleurs Core Web Vitals", "Expérience utilisateur améliorée", "Taux de rebond réduit", "Taux de conversion plus élevé"],
          perfectFor: [],
        },
        {
          id: "maintenance",
          title: "Maintenance du site",
          description: "Gardez votre site sécurisé et opérationnel. Concentrez-vous sur votre activité pendant que nous gérons l'aspect technique.",
          items: ["Mises à jour de sécurité", "Corrections de bugs", "Sauvegardes régulières", "Surveillance des performances", "Mises à jour de contenu", "Support technique"],
          perfectFor: [],
        },
        {
          id: "hosting",
          title: "Hébergement & déploiement",
          description: "Nous nous occupons de mettre votre site en ligne. Il sera prêt à accueillir des visiteurs dès le premier jour.",
          items: ["Configuration du domaine", "Mise en place de l'hébergement", "Installation SSL", "Déploiement serveur", "Configuration e-mail", "Surveillance continue"],
          perfectFor: [],
        },
        {
          id: "brand",
          title: "Logo & identité de marque",
          description: "Votre marque mérite une identité visuelle forte. Une identité cohérente renforce la confiance et la notoriété.",
          items: ["Logos professionnels", "Palettes de couleurs", "Sélection typographique", "Charte graphique", "Branding réseaux sociaux"],
          perfectFor: [],
        },
      ],
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
      body: "شريكك الرائد في الجزائر للحلول الإلكترونية والبرمجية المخصصة. نبني منتجات رقمية عالية الأداء تنمو مع رؤيتك.",
      cta1: "احصل على استشارة مجانية",
      cta2: "اطّلع على أعمالنا",
      imageAlt:
        "لوحة تحكم واجهة مستخدم متطورة تعرض تصورات بيانات ومقتطفات شفرة برمجية.",
    },
    services: {
      sectionHeadline1: "حلول مصممة لتحقيق",
      sectionHeadline2: "الأداء",
      sectionBody:
        "نجمع بين معايير الهندسة العالمية والرؤى المحلية لتقديم برمجيات عالمية المستوى من قلب الجزائر.",
      prevLabel: "السابق",
      nextLabel: "التالي",
      items: [
        {
          title: "تطوير الويب",
          description:
            "تطبيقات ويب فائقة السرعة ومُحسَّنة لمحركات البحث، مبنية بأحدث أطر العمل كـ React وNext.js.",
          features: [
            "تطبيقات الويب التقدمية",
            "التجارة الإلكترونية للمؤسسات",
            "حلول إدارة المحتوى المخصصة",
          ],
        },
        {
          title: "البرمجيات المخصصة",
          description:
            "برمجيات سطح مكتب وهواتف ذكية مُصمَّمة خصيصاً لأتمتة سير العمل المعقد في مؤسستك.",
          features: [
            "البنية التحتية السحابية",
            "تكامل واجهات برمجة التطبيقات",
            "تطبيقات سطح المكتب",
          ],
        },
        {
          title: "الاستراتيجية الرقمية",
          description:
            "خرائط طريق مبنية على البيانات لمساعدة عملك على اجتياز الفضاء الرقمي وتحقيق نمو مستدام.",
          features: [
            "خارطة طريق المنتج",
            "أبحاث تجربة المستخدم وتصميم الواجهة",
            "تحليل السوق",
          ],
        },
      ],
    },
    contact: {
      headline1: "مستعد لبناء",
      headline2: "المستقبل",
      body: "تواصل معنا لمناقشة مشروعك. مهندسونا جاهزون لتحويل رؤيتك إلى حل رقمي متين.",
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
      tagline:
        "التميز الهندسي من الجزائر. نبني الجيل القادم من البنية التحتية الرقمية.",
      copyright: "© 2024 Quarcode. التميز الهندسي من الجزائر.",
      columns: [
        {
          heading: "الشركة",
          links: [
            { label: "من نحن", href: "/about" },
            { label: "الوظائف", href: "#" },
            { label: "طريقة عملنا", href: "#" },
            { label: "تواصل معنا", href: "/contact" },
          ],
        },
        {
          heading: "تواصل",
          links: [
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "#" },
            { label: "Twitter / X", href: "#" },
            { label: "Dribbble", href: "#" },
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
      metaTitle: "من نحن | Quarcode – التميز الهندسي",
      footerTagline: "رواد التميز في هندسة البرمجيات بالجزائر منذ 2021.",
      footerCopyright: "© 2024 Quarcode. التميز الهندسي من الجزائر.",
      footerColumns: [
        {
          heading: "روابط سريعة",
          links: [
            { label: "الخدمات", href: "/" },
            { label: "من نحن", href: "/about" },
            { label: "دراسات الحالة", href: "#" },
            { label: "الوظائف", href: "#" },
          ],
        },
        {
          heading: "تواصل",
          links: [
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "#" },
            { label: "Twitter", href: "#" },
            { label: "Facebook", href: "#" },
          ],
        },
        {
          heading: "قانوني",
          links: [
            { label: "سياسة الخصوصية", href: "#" },
            { label: "شروط الاستخدام", href: "#" },
          ],
        },
      ],
    },
    aboutHero: {
      badge: "الابتكار الجزائري بالهندسة",
      headline1: "نؤسّس",
      headline2: "مستقبل الجزائر",
      headline3: "بالكود.",
      body: "Quarcode وكالة رائدة لحلول البرمجيات، متخصصة في رفع مستوى المشهد الرقمي الجزائري. نمزج بين الخبرة المحلية والمعايير الهندسية العالمية لبناء برمجيات عالية الأداء.",
    },
    ourStory: {
      badge: "قصتنا",
      headline: "من الجزائر إلى العالم",
      body1: "تأسست Quarcode عام 2021 انطلاقاً من قناعة بسيطة لكنها قوية: الكفاءات الهندسية البرمجية عالمية المستوى موجودة في الجزائر وتستحق منصة عالمية. عاد مؤسسونا، مجموعة من المهندسين ذوي الخبرة في أوروبا وأمريكا الشمالية، إلى الوطن بمهمة واضحة.",
      body2: "بدأنا بفريق صغير من خمسة أشخاص في مساحة عمل مشتركة بالجزائر العاصمة. اليوم، نُدير استوديو متكامل يضم أكثر من 45 مهندساً ومصمماً واستراتيجياً، نقدم حلولاً رقمية معقدة لعملاء في الجزائر وفرنسا ومنطقة الشرق الأوسط وشمال أفريقيا.",
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
        body: "تمكين الشركات الجزائرية من برمجيات عالمية تدفع النمو وتُبسّط العمليات وتُعزز الابتكار المحلي. نحن ملتزمون بتنشئة الجيل القادم من المهندسين الجزائريين عبر الإرشاد وتنفيذ المشاريع وفق أعلى المعايير.",
      },
      vision: {
        title: "رؤيتنا",
        body: "أن نصبح القائد الأبرز في التحول الرقمي الجزائري، معترفاً بنا عالمياً بوصفنا مركز التميز الهندسي في منطقة المغرب العربي. نتطلع إلى مستقبل تصبح فيه عبارة «صُنع بواسطة Quarcode» مرادفاً للجودة التي لا تهاون فيها.",
      },
    },
    coreValues: {
      sectionTitle: "قيمنا الأساسية",
      sectionBody: "المبادئ الجوهرية التي توجّه كل سطر كود نكتبه وكل قرار نتخذه.",
      items: [
        {
          title: "الجودة",
          description: "لا نكتفي بـ«يعمل». كودنا نظيف، وبنيتنا التحتية راسخة، وتجارب مستخدمينا لا تشوبها شائبة. كل مشروع يخضع لاختبارات صارمة وفق معايير المؤسسات.",
        },
        {
          title: "الابتكار",
          description: "نتجاوز الحدود بتبني أحدث التقنيات. من دمج الذكاء الاصطناعي إلى البنى السحابية المتقدمة، نجلب آخر الاتجاهات العالمية إلى السوق الجزائرية.",
        },
        {
          title: "النزاهة",
          description: "الشفافية هي وضعنا الافتراضي. نبني الثقة من خلال التواصل الصادق والتعامل الأخلاقي مع البيانات والالتزام بشراكات طويلة الأمد بدلاً من المكاسب الآنية.",
        },
      ],
    },
    leadership: {
      sectionTitle: "العقول وراء Quarcode",
      sectionBody: "يتألف فريقنا القيادي من مهندسي بنية برمجية متمرسين واستراتيجيي منتجات ومستشاري أعمال بعقود من الخبرة المشتركة في قطاعات التقنية المحلية والدولية. نؤمن بالقيادة بالقدوة، لذلك لا يزال مديرونا منخرطين مباشرة في أصعب تحدياتنا التقنية.",
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
      metaTitle: "تواصل معنا | Quarcode التميز الهندسي",
      footerTagline: "نصنع مستقبل البرمجيات في الجزائر وخارجها.",
      footerCopyright: "© 2024 Quarcode. التميز الهندسي من الجزائر.",
      footerColumns: [
        {
          heading: "المنصة",
          links: [
            { label: "الخدمات", href: "/" },
            { label: "من نحن", href: "/about" },
            { label: "أعمالنا", href: "#" },
          ],
        },
        {
          heading: "الشركة",
          links: [
            { label: "سياسة الخصوصية", href: "#" },
            { label: "شروط الاستخدام", href: "#" },
          ],
        },
        {
          heading: "تواصل اجتماعي",
          links: [
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "#" },
          ],
        },
      ],
    },
    contactHero: {
      badge: "مستعدون للتعاون",
      headline1: "لنبني معاً شيئاً",
      headline2: "استثنائياً",
      headline3: ".",
      body: "انطلاقاً من قلب الجزائر العاصمة، نسد الفجوة بين الهندسة المعقدة والتصميم الأنيق. تواصل معنا لتبدأ رحلة تحولك الرقمي.",
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
        messagePlaceholder: "أخبرنا عن أهداف مشروعك والجدول الزمني وأي متطلبات خاصة...",
        submit: "إرسال الرسالة",
        sending: "جارٍ الإرسال…",
      },
      status: {
        success: "تم إرسال رسالتك بنجاح! سنرد عليك في غضون 24 ساعة.",
        error: "فشل إرسال رسالتك. يرجى المحاولة مجدداً أو مراسلتنا مباشرةً على hello@quarcode.dz.",
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
      metaTitle: "الأسئلة الشائعة | Quarcode – التميز الهندسي",
      metaDescription: "إجابات على الأسئلة الشائعة حول أسعارنا وعملياتنا والجداول الزمنية وخدمات الدعم.",
      footerTagline: "التميز الهندسي من الجزائر. نبني البنية التحتية الرقمية للغد.",
      footerCopyright: "© 2024 Quarcode. التميز الهندسي من الجزائر.",
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
            { label: "شروط الاستخدام", href: "#" },
            { label: "سياسة الخصوصية", href: "#" },
          ],
        },
        {
          heading: "تواصل",
          links: [
            { label: "LinkedIn", href: "#" },
            { label: "GitHub", href: "#" },
          ],
        },
      ],
      hero: {
        badge: "مركز الدعم",
        headline1: "الأسئلة",
        headline2: "المتكررة.",
        body: "كل ما تحتاج معرفته عن عملياتنا وأسعارنا والجداول الزمنية وكيفية بنائنا لمواقع إلكترونية احترافية للشركات في الجزائر وحول العالم.",
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
          intro: "تعتمد التكلفة على نوع الموقع والميزات المطلوبة. تبدأ أسعارنا من 30,000 دج لموقع أعمال احترافي. للمشاريع المخصصة، نقدم عرضاً شخصياً بناءً على متطلباتك.",
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
          note: "سيُقدَّم جدول زمني تفصيلي للمشروع قبل بدء التطوير.",
        },
      },
      {
        id: "mobile",
        question: "هل سيعمل موقعي على الأجهزة المحمولة؟",
        answer: {
          intro: "نعم. كل موقع نبنيه متجاوب بالكامل، مما يضمن تجربة ممتازة على أجهزة الكمبيوتر والأجهزة اللوحية والهواتف الذكية.",
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
          intro: "نعم. إذا تضمّن مشروعك لوحة تحكم، ستتمكن من إدارة المحتوى والمنتجات والصور والمقالات بسهولة دون أي معرفة تقنية.",
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
          intro: "نعم. تتضمن جميع مواقعنا تحسيناً أساسياً لمحركات البحث. تشمل الحزمة التجارية أيضاً SEO متقدماً لتحسين الظهور على الإنترنت.",
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
          bullets: ["تسجيل اسم النطاق", "استضافة الويب", "شهادة SSL (HTTPS)", "إعداد الخادم والنشر"],
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
          bullets: ["تحديثات الأمان", "نسخ احتياطية منتظمة", "مراقبة الأداء", "إصلاح الأخطاء", "الدعم الفني"],
          steps: [],
          checks: [],
          note: "يبقى موقعك آمناً وسريعاً ومحدّثاً دائماً.",
        },
      },
      {
        id: "revisions",
        question: "هل يمكنني طلب تعديلات بعد التسليم؟",
        answer: {
          intro: "بالتأكيد. التعديلات الطفيفة مشمولة بعد التسليم. للميزات الإضافية أو التغييرات الجوهرية لاحقاً، نقدم خدمات ترقية وصيانة مرنة.",
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
          intro: "لا. نعمل مع الشركات ورجال الأعمال في الجزائر وعلى المستوى الدولي. يمكن إنجاز المشروع بالكامل عن بُعد عبر الإنترنت.",
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
          steps: ["تواصل معنا.", "أخبرنا عن مشروعك.", "سنناقش متطلباتك.", "ستتلقى عرضاً تفصيلياً.", "بعد الموافقة، نبدأ التطوير."],
          checks: [],
          note: "",
        },
      },
      {
        id: "ownership",
        question: "هل سأمتلك موقعي الإلكتروني؟",
        answer: {
          intro: "نعم. بمجرد اكتمال المشروع وسداد الدفعة الأخيرة، ستمتلك الموقع ومحتواه بالكامل وفقاً لشروط اتفاقيتنا.",
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
      metaTitle: "الخدمات | Quarcode – التميز الهندسي",
      footerCopyright: "© 2024 Quarcode. التميز الهندسي من الجزائر.",
      footerColumns: [
        {
          heading: "الخدمات",
          links: [
            { label: "تطوير المواقع",         href: "/services" },
            { label: "التجارة الإلكترونية",  href: "/services" },
            { label: "تطبيقات ويب مخصصة",    href: "/services" },
            { label: "تحسين محركات البحث",   href: "/services" },
          ],
        },
        {
          heading: "تواصل",
          links: [
            { label: "LinkedIn",    href: "#" },
            { label: "GitHub",      href: "#" },
            { label: "Twitter / X", href: "#" },
          ],
        },
        {
          heading: "قانوني",
          links: [
            { label: "سياسة الخصوصية", href: "#" },
            { label: "شروط الاستخدام", href: "#" },
          ],
        },
      ],
      hero: {
        badge: "خدماتنا",
        headline1: "حلول رقمية تُنمّي",
        headline2: "أعمالك",
        body: "في Quarcode، نصمم ونطور مواقع إلكترونية وتطبيقات ويب حديثة وعالية الأداء مصمَّمة خصيصاً لأهدافك. حلول رقمية آمنة وقابلة للتوسع وسهلة الاستخدام تُحدث أثراً حقيقياً.",
      },
      why: {
        sectionTitle: "لماذا تختار Quarcode؟",
        sectionBody: "لا نبني مواقع فحسب — نبني أسساً رقمية تُزدهر معها أعمالك.",
        items: [
          { icon: "bolt",           title: "تقنيات حديثة",         body: "نستخدم تقنيات موثوقة وحديثة لبناء مواقع سريعة وآمنة وقابلة للتوسع." },
          { icon: "devices",        title: "تصميم متجاوب",         body: "كل موقع يبدو رائعاً ويعمل بكفاءة على أجهزة الكمبيوتر والأجهزة اللوحية والهواتف الذكية." },
          { icon: "travel_explore", title: "صديق لمحركات البحث",  body: "مواقعنا مبنية مع مراعاة محركات البحث لتحسين ظهورك على الإنترنت." },
          { icon: "lock",           title: "آمن افتراضياً",        body: "الأمان مدمج في كل مشروع باستخدام أفضل الممارسات والمعايير الحديثة." },
          { icon: "tune",           title: "حلول مخصصة",          body: "كل عمل فريد. نبني حلولاً تتناسب مع أهدافك — لا قوالب جاهزة." },
          { icon: "support_agent",  title: "دعم مستمر",            body: "علاقتنا لا تنتهي عند الإطلاق. نحن هنا لدعمك مع نمو أعمالك." },
        ],
      },
      process: {
        sectionTitle: "طريقة عملنا",
        sectionBody: "منهجية واضحة ومنظمة حتى تعرف دائماً ما يحدث وما سيأتي بعده.",
        steps: [
          { number: "01", title: "الاستكشاف",  body: "نتعرف على عملك وأهدافك ومتطلباتك." },
          { number: "02", title: "التخطيط",    body: "نحدد نطاق المشروع والهيكل والجدول الزمني." },
          { number: "03", title: "التصميم",    body: "نبتكر واجهة مستخدم حديثة وبديهية." },
          { number: "04", title: "التطوير",    body: "نبني موقعك باستخدام تقنيات حديثة وأفضل الممارسات." },
          { number: "05", title: "الاختبار",  body: "كل ميزة تُختبر بعناية لضمان الجودة والأداء والأمان." },
          { number: "06", title: "الإطلاق",   body: "يصبح موقعك متاحاً للعموم، محسَّناً بالكامل وجاهزاً لعملائك." },
        ],
      },
      cta: {
        headline: "مستعد لإطلاق مشروعك؟",
        body: "لنبني معاً موقعاً يمثّل علامتك التجارية ويجذب العملاء ويُنمّي أعمالك. تواصل مع Quarcode اليوم للحصول على استشارة مجانية وعرض سعر مخصص.",
        cta1: "احصل على عرض سعر مجاني",
        cta2: "اقرأ الأسئلة الشائعة",
      },
      getAQuote: "احصل على عرض سعر",
      mainServices: [
        {
          id: "web",
          title: "تطوير المواقع الإلكترونية",
          description: "نبني مواقع احترافية تُبرز أعمالك وتحوّل الزوار إلى عملاء. كل موقع مُصمَّم للسرعة والأمان والنتائج.",
          items: ["تطوير مخصص", "تصميم حديث ومتجاوب", "أداء تحميل سريع", "نماذج تواصل وخرائط غوغل", "شهادة SSL (HTTPS) مشمولة", "تحسين SEO أساسي", "توافق مع كل المتصفحات"],
          perfectFor: ["الشركات الصغيرة", "المطاعم", "الأطباء", "المحامون", "الوكالات", "المدارس", "المستقلون"],
        },
        {
          id: "ecom",
          title: "تطوير التجارة الإلكترونية",
          description: "بِع منتجاتك عبر الإنترنت من خلال متجر آمن وسهل الإدارة مُصمَّم للنمو.",
          items: ["كتالوج المنتجات والفئات", "سلة التسوق والدفع", "إدارة الطلبات والمخزون", "حسابات العملاء", "رموز الخصم", "تكامل التحليلات"],
          perfectFor: [],
        },
        {
          id: "app",
          title: "تطبيقات ويب مخصصة",
          description: "تحتاج شيئاً أبعد من موقع معياري؟ نبني حلولاً مصمَّمة خصيصاً حول عمليات أعمالك.",
          items: ["أنظمة حجز", "منصات CRM", "لوحات تحكم داخلية", "بوابات العملاء والموظفين", "أنظمة المخزون"],
          perfectFor: [],
        },
        {
          id: "design",
          title: "تصميم UI/UX",
          description: "الموقع الممتاز ليس جميلاً فحسب — بل سهل الاستخدام. نصمم واجهات نظيفة وحديثة وبديهية ومتوافقة مع الجوّال.",
          items: ["واجهات نظيفة وحديثة", "نهج mobile-first", "تصاميم تتمحور حول المستخدم", "تنقل بديهي", "إمكانية الوصول للجميع"],
          perfectFor: [],
        },
        {
          id: "seo",
          title: "تحسين محركات البحث",
          description: "الموقع الجميل ذو قيمة فقط إذا وجده الناس. نساعد أعمالك على اكتساب مزيد من الظهور على جوجل.",
          items: ["تدقيق هيكل الموقع", "تحسين سرعة الصفحة", "الوسوم الوصفية والمخططات", "تحسين الصور", "أداء الجوال", "SEO تقني"],
          perfectFor: [],
        },
        {
          id: "perf",
          title: "تحسين الأداء",
          description: "السرعة مهمة. موقع أسرع يعني زوار أكثر سعادة، ومعدل ارتداد أقل، وتحويلات أعلى.",
          items: ["أوقات تحميل أسرع", "Core Web Vitals أفضل", "تجربة مستخدم محسّنة", "معدل ارتداد أقل", "معدل تحويل أعلى"],
          perfectFor: [],
        },
        {
          id: "maintenance",
          title: "صيانة الموقع",
          description: "حافظ على أمان موقعك وسلاسة تشغيله. ركّز على أعمالك بينما نتولى الجانب التقني.",
          items: ["تحديثات الأمان", "إصلاح الأخطاء", "نسخ احتياطية منتظمة", "مراقبة الأداء", "تحديثات المحتوى", "الدعم الفني"],
          perfectFor: [],
        },
        {
          id: "hosting",
          title: "الاستضافة والنشر",
          description: "نتكفل بنشر موقعك على الإنترنت. سيكون موقعك جاهزاً للزوار منذ اليوم الأول.",
          items: ["إعداد النطاق", "ضبط الاستضافة", "تثبيت SSL", "نشر الخادم", "إعداد البريد الإلكتروني", "مراقبة مستمرة"],
          perfectFor: [],
        },
        {
          id: "brand",
          title: "الشعار والهوية البصرية",
          description: "علامتك التجارية تستحق هوية بصرية قوية. الهوية المتسقة تبني الثقة والتعرف.",
          items: ["شعارات احترافية", "لوحات الألوان", "اختيار الخطوط", "دليل الهوية البصرية", "هوية وسائل التواصل الاجتماعي"],
          perfectFor: [],
        },
      ],
    },
  },
} as const;

export type Translations = (typeof translations)["en"];