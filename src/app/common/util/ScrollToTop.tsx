import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface WithScrollTopProps {}
export const withScrollTop = <T extends WithScrollTopProps>(
  WrappedComponent: React.ComponentType<T>
): React.ComponentType<T> => props => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <WrappedComponent {...props}>{props.children}</WrappedComponent>;
};





export default withScrollTop;
