import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Globe,
  Mail,
} from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  category: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: <Github className="w-5 h-5" />,
    color: "hover:bg-gray-100",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: <Linkedin className="w-5 h-5" />,
    color: "hover:bg-blue-50",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: <Twitter className="w-5 h-5" />,
    color: "hover:bg-sky-50",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: <Instagram className="w-5 h-5" />,
    color: "hover:bg-pink-50",
  },
  {
    name: "Website",
    url: "https://example.com",
    icon: <Globe className="w-5 h-5" />,
    color: "hover:bg-green-50",
  },
  {
    name: "Email",
    url: "mailto:hello@example.com",
    icon: <Mail className="w-5 h-5" />,
    color: "hover:bg-orange-50",
  },
];

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Best Developer Award",
    description:
      "Recognized for outstanding contribution to open source projects",
    imageUrl: "/placeholder.svg?height=300&width=400",
    date: "2024",
    category: "Professional",
  },
  {
    id: 2,
    title: "Hackathon Winner",
    description: "First place in the annual tech innovation hackathon",
    imageUrl: "/placeholder.svg?height=300&width=400",
    date: "2023",
    category: "Competition",
  },
  {
    id: 3,
    title: "Conference Speaker",
    description:
      "Keynote speaker at the International Web Development Conference",
    imageUrl: "/placeholder.svg?height=300&width=400",
    date: "2023",
    category: "Speaking",
  },
  {
    id: 4,
    title: "Open Source Contributor",
    description: "Major contributions to popular JavaScript frameworks",
    imageUrl: "/placeholder.svg?height=300&width=400",
    date: "2022",
    category: "Open Source",
  },
  {
    id: 5,
    title: "Team Leadership",
    description: "Successfully led a team of 10 developers on a major project",
    imageUrl: "/placeholder.svg?height=300&width=400",
    date: "2022",
    category: "Leadership",
  },
  {
    id: 6,
    title: "Innovation Award",
    description:
      "Awarded for developing an innovative solution that improved efficiency by 40%",
    imageUrl: "/placeholder.svg?height=300&width=400",
    date: "2021",
    category: "Innovation",
  },
];

export function Works() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Social Media Links */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Connect With Me
            </h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                variant="outline"
                size="lg"
                className={`flex items-center gap-2 ${social.color} transition-colors`}
                asChild
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${social.name} profile`}
                >
                  {social.icon}
                  <span className="hidden sm:inline">{social.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements Gallery */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Achievements</h2>
          <p className="text-muted-foreground mt-2">
            A collection of milestones and accomplishments throughout my career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={achievement.imageUrl || "/placeholder.svg"}
                  alt={achievement.title}
                  className="object-cover transition-transform hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-black">
                    {achievement.date}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg leading-tight">
                      {achievement.title}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {achievement.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
