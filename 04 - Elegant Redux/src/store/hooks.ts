import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "./store";


type DispatchFunction = () => AppDispatch;

// the same useDispatch hook, but with extra type information
export const useCartDispatch: DispatchFunction = useDispatch; 
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector