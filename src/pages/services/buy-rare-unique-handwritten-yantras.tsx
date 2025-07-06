import ServiceDetail from "@/components/service-details";
import { Zap } from "lucide-react";

const serviceData = {
  id: "buy-rare-unique-handwritten-yantras",
  title: "Buy Rare Unique Handwritten Yantras",
  description:
    "Shri Chithrabhanu K Poduval is known for his preparations of unique Vedic traditional handwritten Yanthras. His yanthraas are quite popular and used all over the globe in different nations for purposes of protecting oneself, his family or dwelling area from all kinds of undesirable facts. To inform straightaway, he prepares and dispatches the highest number of yanthras in the world. There different kinds of handwritten Vedic thanthrik yanthras which are quite popular and also he has found more than a 100 yanthras himself which protects his clients all over the globe. Yanthras are also used for devotional purposes too.",
  icon: Zap,
  whatsappMessage:
    "Hi Dr. Poduval, I would like to purchase handwritten Yantras.",
  duration: "Custom preparation time",
  price: "Contact for pricing",
  includes: [
    "MahaSudarshan Yanthra",
    "MahaShoolini Yanthra", 
    "MahaMrithunjaya Yanthra",
    "Bhadrakali Yanthra",
    "Vaarahi Yanthra",
    "Matsya Yanthra",
    "Kubera yanthra",
    "Mahalakshmi yanthra",
    "LakshiKubera Yanthra",
    "Siddhivinaya Yanthra",
    "Subramanya Yanthra",
    "Hanuman Yanthra",
    "ShriRama Swami Yanthra",
    "Jagannath Yanthra",
    "Tripurasundari Yanthra",
    "Bagulamukhi Yanthra",
    "LokaVashya Yanthra",
    "Dhana Aakarshana Yanthra",
    "ShriVenkateshwara Yanthra",
    "Padmawathi Yanthra",
    "Dhoomawathi Yanthra",
    "BhuVaraaha Yanthra",
    "Dhanwanthari Yanthra",
    "Vaastu yanthra",
    "ShriChakra Yanthra",
    "NagaPreethi SarpaPreethi Yanthra",
    "Vimaladevi Yanthra",
    "SriVidhya Yanthra"
  ],
  process: [
    "Choose your desired Yanthra from the available options",
    "Contact Dr. Poduval for pricing and availability",
    "Provide your specific requirements and purpose",
    "Dr. Poduval handwrites the Yanthra with traditional methods",
    "Quality check and energization process",
    "Secure packaging and worldwide dispatch",
    "Receive your authentic handwritten Yanthra",
    "Follow the provided installation and usage guidelines"
  ],
  benefits: [
    "Protection from negative energies and undesirable influences",
    "Spiritual and devotional enhancement",
    "Family and dwelling area protection",
    "Authentic Vedic traditional preparation",
    "Handwritten by renowned expert Dr. Poduval",
    "Used globally with proven effectiveness",
    "Custom preparation for specific needs",
    "Worldwide shipping available"
  ],
  suitableFor: [
    "Individuals seeking spiritual protection",
    "Families wanting to protect their homes",
    "Devotional and worship purposes",
    "Protection from negative influences",
    "Spiritual practitioners and enthusiasts",
    "Those seeking traditional Vedic remedies",
    "Collectors of authentic spiritual artifacts",
    "Anyone needing specific Yanthra benefits"
  ],
};

export default function BuyRareUniqueHandwrittenYantras() {
  return <ServiceDetail service={serviceData} />;
}