import React, { ReactNode, ErrorInfo } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log({ error, errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="mt-20 text-center">
          <h2 className="font-semibold">Oops, there is an error!</h2>
          <button
          className="mt-4 py-2 px-4 rounded-md bg-indigo-500 text-white hover:bg-indigo-700 transition-color"
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
