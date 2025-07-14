// AnimatedButton component types
export interface AnimatedButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  perspective?: number;
  fontSize?: string;
  className?: string;
  onClick?: () => void;
}

export interface AnimatedButtonAnimationOptions {
  perspective?: number;
  duration?: number;
  ease?: string;
}
