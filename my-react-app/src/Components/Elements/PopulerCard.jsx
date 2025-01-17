// import dateFormat from "../../Utils/dateFormat";

// const PopulerCard = () => {
//   return (
//     <figure className="md:w-full lg:w-[400px] md:p-4 flex space-x-3 md:space-x-4">
//       <div className="relative">
//         <div className="w-[147px] h-[128px] bg-gray-300 rounded-xl flex items-center justify-center"></div>

//         <div className="absolute -top-4 -left-3 w-[35px] h-[37px] flex justify-center items-center font-nunito-sans text-body-md-bold text-white bg-dark-700 rounded-full">
//           1
//         </div>
//       </div>

//       <figcaption className="flex flex-col space-y-4">
//         <h3 className="lg:h-[75px] font-nunito-sans text-body-sm-bold lg:text-body-md-bold line-clamp-3">
//           Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4 Sandera Hamas?
//         </h3>

//         <div className="flex items-center space-x-1.5 lg:space-x-3">
//           <p className="text-body-xs-semibold lg:text-body-sm-semibold text-primary-500">
//             Politik
//           </p>

//           <div className="w-[4.76px] h-[4.76px] bg-[#D9D9D9] rounded-full" />

//           <p className="text-body-xs-medium lg:text-body-sm-medium text-[#526071]">
//             {dateFormat(currentItem.pubDate)}
//           </p>
//         </div>
//       </figcaption>
//     </figure>
//   );
// };

// export default PopulerCard;

import PropTypes from "prop-types";
import { Link } from "react-router";

import dateFormat from "../../Utils/dateFormat";

const PopulerCard = ({ item, index }) => {
  if (!item) return null;

  return (
    <Link to={`/berita-kini/post/${encodeURIComponent(item.title)}`}>
      <figure className="w-full md:w-full lg:w-[400px] md:p-8 flex space-x-3 md:space-x-4">
        <div className="relative">
          <img
            src={item.thumbnail}
            alt="populer-thumbnail"
            className="max-w-[147px] h-[128px] object-center object-cover rounded-xl"
          />

          <div className="absolute top-1 md:-top-[18px] left-1 md:-left-[11px] w-[35px] h-[37px] flex justify-center items-center font-nunito-sans text-body-md-bold lg:text-body-lg-bold text-dark-700 md:text-white bg-white md:bg-dark-700 rounded-full">
            {index + 1}
          </div>
        </div>

        <figcaption className="flex flex-col space-y-4">
          <h3 className="lg:h-[75px] font-nunito-sans text-body-sm-bold lg:text-body-md-bold line-clamp-2">
            {item.title}
          </h3>

          <div className="flex items-center space-x-1.5 lg:space-x-3">
            <p className="text-body-xs-semibold lg:text-body-sm-semibold text-primary-500">
              {item.category}
            </p>

            <div className="w-[4.76px] h-[4.76px] bg-[#D9D9D9] rounded-full" />

            <p className="text-body-xs-medium lg:text-body-sm-medium text-[#526071]">
              {dateFormat(item.pubDate)}
            </p>
          </div>
        </figcaption>
      </figure>
    </Link>
  );
};

PopulerCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};

export default PopulerCard;