const Loader = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="flex space-x-4">
        <span className="w-4 h-4 bg-primary-500 rounded-full animate-ping delay-100" />
        <span className="w-4 h-4 bg-primary-500 rounded-full animate-ping delay-200" />
        <span className="w-4 h-4 bg-primary-500 rounded-full animate-ping delay-300" />
      </div>
    </section>
  );
};

export default Loader;
