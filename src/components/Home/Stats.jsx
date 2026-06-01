const Stats = () => {
    return (
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div
          className="
            w-full
            flex
            justify-center
  
            lg:absolute
            lg:left-1/2
            lg:-translate-x-1/2
            lg:-top-40
  
            z-20
          "
        >
          <div
            className="
              stats
  pt-4
  box-border
              stats-vertical
              sm:stats-vertical
              md:stats-horizontal
  
              w-full
              max-w-sm
              sm:max-w-md
              md:max-w-3xl
              lg:max-w-5xl
  
              rounded-[2rem]
              border border-base-200
              bg-base-100
              shadow-xl
            "
          >
            <div className="stat py-6">
              <div className="stat-title text-sm">
                AI Tools
              </div>
              <div className="stat-value text-primary text-3xl md:text-4xl">
                500+
              </div>
              <div className="stat-desc text-xs md:text-sm">
                Curated productivity tools
              </div>
            </div>
            <div className="stat py-6">
              <div className="stat-title text-sm">
                Active Users
              </div>
              <div className="stat-value text-secondary text-3xl md:text-4xl">
                50K+
              </div>
              <div className="stat-desc text-xs md:text-sm">
                ↗︎ 2,400 this month
              </div>
            </div>
            <div className="stat py-6">
              <div className="stat-title text-sm">
                Reviews
              </div>
              <div className="stat-value text-3xl md:text-4xl">
                2.1K
              </div>
              <div className="stat-desc text-xs md:text-sm">
                Trusted by creators
              </div>
            </div>
            <div className="stat py-6">
              <div className="stat-title text-sm">
                Guides
              </div>
              <div className="stat-value text-accent text-3xl md:text-4xl">
                120+
              </div>
              <div className="stat-desc text-xs md:text-sm">
                New content weekly
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Stats;