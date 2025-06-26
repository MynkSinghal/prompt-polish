import { useState, useRef } from "react";
import { Sparkles, ArrowRight, Play, Pause, Command, CheckCircle, Zap, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory relative">
      {/* Load Neue Montreal Medium font */}
      <style>
        {`
          @font-face {
            font-family: 'NeueMontreal';
            src: url('/NeueMontreal-Bold.otf') format('opentype');
            font-weight: 500;
            font-style: normal;
          }
        `}
      </style>

      {/* Background using the specified gradient */}
      <div 
        className="fixed inset-0 z-0" 
        style={{
          backgroundImage: `url('/gradients/image 1274.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="fixed inset-0 bg-black/20 z-0" />

      {/* Header */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6">
        {/* Empty header for clean look */}
      </nav>

      {/* Hero Section - Full Viewport Height */}
      <section className="relative z-10 flex items-center justify-center h-screen px-6 snap-start">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-16 text-white/90">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Supercharge Your Productivity</span>
          </div>

          {/* Main Headline - Adjusted size */}
          <h1 className="font-['NeueMontreal'] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-8 leading-tight">
            Your brain is a <span className="font-['Kalam'] italic font-normal text-white">mess</span>.
            <br />
            Your prompt doesn't have to be.
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white/80 max-w-5xl mx-auto leading-relaxed mb-16 font-light">
            Forget prompt engineering — just write like you normally do, and let us translate your messy thoughts into powerful prompts that get results.
          </p>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="relative z-10 flex items-center justify-center h-screen px-6 snap-start">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Title Section */}
          <div className="mb-12">
            <h1 className="font-['NeueMontreal'] text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 leading-tight">
              See <span className="font-bold text-white">PromptPolish</span> in <span className="font-['Kalam'] italic font-normal text-white">action</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-5xl mx-auto leading-relaxed font-light">
              Install Chrome extension, Select your text, right-click → <span className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-white/90 font-medium text-base">"Polish with PromptPolish"</span> to clean up your thoughts, sharpen your prompts, and get AI answers that actually make sense — all in one magical click.
            </p>
          </div>

          {/* Video Demo Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Video Player with Glassmorphism Frame */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
              {/* Video Container */}
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-video">
                
                {/* Video Player */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/recording.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

              </div>
            </div>


          </div>
        </div>
      </section>



      {/* Download Section */}
      <section className="relative z-10 px-6 h-screen flex items-center justify-center snap-start">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['NeueMontreal'] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white mb-12 leading-tight">
            Bad prompts = bad answers.
            <br />
            Download the <span className="font-['Kalam'] italic font-normal text-white">fix</span>.
          </h2>
          
          {/* Download Button */}
          <div className="mt-16">
            <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white/90 font-medium text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-lg font-medium">Download PromptPolish</span>
            </button>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/70 mt-8 font-light">
            Free Chrome extension • Instant results • Zero setup required
          </p>
        </div>
      </section>






    </div>
  );
};

export default Index;
