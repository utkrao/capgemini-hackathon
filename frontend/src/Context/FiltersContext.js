import React, {useState, createContext} from "react";

export const FiltersContext = createContext();


export const Filters = ({children}) => {


  const [select,setSelect] = useState({
    selectTech: false,
    selectBprocess: false,
    selectIndustry: false,
    selectAsset: false,
  })

  // const [selectTech, setSelectTech] = React.useState(false);
  // const [selectBprocess, setSelectBprocess] = React.useState(false);
  // const [selectIndustry, setSelectIndustry] = React.useState(false);
  // const [selectAsset, setSelectAsset] = React.useState(false);


  return(
    <FiltersContext.Provider value={ {select, setSelect} }>
        {children}
    </FiltersContext.Provider>
  )
};

