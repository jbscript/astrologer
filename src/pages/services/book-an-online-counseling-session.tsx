import ServiceDetail from "@/components/service-details";
import { Heart } from "lucide-react";

const serviceData = {
  id: "family-horoscope-reading",
  title: "Family Astrological Counseling",
  description:
    "Transform family relationships and guide your loved ones towards positive change through Dr. Poduval's specialized astrological counseling. Using birth chart analysis and karma resolution techniques, help family members change their mindset, improve obedience, and receive life-changing guidance by understanding their karmic patterns and planetary influences.",
  icon: Heart,
  whatsappMessage:
    "Hi Dr. Poduval, I would like to book a Family Astrological Counseling session.",
  duration: "75-90 minutes",
  price: "₹2,800",
  includes: [
    "Family member's birth chart analysis",
    "Karmic pattern identification",
    "Behavioral transformation guidance",
    "Mind influence and persuasion techniques",
    "Haunting karma resolution methods",
    "Planetary remedies for attitude change",
    "Communication strategy recommendations",
    "Spiritual cleansing and protection rituals",
  ],
  process: [
    "Provide birth details of the family member",
    "Dr. Poduval analyzes their karmic influences",
    "Identify behavioral patterns and obstacles",
    "Create personalized transformation strategy",
    "Provide specific guidance techniques",
    "Recommend remedial measures and rituals",
    "Deliver actionable counseling plan",
  ],
  benefits: [
    "Positive mindset transformation in family members",
    "Improved obedience and respect",
    "Resolution of haunting karmic issues",
    "Better family harmony and understanding",
    "Effective communication and influence",
    "Spiritual protection and cleansing",
    "Long-term behavioral improvements",
    "Peaceful and loving family environment",
  ],
  suitableFor: [
    "Parents dealing with difficult children",
    "Families facing behavioral challenges",
    "Those seeking to influence family members positively",
    "Resolving karmic family conflicts",
    "Improving family member's life choices",
    "Dealing with stubborn or rebellious relatives",
    "Seeking spiritual guidance for family healing",
    "Those wanting to bring positive change in loved ones",
  ],
};

export default function FamilyHoroscopeReadingPage() {
  return <ServiceDetail service={serviceData} />;
}