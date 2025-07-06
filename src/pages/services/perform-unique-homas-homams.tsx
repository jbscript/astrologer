import ServiceDetail from "@/components/service-details";
import { Flame } from "lucide-react";

const serviceData = {
  id: "family-horoscope-reading",
  title: "Sacred Homaas & Hawans",
  description:
    "Astrologer Chithrabhanu K Poduval has initiated the highest number of Homaas and Hawans in the World. His unique Homaas feature the greatest expert Thanthiks and Karmis from Kerala across the country and all over the globe. These powerful sacred fire ceremonies can rectify life challenges and bring profound transformation, performed at your own residence.",
  icon: Flame,
  whatsappMessage:
    "Hi Dr. Poduval, I would like to book a Sacred Homaa ceremony.",
  duration: "2-8 hours (varies by ceremony)",
  price: "₹5,000 - ₹50,000 (depends on type)",
  includes: [
    "Expert Thanthiks and Karmis from Kerala",
    "All sacred materials and offerings",
    "Proper Vedic rituals and mantras",
    "Personalized ceremony selection",
    "Complete setup at your residence",
    "Post-ceremony guidance and instructions",
    "Prasadam and sacred ash distribution",
    "Detailed explanation of the ceremony",
  ],
  process: [
    "Consultation to determine suitable Homaa type",
    "Schedule ceremony date and time",
    "Arrangement of expert Thanthiks and Karmis",
    "Preparation of sacred materials",
    "Setup of fire altar at your residence",
    "Conduct of complete Vedic ceremony",
    "Distribution of Prasadam and blessings",
    "Post-ceremony care instructions",
  ],
  benefits: [
    "Life rectification and transformation",
    "Removal of negative energies and obstacles",
    "Spiritual purification and protection",
    "Health, wealth, and prosperity enhancement",
    "Resolution of specific life challenges",
    "Divine blessings and grace",
    "Karmic cleansing and healing",
    "Family harmony and peace",
  ],
  suitableFor: [
    "Aghora Homa - Spiritual transformation",
    "MahaSudrashna Homaa - Protection and healing",
    "Sathyanarayana Homaa - Prosperity and peace",
    "Ashtakalasha Chandi Homaa - Power and victory",
    "Vaarahi Baglamukhi Homaa - Enemy defeat",
    "Prathyankara Homaa - Obstacle removal",
    "ShatruSamharam Homaa - Protection from enemies",
    "Ashtadhravya Ganapati Homaa - Success and wisdom",
    "SanthanaGopala Homaa - Childbirth and family",
    "Shoolini Bhuvaraha Homaa - Health and vitality",
    "Dhoomawati Homaa - Spiritual awakening",
    "Chandika Homa - Divine feminine power",
    "Sarpa Dosha Nivaarana Homaa - Serpent affliction removal",
    "Naagara Oota Homaa - Naga worship and blessings",
    "Dhanwanthari Homaa - Health and healing",
    "Uddhishta Siddhi Homaa - Spiritual accomplishment",
  ],
};

export default function FamilyHoroscopeReadingPage() {
  return <ServiceDetail service={serviceData} />;
}