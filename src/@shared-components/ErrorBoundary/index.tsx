import React, { Component, ErrorInfo, ReactNode } from "react";
import Button from "../Button";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200 text-red-800 p-4">
          <h1 className="text-3xl font-bold mb-2">
            Oops! Something went wrong. Please Reload Screen
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
