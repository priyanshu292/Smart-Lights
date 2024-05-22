declare module 'react-scroll' {
    import * as React from 'react';
  
    interface LinkProps {
      activeClass?: string;
      to: string;
      spy?: boolean;
      smooth?: boolean;
      hashSpy?: boolean;
      offset?: number;
      duration?: number | string;
      delay?: number;
      isDynamic?: boolean;
      onSetActive?: () => void;
      onSetInactive?: () => void;
      ignoreCancelEvents?: boolean;
      spyThrottle?: number;
      containerId?: string;
      style?: React.CSSProperties;
      className?: string;
      children?: React.ReactNode;
    }
  
    export class Link extends React.Component<LinkProps> {}
  }
  