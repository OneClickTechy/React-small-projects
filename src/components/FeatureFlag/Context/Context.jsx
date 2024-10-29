import { createContext, useEffect, useState } from "react";
import getFeaturesToShow from "../data";

export const FeatureFlagContext = createContext();

export default function FeatureFlagGlobeState({ children }) {
  const [enabledFeatures, setEnabledFeatures] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  async function fetchFlagEnabled() {
    try {
      setIsLoading(true);
      const response = await getFeaturesToShow();
      console.log(response);
      if (response) {
        setIsLoading(false);
        setEnabledFeatures(response);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error.message);
      throw new Error(error.message);
    }
  }

  useEffect(() => {
    fetchFlagEnabled();
  }, []);
  return (
    <FeatureFlagContext.Provider value={ enabledFeatures }>
      {children}
    </FeatureFlagContext.Provider>
  );
}
