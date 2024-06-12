import { LoaderCircle } from 'lucide-react';
import { Button, ButtonProps } from './ui/button';

interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean;
}

export default function LoadingButton({
  isLoading,
  children,
  ...props
}: LoadingButtonProps) {
  return (
    <Button {...props} disabled={isLoading}>
      {isLoading ? <LoaderCircle className="animate-spin" /> : children}
    </Button>
  );
}
