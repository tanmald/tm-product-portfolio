export interface Product {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  link: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "TaskFlow",
    role: "Lead Product Manager",
    description: "A project management tool that streamlines team collaboration with smart task prioritization and real-time updates.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: "2",
    name: "HealthPulse",
    role: "Senior PM",
    description: "A health monitoring platform connecting patients with providers through intuitive dashboards and predictive analytics.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: "3",
    name: "EduSpark",
    role: "Product Manager",
    description: "An adaptive learning platform that personalizes education paths using machine learning and engagement data.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: "4",
    name: "ShopSmart",
    role: "Associate PM → PM",
    description: "An e-commerce discovery engine that helps users find products through conversational search and smart recommendations.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    link: "#",
  },
];
