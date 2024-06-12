import { ComponentType, useState } from 'react';

export interface WithLoadingProps {
  isLoading: boolean;
  toggleLoading: () => void;
}

const withLoading = <P extends object>(
  WrappedComponent: ComponentType<P & WithLoadingProps>
) => {
  const WithLoadingComponent = (props: P) => {
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

  WithLoadingComponent.displayName = `WithLoadingComponent(${getDisplayName(
    WrappedComponent
  )})`;
  return WithLoadingComponent;
};

const getDisplayName = (WrappedComponent: ComponentType<any>) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default withLoading;
