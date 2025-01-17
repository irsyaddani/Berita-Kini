import { Link } from "react-router";
import { Youtube, Instagram, Facebook, SendFill } from "react-bootstrap-icons";
import routes from "../../Routes/Routes";

const Footer = () => {
  return (
    <footer className="w-full p-8 lg:px-16 lg:py-[72px] flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-[72px] bg-dark-600">
      <section className="lg:min-w-[425px] flex flex-col space-y-4 lg:space-y-12">
        <div className="flex flex-col space-y-2.5 lg:space-y-[22px]">
          <div className="flex items-center space-x-4  lg:space-x-5">
            <svg
              width="68"
              height="69"
              viewBox="0 0 68 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 lg:w-fit lg:h-fit"
            >
              <mask
                id="mask0_5001_29980"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="68"
                height="69"
              >
                <path d="M67.1411 0H0V68.171H67.1411V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_5001_29980)">
                <path
                  d="M36.9963 11.6753L39.586 9.08569C44.6714 4.00029 52.9505 3.87442 58.0652 8.93052C60.0031 10.8506 61.2911 13.3296 61.748 16.0192C62.2049 18.7089 61.8076 21.474 60.6122 23.9263C60.0388 25.0978 59.8456 26.419 60.0594 27.7056C60.2735 28.9922 60.8839 30.1798 61.8056 31.1025C63.5005 29.4038 64.8438 27.3877 65.7592 25.1696C66.6746 22.9514 67.1441 20.5746 67.1407 18.175C67.1371 15.7754 66.6612 13.4 65.7395 11.1844C64.8178 8.96888 63.4686 6.95663 61.769 5.26265C54.6171 -1.84897 43.0081 -1.70745 35.8762 5.42415L11.1924 30.1072L9.16317 28.078C3.99153 22.9064 3.95857 14.4528 9.22144 9.37306C11.1695 7.49857 13.6514 6.2749 16.3246 5.87099C18.9977 5.46707 21.7303 5.90282 24.1453 7.11806C25.2476 7.68291 26.5001 7.88497 27.7241 7.6954C28.9481 7.50583 30.0808 6.93432 30.9606 6.06249L31.0235 5.99989C31.0431 5.98044 31.0586 5.9573 31.0692 5.93179C31.0798 5.90632 31.0853 5.87898 31.0853 5.85137C31.0853 5.82377 31.0798 5.79643 31.0692 5.77096C31.0586 5.74548 31.0431 5.72234 31.0235 5.70286C27.6261 2.39084 23.0735 0.530482 18.3288 0.515441C13.5842 0.500403 9.01982 2.33186 5.60153 5.62228C-1.76184 12.7306 -1.73553 24.551 5.50163 31.7882L30.1781 56.4646L27.5568 59.0859C22.4714 64.1713 14.192 64.2971 9.07759 59.241C7.13957 57.321 5.85167 54.8419 5.39478 52.1524C4.93792 49.4628 5.33497 46.6977 6.53023 44.2453C7.10367 43.0738 7.29694 41.7525 7.08306 40.4662C6.86915 39.1795 6.25875 37.9917 5.33714 37.069C3.64233 38.7679 2.29884 40.7838 1.38341 43.0019C0.467987 45.2202 -0.00143005 47.5968 0.00197148 49.9966C0.00537302 52.3961 0.481526 54.7717 1.40324 56.987C2.32495 59.2027 3.67416 61.215 5.37377 62.9089C12.5254 70.0209 24.1347 69.8797 31.2666 62.7477L55.9823 38.0317L58.0192 40.0686C63.1046 45.154 63.2305 53.4331 58.1744 58.5474C56.2544 60.4858 53.7753 61.7734 51.0857 62.2306C48.3962 62.6875 45.631 62.2902 43.1786 61.0948C42.0068 60.521 40.6848 60.3276 39.3978 60.542C38.1108 60.7561 36.9227 61.3672 36 62.2895C37.6989 63.9845 39.7148 65.3281 41.9329 66.2435C44.1512 67.1588 46.5278 67.6283 48.9276 67.625C51.3271 67.6214 53.7027 67.1452 55.918 66.2235C58.1337 65.3018 60.146 63.9525 61.8399 62.2529C68.9519 55.1013 68.8103 43.492 61.6787 36.3604L36.9963 11.6753ZM33.8629 52.7781L14.8782 33.7934L33.3101 15.3619L52.2948 34.3465L33.8629 52.7781Z"
                  fill="white"
                />
              </g>
            </svg>

            <span className="font-poppins text-xl lg:text-3xl font-semibold text-white">
              Berita Kini
            </span>
          </div>

          <span className="font-nunito-sans text-body-sm lg:text-body-lg text-white">
            © 2023 Berita Kini. All Rights Reserved.
          </span>
        </div>

        <div className="flex flex-col space-y-2.5 lg:space-y-[22px]">
          <span className="font-nunito-sans text-lg lg:text-lg lg:text-[22px] font-semibold text-white">
            Ikuti Kami
          </span>

          <div className="flex items-center space-x-4 lg:space-x-6">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#E0E0E0] rounded-xl"
            >
              <Youtube
                style={{ width: "24px", height: "24px" }}
              />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#E0E0E0] rounded-xl"
            >
              <Instagram
                style={{ width: "24px", height: "24px" }}
              />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#E0E0E0] rounded-xl"
            >
              <Facebook
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col space-y-2.5 lg:space-y-[22px]">
        <span className="font-nunito-sans text-lg lg:text-[22px] font-semibold text-white">
          Telusuri
        </span>

        <div className="flex flex-col space-y-1.5 lf:space-y-4 text-body-sm-medium text-white">
          {routes.map((route, index) =>
            route.path === "/berita-kini/post/:title" ? null : (
              <Link key={index} to={route.path}>
                {route.name}
              </Link>
            )
          )}
        </div>
      </section>

      <section className="w-full flex flex-col space-y-2.5 lg:space-y-[22px]">
        <span className="font-nunito-sans text-lg lg:text-[22px] font-semibold text-white">
          Bantuan
        </span>

        <ul className="flex flex-col space-y-4 text-body-md-medium text-white">
          <li>Kontak Kami</li>
          <li>Laporan Pembajakan</li>
          <li>Kebijakan</li>
        </ul>
      </section>

      <section className="min-w-[339px]flex flex-col space-y-2.5 lg:space-y-[22px]">
        <span className="font-nunito-sans text-lg lg:text-[22px] font-semibold text-white">
          Berlangganan Berita Baru
        </span>

        <div className="w-full sm:w-[339px] p-2 flex items-center space-x-2.5 bg-white rounded-lg">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Masukan email"
            className="w-full p-0 h-fit text-body-md bg-transparent outline-none"
          />

          <button type="submit" className="btn-primary-sqr">
            <SendFill
              style={{ width: "24px", height: "24px" }}
            />
          </button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
