import Link from 'next/link';

interface Post {
  id: number;
  slug: string;
  title: string;
}

interface BlogProps {
  posts: Post[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <ul>
      <li>
        
      <Link href={`/blog/posts`}><h2>Blog Posts</h2></Link>
      </li>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Blog;
