
import { Button } from "@/components/ui/button";
import { Download, Play, Sparkles, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-white mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              PromptPolish
            </h1>
          </div>
          
          <h2 className="text-xl md:text-3xl font-medium text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform boring prompts into high-performing ones that actually get results
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Stop wasting time crafting the perfect prompt. Our AI instantly upgrades your messy ideas into crisp, effective prompts that work.
          </p>
        </div>

        {/* Demo Video Section */}
        <div className="mb-16 animate-scale-in">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
              {/* Video placeholder - replace with your actual video */}
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-white/10 rounded-full p-6 mb-4 inline-block backdrop-blur-sm">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-gray-300 text-lg font-medium">Watch PromptPolish in Action</p>
                  <p className="text-gray-400 text-sm mt-2">See how boring prompts become powerful in seconds</p>
                </div>
              </div>
              
              {/* Video overlay - remove when adding real video */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer hover:bg-black/10 transition-colors">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Play Demo
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in">
          <div className="text-center p-6 rounded-xl bg-gray-900/50 border border-gray-800">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Polish</h3>
            <p className="text-gray-400">Transform messy prompts into professional ones in seconds</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-gray-900/50 border border-gray-800">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Better Results</h3>
            <p className="text-gray-400">Get higher quality outputs from any AI model</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-gray-900/50 border border-gray-800">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Download className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">One Click</h3>
            <p className="text-gray-400">Simple download, no setup required</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-scale-in">
          <div className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-2xl border border-gray-800 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to upgrade your prompts?</h3>
            <p className="text-gray-300 mb-8">Join thousands of users who've already transformed their AI interactions</p>
            
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-6 text-lg rounded-xl transition-all hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PromptPolish
            </Button>
            
            <p className="text-gray-500 text-sm mt-4">Free download • No signup required</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            Made for creators who want better AI results
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
