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
}

export const products: Product[] = [
  {
    id: "1",
    name: "ONE Sales Workplace",
    role: "Product Manager",
    description: "Web-based platform for retail partners worldwide to support end-to-end sales and business processes for new and used vehicles, as well as Financial Services, across all BMW Group brands.",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop",
    link: "#",
    sector: "Automotive",
    country: "Germany",
    platform: "Web",
    type: "B2B",
  },
  {
    id: "2",
    name: "Unitel",
    role: "Tech Senior Consultant",
    description: "Self-service app for clients to manage their mobile services, enabling users to check consumption, pay invoices, and access promotions.",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=400&fit=crop",
    link: "#",
    sector: "Telecommunications",
    country: "Angola",
    platform: "Web & Mobile",
    type: "B2C",
  },
  {
    id: "3",
    name: "NOS Self-Service App",
    role: "Tech Senior Consultant",
    description: "Self-service mobile app for clients to manage their mobile services — check consumption, pay invoices, purchase data packages, and access promotions.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    link: "#",
    sector: "Telecommunications",
    country: "Portugal",
    platform: "Mobile",
    type: "B2C",
  },
  {
    id: "4",
    name: "HR Tool",
    role: "Tech Consultant",
    description: "Internal HR tool where team members could share projects, fill timesheets, upload certifications, and manage their professional development.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    link: "#",
    sector: "Human Resources",
    country: "Portugal",
    platform: "Web",
    type: "B2B",
  },
];
