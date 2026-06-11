import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import { BlogPageClient, type BlogArticle } from "@/components/BlogPageClient";

export const metadata: Metadata = {
  title: "Blog - Matiq Labs",
  description: "Ideas on AI automation, operations, workflows, and building faster businesses with intelligent systems.",
};

const articles: BlogArticle[] = [
  {
    title: "How AI Automation Removes Hidden Operational Drag",
    slug: "/blog/ai-automation-operational-drag",
    category: "AI Automation",
    date: "June 2026",
    readTime: "6 min read",
    excerpt:
      "Most teams do not lose time because of one big problem. They lose it through repeated checking, copying, chasing, and follow-ups that quietly slow the business down.",
    image: "/images/blog/operational-drag.png",
    featured: true,
  },
  {
    title: "Why Businesses Need AI Inside the Workflow, Not Beside It",
    slug: "/blog/ai-inside-the-workflow",
    category: "Operations",
    date: "June 2026",
    readTime: "7 min read",
    excerpt:
      "AI creates real value when it becomes part of how work moves - capturing inputs, routing decisions, flagging exceptions, and keeping execution moving.",
    image: "/images/blog/ai-inside-workflow.png",
    featured: true,
  },
  {
    title: "What Makes a Workflow Ready for AI?",
    slug: "/blog/workflow-ready-for-ai",
    category: "Workflow Design",
    date: "June 2026",
    readTime: "5 min read",
    excerpt:
      "Before automation, the workflow needs structure. Here is how to identify where AI can create real operational impact.",
    featured: false,
  },
  {
    title: "AI Agents vs Workflow Automation: What Should Businesses Build First?",
    slug: "/blog/ai-agents-vs-workflow-automation",
    category: "AI Systems",
    date: "June 2026",
    readTime: "6 min read",
    excerpt:
      "Not every business problem needs an agent. Sometimes the fastest ROI comes from automating the repetitive workflow first.",
    featured: false,
  },
  {
    title: "The Future of Operations Is Smaller Teams With More Leverage",
    slug: "/blog/future-of-operations-ai-leverage",
    category: "Business Operations",
    date: "June 2026",
    readTime: "4 min read",
    excerpt:
      "AI will not just reduce manual work. It will change how teams scale output without scaling headcount.",
    featured: false,
  },
  {
    title: "From Spreadsheets to Systems: The Next Step for Growing Businesses",
    slug: "/blog/spreadsheets-to-systems",
    category: "Digital Operations",
    date: "June 2026",
    readTime: "5 min read",
    excerpt:
      "Spreadsheets work until they become the business process. AI systems help teams move from manual coordination to reliable execution.",
    featured: false,
  },
];

function publicImageExists(src?: string) {
  if (!src) return false;
  return existsSync(join(process.cwd(), "public", src.replace(/^\//, "")));
}

export default function Page() {
  const preparedArticles = articles.map((article) => ({
    ...article,
    hasImage: publicImageExists(article.image),
  }));

  return <BlogPageClient articles={preparedArticles} />;
}
