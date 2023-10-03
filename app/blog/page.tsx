"use client"

import React from 'react';
import Posts from './posts';
import PostIndex from '../blog/posts/post-index';
import Link from 'next/link';


// const posts = [
//     { id: 1, slug: 'post-1', title: 'First Post' },
//     { id: 2, slug: 'post-2', title: 'Second Post' },
//     { id: 3, slug: 'post-3', title: 'Third Post' },
//     { id: 4, slug: 'post-4', title: 'Fourth Post' },
//     { id: 5, slug: 'post-5', title: 'Fifth Post' },
//     { id: 6, slug: 'post-6', title: 'Sixth Post' },
//     { id: 7, slug: 'post-7', title: 'Seventh Post' },
//     { id: 8, slug: 'post-8', title: 'Eighth Post' },
//     { id: 9, slug: 'post-9', title: 'Ninth Post' },
//     { id: 10, slug: 'post-10', title: 'Tenth Post' },
//   ];


  

export default function Blog() {
  return (
    <>
      {/* <Posts posts={posts} /> */}
     
      <PostIndex/>
      <div className="pt-8 pb-2">
        <Link href={`/blog/posts`}><h2>New Post</h2></Link>
        </div>
      <div>
      </div>
    </>
  );
}
