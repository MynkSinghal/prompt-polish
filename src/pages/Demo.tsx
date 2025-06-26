import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Play, Pause } from "lucide-react";
import { Link } from "react-router-dom";

const Demo = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-play when video comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
          setIsVideoPlaying(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleVideoToggle = () => {
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
    <div className="min-h-screen relative overflow-hidden">
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

      {/* Background using the same gradient */}
      <div 
        className="fixed inset-0 z-0" 
        style={{
          backgroundImage: `url('/gradients/image 1274.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay for better contrast */}
      <div className="fixed inset-0 bg-black/30 z-0" />

      {/* Back Button - Top Left */}
      <div className="relative z-50 p-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white hover:bg-white/20 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>

      {/* Main Demo Section */}
      <section className="relative z-10 flex items-center justify-center min-h-screen px-6 -mt-20">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Title Section */}
          <div className="mb-16">
            <h1 className="font-['NeueMontreal'] text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
              See <span className="font-['Kalam'] italic font-normal text-purple-300">PromptPolish</span> in Action
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
              Watch how PromptPolish transforms your messy thoughts into powerful, optimized prompts
            </p>
          </div>

          {/* iPad Device Mockup Container */}
          <div 
            ref={containerRef}
            className="relative max-w-5xl mx-auto"
          >
            {/* iPad Frame - Custom CSS Design */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl">
              {/* Screen Bezel */}
              <div className="bg-black rounded-[2.5rem] p-3 relative overflow-hidden">
                
                {/* Home Indicator (iPad style) */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white/30 rounded-full z-20"></div>
                
                {/* Video Container */}
                <div className="relative bg-gray-900 rounded-[2rem] overflow-hidden aspect-[4/3]">
                  
                  {/* Video Player */}
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    poster="/placeholder.svg"
                    muted
                    loop
                    playsInline
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                  >
                    <source src="/recording.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video Overlay Controls */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={handleVideoToggle}
                      className="bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-4 transition-all duration-300 transform hover:scale-110"
                    >
                      {isVideoPlaying ? (
                        <Pause className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white ml-1" />
                      )}
                    </button>
                  </div>
                  
                  {/* Floating Badge - "Live Demo" */}
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      Live Demo
                    </div>
                  </div>
                </div>
              </div>

              {/* iPad Physical Details */}
              <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-1 h-16 bg-gray-700 rounded-l-sm"></div>
              <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 translate-y-8 w-1 h-12 bg-gray-700 rounded-l-sm"></div>
              <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-1 h-8 bg-gray-700 rounded-r-sm"></div>
            </div>

            {/* Floating Elements around iPad */}
            <div className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white text-sm font-medium animate-bounce">
              ⚡ Instant Results
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white text-sm font-medium animate-bounce" style={{ animationDelay: '1s' }}>
              🎯 Perfect Prompts
            </div>
            
            <div className="absolute top-1/4 -right-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white text-sm font-medium animate-bounce" style={{ animationDelay: '2s' }}>
              🚀 Works Everywhere
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20">
            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Free
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Progressive Blur Effect - Fixed at bottom of viewport */}
      <div className="fixed left-0 bottom-0 right-0 w-full h-24 pointer-events-none z-50">
        {/* Layer 1 - Lightest blur */}
        <div 
          className="absolute top-0 left-0 bottom-0 right-0"
          style={{
            backdropFilter: 'blur(1px)',
            mask: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 40%)'
          }}
        ></div>
        
        {/* Layer 2 */}
        <div 
          className="absolute top-0 left-0 bottom-0 right-0"
          style={{
            backdropFilter: 'blur(2px)',
            mask: 'linear-gradient(rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 50%)'
          }}
        ></div>
        
        {/* Layer 3 */}
        <div 
          className="absolute top-0 left-0 bottom-0 right-0"
          style={{
            backdropFilter: 'blur(4px)',
            mask: 'linear-gradient(rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 60%)'
          }}
        ></div>
        
        {/* Layer 4 */}
        <div 
          className="absolute top-0 left-0 bottom-0 right-0"
          style={{
            backdropFilter: 'blur(8px)',
            mask: 'linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 70%)'
          }}
        ></div>
        
        {/* Layer 5 */}
        <div 
          className="absolute top-0 left-0 bottom-0 right-0"
          style={{
            backdropFilter: 'blur(16px)',
            mask: 'linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 90%)'
          }}
        ></div>
        
        {/* Layer 6 - Heaviest blur */}
        <div 
          className="absolute top-0 left-0 bottom-0 right-0"
          style={{
            backdropFilter: 'blur(32px)',
            mask: 'linear-gradient(rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 80%)'
          }}
        ></div>
        
        {/* Background gradient to blend with dark theme and prevent glitches */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
    </div>
  );
};

export default Demo; 