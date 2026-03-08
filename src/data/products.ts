export interface Product {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  link: string;
  sector: string;
  country: string;
  platform: string;
  type: "B2B" | "B2C";
  highlights: string[];
  impact: string[];
  detailedDescription: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "ONE Sales Workplace",
    role: "Product Manager",
    description: "The single entry point for direct and indirect sales across BMW, MINI, BMW Motorrad, and Rolls-Royce retail partners worldwide — supporting end-to-end business processes for new cars, used cars, and Financial Services.",
    detailedDescription: "ONE Sales Workplace gives its users a seamless experience through all involved business processes in the context of the sales of new car, used car and Financial Services for B2B and B2C customers, no matter in which module, context or on which device, so users can fully focus on providing the best customer experience in class.",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop",
    link: "#",
    sector: "Automotive",
    country: "Germany",
    platform: "Web",
    type: "B2B",
    highlights: [
      "Led cross-functional coordination between business, development, and design teams across Munich and CTW",
      "Owned user stories and drove broader business and design decisions autonomously",
      "Implemented and scaled CTW's agile working model, streamlining communication and improving project efficiency",
      "Facilitated integration of Munich's team into a new working model, influencing the broader domain and unit",
      "Managed complex interpersonal dynamics to build a cohesive, collaborative team environment",
    ],
    impact: [
      "Reduced time spent on sales workflow by 25%",
      "Standardised sales application integration processes",
      "Global platform serving retail partners across all BMW Group brands",
    ],
  },
  {
    id: "2",
    name: "Unitel",
    role: "Tech Senior Consultant",
    description: "Self-service app enabling Unitel's millions of subscribers in Angola to manage their mobile services, check consumption, pay invoices, and access promotions — across web and mobile.",
    detailedDescription: "Led the infrastructure migration and platform upgrade on OutSystems, covering both the SelfCare and Field Service Management (FSM) modules. Ensured continuity of service while modernising the technical foundation for Angola's largest telecom provider.",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=400&fit=crop",
    link: "#",
    sector: "Telecommunications",
    country: "Angola",
    platform: "Web & Mobile",
    type: "B2C",
    highlights: [
      "Managed infrastructure migration and platform upgrade on OutSystems",
      "Delivered SelfCare and Field Service Management (FSM) modules",
      "Collaborated with stakeholders across geographies to align technical and business goals",
      "Ensured service continuity during complex migration processes",
    ],
    impact: [
      "Serving millions of subscribers across Angola",
      "Modernised technical foundation for the country's largest telecom",
      "Unified SelfCare and FSM into a single platform experience",
    ],
  },
  {
    id: "3",
    name: "NOS Self-Service App",
    role: "Tech Senior Consultant",
    description: "Mobile-first self-service app for NOS customers in Portugal to manage their mobile services — from checking consumption and paying invoices to purchasing data packages and accessing exclusive promotions.",
    detailedDescription: "Participated in the project from inception to initial go-live, over a span of 10 months. Structured and applied Agile methodologies and developed using the OutSystems platform. Collaborated with stakeholders to gather requirements and ensure alignment with business goals.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    link: "#",
    sector: "Telecommunications",
    country: "Portugal",
    platform: "Mobile",
    type: "B2C",
    highlights: [
      "Drove the project from inception to initial go-live in 10 months",
      "Structured and applied Agile methodologies across the team",
      "Developed core features using the OutSystems platform",
      "Coordinated with cross-functional teams to deliver on time and within scope",
    ],
    impact: [
      "Launched a new digital channel for one of Portugal's top telecoms",
      "Enabled self-service for consumption, invoices, data packages, and promotions",
      "Inception to go-live in 10 months",
    ],
  },
  {
    id: "4",
    name: "HR Tool",
    role: "Tech Consultant",
    description: "Internal HR platform where team members share project portfolios, fill timesheets, upload certifications, and manage their professional development — streamlining people operations at Deloitte.",
    detailedDescription: "Built an internal HR tool to centralise team management processes, enabling consultants to track their project history, manage timesheets, and maintain professional certifications in a single platform.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    link: "#",
    sector: "Human Resources",
    country: "Portugal",
    platform: "Web",
    type: "B2B",
    highlights: [
      "Designed and built the platform from scratch as a first consulting project",
      "Centralised project sharing, timesheets, and certification management",
      "Created a streamlined experience for consultants to manage their professional development",
    ],
    impact: [
      "Replaced manual processes with a unified digital platform",
      "Improved visibility into team capacity and project allocation",
      "Adopted internally across Deloitte Portugal teams",
    ],
  },
];
