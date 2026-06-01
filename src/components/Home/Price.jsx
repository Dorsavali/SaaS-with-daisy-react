import CustomFetch from "../../Hooks/CustomFetch";

const Price = () => {
  const pricing = CustomFetch("pricing");

  return (
    <section
      className="py-20 px-4 bg-[#F8FAFC]
    bg-[radial-gradient(circle_at_top_left,rgba(167,139,250,0.18),transparent_20%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.18),transparent_25%),radial-gradient(circle_at_bottom,rgba(244,114,182,0.12),transparent_20%)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold">Simple Pricing</h1>

          <p className="text-base-content/70 mt-4">
            Choose the perfect plan for your workflow.
          </p>
        </div>
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-0
            lg:grid-cols-3
            gap-8
            place-items-center
            px-5
          "
        >
          {pricing?.map((plan) => (
            <div
              key={plan.id}
              className={`
                card
                w-full
                max-w-sm
                bg-base-100
                shadow-sm
                transition-all
                duration-300
                hover:shadow-2xl
                border
                ${plan.popular ? "border-primary scale-105" : "border-base-200"}
              `}
            >
              <div className="card-body">
                <span
                  className={`badge badge-sm ${
                    plan.popular ? "badge-primary" : "badge-outline"
                  }`}
                >
                  {plan.badge}
                </span>
                <div className="flex justify-between items-center mt-3">
                  <h2 className="text-3xl font-bold">{plan.title}</h2>

                  <span className="text-xl font-medium">{plan.price}</span>
                </div>
                <ul className="mt-6 flex flex-col gap-3 text-sm">
                  {plan.features?.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 text-success shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button
                    className={`
                      btn
                      w-full
                      ${plan.popular ? "btn-primary" : "btn-outline"}
                    `}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
