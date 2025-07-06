import ServiceDetail from "@/components/service-details";
import { Search } from "lucide-react";

const serviceData = {
  id: "find-back-lost-materials-valuables",
  title: "Find Back Your Lost Materials & Valuables",
  description:
    "Astrologer Shri Chithrabhanu K Poduval is known for finding lost materials, properties, valuables, and anything which can go missing. In this way he has found back gold ornaments worth a total of 44 crores. Money or currency worth 20 lakhs in total. He has found back missing passports, documents, files, cellphones in large numbers in the last 18 years. You can book a session with him to find your lost matters too.",
  icon: Search,
  whatsappMessage:
    "Hi Dr. Poduval, I would like to book a session to find my lost materials/valuables.",
  duration: "45-60 minutes",

  includes: [
    "Detailed analysis of circumstances",
    "Astrological consultation for location guidance",
    "Timing predictions for recovery",
    "Remedial measures for quick recovery",
    "Spiritual guidance and mantras",
    "Follow-up support until recovery",
    "Success rate tracking",
    "Personalized recovery strategies",
  ],
  process: [
    "Provide details about the lost item",
    "Share when and where it was last seen",
    "Dr. Poduval performs astrological analysis",
    "Guidance on probable location and direction",
    "Remedial measures and mantras",
    "Timing predictions for recovery",
    "Continuous support until found",
    "Follow-up consultation if needed",
  ],
  benefits: [
    "High success rate in recovery",
    "Expert guidance from 18+ years experience",
    "Proven track record with valuable items",
    "Spiritual and practical approach",
    "Continuous support until recovery",
    "Cost-effective compared to loss value",
    "Peace of mind and hope restoration",
    "Guidance for prevention in future",
  ],
  suitableFor: [
    "Lost gold ornaments and jewelry",
    "Missing money and currency",
    "Lost important documents",
    "Missing passports and certificates",
    "Lost mobile phones and electronics",
    "Missing property papers",
    "Lost keys and accessories",
    "Any valuable missing items",
  ],
  images: [
    {
      src: "/src/assets/find_back_lost_metrial_1.jpeg",
      alt: "Success stories of recovered valuables",
    },
    {
      src: "/src/assets/find_back_lost_metrial_2.jpeg",
      alt: "Testimonials from satisfied clients",
    },
  ],
  achievements: [
    "Gold ornaments worth ₹44 crores recovered",
    "Money/currency worth ₹20 lakhs found",
    "Hundreds of documents and passports recovered",
    "Numerous cellphones and electronics found",
    "18+ years of successful practice",
    "Thousands of satisfied clients",
  ],
};

export default function FindBackYourLostMaterialsValuables() {
  return <ServiceDetail service={serviceData} />;
}