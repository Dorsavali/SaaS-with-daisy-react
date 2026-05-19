import CustomFetch from "../CustomFetch/CustomFetch";

const Card = () => {
  const cards = CustomFetch("cards");

  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-6
        py-11
        px-4
        lg:px-20
        xl:px-30
      "
    >
      {cards.map((item) => (
        <div
          key={item.id}
          className="
            card
            bg-base-100
            shadow-sm
            hover:shadow-xl
            transition-all
            duration-300
          "
        >
          <figure>
            <img
              src={item.image}
              alt={item.title}
              className="h-52 w-full object-cover"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="w-8 h-8 rounded-lg object-cover"
                />

                {item.title}
              </div>

              <div className="badge badge-secondary">{item.badge}</div>
            </h2>

            <p className="text-sm text-gray-500">{item.desc}</p>

            <div className="flex items-center justify-between mt-2">
              <span className="text-sm font-medium">⭐ {item.rating}</span>

              <span className="badge badge-outline">{item.pricing}</span>
            </div>

            <div className="card-actions justify-end mt-3">
              {item.tags?.map((tag, index) => (
                <div key={index} className="badge badge-outline">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
