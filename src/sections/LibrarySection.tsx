import { motion } from 'framer-motion';


interface Article {
  title: string;
  description?: string;
  image?: string;
  category: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    title: 'Zeo.ai: Your 24/7 Medical Companion with Visual AI Analysis',
    description: 'Experience the future of healthcare with Zeo.ai - an intelligent medical assistant that combines real-time video consultations, visual symptom analysis, and conversational AI to provide instant medical guidance whenever you need it.',
    image: '/images/blog-1.jpg',
    category: 'PRODUCT',
    featured: true,
  },
  {
    title: 'How AI Video Consultations Are Revolutionizing Healthcare Access',
    image: '/images/iterate-ui.jpg',
    category: 'HEALTHCARE',
  },
  {
    title: 'Visual Symptom Recognition: The Next Frontier in Medical AI',
    image: '/images/blog-2.jpg',
    category: 'TECHNOLOGY',
  },
  {
    title: 'Understanding Your Health: When to Seek Emergency Care vs. Home Treatment',
    image: '/images/blog-3.jpg',
    category: 'HEALTH TIPS',
  },
  {
    title: 'HIPAA Compliance and Data Security in AI-Powered Healthcare',
    image: '/images/evaluate-ui.jpg',
    category: 'SECURITY',
  },
];

const LibrarySection = () => {
  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);

  return (
    <section className="bg-background pt-24 pb-24 border-t border-stone-200 border-dashed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#1c1c1c]"
          >
            Health Resources
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-stone-600 text-sm md:text-base leading-relaxed md:max-w-md ml-auto"
          >
            Discover insights on AI-powered healthcare, visual symptom analysis, telemedicine best practices, and expert medical guidance to help you make informed health decisions.
          </motion.p>
        </div>

        {/* Articles Grid Layout */}
        <div className="border border-stone-200 border-dashed">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-stone-200 divide-dashed">

            {/* LEFT: Featured Article (Full Height) */}
            {featuredArticle && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative p-6 sm:p-8 hover:bg-[#fbfbf9] transition-colors"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden bg-stone-100 mb-8 border border-stone-100">
                  {featuredArticle.image ? (
                    <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full bg-stone-200" />
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  <div className="text-xs font-semibold tracking-wider text-stone-500 uppercase">{featuredArticle.category}</div>
                  <h3 className="text-2xl sm:text-3xl font-medium text-[#1c1c1c] leading-tight group-hover:underline decoration-1 underline-offset-4">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-sm mt-2">
                    {featuredArticle.description}
                  </p>
                </div>
              </motion.div>
            )}


            {/* RIGHT: Grid 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-stone-200 divide-dashed">
              {otherArticles.map((article, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group block p-6 hover:bg-[#fbfbf9] transition-colors border-b sm:border-b-0 border-stone-200 border-dashed last:border-b-0 sm:[&:nth-child(2n)]:border-b-0 sm:[&:nth-child(3)]:border-t sm:[&:nth-child(4)]:border-t"
                >
                  <div className="aspect-video overflow-hidden bg-stone-100 mb-4 border border-stone-100">
                    {article.image ? (
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full bg-stone-200" />
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="text-[10px] font-semibold tracking-wider text-stone-500 uppercase">{article.category}</div>
                    <h3 className="text-sm font-medium text-[#1c1c1c] leading-snug group-hover:underline decoration-1 underline-offset-2">
                      {article.title}
                    </h3>
                  </div>
                </motion.a>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default LibrarySection;
