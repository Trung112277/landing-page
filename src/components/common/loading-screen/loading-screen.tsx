import React from 'react';

interface LoadingProps {
  isLoading: boolean;
  key?: number;
}

export const LoadingScreen: React.FC<LoadingProps> = ({ isLoading, key }) => {
  if (!isLoading) return null;

  return (
    <div
      key={key}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <div className="flex flex-col items-center">
          {/* Spinner */}
          <div className="relative mb-6">
            <span className="block w-16 h-16 border-4 border-primary/80 border-t-primary rounded-full animate-spin"></span>
          </div>

          {/* Loading text */}
          <div className="text-center mb-4">
            <p className="text-white text-lg font-medium">Loading...</p>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2">
            <span className="block w-2 h-2 bg-blue-400 rounded-full animate-bounce"></span>
            <span className="block w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
            <span className="block w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};
