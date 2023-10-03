import { useState } from 'react';
import { Config } from '../../config';

interface PostData {
  title: string;
  author: string|number;
  content: string;
}

async function getAuthorIdByName(authorName: string): Promise<number | null> {
  const response = await fetch(`${Config.apiUrl}/wp/v2/users?search=${authorName}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch author by name.');
  }

  const users = await response.json();

  console.log("users",users)

  // Assuming the API returns an array and the first user is our match.
  return users && users.length > 0 ? users[0].id : null;
}
const BlogPostForm: React.FC = () => {
  const [postData, setPostData] = useState<PostData>({
    title: '',
    author: '',
    content: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPostData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Fetch the ID of the author

    console.log(postData, postData.author)

    const authorToString = postData.author.toString()

    const authorId = await getAuthorIdByName(authorToString);

    console.log("authorId",authorId)
    
    if (!authorId) {
      console.error('Author not found');
      return;
    }
  
    // Send POST request to WordPress REST API with the author ID
    const response = await fetch(`${Config.apiUrl}/wp/v2/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include authentication headers if necessary
      },
      body: JSON.stringify({
        title: postData.title,
        content: postData.content,
        author: authorId,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log('Post created!', data);
      // You can add more logic here, like clearing the form or displaying a success message.
    } else {
      console.error('Error creating post:', data.message);
    }
  };

  return (
    <form className="block text-sm font-medium text-slate-700" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={postData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={postData.author}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          value={postData.content}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div>
        <button type="submit">Create Post</button>
      </div>
    </form>
  );
};

export default BlogPostForm;
