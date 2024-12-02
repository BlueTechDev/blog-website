// pages/index.js
import Link from 'next/link';

const Home = () => {
  const posts = [
    { slug: 'chatbot-basics', title: 'Chatbot Basics', description: 'An introduction to chatbot concepts.' },
    { slug: 'tailwind-tips', title: 'Tailwind Tips', description: 'Styling efficiently with Tailwind CSS.' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-2">
            <Link href={`/${post.slug}`}>
              <a className="text-blue-500 hover:underline">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-600">{post.description}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
