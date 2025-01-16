import Headline from "../Components/Contents/Headlines";
// import Rekomendasi from "../Components/Content/Rekomendasi";
// import Terpopuler from "../Components/Content/Terpopuler";

const Beranda = () => {
  return (
    <section className="w-full min-h-screen flex flex-col space-y-20 lg:space-y-32 animate-fade-in">
      <Headline />
      {/* <Terpopuler /> */}
      {/* <Rekomendasi /> */}
    </section>
  );
};

export default Beranda;
