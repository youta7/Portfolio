"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronDown, X } from 'lucide-react'
import { GlobalStyles } from '@mui/material';
import { SiDjango } from "react-icons/si";


const scrollbarStyles = (
  <GlobalStyles
    styles={{
      '*::-webkit-scrollbar': {
        width: '8px',
      },
      '*::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '*::-webkit-scrollbar-thumb': {
        background: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '20px',
      },
      '*::-webkit-scrollbar-thumb:hover': {
        background: 'rgba(255, 255, 255, 0.7)',
      },
    }}
  />
);

interface Skill {
  name: string
  level: number
  icon: string
  description: string
  projects: string[]
}

export  function SkillSection() {
  const [showLevel, setShowLevel] = useState<boolean>(false)
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null)
  const [visibleSkills, setVisibleSkills] = useState<number>(3)

  const skills: Skill[] = [
    { 
      name: "Python", 
      level: 90, 
      icon: SiDjango, 
      description: "Python is a popular, high-level, and versatile programming language known for its clear and readable syntax.",
      projects: ["Machine Learning Project", "Chatbot", "Web Scraper"]
    },
    { 
      name: "Django", 
      level: 85, 
      icon: "nodejs-icon", 
      description: "Django is a high-level Python web framework that makes it easy to build secure and scalable websites.",
      projects: ["API Backend using Django REST Framework", "Blog Website", "Learning Management System"]
    },
    { 
      name: "Keras", 
      level: 90, 
      icon: "⭐", 
      description: "Keras is a user-friendly deep learning library in Python that makes it easy to build, train, and experiment with neural networks.",
      projects: ["Image Classifier", "Sentiment Analysis", "Stock Price Prediction"]
    },
    { 
      name: "Tensorflow", 
      level: 85, 
      icon: "js-icon", 
      description: "TensorFlow is an open-source machine learning framework that helps you build, train, and deploy neural networks and other AI models efficiently on CPUs, GPUs, and even mobile devices.",
      projects: ["Image Segmentation", "Text Classification", "Speech Recognition"]
    },
    { 
      name: "PyTorch", 
      level: 85, 
      icon: "ts-icon", 
      description: "PyTorch is an open-source deep learning framework that makes it easy to build and train neural networks using a flexible, Python-friendly design.",
      projects: ["Time Series Forecasting", "Reinforcement Learning Agent", "Custom Transformer Model"]
    },
    { 
      name: "LLM", 
      level: 80,
      icon: "graphql-icon", 
      description: "An LLM (Large Language Model) is an AI system trained on huge amounts of text so it can understand, generate, and transform human language.",
      projects: ["Chatbot Using an LLM API", "Text Summarizer", "Language Translator"]
    },
    { 
      name: "NLP", 
      level: 80, 
      icon: "python-icon", 
      description: "NLP (Natural Language Processing) is a field of AI that teaches computers to understand, interpret, and generate human language — like reading text, analyzing meaning, and responding in a human-like way.",
      projects: ["Word Frequency Counter", "Chatbot (Rule-based or ML-based)", "Question–Answering System"]
    },
    { 
      name: "Deep Learning", 
      level: 85, 
      icon: "docker-icon", 
      description: "Deep learning is a branch of AI that uses multi-layered neural networks to learn patterns from large amounts of data — allowing machines to recognize images, understand speech, generate text, and make predictions with high accuracy.",
      projects: ["House Price Prediction", "GAN to Generate Images", "Voice Command Recognition"]
    },
    { 
      name: "Machine Learning", 
      level: 85, 
      icon: "docker-icon", 
      description: "Machine learning is a field of AI where computers learn patterns from data and make predictions or decisions without being explicitly programmed. It allows systems to improve automatically through experience.",
      projects: ["Credit Card Fraud Detection", "Sales Forecasting ", "Stock Market Prediction"]
    },
  ]

  const toggleSkillExpansion = (skillName: string) => {
    setExpandedSkill(expandedSkill === skillName ? null : skillName)
  }

  const showMoreSkills = () => {
    setVisibleSkills(prevVisible => Math.min(prevVisible + 3, skills.length))
  }

  const getSkillEmoji = (skillName: string) => {
    const emojiMap: { [key: string]: string } = {
      "Django": "🎄",
      "PyTorch": "⭐",
      "LLM": "🟨",
      "NLP": "🔷",
      "Tensorflow": "⭐",
      "Python": "🎄",
      "Deep Learning": "⚛️",
      "Machine Learning": "⚛️",
      "Keras": "⭐"
    };
    return emojiMap[skillName] || "🔧";
  };

  return (
    <>
      {scrollbarStyles}
    <section id="skills" className="py-24 bg-gradient-to-br from-background to-secondary overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12">
          <motion.h2
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-primary"
          >
            My Skills
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            Here's a collection of my skills with their proficiency levels.
          </motion.p>
          <Button 
            onClick={() => setShowLevel(!showLevel)} 
            className="mb-8 transition-colors duration-300 hover:bg-purple-600"
          >
            {showLevel ? "Hide Levels" : "Show Levels"}
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {skills.slice(0, visibleSkills).map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: index * 0.1, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                  }
                }}
                exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.3 } }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  transition: { duration: 0.3 }
                }}
                className="relative overflow-hidden rounded-lg shadow-xl transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, hsl(${(index * 50) % 360}, 70%, 50%), hsl(${
                    ((index * 50 + 180) % 360)
                  }, 70%, 50%))`,
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-white/10"
                  animate={{ 
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.2, 1],
                  }} 
                  transition={{ 
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                />
                <AnimatePresence>
                  {expandedSkill === skill.name ? (
                    <motion.div
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent max-h-full"
                      style={{
                        backgroundColor: `hsla(${(index * 50) % 360}, 70%, 50%, 0.95)`,
                      }}
                    >
                      <Button 
                        size="sm"
                        className="absolute top-2 right-2 bg-white/20 hover:bg-white/40 transition-colors duration-300 z-10"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSkillExpansion(skill.name);
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <h4 className="text-white font-semibold mb-2 text-2xl">
                        {skill.name} {getSkillEmoji(skill.name)}
                      </h4>
                      <p className="text-white mb-4 text-lg" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                        {skill.description}
                      </p>
                      {showLevel && (
                        <motion.div className="w-full bg-white/30 rounded-full h-4 mb-4 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              backgroundColor: `hsl(${skill.level * 1.2}, 70%, 50%)`,
                              width: `${skill.level}%`,
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </motion.div>
                      )}
                      {showLevel && (
                        <motion.p
                          className="text-white mb-4 font-semibold text-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        >
                          Proficiency: 
                          <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                          >
                            {skill.level}%
                          </motion.span>
                          🚀
                        </motion.p>
                      )}
                      <h5 className="text-white font-semibold mb-2 text-xl">Related Projects 📂:</h5>
                      <ul className="list-none text-white">
                        {skill.projects.map((project, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="mb-2 flex items-center"
                          >
                            <span className="mr-2">🔹</span> {project}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ) : (
                    <motion.div 
                      className="p-6 relative z-10"
                      animate={{ y: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                    >
                      <motion.div
                        className="flex items-center justify-center mb-4"
                        initial={{ opacity: 0, rotate: -180 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        <img src={`/Python.png?height=48&width=48`} alt={skill.name} className="w-12 h-12" />
                      </motion.div>
                      <motion.h3
                        className="text-2xl font-semibold text-white mb-2"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        {skill.name}
                      </motion.h3>
                      {showLevel && (
                        <motion.div
                          className="w-full bg-white/30 rounded-full h-2.5 mb-4 overflow-hidden"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: 0.7, duration: 1 }}
                        >
                          <motion.div
                            className="bg-primary h-2.5 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                          />
                        </motion.div>
                      )}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="mt-4"
                      >
                        <Button 
                          size="sm" 
                          className="group relative overflow-hidden transition-colors duration-300"
                          onClick={() => toggleSkillExpansion(skill.name)}
                          style={{
                            backgroundColor: `hsl(${(index * 50) % 360}, 70%, 50%)`,
                          }}
                        >
                          <span className="relative z-10">
                            {expandedSkill === skill.name ? "Less Details" : "More Details"}
                          </span>
                          <motion.span
                            className="absolute inset-0"
                            initial={{ x: "100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{
                              backgroundColor: `hsl(${((index * 50 + 180) % 360)}, 70%, 50%)`,
                            }}
                          />
                          {expandedSkill === skill.name ? (
                            <X className="ml-2 h-4 w-4 transition-transform group-hover:rotate-90 relative z-10" />
                          ) : (
                            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                          )}
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {visibleSkills < skills.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <Button 
              onClick={showMoreSkills} 
              size="lg" 
              className="group transition-colors duration-300 hover:bg-green-600"
            >
              Show More
              <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
            </Button>
          </motion.div>
        )}
      </motion.div>
    </section>
    </>
  )
}
