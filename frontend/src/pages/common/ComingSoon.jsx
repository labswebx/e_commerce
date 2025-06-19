const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 font-sans text-black bg-gradient-to-br from-gray-100 to-zinc-200">
      <div className="w-full max-w-2xl text-center">
        <img
          src="/logo-icon.jpg"
          alt="Coming Soon"
          className="w-24 h-24 mx-auto mb-6"
        />
        <h1 className="mb-6 text-4xl font-bold md:text-6xl animate-pulse">
          Coming Soon
        </h1>

        <p className="mb-12 text-xl md:text-2xl opacity-90">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
