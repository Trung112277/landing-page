export interface ErrorInfo {
  code: string;
  title: string;
  message: string;
  color: 'red' | 'orange' | 'yellow' | 'blue';
}

export interface ErrorPageProps {
  errorCode?: string;
  errorTitle?: string;
  errorMessage?: string;
  showHomeButton?: boolean;
  showBackButton?: boolean;
}

export const getErrorInfo = (pathname: string, defaultProps: ErrorPageProps): ErrorInfo => {
  if (pathname.includes('404')) {
    return {
      code: "404",
      title: "Page Not Found",
      message: "The page you're looking for doesn't exist or has been moved to another dimension.",
      color: "red"
    };
  }
  if (pathname.includes('500')) {
    return {
      code: "500",
      title: "Server Error",
      message: "Something went wrong on our end. Please try again later.",
      color: "orange"
    };
  }
  if (pathname.includes('403')) {
    return {
      code: "403",
      title: "Access Forbidden",
      message: "You don't have permission to access this page.",
      color: "yellow"
    };
  }
  if (pathname.includes('401')) {
    return {
      code: "401",
      title: "Unauthorized",
      message: "Please log in to access this page.",
      color: "blue"
    };
  }
  
  return {
    code: defaultProps.errorCode || "404",
    title: defaultProps.errorTitle || "Page Not Found",
    message: defaultProps.errorMessage || "The page you're looking for doesn't exist or has been moved.",
    color: "red"
  };
};

export const colorClasses = {
  red: "from-red-900 via-purple-900 to-indigo-900",
  orange: "from-orange-900 via-red-900 to-pink-900",
  yellow: "from-yellow-900 via-orange-900 to-red-900",
  blue: "from-blue-900 via-purple-900 to-indigo-900"
} as const;

export const accentColor = {
  red: "text-red-500",
  orange: "text-orange-500",
  yellow: "text-yellow-500",
  blue: "text-blue-500"
} as const;

export const borderColor = {
  red: "border-red-400",
  orange: "border-orange-400",
  yellow: "border-yellow-400",
  blue: "border-blue-400"
} as const; 