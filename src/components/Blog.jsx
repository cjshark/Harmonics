import { motion } from "framer-motion";
import { FaCalendarAlt, FaUserAlt, FaComments, FaTag } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ Add this

const blogPosts = [
  {
    title: "The Future of Music Gear",
    date: "April 10, 2025",
    author: "Harmonics Team",
    comments: 8,
    excerpt:
      "Explore how innovative tech is shaping the sound and feel of modern instruments, and what that means for the next generation of musicians.",
    tags: ["Technology", "Instruments", "Innovation"],
    thumbnail: "image/future-gear.png",
  },
  {
    title: "How to Choose Your First Guitar",
    date: "March 27, 2025",
    author: "Jane Strings",
    comments: 15,
    excerpt:
      "Picking your first guitar is a big step—learn what to look for, what to avoid, and how to find a guitar that truly fits your style.",
    tags: ["Beginner", "Guitar", "Tips"],
    thumbnail: "image/first-guitar.png",
  },
  {
    title: "Top 5 Microphones for Studio Recording",
    date: "March 10, 2025",
    author: "Mike Waves",
    comments: 12,
    excerpt:
      "We tested dozens of mics and narrowed it down to the best five options that deliver crisp sound, versatility, and durability.",
    tags: ["Studio", "Gear", "Recording"],
    thumbnail: "image/mic.png",
  },
];

export default function Blog() {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white py-20 px-6 md:px-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-4">
          From the Harmonics Blog
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Stay updated with the latest trends, tips, gear reviews, and inspiring
          stories from the world of music.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: false }}
            className="bg-zinc-900 border border-red-500 rounded-xl overflow-hidden shadow-md hover:shadow-red-500/30 transition-shadow flex flex-col"
          >
            <div className="h-48 bg-zinc-800 overflow-hidden">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center text-red-400 text-sm gap-4 mb-3 flex-wrap">
                <div className="flex items-center gap-1">
                  <FaCalendarAlt /> <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaUserAlt /> <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaComments /> <span>{post.comments} comments</span>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-2 hover:underline cursor-pointer">
                {post.title}
              </h3>

              <p className="text-gray-400 mb-4 leading-relaxed flex-grow">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 text-xs text-red-400 mb-4">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 bg-zinc-800 px-2 py-1 rounded-full hover:bg-red-500 hover:text-white transition-colors"
                  >
                    <FaTag /> {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() =>
                  navigate(
                    `/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`
                  )
                }
                className="self-start mt-auto px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all transform hover:scale-105"
              >
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
