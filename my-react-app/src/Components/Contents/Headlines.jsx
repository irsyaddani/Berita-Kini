import { useState, useEffect } from "react";
import { fetchNews } from "../../Utils/fetchNews";
import { Link } from "react-router";
import {
  ArrowUpRight,
  CalendarEvent,
  ChevronLeft,
  ChevronRight,
} from "react-bootstrap-icons";

import dateFormat from "../../Utils/dateFormat";
import Loader from "../Elements/Loader";

const Headline = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);

      try {
        const categories = [
          "Nasional",
          "Internasional",
          "Ekonomi",
          "Olahraga",
          "Teknologi",
        ];

        const allPosts = [];

        for (const category of categories) {
          const data = await fetchNews(category);

          if (data.posts.length > 0) {
            allPosts.push({ ...data.posts[0], category: data.category });
          }
        }

        setPosts(allPosts);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getPosts();
  }, []);

  const handlePageChange = (page) => {
    const totalPages = Math.ceil(posts.length / itemsPerPage);

    if (page < 1) {
      setCurrentPage(totalPages);
    } else if (page > totalPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(page);
    }
  };

  const currentItem =
    posts.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    )[0] || {};
  return (
    <section className="w-full lg:h-[492.43px] flex flex-col space-y-11 animate-fade-in">
      {isLoading && <Loader />}

      <span className="inline lg:hidden text-body-md-semibold text-[#526071] col-span-12">
        Headline
      </span>

      <figure className="grid grid-cols-5 lg:grid-cols-12 gap-5">
        <div className="order-2 lg:order-1 col-span-5 flex flex-col">
          <figcaption className="space-y-2 lg:space-y-4 flex flex-col">
            <span className="hidden lg:inline text-body-md-semibold text-[#526071]">
              Headline
            </span>

            <h1 className="text-2xl lg:text-4xl font-bold text-[#333333] lg:leading-[46px]">
              {currentItem?.title || "Loading..."}
            </h1>

            <p className="h-[100px] text-body-md text-[#4F4F4F] line-clamp-5">
              {currentItem.description}
            </p>

            <div className="flex items-center gap-2 text-[#526071]">
              <CalendarEvent className="w-4 h-4" />
              <span className="text-body-sm-medium">
                {dateFormat(currentItem.pubDate)}
              </span>
            </div>

            <Link
              to={`/berita-kini/post/${encodeURIComponent(currentItem.title)}`}
            >
              <button className="flex items-center gap-2">
                <span className="text-body-md-medium text-primary-500 hover:font-bold">
                  Baca Selengkapnya
                </span>

                <ArrowUpRight className="w-4 h-4 text-primary-500" />
              </button>
            </Link>
          </figcaption>
        </div>

        <img
          src={currentItem.thumbnail}
          alt="headline-thumbnail"
          className="order-1 col-span-5 lg:col-span-7 w-full h-[417px] bg-gray-300 rounded-[20px]"
        />
      </figure>

      <div className="flex justify-center items-center space-x-4">
        <button onClick={() => handlePageChange(currentPage - 1)}>
          <ChevronLeft color="#828282" />
        </button>

        <span className="w-[31.43px] h-[31.43px] flex justify-center items-center">
          {currentPage}
        </span>

        <span className="w-[31.43px] h-[31.43px] flex justify-center items-center">
          dari
        </span>

        <span className="w-[31.43px] h-[31.43px] flex justify-center items-center">
          {Math.ceil(posts.length / itemsPerPage)}
        </span>

        <button onClick={() => handlePageChange(currentPage + 1)}>
          <ChevronRight color="#828282" />
        </button>
      </div>
    </section>
  );
};

export default Headline;
