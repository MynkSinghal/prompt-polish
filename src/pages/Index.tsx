import { Sparkles, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        
        {/* Main Value Proposition */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
            PromptPolish
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-light mb-6 leading-relaxed">
            Turn messy prompts into perfect ones
          </p>
          
        </div>

        {/* Video Demo */}
        <div className="w-full max-w-4xl mx-auto mb-12">
          <video 
            className="w-full rounded-xl shadow-2xl"
            autoPlay 
            loop 
            muted
            playsInline
          >
            <source src="/recording.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Key Benefits */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">⚡ Instant</h3>
              <p className="text-gray-400">Cmd + Shift + P</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">🎯 Smart</h3>
              <p className="text-gray-400">Understands your intent</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">✨ Perfect</h3>
              <p className="text-gray-400">Professional results</p>
            </div>
          </div>
        </div>

        {/* How It Works - Simple */}
        {/* <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">How it works</h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start space-x-4">
              <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</span>
              <p className="text-gray-300">Type your messy prompt anywhere</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</span>
              <p className="text-gray-300">Hit <code className="bg-gray-800 px-2 py-1 rounded text-sm">Cmd + Shift + P</code></p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</span>
              <p className="text-gray-300">Get a polished, professional prompt instantly</p>
            </div>
          </div>
        </div> */}

        {/* Download CTA */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <a 
            href="https://github.com/MynkSinghal/prompt-polish/releases/download/PromptPolish/PromptPolish-0.1.0.dmg" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black hover:bg-gray-200 text-xl font-bold px-12 py-4 rounded-full transition-all hover:scale-105 mb-6 cursor-pointer"
          >
            Download PromptPolish
          </a>
          <p className="text-gray-500 text-sm">Free • No signup required</p>
        </div>

        {/* Social Proof / Value */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xl text-gray-300 mb-4">
            Better prompts = Better results
          </p>
          <p className="text-gray-400">
            Stop wasting time crafting prompts. Get straight to great AI outputs.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Index;
