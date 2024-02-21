/// <reference types="vite/client" />

export {};
declare namespace JSX {
  interface IntrinsicElements {
    "react-app": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    // Add any additional props expected by 'react-app' as needed
  }
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    navigateTo: any;
  }
}
