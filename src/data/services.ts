export interface ServiceSection {
  heading: string;
  items: string[];
}

export interface ServiceData {
  slug: string;
  title: string;
  tagline?: string;
  intro: string;
  sections: ServiceSection[];
  outro: string;
  seoTitle: string;
  seoDescription: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: 'trademarks',
    title: 'Trademarks',
    tagline: 'Grow your brand. Protect your brilliance.',
    intro: 'We provide comprehensive trademark protection and strategic brand advisory services tailored to businesses, creators, startups, and international companies.',
    sections: [
      {
        heading: 'Strategy & Assessment',
        items: [
          'Trademark diagnosis and protection strategy',
          'Clearance searches and risk assessment',
          'Brand availability and registrability assessment',
        ],
      },
      {
        heading: 'Trademark Filing & Registration',
        items: [
          'National trademark registrations before Sakpatenti',
          'International trademark registrations through the Madrid System (WIPO)',
          'European Union trademark registrations before EUIPO',
          'Filing and prosecution in jurisdictions worldwide',
        ],
      },
      {
        heading: 'Portfolio Management & Commercialization',
        items: [
          'Trademark portfolio management',
          'International expansion and portfolio strategy',
          'Trademark renewals and maintenance',
          'Drafting of license, assignment, coexistence, franchise, and related agreements',
        ],
      },
      {
        heading: 'Enforcement & Dispute Resolution',
        items: [
          'Oppositions, cancellations, and enforcement actions',
          'Representation before IP Offices, Boards of Appeal, and courts',
          'Online brand protection and infringement monitoring',
          'Trademark watching services and conflict monitoring',
        ],
      },
    ],
    outro: 'We help clients build, protect, enforce, and commercially strengthen their brands across local and international markets.',
    seoTitle: 'Trademark Registration Georgia | Sakpatenti, EUIPO, WIPO | Mujiri IP',
    seoDescription: 'Expert trademark registration in Georgia (Sakpatenti), EU (EUIPO), and internationally via the WIPO Madrid System. Brand protection, portfolio management, and enforcement from Mujiri IP, Tbilisi.',
  },
  {
    slug: 'industrial-designs',
    title: 'Industrial Designs',
    intro: 'We provide comprehensive industrial design protection and strategic advisory services for businesses, creators, designers, startups, and international companies.',
    sections: [
      {
        heading: 'Strategy & Assessment',
        items: [
          'Design protection strategy',
          'Registrability and novelty assessment',
          'Prior design searches and risk analysis',
        ],
      },
      {
        heading: 'Design Filing & Registration',
        items: [
          'National industrial design registrations before Sakpatenti',
          'European Union Community Design registrations before EUIPO',
          'International design registrations through the Hague System (WIPO)',
          'Filing and prosecution in jurisdictions worldwide',
        ],
      },
      {
        heading: 'Portfolio Management & Commercialization',
        items: [
          'Design portfolio management',
          'International protection and expansion strategy',
          'Renewals and maintenance',
          'Drafting of license, assignment, coexistence, and commercialization agreements',
        ],
      },
      {
        heading: 'Enforcement & Dispute Resolution',
        items: [
          'Invalidity and cancellation actions',
          'Representation before IP Offices, Boards of Appeal, and courts',
          'Online monitoring and infringement assessment',
          'Enforcement against unauthorized use and imitation',
        ],
      },
    ],
    outro: 'We help clients protect and strengthen the visual identity, appearance, and commercial value of their products across local and international markets.',
    seoTitle: 'Industrial Design Registration Georgia | EUIPO, Hague System | Mujiri IP',
    seoDescription: 'Industrial design registration and protection in Georgia (Sakpatenti), EU (EUIPO), and through the Hague System (WIPO). Strategic design advisory from Mujiri IP, Tbilisi.',
  },
  {
    slug: 'patents-utility-models',
    title: 'Patents & Utility Models',
    intro: 'We provide strategic patent and utility model advisory and protection services for inventors, startups, technology companies, R&D institutions, and international businesses.',
    sections: [
      {
        heading: 'Strategy & Assessment',
        items: [
          'Patentability, novelty, and registrability assessment',
          'Prior art and state-of-the-art searches',
          'Patent and utility model protection strategy',
          'Freedom to Operate (FTO) analysis and risk assessment',
        ],
      },
      {
        heading: 'Filing & Prosecution',
        items: [
          'Patent and utility model filing and prosecution before Sakpatenti',
          'International patent applications under the PCT system (WIPO)',
          'Management of PCT national phase entries',
          'European patent validation management in Georgia',
          'Coordination of international patent filings through trusted foreign associates',
        ],
      },
      {
        heading: 'Portfolio Management & Commercialization',
        items: [
          'Patent and utility model portfolio management',
          'International protection and expansion strategy',
          'Patent annuities and maintenance',
          'Drafting of license, assignment, technology transfer, R&D, and commercialization agreements',
        ],
      },
      {
        heading: 'Monitoring, Enforcement & Disputes',
        items: [
          'Patent and technology monitoring services',
          'Infringement and validity assessment',
          'Representation before IP Offices, Boards of Appeal, and courts',
          'Enforcement strategy and protection against unauthorized use',
        ],
      },
    ],
    outro: 'We help clients protect innovation, reduce legal and commercial risks, and transform technology and research into long-term business value across international markets.',
    seoTitle: 'Patent Registration Georgia | PCT, WIPO Filing | Mujiri IP',
    seoDescription: 'Patent and utility model protection in Georgia (Sakpatenti), international PCT filings (WIPO), and European patent validation. Innovation advisory from Mujiri IP, Tbilisi.',
  },
  {
    slug: 'geographical-indications',
    title: 'Geographical Indications',
    intro: 'We provide strategic advisory and protection services for Geographical Indications (GIs), Appellations of Origin, and products linked to geographical reputation, heritage, and traditional know-how.',
    sections: [
      {
        heading: 'Strategy & Advisory',
        items: [
          'Geographical Indication protection strategy',
          'Advisory for producer associations, cooperatives, and right holders',
          'Assessment of eligibility, product linkage, and protection requirements',
          'National and international GI protection strategy',
        ],
      },
      {
        heading: 'Specifications & Registration',
        items: [
          'Drafting of product specifications and related documentation',
          'Preparation and management of GI applications before Sakpatenti',
          'Advisory on EU and international GI protection systems',
          'Support in amendments and management of registered specifications',
        ],
      },
      {
        heading: 'Portfolio Management & Commercialization',
        items: [
          'GI portfolio management and protection strategy',
          'Licensing, control, and use policies',
          'Advisory on branding, commercialization, and market positioning',
          'Support for international expansion and recognition of GIs abroad',
        ],
      },
      {
        heading: 'Monitoring, Enforcement & Disputes',
        items: [
          'Monitoring unauthorized use and misuse of GIs',
          'Enforcement and protection against imitation and unfair competition',
          'Representation before administrative authorities and courts',
          'Advisory on online protection and domain name issues related to GIs',
        ],
      },
    ],
    outro: 'We support producers, associations, institutions, and right holders in protecting the authenticity, reputation, and economic value of geographically linked products in national and international markets.',
    seoTitle: 'Geographical Indications Protection Georgia | GI Registration | Mujiri IP',
    seoDescription: 'Strategic advisory and registration of Geographical Indications (GIs) in Georgia and internationally. Protection of regional products, appellations of origin, and traditional know-how.',
  },
  {
    slug: 'new-plant-varieties',
    title: 'New Plant Varieties',
    intro: 'We provide strategic advisory and protection services for new plant varieties, supporting breeders, agricultural businesses, research institutions, nurseries, cooperatives, and innovators in the agricultural sector.',
    sections: [
      {
        heading: 'Strategy & Assessment',
        items: [
          'Initial advice on the feasibility of protection',
          'Assessment of distinctiveness, uniformity, stability, and eligibility requirements',
          'Plant variety protection and commercialization strategy',
          'Advisory on national, EU, and international protection systems',
        ],
      },
      {
        heading: 'Filing & Registration',
        items: [
          'Preparation and filing of Plant Breeders\' Rights applications',
          'Management of national and EU plant variety registration procedures',
          'Coordination with relevant plant variety protection authorities',
          'Assistance during DUS (Distinctiveness, Uniformity, and Stability) examinations',
        ],
      },
      {
        heading: 'Portfolio Management & Commercialization',
        items: [
          'Plant variety portfolio management and audit',
          'Annual fees, renewals, and maintenance procedures',
          'Drafting of license, assignment, and commercialization agreements',
          'International protection and expansion strategy',
        ],
      },
      {
        heading: 'Enforcement & Disputes',
        items: [
          'Legal protection and enforcement of Plant Breeders\' Rights',
          'Representation in infringement and unauthorized use disputes',
          'Advisory on regulatory and compliance matters',
          'Representation before administrative authorities and courts',
        ],
      },
    ],
    outro: 'We help clients protect agricultural innovation, secure breeders\' rights, and maximize the commercial value of new plant varieties across national and international markets.',
    seoTitle: 'New Plant Variety Protection Georgia | Plant Breeders Rights | Mujiri IP',
    seoDescription: 'Protection of new plant varieties and Plant Breeders\' Rights in Georgia and internationally. Advisory on DUS examinations, registration, and commercialization for breeders and agricultural businesses.',
  },
  {
    slug: 'copyright-related-rights',
    title: 'Copyright & Related Rights',
    intro: 'We provide strategic copyright and related rights advisory services for creators, artists, authors, software developers, agencies, producers, startups, technology companies, and international businesses.',
    sections: [
      {
        heading: 'Strategy & Protection',
        items: [
          'Copyright protection strategy',
          'Advisory on ownership, authorship, and evidence of creation',
          'Risk assessment and rights clearance',
          'Protection of artistic, literary, audiovisual, musical, digital, and software-related works',
        ],
      },
      {
        heading: 'Contracts & Commercialization',
        items: [
          'Drafting of license, assignment, publishing, production, and commercialization agreements',
          'Freelancer, employee, and commissioned work agreements',
          'Co-authorship and collaboration agreements',
          'Advisory on exploitation and monetization of copyright assets',
          'Software, digital platform, and technology-related agreements',
        ],
      },
      {
        heading: 'Digital & Online Protection',
        items: [
          'Online copyright monitoring and infringement detection',
          'Advisory on digital content protection and platform liability',
          'Preparation of cease and desist letters and takedown requests',
          'Domain name and online enforcement strategy',
        ],
      },
      {
        heading: 'Enforcement & Disputes',
        items: [
          'Copyright infringement and enforcement actions',
          'Representation before administrative authorities and courts',
          'Advisory on related rights and neighboring rights protection',
          'Dispute resolution and enforcement strategy',
        ],
      },
    ],
    outro: 'We help right holders protect, commercialize, and enforce their creative and digital assets while supporting long-term business growth and value creation.',
    seoTitle: 'Copyright Protection Georgia | Creative Rights & Digital IP | Mujiri IP',
    seoDescription: 'Strategic copyright and related rights advisory in Georgia. Protecting artistic, literary, audiovisual, and software works through licensing, enforcement, and digital brand protection.',
  },
  {
    slug: 'domain-names-digital-protection',
    title: 'Domain Names & Digital Protection',
    intro: 'Your digital presence is one of your most valuable business assets. We help businesses, creators, startups, and international brands protect, manage, and enforce their rights in the online environment.',
    sections: [
      {
        heading: 'Domain Name Strategy & Protection',
        items: [
          'Strategic domain name registration and portfolio management',
          'National and international domain name protection',
          'Domain renewals and maintenance',
          'Advisory on domain acquisition and transfer negotiations',
          'Domain name portfolio strategy aligned with brand expansion',
        ],
      },
      {
        heading: 'Domain Disputes & Enforcement',
        items: [
          'Recovery of domain names registered in bad faith',
          'UDRP, URS, and domain dispute resolution procedures',
          'Enforcement against infringing domains and unauthorized online use',
          'Monitoring of newly registered domains that may conflict with your rights',
        ],
      },
      {
        heading: 'Online Brand Protection',
        items: [
          'Online trademark and brand monitoring',
          'Detection of counterfeit, fraudulent, and unauthorized online activity',
          'Monitoring of websites, marketplaces, and digital platforms',
          'Preparation of cease and desist letters and takedown requests',
          'Removal and de-indexing requests for infringing online content',
        ],
      },
      {
        heading: 'Social Media & Marketplace Protection',
        items: [
          'Protection against fake profiles and impersonation',
          'Reporting infringing accounts and unauthorized brand use',
          'Marketplace enforcement and content removal',
          'Registration of IP rights on e-commerce and digital platforms',
        ],
      },
      {
        heading: 'Digital Legal Advisory',
        items: [
          'Drafting of website legal notices and terms of use',
          'Online terms and conditions and e-commerce compliance advisory',
          'Digital compliance and online risk assessment',
        ],
      },
    ],
    outro: 'We provide comprehensive digital protection strategies designed to safeguard brands, intellectual property, reputation, and commercial value across the online environment.',
    seoTitle: 'Domain Name Disputes & Digital Brand Protection Georgia | Mujiri IP',
    seoDescription: 'Domain name strategy, UDRP dispute procedures, online brand monitoring, and digital IP protection in Georgia and internationally. Protect your digital presence with Mujiri IP.',
  },
  {
    slug: 'ip-strategy-consulting',
    title: 'IP Strategy & Consulting',
    intro: 'Intellectual property is no longer only a legal protection tool — it is a strategic business asset that drives innovation, investment, market positioning, and long-term growth. At Mujiri IP, we help businesses, creators, startups, investors, and institutions develop intellectual property strategies aligned with their commercial objectives, innovation models, and international expansion plans.',
    sections: [
      {
        heading: 'Strategic IP Advisory',
        items: [
          'Development of tailored IP protection and commercialization strategies',
          'Alignment of intellectual property with business and growth objectives',
          'IP risk assessment and strategic planning',
          'Freedom to Operate (FTO) and competitive landscape analysis',
        ],
      },
      {
        heading: 'IP Portfolio Strategy & Management',
        items: [
          'Strategic audit of IP portfolios',
          'Portfolio structuring and optimization',
          'International expansion and filing strategy',
          'Management of complex multi-jurisdictional IP portfolios',
        ],
      },
      {
        heading: 'Innovation & Commercialization',
        items: [
          'IP monetization and commercialization strategies',
          'Licensing, technology transfer, franchising, and exploitation models',
          'Support for R&D, innovation, and collaborative projects',
          'Advisory for startups, investors, and innovation-driven businesses',
        ],
      },
      {
        heading: 'Strategic Monitoring & Market Intelligence',
        items: [
          'Competitive IP monitoring and technology watch',
          'Monitoring of market trends and competitor activity',
          'Identification of legal, technological, and commercial risks',
          'Strategic advisory for new product launches and market entry',
        ],
      },
      {
        heading: 'Enforcement & Risk Management',
        items: [
          'IP enforcement and dispute prevention strategies',
          'Advisory on infringement risks and brand protection',
          'Strategic support in negotiations, disputes, and enforcement actions',
          'Coordination of cross-border protection and enforcement strategies',
        ],
      },
    ],
    outro: 'We work closely with our clients to transform intellectual property into a valuable strategic asset that supports innovation, strengthens competitive advantage, and creates long-term commercial value.',
    seoTitle: 'IP Strategy & Portfolio Consulting Georgia | Mujiri IP',
    seoDescription: 'Tailored intellectual property strategies for businesses, startups, and investors in Georgia and internationally. IP portfolio audits, commercialization, licensing, and innovation advisory from Mujiri IP.',
  },
  {
    slug: 'enforcement-anti-counterfeiting',
    title: 'Enforcement & Anti-Counterfeiting',
    intro: 'Effective enforcement is essential to protecting the value of intellectual property rights, brands, innovation, and market reputation. We provide strategic enforcement and anti-counterfeiting services in Georgia and across multiple jurisdictions through our international network of partners and associates.',
    sections: [
      {
        heading: 'Customs Enforcement & Border Measures',
        items: [
          'Customs recordation of trademarks, copyrights, designs, patents, and related IP rights in Georgia',
          'Preparation and filing of customs intervention applications',
          'Coordination with customs authorities and border enforcement agencies',
          'Monitoring and analysis of detained and suspected counterfeit goods',
          'Advisory on destruction, seizure, and enforcement procedures',
        ],
      },
      {
        heading: 'Enforcement & Dispute Resolution',
        items: [
          'Civil, administrative, and related enforcement actions',
          'Representation before courts, administrative authorities, and enforcement bodies',
          'Opposition, cancellation, infringement, and unfair competition proceedings',
          'Cease and desist letters and settlement negotiations',
          'Online and marketplace enforcement strategies',
        ],
      },
      {
        heading: 'Anti-Counterfeiting & Brand Protection',
        items: [
          'Investigation of unauthorized use and counterfeit activity',
          'Monitoring of online platforms, marketplaces, and digital channels',
          'Strategic anti-counterfeiting and enforcement advisory',
          'Coordination of cross-border enforcement actions with foreign associates',
        ],
      },
      {
        heading: 'Strategic Enforcement Advisory',
        items: [
          'Enforcement risk assessment and protection strategies',
          'Customs and enforcement portfolio management',
          'Advisory on evidence collection and enforcement planning',
          'Protection strategies tailored to local and international markets',
        ],
      },
    ],
    outro: 'We help right holders proactively protect and enforce their intellectual property rights while minimizing commercial risks and strengthening brand integrity in national and international markets.',
    seoTitle: 'IP Enforcement & Anti-Counterfeiting Georgia | Brand Protection | Mujiri IP',
    seoDescription: 'Strategic IP enforcement, customs recordation, anti-counterfeiting advisory, and cross-border enforcement in Georgia and internationally. Protect your brands and innovation with Mujiri IP.',
  },
  {
    slug: 'legal-contractual-services',
    title: 'Legal & Contractual Services',
    intro: 'We provide strategic legal and contractual advisory services with a strong focus on intellectual property, technology, innovation, and commercial transactions. Our approach combines business understanding with legal precision to help clients structure secure, practical, and commercially effective agreements that protect their interests and intangible assets.',
    sections: [
      {
        heading: 'Commercial & Business Agreements',
        items: [
          'Commercial, service, distribution, and agency agreements',
          'Supply, manufacturing, and outsourcing agreements',
          'Joint venture, partnership, and collaboration agreements',
          'Confidentiality (NDA) and non-compete agreements',
          'Shareholder and investment-related agreements',
        ],
      },
      {
        heading: 'Intellectual Property & Technology Agreements',
        items: [
          'Trademark, copyright, patent, design, and know-how license agreements',
          'Assignment and transfer of intellectual property rights',
          'Technology transfer and R&D agreements',
          'Software development and SaaS agreements',
          'Franchise and commercialization agreements',
        ],
      },
      {
        heading: 'Digital & Online Business',
        items: [
          'Website terms and conditions',
          'E-commerce and online platform agreements',
          'Privacy policies, cookie policies, and compliance documentation',
          'Digital content, influencer, and online collaboration agreements',
          'AI, technology, and digital business advisory',
        ],
      },
      {
        heading: 'Contract Review, Negotiation & Risk Management',
        items: [
          'Drafting, review, and negotiation of commercial agreements',
          'IP-focused contract audits and risk assessment',
          'Advisory on ownership, commercialization, and exploitation of IP assets',
          'Dispute prevention and contractual enforcement strategies',
        ],
      },
      {
        heading: 'Dispute Resolution & Enforcement',
        items: [
          'Representation in contractual and commercial disputes',
          'Enforcement of contractual and intellectual property rights',
          'Settlement negotiations and legal risk mitigation',
          'Representation before courts and administrative authorities',
        ],
      },
    ],
    outro: 'We help businesses, creators, startups, investors, and international companies structure legally secure and commercially effective relationships while protecting innovation, brands, technology, and business value.',
    seoTitle: 'IP & Commercial Contracts Georgia | Legal Advisory | Mujiri IP',
    seoDescription: 'Drafting and negotiation of IP licenses, technology transfer agreements, NDAs, commercial contracts, and digital compliance documentation in Georgia. Legal advisory from Mujiri IP, Tbilisi.',
  },
  {
    slug: 'litigation-dispute-resolution',
    title: 'Litigation & Dispute Resolution',
    intro: 'We provide strategic representation and dispute resolution services in intellectual property, commercial, and business-related matters across Georgia. Our approach combines legal expertise, business understanding, and practical negotiation strategies aimed at protecting our clients\' rights and commercial interests effectively and efficiently.',
    sections: [
      {
        heading: 'Litigation & Representation',
        items: [
          'Representation before Georgian civil and administrative courts',
          'Intellectual property litigation and enforcement actions',
          'Trademark, patent, design, copyright, and domain name disputes',
          'Unfair competition and infringement proceedings',
          'Administrative appeals and related proceedings before competent authorities',
        ],
      },
      {
        heading: 'Negotiation & Settlement',
        items: [
          'Strategic negotiation and dispute management',
          'Settlement negotiations and pre-litigation advisory',
          'Cease and desist and enforcement communications',
          'Commercial dispute resolution strategies',
        ],
      },
      {
        heading: 'Arbitration & Mediation',
        items: [
          'Representation in arbitration and mediation proceedings',
          'Alternative dispute resolution (ADR) advisory',
          'Cross-border dispute coordination with international partners',
          'Business-oriented dispute management solutions',
        ],
      },
      {
        heading: 'Enforcement & Risk Management',
        items: [
          'Enforcement strategy and legal risk assessment',
          'Evidence collection and infringement analysis',
          'Protection of intellectual property and commercial rights',
          'Coordination of local and international enforcement actions',
        ],
      },
    ],
    outro: 'We help clients resolve disputes strategically while protecting innovation, reputation, commercial interests, and long-term business value.',
    seoTitle: 'IP Litigation & Dispute Resolution Georgia | Mujiri IP',
    seoDescription: 'Strategic IP litigation, dispute resolution, and representation before Georgian courts. Trademark, patent, copyright, and commercial disputes handled by Mujiri IP, Tbilisi.',
  },
  {
    slug: 'government-institutional-consulting',
    title: 'Government & Institutional Consulting',
    intro: 'We provide strategic intellectual property and innovation advisory services for governments, public institutions, universities, research centers, innovation agencies, technology parks, startups, and international organizations. Our services are designed to support the development of modern innovation ecosystems, effective IP management frameworks, and sustainable commercialization strategies.',
    sections: [
      {
        heading: 'Intellectual Property Strategy & Policy',
        items: [
          'Development of national and institutional IP strategies',
          'Strategic advisory on innovation and knowledge commercialization',
          'Drafting and amendment of IP-related legislation and regulations',
          'Development of internal IP policies, guidelines, and compliance frameworks',
          'Preparation of legal and expert opinions on intellectual property matters',
        ],
      },
      {
        heading: 'Universities & Research Institutions',
        items: [
          'Establishment and structuring of Technology Transfer Offices (TTOs)',
          'Development of IP management and commercialization procedures',
          'Advisory on ownership, commercialization, and exploitation of research results',
          'Drafting of internal regulations, policies, and technology transfer documentation',
        ],
      },
      {
        heading: 'Innovation & Startup Ecosystems',
        items: [
          'Strategic advisory for startups and innovation-driven businesses',
          'IP support programs for incubators, accelerators, and innovation hubs',
          'Mentoring and advisory on IP commercialization and investment readiness',
          'Development of startup-oriented IP guidelines and educational materials',
        ],
      },
      {
        heading: 'Training, Expert Support & Capacity Building',
        items: [
          'Professional training programs and workshops',
          'Stakeholder training on trademarks, patents, designs, copyright, and geographical indications',
          'Expert opinions and advisory reports',
          'Capacity building for public institutions, universities, enforcement authorities, and private sector organizations',
          'Conference speaking, seminars, and expert presentations on intellectual property and innovation',
        ],
      },
      {
        heading: 'International Cooperation & Projects',
        items: [
          'Advisory within international development and donor-funded projects',
          'Cross-border IP and innovation consulting',
          'Collaboration with governmental, academic, and international stakeholders',
          'Strategic support for innovation, technology, and creative economy initiatives',
        ],
      },
    ],
    outro: 'We help institutions and organizations build effective intellectual property systems, strengthen innovation capacity, and create sustainable frameworks for the protection and commercialization of knowledge and creativity.',
    seoTitle: 'IP Policy & Institutional Consulting Georgia | Government Advisory | Mujiri IP',
    seoDescription: 'IP strategy and policy advisory for governments, universities, and innovation agencies in Georgia. Technology Transfer Office development, capacity building, and institutional IP frameworks from Mujiri IP.',
  },
  {
    slug: 'ip-education',
    title: 'IP & Education',
    intro: 'We provide intellectual property education, training, and capacity-building services for schools, universities, research institutions, innovation centers, public institutions, and private organizations. Working together with educational and innovation experts, we develop practical and modern IP education programs designed to promote creativity, innovation, entrepreneurship, and awareness of intellectual property rights.',
    sections: [
      {
        heading: 'Educational Programs & Curriculum Development',
        items: [
          'Development of intellectual property education programs',
          'Tailor-made IP courses and training materials',
          'Design of innovation and entrepreneurship-focused educational content',
          'Development of school, university, and institutional IP curricula',
          'Support for integration of IP into academic and innovation programs',
        ],
      },
      {
        heading: 'Training & Academic Activities',
        items: [
          'University lectures and guest teaching',
          'Professional workshops and seminars',
          'Specialized courses on trademarks, patents, designs, copyright, geographical indications, and innovation',
          'Capacity-building programs for teachers, researchers, startups, and public institutions',
          'Training programs tailored to specific industries and sectors',
        ],
      },
      {
        heading: 'Innovation & Awareness',
        items: [
          'Development of IP awareness initiatives and educational campaigns',
          'Advisory on innovation and commercialization education',
          'Support for startup and entrepreneurship education programs',
          'Collaboration with innovation hubs, accelerators, and research centers',
        ],
      },
      {
        heading: 'Expert Support & Consulting',
        items: [
          'Strategic advisory for educational and innovation institutions',
          'Preparation of educational guidelines and policy recommendations',
          'Expert participation in conferences, academic programs, and international projects',
          'Development of customized educational and institutional training strategies',
        ],
      },
    ],
    outro: 'We help institutions, educators, and innovators build strong intellectual property awareness and practical innovation skills through modern, accessible, and strategically designed educational programs.',
    seoTitle: 'IP Education & Training Programs Georgia | WIPO | Mujiri IP',
    seoDescription: 'Intellectual property education, university lectures, professional workshops, and capacity-building programs in Georgia. Modern IP training for institutions, educators, and innovators from Mujiri IP.',
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(s => s.slug === slug);
}
