import {logo} from '../assets';
const Hero = () => {
     return (
          <header className="w-full flex justify-center items-center flex-col">
               <nav className="flex justify-between items-center w-full mb-10 pt-3">
                    <img src={logo} alt="sumz_logo" className="w-28 object-contain"/>
                    <button type="button" className="black_button"
                         onClick={() => window.open('https://github.com/TidbitsJS/Summize','_blank')}
                    >
                    GitHub
                    </button>
               </nav>
               <h1 className="head_text">
                    summarize articles with <br className="max-md:hidden"/>
                    <span className="orange_gradient ">openai gpt-4</span>
               </h1>
               <h2 className="description">simplify your reading with summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries</h2>
          </header>
     );
};
export default Hero;