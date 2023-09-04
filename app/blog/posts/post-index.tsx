import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from './layout';
import { Config } from '../../../config';

interface Post {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
}

interface PostIndexProps {
  limit?: number;
}

const PostIndex: React.FC<PostIndexProps> = ({ limit = 5 }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsRes = await fetch(
          `${Config.apiUrl}/wp/v2/posts?per_page=${limit}`
        );
        const fetchedPosts: Post[] = await postsRes.json();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [limit]);

  return (
    <Layout>
      <section>
        <h3>Archive</h3>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/post?slug=${post.slug}&apiRoute=post`}
                as={`/post/${post.slug}`}
              >
                {/* <a>{post.title.rendered}</a>  */}
                {/* Cannot use with nextjs */}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default PostIndex;
