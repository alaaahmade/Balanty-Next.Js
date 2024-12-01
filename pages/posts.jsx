/* eslint-disable @typescript-eslint/no-unused-vars */

import { Fragment } from 'react';
import AllPosts from '../components/Posts/AllPosts'

const DUMMY_POSTS = [
  {
    title: 'Getting Started With NextJs',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is a the React framework for production - it makes building fullstack apps and sites a breeze and ships with build-in SSR.',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs'
  },
  {
    title: 'Getting Started With NextJs2',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is a the React framework for production - it makes building fullstack apps and sites a breeze and ships with build-in SSR.',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs2'
  },
  {
    title: 'Getting Started With NextJs3',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is a the React framework for production - it makes building fullstack apps and sites a breeze and ships with build-in SSR.',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs3'
  },
  {
    title: 'Getting Started With NextJs4',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is a the React framework for production - it makes building fullstack apps and sites a breeze and ships with build-in SSR.',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs4'
  },
  {
    title: 'Getting Started With NextJs4',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is a the React framework for production - it makes building fullstack apps and sites a breeze and ships with build-in SSR.',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs4'
  }
]

const Home = () => {

  return (
    <Fragment>
      <AllPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
};

export default Home;
