import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../../Store/redux/slices/loadingslice";

export interface ILoadingWrapperProps {
  children: React.ReactNode;
}

export function LoadingWrapper(props: ILoadingWrapperProps) {
  const dispatch = useDispatch();
  const { children } = props;
  const isAppLoading = useSelector(
    (state: RootState) => state.loading.isLoading,
  );

  return (
    <div>
      {/* <div className={isAppLoading ? "loading-wrapper" : "display-none"}> */}
      {children}
      {/* </div> */}
    </div>
  );
}
