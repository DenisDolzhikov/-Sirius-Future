import { Suspense } from "react";
import { Await, Link, json, useLoaderData } from "react-router-dom";
import { Preloader } from "../../components/preloader/Preloader";

const PaymentPage = () => {
  const { posts } = useLoaderData();

  return (
    <div>
      <h1>
        PaymentPage
      </h1>

      <Suspense fallback={<Preloader />}>
        <Await resolve={posts}>
          {
            (resolvedPosts) => (
              <>
                {
                  resolvedPosts.map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                      <li>{post.title}</li>
                    </Link>
                  ))
                }
              </>
            )
          }
        </Await>
      </Suspense>
    </div>
  )
}

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  return res.json();
}

const blogLoader = async () => {
  const posts = await getPosts();

  if (!posts.length) {
    throw json({message: 'Not Found', reason: 'Wrong url'}, {status: 404});
  }

  return { posts }
}

export { PaymentPage, blogLoader }