import ServiceDetail from "@/components/service-details";
import { HeartHandshake } from "lucide-react";

const serviceData = {
  id: "family-horoscope-reading",
  title: "Expert Match Finding & Marriage Consultation",
  description:
    "Shri Chithrabhanu K Poduval is an expert not just in usual match making or match finding for marriages but, he is quite popular in the way of a man who explains the character, behaviour, mindset, thoughts, priorities, fate, health and prospects while finding a proper match at the time of marriage. His deep analysis ensures perfect compatibility beyond traditional horoscope matching.",
  icon: HeartHandshake,
  whatsappMessage:
    "Hi Dr. Poduval, I would like to book a Match Finding session with you.",
  duration: "90-120 minutes",
  price: "₹4,500",
  includes: [
    "Complete character and behavior analysis",
    "Mindset and thought pattern evaluation",
    "Life priorities and values assessment",
    "Health and wellness prospects",
    "Career and financial compatibility",
    "Fate and destiny alignment check",
    "Family background compatibility",
    "Detailed written compatibility report",
  ],
  process: [
    "Provide birth details of both individuals",
    "Dr. Poduval creates comprehensive personality profiles",
    "Deep analysis of character traits and behavior patterns",
    "Evaluation of mindset, thoughts, and priorities",
    "Assessment of health, fate, and future prospects",
    "Compatibility scoring across all dimensions",
    "Detailed consultation on findings",
    "Match recommendation with complete reasoning",
  ],
  benefits: [
    "Perfect match based on deep compatibility",
    "Clear understanding of partner's character",
    "Insight into behavior patterns and mindset",
    "Health and prosperity forecasting",
    "Long-term marital success assurance",
    "Family harmony and understanding",
    "Conflict prevention and resolution strategies",
    "Confidence in marriage decision making",
  ],
  suitableFor: [
    "Parents seeking ideal matches for children",
    "Individuals wanting deep compatibility analysis",
    "Those prioritizing character over superficial factors",
    "Families seeking long-term marital success",
    "People wanting comprehensive partner evaluation",
    "Those seeking expert astrological guidance",
    "Individuals facing multiple match proposals",
    "Anyone wanting marriage decision clarity",
  ],
};

export default function FamilyHoroscopeReadingPage() {
  return <ServiceDetail service={serviceData} />;
}