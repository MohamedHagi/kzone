import React from 'react'
import '../mashable.css';
import { CircularProgress } from '@material-ui/core';

/**
* @author
* @function Header
**/

const Header = ({ posts }) => {

  const reversePosts = posts.slice().reverse();

  const latestPost = reversePosts[0];

  const recentPosts = reversePosts.slice(1, 4);

  return (
    <div>
      {posts.length > 1 ? (
        <div className="max-w-9xl mx-auto" >
          <div className="relative flex justify-center">
            <a className="relative block w-full h-full lg:h-112 overflow-hidden" href={`/blogpost/${latestPost._id}`}>
              <div className="static w-full transform lg:absolute lg:-translate-y-12">
                <img className="w-full" src={latestPost.selectedFile} sizes="(max-width: 1536px) 100vw, 1536px" width="1536" height="863" />
              </div>
            </a>
            <div className="absolute z-10 bottom-0 pl-8 pr-4 w-full -mb-24 sm:-mb-20 md:-mb-10 lg:-mb-12 xl:-mb-16 xl:px-8">
              <div className="w-full max-w-7xl mx-auto border-t border-gray-100 accent-vertical accent-vertical-primary-300 accent-cut accent-cut-primary-400 relative bg-white p-4 lg:pl-8 lg:pr-16 lg:py-8">
                <a className="group" href={`/blogpost/${latestPost._id}`}>
                  <h2 className="leading-tight uppercase font-sans block text-primary-400 font-regular text-sm group-hover:text-secondary-300">
                    {latestPost.category}
                  </h2>
                  <h1 className="block font-sans leading-tight font-bold text-primary-400 text-2xl lg:text-4xl group-hover:text-secondary-300 mt-2 lg:mt-4">
                    {latestPost.title}
                  </h1>
                </a>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden accent-cut bg-primary-400 pt-36 sm:pt-32 pb-12 text-white z-0 -mt-1 md:pt-24 md:px-0 lg:-mt-4 lg:pt-28 xl:-mt-0">

            <div className="max-w-8xl flex flex-col mx-auto lg:flex-row px-8">
              {recentPosts.map((post, id) => {
                return (
                  <>
                    <div className="flex-col lg:mx-8 lg:w-1/3" key={id}>
                      <a className="group" href={`/blogpost/${post._id}`}>
                        <span className="block text-white leading-tight uppercase font-sans block text-sm font-regular group-hover:text-accent">
                          {post.category}
                        </span>
                        <span className="block font-sans text-white text-2xl leading-8 font-bold mt-4 group-hover:text-accent">
                          {post.title}
                        </span>

                      </a>
                    </div>
                    <hr className="border border-secondary-300 mx-auto block my-8 w-20 lg:w-0 lg:h-20 lg:mx-8" />
                  </>

                )
              })}
            </div>
          </div>
        </div>
      ) : (

          <CircularProgress />

        )}
    </div>


  )

}

export default Header