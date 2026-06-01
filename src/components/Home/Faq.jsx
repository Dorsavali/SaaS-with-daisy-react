import CustomFetch from "../../Hooks/CustomFetch";

const Faq = () => {
  const faq = CustomFetch("faq");

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute left-0 top-0 w-72 h-72 bg-violet-300/20 blur-[120px] rounded-full" />
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-sky-300/20 blur-[120px] rounded-full" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="badge badge-primary badge-outline mb-4">FAQ</div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-base-content/60 mt-4">
            Everything you need to know about AIStack.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {faq?.map((item, index) => (
            <div
              key={item.id}
              className="
                collapse
                collapse-plus
                bg-base-100/80
                backdrop-blur-md
                border
                border-base-200
                rounded-[1.5rem]
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-300
              "
            >
              <input
                type="radio"
                name="faq-accordion"
                defaultChecked={index === 0}
              />

              <div className="collapse-title text-lg font-semibold">
                {item.question}
              </div>

              <div className="collapse-content text-base-content/70 leading-relaxed">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
