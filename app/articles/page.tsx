"use client"

import { motion } from "framer-motion"
import Link from "next/link"

type Article = {
  id: number
  title: string
  summary: string
  date: string
  slug: string
}

const articles: Article[] = [
  {
    id: 1,
    title: "Optimizing AI Model Performance",
    summary: "Techniques and strategies for improving the speed and accuracy of deep learning models.",
    date: "2024-06-01",
    slug: "optimizing-ai-model-performance"
  },
  {
    id: 2,
    title: "Ethical AI: Best Practices",
    summary: "A guide to building responsible and ethical AI systems.",
    date: "2024-05-15",
    slug: "ethical-ai-best-practices"
  },
  // Add more articles here
]

export default function ArticlesPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/40">
      <div className="w-full max-w-5xl mx-auto p-8 bg-background/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-secondary">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-lg"
        >
          Articles
        </motion.h1>
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