import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle, Star } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-2 mb-6">
              <MessageCircle className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-orange-500">
                Get in Touch
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contact <span className="text-orange-500">Dr. Poduval</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to discover your destiny? Connect with Dr. Shri
              Chittarabhanu K Poduval for authentic Vedic astrology
              consultations and spiritual guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center border-orange-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Call Us
                </h3>
                <p className="text-gray-600 mb-2">Talk to our Astrologers</p>
                <p className="text-orange-500 font-medium">+1800 326 3264</p>
              </CardContent>
            </Card>

            <Card className="text-center border-orange-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Email Us
                </h3>
                <p className="text-gray-600 mb-2">Send us your queries</p>
                <p className="text-orange-500 font-medium">
                  support@astrologerpoduval.com
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-orange-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Visit Us
                </h3>
                <p className="text-gray-600 mb-2">Payyanur, Kerala</p>
                <p className="text-orange-500 font-medium">
                  World Hub of Astrology
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-orange-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Consultation Hours
                </h3>
                <p className="text-gray-600 mb-2">9:00 AM - 6:00 PM</p>
                <p className="text-orange-500 font-medium">
                  Monday to Saturday
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              {/* Google Map */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.742857142857!2d75.19444444444444!3d12.097777777777777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a7e1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sPayyanur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dr. Poduval's Location in Payyanur, Kerala"
                ></iframe>
              </div>

              <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-100">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Getting Here
                </h4>
                <p className="text-gray-600 text-sm">
                  Payyanur is well-connected by road and rail. The nearest
                  airport is Mangalore (80km) or Calicut (120km). Local
                  transportation is readily available from the railway station
                  and bus stand.
                </p>
              </div>
            </div>

            {/* Address & Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit Our Location
              </h2>

              {/* Address Details */}
              <Card className="mb-8 border-orange-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Dr. Poduval's Astrology Center
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Payyanur, Kannur District
                        <br />
                        Kerala, India - 670307
                        <br />
                        Near Ashamanjaka Temple
                        <br />
                        World Hub of Astrology
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-orange-500" />
                      <span className="text-sm font-medium text-gray-700">
                        Landmark:
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Located in the sacred town of Payyanur, renowned globally
                      as the world hub of astrology, blessed by the divine
                      presence of Lord Ganesha and ancient temple traditions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
