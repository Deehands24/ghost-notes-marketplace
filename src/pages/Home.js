import React from 'react';

const Home = () => {
  return (
    <div className="bg-neutral-dark min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Purple glow effect */}
              <div className="absolute -left-20 -top-20 w-72 h-72 bg-primary-colour rounded-full opacity-30 filter blur-3xl"></div>
              
              {/* Image placeholder */}
              <div className="relative w-full h-[500px] bg-background rounded-lg overflow-hidden border border-gray-800">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-4">BEAT IMAGE</div>
                    <p className="text-lg text-gray-400">Featured beat artwork would appear here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight mb-6">
              Ghost Notes<br />
              Mid West<br />
              Hip Hop<br />
              Beat Market
            </h1>
            <p className="text-xl text-white mb-8">
              Another Mid West Development Design
            </p>
            <button className="bg-primary-colour text-white px-8 py-4 text-lg font-semibold">
              Explore Beats
            </button>
          </div>
        </div>
      </div>
      
      {/* Hot Artists Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10">
          <h2 className="text-4xl font-semibold text-white mb-4">Hot Artists</h2>
          <p className="text-xl text-white">Check out our weekly updated trending Artists</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Artist Card 1 */}
          <div className="bg-background rounded-xl overflow-hidden">
            <div className="h-64 bg-gray-800 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl text-white">Artist Image</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Da Viper</h3>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                  <div>
                    <p className="text-gray-400 text-sm">Creator</p>
                    <p className="text-white">Tom Edison</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">Amount</p>
                  <p className="text-white font-bold">45.50 USD</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Artist Card 2 */}
          <div className="bg-background rounded-xl overflow-hidden">
            <div className="h-64 bg-gray-800 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl text-white">Artist Image</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Beat Master</h3>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                  <div>
                    <p className="text-gray-400 text-sm">Creator</p>
                    <p className="text-white">James Wilson</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">Amount</p>
                  <p className="text-white font-bold">37.25 USD</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Artist Card 3 */}
          <div className="bg-background rounded-xl overflow-hidden">
            <div className="h-64 bg-gray-800 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl text-white">Artist Image</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Rhythm Roots</h3>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                  <div>
                    <p className="text-gray-400 text-sm">Creator</p>
                    <p className="text-white">Sarah Johnson</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">Amount</p>
                  <p className="text-white font-bold">52.80 USD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;