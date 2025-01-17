import Headline from "../Components/Contents/Headlines";
import Rekomendasi from "../Components/Contents/Rekomendasi";
import Terpopuler from "../Components/Contents/Terpopuler";
import Banner from "../Components/Contents/Banner";

const Beranda = () => {
  return (
    <section className="w-full min-h-screen flex flex-col space-y-20 lg:space-y-32 animate-fade-in">
      <Headline />
      <Terpopuler />
      <Rekomendasi />
      <Banner />
    </section>
  );
};

export default Beranda;
