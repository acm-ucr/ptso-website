import { StaticImageData } from "next/image";
import Art from "@/public/assets/about/therapyTypes/art.webp";
import Blocks from "@/public/assets/about/therapyTypes/blocks.webp";
import Lungs from "@/public/assets/about/therapyTypes/lungs.webp";
import Masks from "@/public/assets/about/therapyTypes/masks.webp";
import Music from "@/public/assets/about/therapyTypes/music.webp";
import Radiation from "@/public/assets/about/therapyTypes/radiation.webp";
import Ring from "@/public/assets/about/therapyTypes/ring.webp";
import TalkingHead from "@/public/assets/about/therapyTypes/talkingHead.webp";
import Weight from "@/public/assets/about/therapyTypes/weight.webp";

export interface TherapyType {
  name: string;
  image: StaticImageData;
  alt: string;
  color: string;
}

export interface TherapyDescription {
  description: string;
  image: StaticImageData;
  alt: string;
  color: string;
}

export const therapyTypes: TherapyType[] = [
  {
    name: "Marriage & Family",
    image: Ring,
    alt: "Wedding rings icon",
    color: "bg-ptso-pink-secondary",
  },
  {
    name: "Physical",
    image: Weight,
    alt: "Weight lifting icon",
    color: "bg-ptso-blue-accent",
  },
  {
    name: "Occupational",
    image: Blocks,
    alt: "Building blocks icon",
    color: "bg-ptso-purple-primary",
  },
  {
    name: "Respiratory",
    image: Lungs,
    alt: "Lungs icon",
    color: "bg-ptso-blue-accent",
  },
  {
    name: "Radiation",
    image: Radiation,
    alt: "Radiation symbol icon",
    color: "bg-ptso-pink-secondary",
  },
  {
    name: "Art",
    image: Art,
    alt: "Art palette icon",
    color: "bg-ptso-blue-accent",
  },
  {
    name: "Speech-Language",
    image: TalkingHead,
    alt: "Talking head icon",
    color: "bg-ptso-purple-primary",
  },
  {
    name: "Music",
    image: Music,
    alt: "Music notes icon",
    color: "bg-ptso-blue-accent",
  },
  {
    name: "Counseling",
    image: Masks,
    alt: "Theater masks icon",
    color: "bg-ptso-pink-secondary",
  },
];

export const therapyDescriptions: TherapyDescription[] = [
  {
    description: "MFT focuses on improving relationships by addressing conflicts, communication breakdowns, and emotional challenges within couples and families. Therapists help clients navigate life transitions, resolve misunderstandings, and strengthen their connections by fostering healthier communication patterns and emotional support systems.",
    image: Ring,
    alt: "Wedding rings icon",
    color: "bg-ptso-pink-secondary"
  },
  {
    description: "Physical therapy helps individuals recover from injuries, surgeries, or medical conditions that affect movement and function. Through targeted exercises, stretching, and hands-on techniques, physical therapists work to restore strength, flexibility, and mobility, enabling patients to regain independence and reduce pain.",
    image: Weight,
    alt: "Weight lifting icon",
    color: "bg-ptso-blue-accent",
  },
  {
    description: "Occupational therapy focuses on helping individuals perform daily activities (such as dressing, cooking, or working) after an injury, illness, or disability. Therapists use adaptive techniques, assistive devices, and personalized strategies to improve fine motor skills, cognitive function, and overall independence.",
    image: Blocks,
    alt: "Building blocks icon",
    color: "bg-ptso-purple-primary",
  },
  {
    description: "Respiratory therapists assist individuals with breathing disorders, such as asthma, COPD, and post-surgical respiratory complications. They provide treatments like oxygen therapy, ventilator support, and breathing exercises to help patients manage their condition and improve lung function.",
    image: Lungs,
    alt: "Lungs icon",
    color: "bg-ptso-blue-accent",
  },
  {
    description: "Radiation therapy is a medical treatment that uses targeted high-energy radiation to shrink or eliminate cancer cells. Radiation therapists work with oncologists to deliver precise treatments while minimizing damage to healthy tissue, helping patients manage and fight cancer effectively.",
    image: Radiation,
    alt: "Radiation symbol icon",
    color: "bg-ptso-pink-secondary",
  },
  {
    description: "Art therapy uses creative expression to help individuals explore emotions, cope with trauma, and improve mental well-being. Through drawing, painting, sculpture, or other artistic mediums, clients gain insight into their thoughts and feelings, making it a powerful tool for emotional healing.",
    image: Art,
    alt: "Art palette icon",
    color: "bg-ptso-blue-accent",
  },
  {
    description: "Speech-language therapy helps individuals with speech, language, voice, and swallowing disorders. Therapists work with people of all ages to improve communication skills, correct speech impediments, and assist with conditions such as aphasia, stuttering, or developmental delays.",
    image: TalkingHead,
    alt: "Talking head icon",
    color: "bg-ptso-purple-primary",
  },
  {
    description: "Music therapy uses sound, rhythm, and melody to support emotional, cognitive, and physical healing. It is especially effective for individuals with anxiety, dementia, autism, or trauma, as it engages different parts of the brain to enhance memory, reduce stress, and improve communication.",
    image: Music,
    alt: "Music notes icon",
    color: "bg-ptso-blue-accent",
  },
  {
    description: "Counseling provides emotional support and guidance for individuals dealing with stress, anxiety, depression, grief, or life challenges. Counselors help clients process emotions, develop coping strategies, and improve their mental well-being through structured conversations and therapeutic interventions.",
    image: Masks,
    alt: "Theater masks icon",
    color: "bg-ptso-pink-secondary",
  },
];
