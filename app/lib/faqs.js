import { siteMeta } from "./siteMeta";
import { services } from "./services";
import { lagosAreas } from "./seo";

const serviceList = services.map((s) => s.title).join(", ");

export const homeFaqs = [
  {
    q: "Is Impress Security Services a licensed security company?",
    a: `Yes. ${siteMeta.legalName} is a ${siteMeta.nscdcCategory} licensed private guard company operating under the Private Guard Companies Act (licence ${siteMeta.nscdc}), and is registered with the Corporate Affairs Commission (${siteMeta.rc}).`,
  },
  {
    q: "What security services do you offer in Lagos and Nigeria?",
    a: `We provide ${serviceList} for corporate organisations, estates, industrial sites and private individuals.`,
  },
  {
    q: "Which areas do you cover?",
    a: `Our head office is in Ojodu Berger, Lagos. We deploy across Lagos — including ${lagosAreas.slice(0, -1).join(", ")} and ${lagosAreas.at(-1)} — and across Nigeria on request.`,
  },
  {
    q: "How are your security guards vetted and trained?",
    a: "Every officer is vetted and documented before deployment, then trained through structured programmes: daily parades, physical conditioning, emergency response and tactical drills, backed by standard operating procedures for each site.",
  },
  {
    q: "How do I hire security guards or request a quote?",
    a: `Call ${siteMeta.phones[0]}, email ${siteMeta.email}, or use the contact form on our website. We start with a confidential consultation, assess your site or situation, then recommend a solution and quote.`,
  },
  {
    q: "Are your security operations available 24/7?",
    a: `Yes. Our operations run 24 hours a day, 7 days a week, with a dedicated operations and emergency dispatch line on ${siteMeta.phones[1]}.`,
  },
];

export const servicesFaqs = [
  {
    q: "Which security service is right for my business or home?",
    a: "Tell us what you need to protect. We assess your site, people and risks, then recommend the right mix of manned guarding, protection, vetting or advisory — and quote discreetly.",
  },
  {
    q: "Do you provide security guards for residential estates and private homes?",
    a: "Yes. Our manned guarding covers corporate, residential and industrial sites, including estates, private residences, offices and warehouses.",
  },
  {
    q: "Can you provide VIP and executive protection in Nigeria?",
    a: "Yes. We provide discreet close protection for executives, high-net-worth individuals and visiting dignitaries, planned around each itinerary.",
  },
  {
    q: "Will my enquiry be kept confidential?",
    a: "Always. Every enquiry and engagement is handled under strict non-disclosure, in line with our client confidentiality statement.",
  },
];
