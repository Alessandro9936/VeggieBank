import { useReducer } from "react";
import { createContext } from "react";

import { ulrHandler } from "../../utils/url-handler";

export const ActiveTagsContext = createContext(null);
export const ActiveTagsDispatchContext = createContext(null);

const reducer = (activeTags, action) => {
  const { type: filter, tag } = action;

  switch (filter) {
    case "cuisine":
    case "intolerances": {
      return activeTags[filter].includes(tag)
        ? {
            ...activeTags,
            [filter]: activeTags[filter].filter(
              (activeTag) => activeTag !== tag
            ),
          }
        : {
            ...activeTags,
            [filter]: [...activeTags[filter], tag],
          };
    }
    case "sort":
    case "type": {
      return activeTags[filter] === tag
        ? { ...activeTags, [filter]: "" }
        : { ...activeTags, [filter]: tag };
    }
    case "clear-tags": {
      return initialState;
    }
  }
};

const initialState = {
  cuisine: [],
  intolerances: [],
  type: "",
  sort: "",
};

export const ActiveTagsProvider = ({ children }) => {
  const [activeTags, dispatch] = useReducer(reducer, initialState);

  ulrHandler(activeTags);

  return (
    <ActiveTagsContext.Provider value={activeTags}>
      <ActiveTagsDispatchContext.Provider value={dispatch}>
        {children}
      </ActiveTagsDispatchContext.Provider>
    </ActiveTagsContext.Provider>
  );
};
