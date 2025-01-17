import { useState, useEffect, Fragment } from "react";
import { fetchNews } from "../../Utils/fetchNews";

import Loader from "../Elements/Loader";
import Header from "../Elements/Header";
import PopulerCard from "../Elements/PopulerCard";

const Populer = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);

      try {
        const category = "Terbaru";
        const data = await fetchNews(category);

        const topPosts = data.posts
          .slice(0, 3)
          .map((post) => ({ ...post, category: data.category }));

        setPosts(topPosts);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getPosts();
  }, []);

  return (
    <section className="w-full flex flex-col gap-4 lg:gap-8 animate-fade-in">
      <Header title="Berita Terpopuler" />

      <div className="flex flex-col items-center">
        {isLoading && <Loader />}

        <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:space-x-6">
          {posts.map((post, index) => (
            <Fragment key={index}>
              <PopulerCard item={post} index={index} />
              {index < posts.length - 1 && (
                <div className="hidden lg:block w-px h-[100px] bg-[#E0E0E0] flex-shrink-0" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Populer;
