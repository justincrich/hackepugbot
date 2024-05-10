import { useEffect, useRef } from "react";
import _ from "lodash";

export function useHasChanged(obj: unknown, callback: () => void): void {
  const prevObjRef = useRef<unknown>();

  useEffect(() => {
    const prevObj = prevObjRef.current;
    // Check if the current object is different from the previous object
    if (!_.isEqual(prevObj, obj)) {
      callback();
    }
    // Update the ref to the current object after running the callback
    prevObjRef.current = obj;
  }, [obj, callback]); // Dependencies: obj and the callback function
}
