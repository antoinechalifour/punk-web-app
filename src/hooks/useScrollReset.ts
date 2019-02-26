import { useEffect } from "react";

export const useScrollReset = () => useEffect(() => window.scrollTo(0, 0), []);
