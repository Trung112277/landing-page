import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ErrorPageProps, 
  getErrorInfo, 
  colorClasses, 
  accentColor 
} from '@/utils/errorUtils';

export const ErrorPage: React.FC<ErrorPageProps> = ({
  errorCode = "404",
  errorTitle = "Page Not Found",
  errorMessage = "The page you're looking for doesn't exist or has been moved.",
  showHomeButton = true,
  showBackButton = true
}) => {
  const location = useLocation();

  const errorInfo = getErrorInfo(location.pathname, {
    errorCode,
    errorTitle,
    errorMessage,
    showHomeButton,
    showBackButton
  });

  return (
    <div className={`min-h-screen bg-primary-foreground ${colorClasses[errorInfo.color]} flex items-center justify-center p-4`}>
      <div className="text-center text-white max-w-md mx-auto">
        {/* Error Number with Animation */}
        <div className="mb-8">
          <h1 className={`text-8xl md:text-9xl font-bold ${accentColor[errorInfo.color]} animate-pulse`}>
            {errorInfo.code}
          </h1>
          <div className={`w-32 h-1 ${accentColor[errorInfo.color]} mx-auto mt-4 animate-pulse`}></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{errorInfo.title}</h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            {errorInfo.message}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          {showHomeButton && (
            <Link 
              to="/" 
              className="btn-primary "
            >
              Go Home
            </Link>
          )}
          {showBackButton && (
            <button 
              onClick={() => window.history.back()}
              className="btn-outline"
            >
              Go Back
            </button>
          )}
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-2">
          <div className={`w-3 h-3 ${accentColor[errorInfo.color]} rounded-full animate-bounce`}></div>
          <div className={`w-3 h-3 ${accentColor[errorInfo.color]} rounded-full animate-bounce`} style={{ animationDelay: '0.1s' }}></div>
          <div className={`w-3 h-3 ${accentColor[errorInfo.color]} rounded-full animate-bounce`} style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-sm text-gray-400">
          <p>If you believe this is an error, please contact support.</p>
          <p className="mt-1">Error ID: {Date.now()}</p>
        </div>
      </div>
    </div>
  );
}; 