import { type ReactNode, useEffect, useState } from "react";
import { get } from "./util/http";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import fetchingImage from './assets/data-fetching.png';
import ErrorMessage from "./components/ErrorMessage";

type RawDataBlogPosts = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function App() {
  // states with useState
  const [fetchedPosts, setFetchPosts] = useState<BlogPost[]>(); // type of BlogPost array or undefined since no init value is added
  const [isFetching, setIsFetching] = useState(false); // init value is false, so this will automatically be a boolean
  const [error, setError] = useState<string>(); // type of string or undefined since no unit value is added

  useEffect(() => {
    async function fetchPost() {
      setIsFetching(true);
      try {
        const data = await get("https://jsonplaceholder.typicode.com/posts") as RawDataBlogPosts[]; // convert the unknown to this type
        // blogPosts is of type BlogPost array
        // therefore we need to map the data to match the BlogPost type
        const blogPosts: BlogPost[] = data.map(rawPost => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body
          }
        });
        setFetchPosts(blogPosts) // adding the mapped data to the fetchPosts state
      } catch(error) {
        // error is of type unknown, here we type cast it as Error type
        setError((error as Error).message)
      }
      
      // let this me outside, no matter if we got error or not, is is no longer fetching data
      setIsFetching(false);
      
    }
    fetchPost();
  }, []) // make sure this only calls once, when loaded
  
  // content will be a dynamic placeholder of diffrent kinds of html elements
  let content: ReactNode;
  if(fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />
  }

  if(isFetching) {
    content = <p className="loading-fallback">fetching posts</p>
  }

  if(error) [
    content = <ErrorMessage text={error} />
  ]

  return (
    <main>
      <img src={fetchingImage} alt="an image for data fetching" />
      {content}
    </main>
  )
}

export default App;
