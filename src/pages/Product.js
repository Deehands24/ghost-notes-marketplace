import React from 'react';

const Product = () => {
  return (
    <div className="bg-neutral-dark min-h-screen pb-16">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-6">
        <p className="text-gray-400 text-lg">
          Discover / Beats / Premium Hip Hop Beat Pack | 4K | v.1
        </p>
        
        <div className="flex flex-wrap items-center justify-between mt-4">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-white">by</span>
            <span className="text-primary-colour">Rhythm Master</span>
            <span className="text-white">in</span>
            <span className="text-primary-colour">Hip Hop</span>
          </div>
          
          <div className="flex items-center mt-2 sm:mt-0">
            <div className="bg-primary-colour text-white px-2 py-1 rounded text-xs mr-2">5.0</div>
            <span className="text-white text-sm">based on 10 ratings, 2 reviews</span>
          </div>
        </div>
      </div>
      
      {/* Product Display */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Product Image */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 aspect-video relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">BEAT PREVIEW</div>
                <p className="text-gray-400">Audio waveform would appear here</p>
              </div>
            </div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-primary-colour bg-opacity-90 rounded-full p-5">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Thumbnails */}
          <div className="flex space-x-4 mt-6">
            <div className="w-1/3 bg-gray-800 rounded-lg overflow-hidden border border-gray-700 aspect-video"></div>
            <div className="w-1/3 bg-gray-800 rounded-lg overflow-hidden border border-gray-700 aspect-video"></div>
            <div className="w-1/3 bg-gray-800 rounded-lg overflow-hidden border border-gray-700 aspect-video"></div>
          </div>
          
          {/* Product Description */}
          <div className="mt-12">
            <h2 className="text-white text-2xl font-semibold mb-6">Premium Hip Hop Beat Pack | v.1</h2>
            
            <div className="mb-8">
              <h3 className="text-white font-bold mb-2">Beat Details:</h3>
              <ul className="text-white list-disc list-inside space-y-1">
                <li>MP3 & WAV Format</li>
                <li>High Quality 48kHz / 24bit</li>
                <li>BPM: 95</li>
                <li>Key: C Minor</li>
              </ul>
            </div>
            
            <div className="text-white text-lg leading-relaxed space-y-6">
              <p>➖ ➖ ➖ ➖ ➖ ✔️ I highly recommend this product to Music Producers and Artists for references and ideas! The details are very high quality and professionally mixed! I spend many hours making my beats with the highest quality and great variety.</p>
              
              <p>⚪️ The most ideas and creativity! This pack can be used for creating tracks, sampling, remixing, or as reference material for your own productions. Perfect for hip-hop, trap, and R&B producers.</p>
              
              <p>⚪️ Royalty-Free Uses for Multimedia⇒ After buying a "commercial license", you can also use the beats for your music productions, videos, or social media content like YouTube, Instagram, TikTok, etc.</p>
            </div>
          </div>
        </div>
        
        {/* Product Purchase Side Panel */}
        <div className="lg:col-span-1">
          <div className="bg-background rounded-lg p-6 border border-gray-800 sticky top-6">
            <div className="border-b border-gray-700 pb-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white text-2xl font-bold">$49.99</h3>
                <span className="text-green-500 font-medium text-sm">On Sale</span>
              </div>
              <button className="bg-primary-colour text-white w-full py-3 rounded-lg font-semibold mb-4">
                Buy Now
              </button>
              <button className="border border-primary-colour text-primary-colour w-full py-3 rounded-lg font-semibold">
                Add to Cart
              </button>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-semibold">This beat pack includes:</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-200">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  MP3 Files (320kbps)
                </li>
                <li className="flex items-center text-gray-200">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  WAV Files (48kHz / 24bit)
                </li>
                <li className="flex items-center text-gray-200">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Track Stems
                </li>
                <li className="flex items-center text-gray-200">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Commercial License
                </li>
                <li className="flex items-center text-gray-200">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Instant Download
                </li>
              </ul>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h4 className="text-white font-semibold mb-4">Producer</h4>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-700 mr-3"></div>
                <div>
                  <h5 className="text-white font-medium">Rhythm Master</h5>
                  <p className="text-gray-400 text-sm">Member since 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;