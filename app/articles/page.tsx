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
    slug: "optimizing-ai-model-performance",
    image: "/1.png",
    thumbnail: "/1.png",
    content: `\
      ## Optimizing AI Model Performance\n\n      In this article, we explore techniques for improving deep learning models...\n\n      (Full content here)`
  },
  {
    id: 2,
    title: "The cost of thinking",
    summary: "MIT neuroscientists find a surprising parallel in the ways humans and new AI models solve complex problems.",
    date: "2025-11-19",
    slug: "ethical-ai-best-practices",
    image: "/2.png",
    thumbnail: "/2.png",
    content: `\
      ## Ethical AI: Best Practices\n\n      Building responsible AI systems requires...\n\n      (Full content here)`
  },
  {
    id: 3,
    title: "MIT Energy Initiative launches Data Center Power Forum",
    summary: "MIT faculty and MITEI member company experts address power demand from data centers.",
    date: "2025-11-07",
    slug: "ai-in-healthcare-transforming-patient-care",
    image: "/3.png",
    thumbnail: "/3.png",
    content: `\
      ## AI in Healthcare: Transforming Patient Care\n\n      Artificial intelligence is changing the landscape of healthcare...\n\n      (Full content here)`
  },
  {
    id: 4,
    title: "Creating AI that matters",
    summary: "How the MIT-IBM Watson AI Lab is shaping AI-sociotechnical systems for the future.",
    date: "2025-11-07",
    slug: "the-future-of-robotics",
    image: "/4.png",
    thumbnail: "/4.png",
    content: `\
      ## The Future of Robotics\n\n      Robotics technology is evolving rapidly...\n\n      (Full content here)`
  },
  {
    id: 5,
    title: "Checking the quality of materials just got easier with a new AI tool",
    summary: "Acting as a “virtual spectrometer,” SpectroGen generates spectroscopic data in any modality, such as X-ray or infrared, to quickly assess a material’s quality.",
    date: "2023-10-14",
    slug: "machine-learning-in-finance",
    image: "/5.png",
    thumbnail: "/5.png",
    content: `\
      ## Machine Learning in Finance\n\n      Financial institutions are leveraging machine learning...\n\n      (Full content here)`
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