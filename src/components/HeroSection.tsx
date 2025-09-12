import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, Pause } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  showVideo?: boolean;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  showVideo = false, 
  backgroundImage,
  ctaText = "Book Your Stay",
  ctaLink = "/booking"
}: HeroSectionProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  useEffect(() => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video && showVideo) {
      video.muted = true;
      video.play().catch(console.error);
    }
  }, [showVideo]);

  const toggleVideo = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  // Scroll to next section handler
  const handleScrollDown = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<section
    id="hero-section" // <-- Add this line
    className="relative h-screen flex items-center justify-center overflow-hidden"
  >
      {/* Video Background */}
      {showVideo && (
        <video
          id="hero-video"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/Groove-Haven-Lodge-welcome-video.mp4" type="video/mp4" />
        </video>
      )}

      {/* Image Background */}
      {!showVideo && backgroundImage && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 leading-tight">
          <span className="text-yellow-500">{title.split(' ')[0]}</span>{' '}
          <span className="text-white">{title.split(' ').slice(1).join(' ')}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-yellow-500 text-black hover:bg-yellow-400 text-lg px-8 py-3 font-semibold"
            asChild
          >
            <Link to={ctaLink}>{ctaText}</Link>
          </Button>

          {showVideo && (
            <Button
              size="lg"
              className="bg-black text-yellow-500 hover:bg-gray-900 text-lg px-8 py-3 font-semibold"
              onClick={toggleVideo}
            >
              {isVideoPlaying ? (
                <>
                  <Pause className="w-5 h-5 mr-2" />
                  Pause Video
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  Play Video
                </>
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        type="button"
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center focus:outline-none"
        aria-label="Scroll to next section"
      >
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <svg className="w-7 h-7 animate-bounce text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Next Section Anchor */}
      <section id="next-section" className="relative z-10">
        {/* Your next section content */}
      </section>
    </section>
  );
};

export default HeroSection;
