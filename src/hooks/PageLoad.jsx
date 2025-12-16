import React, { useEffect, useState } from 'react'


export const PageLoad = () => {
    const [pageLoaded,setPageLoaded] = useState(false);
    useEffect (() =>{
          setPageLoaded(true);
    },[])
    return pageLoaded;
};

export default PageLoad;
