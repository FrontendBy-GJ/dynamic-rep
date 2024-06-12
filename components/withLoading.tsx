import { ComponentType, useState } from 'react';

export interface WithLoadingProps {
  isLoading: boolean;
  toggleLoading: () => void;
}

const withLoading = <P extends object>(
  WrappedComponent: ComponentType<P & WithLoadingProps>
) => {
  return (props: P) => {
    const [isLoading, setIsLoading] = useState(false);

    const toggleLoading = () => setIsLoading((prevLoading) => !prevLoading);

    return (
      <WrappedComponent
        {...(props as P)}
        isLoading={isLoading}
        toggleLoading={toggleLoading}
      />
    );
  };
};

export default withLoading;
