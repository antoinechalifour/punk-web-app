import { useState, useEffect } from "react";
import { Observable } from "rxjs";

type InitialState<T> = (() => T) | T;

export const useObservable = <Value>(
  observable: Observable<Value>,
  initialState: InitialState<Value>
) => {
  const [value, setValue] = useState<Value>(initialState);

  useEffect(() => {
    const subscription = observable.subscribe(setValue);

    return () => subscription.unsubscribe();
  }, [observable]);

  return value;
};
