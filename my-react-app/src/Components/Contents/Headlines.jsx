import { useState, useEffect } from "react";
import { fetchNews } from "../../Utils/fetchNews";
import dateFormat from "../../Utils/dateFormat";
import Loader from "../Elements/Loader";

import { ArrowUpRight, CalendarEvent } from "react-bootstrap-icons";

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

  const currentItem = posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )[0];

  return (
    <section className="w-full lg:h-[492.43px] flex flex-col justify-center content-start items-baseline gap-5 lg:gap-0 animate-fade-in">
      {isLoading && <Loader />}

      <span className="inline lg:hidden text-body-md-semibold text-[#526071] col-span-12">
        Headline
      </span>

      <figure className="grid grid-cols-5 lg:grid-cols-12 gap-5">
        <div className="order-2 lg:order-1 col-span-5 flex flex-col">
          <figcaption className="space-y-2 lg:space-y-4">
            <span className="hidden lg:inline text-body-md-semibold text-[#526071]">
              Headline
            </span>

            <h1 className="text-2xl lg:text-4xl font-bold text-[#333333] lg:leading-[46px]">
              {/* Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3
              Kualifikasi */}
              {currentItem.title}
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

            <button className="flex items-center gap-2">
              <span className="text-body-md-medium text-primary-500 hover:font-bold">
                Baca Selengkapnya
              </span>

              <ArrowUpRight className="w-4 h-4 text-primary-500" />
            </button>
          </figcaption>
        </div>

        {/* <div className="order-1 col-span-5 lg:col-span-7 w-full h-[417px] bg-gray-300 rounded-[20px]"></div> */}

        <img
          src={currentItem.thumbnail}
          alt="headline-thumbnail"
          className="order-1 col-span-5 lg:col-span-7 w-full h-[417px] bg-gray-300 rounded-[20px]"
        />
      </figure>

      <div className="flex justify-center items-center space-x-4">
        <button onClick={() => handlePageChange(currentPage - 1)}>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.2084 2.36125C12.255 2.4077 12.2919 2.46287 12.3171 2.52362C12.3423 2.58436 12.3553 2.64948 12.3553 2.71525C12.3553 2.78102 12.3423 2.84614 12.3171 2.90688C12.2919 2.96763 12.255 3.0228 12.2084 3.06925L6.56141 8.71525L12.2084 14.3612C12.3023 14.4551 12.355 14.5825 12.355 14.7152C12.355 14.848 12.3023 14.9754 12.2084 15.0692C12.1145 15.1631 11.9872 15.2159 11.8544 15.2159C11.7216 15.2159 11.5943 15.1631 11.5004 15.0692L5.50041 9.06925C5.45385 9.0228 5.4169 8.96763 5.3917 8.90688C5.36649 8.84614 5.35352 8.78102 5.35352 8.71525C5.35352 8.64948 5.36649 8.58436 5.3917 8.52362C5.4169 8.46287 5.45385 8.40769 5.50041 8.36125L11.5004 2.36125C11.5469 2.31469 11.602 2.27774 11.6628 2.25254C11.7235 2.22733 11.7886 2.21436 11.8544 2.21436C11.9202 2.21436 11.9853 2.22733 12.046 2.25254C12.1068 2.27774 12.162 2.31469 12.2084 2.36125Z"
              fill="#828282"
            />
          </svg>
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
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.79191 2.36125C4.83836 2.31469 4.89353 2.27774 4.95428 2.25254C5.01502 2.22733 5.08015 2.21436 5.14591 2.21436C5.21168 2.21436 5.2768 2.22733 5.33755 2.25254C5.39829 2.27774 5.45347 2.31469 5.49991 2.36125L11.4999 8.36125C11.5465 8.40769 11.5834 8.46287 11.6086 8.52362C11.6338 8.58436 11.6468 8.64948 11.6468 8.71525C11.6468 8.78102 11.6338 8.84614 11.6086 8.90688C11.5834 8.96763 11.5465 9.0228 11.4999 9.06925L5.49991 15.0692C5.40603 15.1631 5.27869 15.2159 5.14591 15.2159C5.01314 15.2159 4.8858 15.1631 4.79191 15.0692C4.69803 14.9754 4.64528 14.848 4.64528 14.7152C4.64528 14.5825 4.69803 14.4551 4.79191 14.3612L10.4389 8.71525L4.79191 3.06925C4.74535 3.0228 4.70841 2.96763 4.6832 2.90688C4.65799 2.84614 4.64502 2.78102 4.64502 2.71525C4.64502 2.64948 4.65799 2.58436 4.6832 2.52362C4.70841 2.46287 4.74535 2.4077 4.79191 2.36125Z"
              fill="#828282"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Headline;
