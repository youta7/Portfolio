"use client"

import { motion } from "framer-motion"
import Link from "next/link"

type Article = {
  id: number
  title: string
  summary: string
  date: string
  slug: string
  image: string
  thumbnail: string
  content: string
}

const articles: Article[] = [
  {
    id: 1,
    title: "New AI agent learns to use CAD to create 3D objects from sketches",
    summary: "The virtual VideoCAD tool could boost designers’ productivity and help train engineers learning computer-aided design.",
    date: "2025-11-19",
    slug: "New-AI-agent",
    image: "/1.png",
    thumbnail: "/1.png",
    content: `New AI agent learns to use CAD to create 3D objects from sketches`
  },
  {
    id: 2,
    title: "The cost of thinking",
    summary: "MIT neuroscientists find a surprising parallel in the ways humans and new AI models solve complex problems.",
    date: "2025-11-19",
    slug: "The-cost-of-thinking",
    image: "/2.png",
    thumbnail: "/2.png",
    content: `The cost of thinking`
  },
  {
    id: 3,
    title: "MIT Energy Initiative launches Data Center Power Forum",
    summary: "MIT faculty and MITEI member company experts address power demand from data centers.",
    date: "2025-11-07",
    slug: "MIT-Energy-Initiative",
    image: "/3.png",
    thumbnail: "/3.png",
    content: `MIT Energy Initiative launches Data Center Power Forum`
  },
  {
    id: 4,
    title: "Creating AI that matters",
    summary: "How the MIT-IBM Watson AI Lab is shaping AI-sociotechnical systems for the future.",
    date: "2025-11-07",
    slug: "Creating-AI-that-matters",
    image: "/4.png",
    thumbnail: "/4.png",
    content: `Creating AI that matters`
  },
  {
    id: 5,
    title: "Checking the quality of materials just got easier with a new AI tool",
    summary: "Acting as a “virtual spectrometer,” SpectroGen generates spectroscopic data in any modality, such as X-ray or infrared, to quickly assess a material’s quality.",
    date: "2025-10-14",
    slug: "Checking-the-quality-of-materials",
    image: "/5.png",
    thumbnail: "/5.png",
    content: `Checking the quality of materials just got easier with a new AI tool`
  },
  {
    id: 6,
    title: "A voice for tech workers",
    summary: "The reach of artificial intelligence technologies across all parts of society is steadily growing, but so is the awareness of how they can negatively impact human rights. As 2019 draws to a close, the trajectory of technological progress defined by big technology companies is meeting resistance.",
    date: "2025-08-10",
    slug: "A-voice-for-tech-workers",
    image: "/6.png",
    thumbnail: "/6.png",
    content: `A voice for tech workers`
  },
  {
    id: 7,
    title: "Deceiving possibilities",
    summary: "Robots are making a transition into human environments, where they can directly interact with us, in shops, hospitals, schools and more. Transparency about robots’ capabilities and level of autonomy should be integrated into the design from the start.",
    date: "2025-07-12",
    slug: "Deceiving-possibilities",
    image: "/7.png",
    thumbnail: "/7.png",
    content: `Deceiving possibilities`
  },
  {
    id: 8,
    title: "Of conferences and conversations in AI",
    summary: "The organizers of Cognitive Computational Neuroscience, a relatively new AI-themed meeting held recently in Berlin, are dedicated to encouraging informal interactions and conversations to tackle the challenge of bridging scientific cultures.",
    date: "2025-05-09",
    slug: "Of-conferences-and-conversations-in-AI",
    image: "/8.png",
    thumbnail: "/8.png",
    content: `Of conferences and conversations in AI`
  },
  {
    id: 9,
    title: "Return of cybernetics",
    summary: "Brain–machine interfaces were envisioned already in the 1940s by Norbert Wiener, the father of cybernetics. The opportunities for enhancing human capabilities and restoring functions are now quickly expanding with a combination of advances in machine learning, smart materials and robotics.",
    date: "2025-03-11",
    slug: "Return-of-cybernetics",
    image: "/9.png",
    thumbnail: "/9.png",
    content: `Return of cybernetics`
  },
  {
    id: 10,
    title: "Call to action for robotics",
    summary: "Robots can relieve humans of dangerous tasks. With the pandemic making physical contact potentially dangerous due to the risk of contagion, a new focus for robotic applications in healthcare has come into view.",
    date: "2025-01-13",
    slug: "Call-to-action-for-robotics",
    image: "/10.png",
    thumbnail: "/10.png",
    content: `Call to action for robotics`
  },
  {
    id: 11,
    title: "Algorithms to live by",
    summary: "The challenge of practically integrating an ethical and social approach in the development and implementation of AI needs to be urgently addressed, to help restore public trust in technology.",
    date: "2024-10-14",
    slug: "Algorithms-to-live-by",
    image: "/11.png",
    thumbnail: "/11.png",
    content: `Algorithms to live by`
  },
  {
    id: 12,
    title: "Next chapter in artificial writing",
    summary: "OpenAI released a beta version of its language model, GPT-3. As artificial writing permeates our lives, the challenge is how to think clearly about what it is and what impact it could have on society.",
    date: "2024-08-12",
    slug: "Next-chapter-in-artificial-writing",
    image: "/12.png",
    thumbnail: "/12.png",
    content: `Next chapter in artificial writing`
  },
  {
    id: 13,
    title: "Technology can not fix this",
    summary: "AI tools used in society often enhance inequality, affecting Black lives disproportionally. Addressing this issue will require more than technological solutions. Researchers and experts in the field are overwhelmingly white and need to engage and listen to those experiencing the harm.",
    date: "2024-07-15",
    slug: "Technology-can-not-fix-this",
    image: "/13.png",
    thumbnail: "/13.png",
    content: `Technology can not fix this`
  },
  {
    id: 14,
    title: "Artificial intelligence in a crisis needs ethics with urgency",
    summary: "Artificial intelligence tools can help save lives in a pandemic. However, the need to implement technological solutions rapidly raises challenging ethical issues. We need new approaches for ethics with urgency, to ensure AI can be safely and beneficially used in the COVID-19 response and beyond.",
    date: "2024-06-22",
    slug: "Artificial-intelligence-in-a-crisis-needs-ethics-with-urgency",
    image: "/14.png",
    thumbnail: "/14.png",
    content: `Artificial intelligence in a crisis needs ethics with urgency`
  },
  {
    id: 15,
    title: "Finding a role for AI in the pandemic",
    summary: "Expectations are high for AI to help fight COVID-19. But before AI tools can make an impact, global collaboration and high-quality data and model sharing are needed.",
    date: "2024-03-16",
    slug: "Finding-a-role-for-AI-in-the-pandemic",
    image: "/15.png",
    thumbnail: "/15.png",
    content: `Finding a role for AI in the pandemic`
  },
  {
    id: 16,
    title: "Machine Learning for COVID-19 needs global collaboration and data-sharing",
    summary: "The COVID-19 pandemic poses a historical challenge to society. The profusion of data requires machine learning to improve and accelerate COVID-19 diagnosis, prognosis and treatment. However, a global and open approach is necessary to avoid pitfalls in these applications.",
    date: "2024-01-10",
    slug: "Machine-Learning-for-COVID-19-needs-global-collaboration-and-data-sharing",
    image: "/16.png",
    thumbnail: "/16.png",
    content: `Machine Learning for COVID-19 needs global collaboration and data-sharing`
  },
]

export default function ArticlesPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/40">
      <div className="w-full max-w-7xl mx-auto mt-20 p-8 bg-background/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-secondary">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map(article => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="group bg-gradient-to-br from-secondary/10 to-background rounded-xl shadow-lg p-7 border border-secondary/30 hover:scale-[1.03] hover:shadow-2xl transition-all duration-200 cursor-pointer"
            >
              <Link href={`/articles/${article.slug}`} className="block">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-2xl font-bold mb-3 text-primary group-hover:underline group-hover:text-secondary transition-colors">
                  {article.title}
                </h2>
                <p className="text-muted-foreground mb-6 text-base">{article.summary}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-xs font-semibold">
                  {article.date}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}