import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ApplicationDispatch, RootState } from "../store/store";

export const useAppDispatch = () => useDispatch<ApplicationDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
