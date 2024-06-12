import { ComponentType, MouseEventHandler, useState } from 'react';

export interface WithLoadingProps {
  isLoading: boolean;
  toggleLoading: () => void;
}

const withLoading = <P extends object>(
  WrappedComponent: ComponentType<P & WithLoadingProps>
) => {
  const WithLoadingComponent = (
    props: P & { onClick?: MouseEventHandler<HTMLButtonElement> }
  ) => {
    const [isLoading, setIsLoading] = useState(false);

    const toggleLoading = () => setIsLoading((prevLoading) => !prevLoading);

    const handleClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
      if (props.onClick) {
        toggleLoading();
        await props.onClick(event);
      }
    };

    return (
      <WrappedComponent
        {...(props as P)}
        isLoading={isLoading}
        toggleLoading={toggleLoading}
        onClick={handleClick}
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
