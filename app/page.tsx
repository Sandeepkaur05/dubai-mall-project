export default function Home() {
  return (
    <main className="bg-black text-white h-screen overflow-y-scroll md:snap-y md:snap-mandatory scroll-smooth">

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen snap-start flex items-center justify-center overflow-hidden px-6 py-20 md:py-0"
      >

        {/* NAVBAR */}
        <nav className="absolute top-0 left-0 w-full z-20 px-6 md:px-8 py-6">

          <div className="max-w-7xl mx-auto flex items-center justify-between">

            {/* Logo */}
            <h2 className="text-2xl font-bold">
              Dubai Mall
            </h2>

            {/* Menu */}
            <div className="hidden md:flex gap-10 text-sm uppercase tracking-[0.2em] text-gray-300">

              <a href="#about">About</a>

              <a href="#retail">Retail</a>

              <a href="#entertainment">Entertainment</a>

              <a href="#contact">Contact</a>

            </div>

          </div>

        </nav>

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover"
        >
          <source src="/dubai.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">

          <p className="uppercase tracking-[0.4em] text-xs md:text-sm text-gray-300 mb-6">
            Luxury Destination Experience
          </p>

          <h1 className="text-5xl md:text-9xl font-bold leading-tight">
            Dubai Mall
          </h1>

          <p className="mt-6 text-base md:text-2xl text-gray-300 max-w-2xl mx-auto">
            The Future of Retail, Entertainment & Global Experiences
          </p>

          <button className="mt-10 border border-white px-8 py-3 hover:bg-white hover:text-black transition duration-300">
            Explore Experience
          </button>

        </div>

      </section>



      {/* WHY DUBAI MALL */}
      <section
        id="about"
        className="bg-black text-white min-h-screen snap-start flex items-center px-6 py-20 md:py-0"
      >

        <div className="max-w-7xl mx-auto w-full">

          {/* Heading */}
          <div className="text-center mb-20 md:mb-24">

            <p className="uppercase tracking-[0.4em] text-xs md:text-sm text-gray-500 mb-6">
              Why Dubai Mall
            </p>

            <h2 className="text-4xl md:text-7xl font-bold leading-tight">
              A Global Destination
            </h2>

            <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto">
              Dubai Mall is one of the world’s most visited destinations,
              combining luxury retail, tourism, entertainment, hospitality,
              and immersive experiences at global scale.
            </p>

          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition duration-300 text-center md:text-left">

              <h3 className="text-4xl md:text-5xl font-bold">
                100M+
              </h3>

              <p className="mt-4 text-xl text-white">
                Annual Visitors
              </p>

              <p className="mt-4 text-gray-400 leading-relaxed">
                One of the most visited retail and lifestyle destinations in the world.
              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition duration-300 text-center md:text-left">

              <h3 className="text-4xl md:text-5xl font-bold">
                1,200+
              </h3>

              <p className="mt-4 text-xl text-white">
                Global Retail Brands
              </p>

              <p className="mt-4 text-gray-400 leading-relaxed">
                Luxury, fashion, lifestyle, and flagship experiences under one destination.
              </p>

            </div>

            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition duration-300 text-center md:text-left">

              <h3 className="text-4xl md:text-5xl font-bold">
                Endless
              </h3>

              <p className="mt-4 text-xl text-white">
                Entertainment Experiences
              </p>

              <p className="mt-4 text-gray-400 leading-relaxed">
                Events, attractions, dining, and immersive experiences driving year-round engagement.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* RETAIL SECTION */}
      <section
        id="retail"
        className="bg-black text-white min-h-screen snap-start flex items-center px-6 py-20 md:py-0"
      >

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left Content */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">

            <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-gray-500 mb-4">
              Retail & Luxury
            </p>

            <h2 className="text-4xl md:text-7xl font-bold leading-tight">
              Home To The World's Leading Brands
            </h2>

            <p className="mt-8 text-gray-400 text-lg leading-relaxed">
              Dubai Mall brings together luxury fashion, flagship retail,
              immersive shopping experiences, and global lifestyle brands
              in one iconic destination.
            </p>

            <button className="mt-10 border border-white px-8 py-3 hover:bg-white hover:text-black transition duration-300">
              Discover Retail
            </button>

          </div>

          {/* Right Image */}
          <div className="h-[300px] md:h-[500px] bg-white/10 rounded-2xl overflow-hidden">

            <img
              src="/dubai-mall.jpg"
              alt="Luxury Retail"
              className="w-full h-full object-cover rounded-2xl"
            />

          </div>

        </div>

      </section>



      {/* ENTERTAINMENT SECTION */}
      <section
        id="entertainment"
        className="bg-black text-white min-h-screen snap-start flex items-center px-6 py-20 md:py-0"
      >

        <div className="max-w-7xl mx-auto w-full">

          {/* Heading */}
          <div className="text-center">

            <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-gray-500 mb-4">
              Attractions & Entertainment
            </p>

            <h2 className="text-4xl md:text-7xl font-bold">
              More Than Shopping
            </h2>

            <p className="mt-8 text-gray-400 max-w-3xl mx-auto text-lg">
              From world-famous attractions to immersive entertainment,
              Dubai Mall transforms every visit into a global experience.
            </p>

          </div>

          {/* Cards */}
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Aquarium */}
            <div className="h-[300px] md:h-[350px] overflow-hidden rounded-2xl">
              <img
                src="/aquarium.jpg"
                alt="Aquarium"
                className="w-full h-full object-cover transition duration-500 hover:scale-[1.03]"
              />
            </div>

            {/* Ice Rink */}
            <div className="h-[300px] md:h-[350px] overflow-hidden rounded-2xl">
              <img
                src="/ice-rink.jpg"
                alt="Ice Rink"
                className="w-full h-full object-cover transition duration-500 hover:scale-[1.03]"
              />
            </div>

            {/* Concert */}
            <div className="h-[300px] md:h-[350px] overflow-hidden rounded-2xl">
              <img
                src="/concert.jpg"
                alt="Concert"
                className="w-full h-full object-cover transition duration-500 hover:scale-[1.03]"
              />
            </div>

          </div>

        </div>

      </section>



      {/* CTA SECTION */}
      <section
        id="contact"
        className="bg-white text-black min-h-screen snap-start flex items-center justify-center px-6 py-20 md:py-0 text-center"
      >

        <div className="max-w-4xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-gray-500 mb-4">
            Partnership Opportunities
          </p>

          <h2 className="text-4xl md:text-7xl font-bold leading-tight">
            Become Part Of The Experience
          </h2>

          <p className="mt-8 text-lg text-gray-700">
            Connect your brand with one of the world's most influential
            retail and entertainment destinations.
          </p>

          <button className="mt-10 bg-black text-white px-10 py-4 hover:bg-gray-800 transition duration-300">
            Start Partnership
          </button>

        </div>

      </section>

    </main>
  );
}