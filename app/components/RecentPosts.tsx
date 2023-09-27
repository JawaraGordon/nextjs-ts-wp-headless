import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { Config } from '../../config';

interface Post {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
}

interface RecentPostsProps {
  limit?: number;
}

const RecentPosts: React.FC<RecentPostsProps> = ({ limit = 5 }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsRes = await fetch(
          `${Config.apiUrl}/wp/v2/posts?per_page=1&orderby=date&order=desc`

        );
        const fetchedPosts: Post[] = await postsRes.json();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [limit]);

  console.log("posts",posts)

  return (
    
      <section>
        <h3 className="pt-8 pb-2">Recent Posts</h3>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/post?slug=${post.slug}&apiRoute=post`}
                as={`/post/${post.slug}`}
              >
                {/* Cannot use <a> with nextjs */}
                <div>{post.title.rendered}</div> 
              </Link>
            </li>
          ))}
        </ul>
      </section>
  
  );
};

export default RecentPosts;
 