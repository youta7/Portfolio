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
    date: "2023-10-14",
    slug: "Checking-the-quality-of-materials",
    image: "/5.png",
    thumbnail: "/5.png",
    content: `Checking the quality of materials just got easier with a new AI tool`
  },
  {
    id: 6,
    title: "A voice for tech workers",
    summary: "The reach of artificial intelligence technologies across all parts of society is steadily growing, but so is the awareness of how they can negatively impact human rights. As 2019 draws to a close, the trajectory of technological progress defined by big technology companies is meeting resistance.",
    date: "2019-12-10",
    slug: "A-voice-for-tech-workers",
    image: "/6.png",
    thumbnail: "/6.png",
    content: `A voice for tech workers`
  }
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