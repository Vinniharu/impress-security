export const services = [
  {
    slug: "manned-guarding",
    title: "Manned Guarding",
    summary:
      "Well-trained, disciplined security personnel deployed across corporate, residential, industrial, and institutional sites.",
    lead:
      "Guards are trained in access control, observation, reporting, and client relations, ensuring professionalism at every point of contact.",
    image: "/staff/pic1.jpeg",
    deployBullets: [
      "Corporate offices",
      "Residential estates",
      "Industrial facilities",
      "Construction sites",
      "Educational institutions",
      "Healthcare facilities",
      "Commercial premises",
    ],
  },
  {
    slug: "executive-vip-protection",
    title: "Executive & VIP Protection",
    image: "/staff/pic2.jpeg",
    summary:
      "Discreet, close-protection for executives, high-net-worth individuals, public figures, diplomats, and visiting dignitaries.",
    lead:
      "Protection is delivered without intrusion into personal or professional life — quiet, intelligent, anticipatory.",
    serviceBullets: [
      "Personal protection officers",
      "Secure movement planning",
      "Advance reconnaissance",
      "Threat avoidance and situational awareness",
    ],
    deployBullets: [
      "Executives",
      "High-net-worth individuals",
      "Public figures",
      "Diplomats",
      "Visiting dignitaries",
    ],
  },
  {
    slug: "event-crowd-security",
    title: "Event & Crowd Security",
    image: "/staff/pic3.jpeg",
    summary:
      "Security planning and execution for corporate events, conferences, cultural gatherings, and high-profile functions.",
    lead:
      "We integrate planning, on-the-ground command, and coordination with relevant authorities for safe, orderly proceedings.",
    serviceBullets: [
      "Crowd control",
      "Access management",
      "Emergency response coordination",
      "Liaison with relevant authorities where required",
    ],
    deployBullets: [
      "Corporate events",
      "Cultural and social gatherings",
      "Political or high-profile functions",
      "Conferences and exhibitions",
    ],
  },
  {
    slug: "background-checks-vetting",
    title: "Background Checks & Vetting",
    image: "/staff/pic6.jpeg",
    summary:
      "Discreet, thorough background investigations focused on credibility, integrity, and risk exposure.",
    lead:
      "Every engagement is handled with strict confidentiality and reported with clarity.",
    deployBullets: [
      "Employment screening",
      "Domestic staff vetting",
      "Business partners",
      "Tenants and associates",
    ],
  },
  {
    slug: "private-investigation-surveillance",
    title: "Private Investigation & Surveillance",
    image: "/staff/pic5.jpeg",
    summary:
      "Professional investigative services conducted within legal and ethical boundaries, reported clearly and professionally.",
    lead:
      "We work quietly, gather facts methodically, and present findings you can act on.",
    serviceBullets: [
      "Surveillance and monitoring",
      "Asset tracing",
      "Corporate investigations",
      "Domestic and personal investigations",
      "Fraud and misconduct inquiries",
    ],
  },
  {
    slug: "security-consultancy-risk-assessment",
    title: "Security Consultancy & Risk Assessment",
    image: "/staff/pic4.jpeg",
    summary:
      "Practical, realistic advisory that helps clients identify vulnerabilities before they become incidents.",
    lead:
      "Our consultancy is tailored to your environment — not a template, not a sales pitch.",
    serviceBullets: [
      "Security audits",
      "Risk and threat assessments",
      "Security system recommendations",
      "Crisis preparedness advisory",
    ],
  },
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}
