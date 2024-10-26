import { useEffect, useState } from "react";

const MultiTabs = () => {
    
      
    const [currentTab, setCurrentTab] = useState(0);
    useEffect(() => {console.log(currentTab)}, [currentTab])
    const tabs = ["MultiTabs-1", "MultiTabs-2", "MultiTabs-3"];
    console.log([...Array(3)]);
    const handleCurrentTab = (index) => {
      setCurrentTab(index);
    };
  return (
    <div>
      {[...Array(3)].map((_, index) => {
        return (
          <button key={index} onClick={() => handleCurrentTab(index)}>
            Tab {index + 1}
          </button>
        );
      })}
      <div>{ currentTab!==undefined && tabs[currentTab]}</div>
    </div>
  );
};

export default MultiTabs;
