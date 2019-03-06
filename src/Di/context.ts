import { createContext } from "react";
import { createContainer } from "awilix";

const defaultContainer = createContainer();

// Awilix containers are based on proxies.
// It seems like proxies as props / context break react devtools
// so the workaround is providing a getter function
export const context = createContext(() => defaultContainer);
