const Footer = () => {
    return (
      <footer className="relative overflow-hidden mt-24">
        <div className=" bg-[#6f5ffc] text-white">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="footer flex flex-col md:flex-row justify-between gap-10">
              <aside className="max-w-sm">
                <div className="flex items-center gap-3">
                
  
                  <h2 className="text-2xl font-bold">
                    AIStack
                  </h2>
                </div>
  
                <p className="mt-4 text-white/80 leading-relaxed">
                  Discover, compare and explore the best AI tools
                  for creators, startups and professionals.
                </p>
              </aside>
              <nav>
                <h6 className="footer-title text-white">
                  Company
                </h6>
  
                <a className="link link-hover text-white/80 hover:text-white transition">
                  About
                </a>
  
                <a className="link link-hover text-white/80 hover:text-white transition">
                  Terms
                </a>
  
                <a className="link link-hover text-white/80 hover:text-white transition">
                  Privacy
                </a>
  
                <a className="link link-hover text-white/80 hover:text-white transition">
                  Contact
                </a>
              </nav>
  
              <form>
                <h6 className="footer-title text-white">
                  Newsletter
                </h6>
  
                <fieldset className="form-control w-80">
                  <label className="label">
                    <span className="label-text text-white/80">
                      Stay updated with new AI tools
                    </span>
                  </label>
  
                  <div className="join pt-4">
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="input input-bordered join-item text-black w-full"
                    />
  
                    <button className="btn bg-white text-violet-600 hover:bg-violet-100 border-none join-item">
                      Join
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/70 text-sm">
                © 2025 AIStack. All rights reserved.
              </p>
              <h3>Designed and developed by DorsaValli</h3>
              <div className="flex gap-4">
                <a className="hover:scale-110 transition cursor-pointer">
                  X
                </a>
  
                <a className="hover:scale-110 transition cursor-pointer">
                  GitHub
                </a>
  
                <a className="hover:scale-110 transition cursor-pointer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;