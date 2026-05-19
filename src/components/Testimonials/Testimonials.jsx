import CustomFetch from "../CustomFetch/CustomFetch";

const Testimonials = () => {
  const testimonials = CustomFetch("testimonials");

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-5xl font-bold">What Our Users Say</h2>

          <p className="text-base-content/70 mt-3">
            Trusted by creators, startups and professionals.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="carousel carousel-center w-full gap-4 lg:hidden">
          {testimonials?.map((user) => (
            <div key={user.id} className="carousel-item w-[90%]">
              <div className="card bg-base-100 shadow-md border border-base-200 w-full">
                <div className="card-body">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-14 rounded-full">
                        <img src={user.avatar} alt={user.name} />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold">{user.name}</h3>

                      <p className="text-sm opacity-60">{user.role}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm">"{user.review}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {testimonials?.map((user) => (
            <div
              key={user.id}
              className="card bg-base-100 shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200"
            >
              <div className="card-body">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-14 rounded-full">
                      <img src={user.avatar} alt={user.name} />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold">{user.name}</h3>

                    <p className="text-sm opacity-60">{user.role}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed">"{user.review}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
