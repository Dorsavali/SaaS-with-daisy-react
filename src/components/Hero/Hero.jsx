const Hero = () => {
  return (
    <div
      className="    hero
    min-h-[75vh]
    md:min-h-[85vh]
    lg:min-h-screen
    bg-[#F8FAFC]
    bg-[radial-gradient(circle_at_top_left,rgba(167,139,250,0.18),transparent_20%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.18),transparent_25%),radial-gradient(circle_at_bottom,rgba(244,114,182,0.12),transparent_20%)] relative"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/public/images/hero.png"
          className="
    max-w-sm
    lg:max-w-xl
    xl:max-w-2xl
    w-full
  "
        />
        <div>
          <h1 className="text-5xl font-bold">Find The Best AI Tools For Work & Creativity  </h1>
          <p className="py-6">
          Compare top AI products, read guides and boost productivity.
          </p>
          <div className="flex gap-3">
          <button className="btn btn-primary">Explore Tools</button>
          <button className="btn btn-secondary">Start Free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
