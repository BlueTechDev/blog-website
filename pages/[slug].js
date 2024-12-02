// pages/[slug].js
import { useRouter } from 'next/router';

const BlogPost = () => {
  const { slug } = useRouter().query;

  // Placeholder data
  const post = {
    title: 'Sample Blog Post',
    content: 'This is a sample blog post for the slug: ' + slug,
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
