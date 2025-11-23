import { notFound } from "next/navigation";

const articles = [
  {
    id: 1,
    title: "Optimizing AI Model Performance",
    summary: "Techniques and strategies for improving the speed and accuracy of deep learning models.",
    date: "2024-06-01",
    slug: "optimizing-ai-model-performance",
    image: "/Magika.png",
    thumbnail: "/Magika.png",
    content: `\
      ## Optimizing AI Model Performance\n\n      In this article, we explore techniques for improving deep learning models...\n\n      (Full content here)`
  },
  {
    id: 2,
    title: "Ethical AI: Best Practices",
    summary: "A guide to building responsible and ethical AI systems.",
    date: "2024-05-15",
    slug: "ethical-ai-best-practices",
    image: "/Codex.png",
    thumbnail: "/Codex.png",
    content: `\
      ## Ethical AI: Best Practices\n\n      Building responsible AI systems requires...\n\n      (Full content here)`
  }
];

export function generateStaticParams() {
  return [
    { slug: "optimizing-ai-model-performance" },
    { slug: "ethical-ai-best-practices" },
    // Add more slugs here as you add articles
  ];
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find(a => a.slug === params.slug);
  if (!article) return notFound();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/40">
      <div className="relative w-full max-w-3xl mx-auto bg-background/80 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-secondary">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover rounded-xl mb-8"
        />
        <div className="absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-gradient-to-r from-primary to-secondary" />
        <h1 className="text-5xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-lg">
          {article.title}
        </h1>
        <div className="flex justify-center items-center gap-2 mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-xs font-semibold">
            {article.date}
          </span>
        </div>
        <article className="prose prose-lg prose-invert text-foreground mx-auto">
          {article.content.split('\n').map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </article>
      </div>
    </main>
  );
}
