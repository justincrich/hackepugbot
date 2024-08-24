import { useMediaQuery } from "react-responsive";

export const useDeviceType = () => {
  const isDesktop = useMediaQuery({ minWidth: 1000 });

  return {
    isDesktop,
  };
};
