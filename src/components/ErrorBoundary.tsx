import React from "react";

type State = { hasError: boolean; error?: Error };

export default class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto max-w-2xl p-8 text-center">
          <div className="mb-4 text-red-400 text-6xl">⚠️</div>
          <h2 className="text-2xl font-bold text-red-300 mb-2">Oops! Ceva nu a mers bine</h2>
          <p className="text-gray-400 mb-4">
            A apărut o eroare neașteptată. Te rugăm să reîmprospătezi pagina.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
          >
            Reîmprospătează pagina
          </button>
          
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className="mt-4 text-left text-xs text-gray-500">
              <summary className="cursor-pointer">Detalii tehnice (dev only)</summary>
              <pre className="mt-2 p-2 bg-black/50 rounded overflow-auto">
                {this.state.error.stack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}