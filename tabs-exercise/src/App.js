import React, { useState, useEffect } from 'react'
import './App.css';
import { Tab } from './components/Tab';

function App() {
  
  const [tabList, setTabList] = useState([]);
  const [tabActive, setTabActive] = useState(0);
  const [contentActive, setContentActive] = useState(0);

  const onSelectionTabs = (index,content) => {
    setContentActive(content);
    setTabActive(index);
  }

  useEffect(() => {
           
         async function getTabContent(){
            
              setTabActive(0);

              let addLista = [
                     {tabName:"Tab1", tabTitle:"Tab Title 1", tabContent:"Tab content 1 here!"},
                     {tabName:"Tab2", tabTitle:"Tab Title 2", tabContent:"Tab content 2 here!"}, 
                     {tabName:"Tab3", tabTitle:"Tab Title 3", tabContent:"Tab content 3 here!"}, 
                ];

              setContentActive(addLista[0]);
              setTabList(addLista)
       }
     
       getTabContent();

  }, [])


  return (
    <div className="App">
        
         <Tab content={tabList} active={tabActive} onTabClick={onSelectionTabs} /> 
         <div className="tabcontent">
            <h3>{contentActive.tabTitle}</h3>
            <p>{contentActive.tabContent}</p>  
         </div>
    </div>
  );
}

export default App;
