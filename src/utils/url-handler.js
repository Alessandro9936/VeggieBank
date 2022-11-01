import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ulrHandler = (activeTags) => {
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let searchUrl = {};

    for (const [key, value] of Object.entries(activeTags)) {
      if (value.length === 0 && searchParams.has(key)) {
        searchParams.delete(key);
        setSearchParams(searchParams);
        return;
      } else if (value.length === 0) continue;

      searchUrl = {
        ...searchUrl,
        [key]: value.join(","),
      };
      setSearchParams(searchUrl);
    }
  }, [activeTags]);
};

export { ulrHandler };
