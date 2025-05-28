'use client'

import WebViewer from '@pdftron/webviewer';
import { useEffect, useRef } from 'react'


const ViewArea3 = () => {

    const viewerRef = useRef<HTMLDivElement>(null);
    
    

       


   const onClickHandler = async () => {
   await WebViewer({
        path: '/lib',
        initialDoc: '/test.pdf'
    }, viewerRef.current).then((instance) => {

    })
   }


return <>   
    <div style={{margin: 'auto', textAlign: 'center'}}>

    this is ViewArea3!!!
    <div style={{height: '40vh',width:'40vw',position:'absolute',right: '0px'}}  ref={viewerRef} ></div>

    </div>
    <button onClick={onClickHandler}  >this is pdf test button</button>
    
</>
}


export default ViewArea3;