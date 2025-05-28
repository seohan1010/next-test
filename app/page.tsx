'use client'

import { useEffect, useState, useRef } from 'react';
import classes from './homepage.module.css';


export default function Home() {




  const [ docList, setDocList ] = useState<any>([]);
  const [ aiDocElement, setAiDocElement ] = useState<any>(null);
  const [ overlap, setOverlap ] = useState<any>(false)

  const [ draggedElement, setDraggedElement ] = useState<HTMLDivElement>(null);
  


  const targetRef = useRef<HTMLDivElement>(null);
  



  useEffect(()=>{

    const arr = []
    
    for(let i = 0 ; i < 4 ; i++ ){	

      const item = {id: i,content: 'test_document_'+i, docId: `${'doc_id_'}`+i };
      arr.push(item);

    }			

    if(docList.length === 0){
      setDocList(arr);
    }

    

  },[])


  //-필요한 로직 
  //-> 데이터를 
  const onDragStartHandler = (e: any, id: any) => {
        // console.log(e.target.classList, id)
        console.log('dragevent object is : ', e)
        if(!e.target.classList.contains(classes.active)){
          e.target.classList.add(classes.active);
        }
        const nativeEvnet = e as React.DragEvent;
        nativeEvnet.dataTransfer.setData('text/plain','document_'+id);

        setDraggedElement(e.target);
  }

  const onDragEndHandler = (e: any) => {
    const classList = e.target.classList;
    if(classList.contains(classes.active)){
      classList.remove(classes.active);
    }	

  }


  const onDropHandler = (e: any) => { 
      e.preventDefault();

      e.target.classList.remove(classes.active);
      
      
      const nativeEvnet = e as React.DragEvent;

      const data = nativeEvnet.dataTransfer.getData('text/plain');
      console.log('transferred data is : ',data)
      console.log(e.target)

      alert(`${data} 가 성공적으로 추가되었습니다.`)


  }


  const onDragHandler = (e: any) => {
    
    e.preventDefault();

    const dragged = e.target;

    const target = targetRef.current;
    if (dragged && target) {
      const draggedRect = dragged.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
  
      const isOverlapping =
      !(draggedRect.right < targetRect.left ||
        draggedRect.left > targetRect.right ||
        draggedRect.bottom < targetRect.top ||
        draggedRect.top > targetRect.bottom);
  
      setOverlap(isOverlapping);
      // console.log('isOverlapping ? : ',isOverlapping);		
    }

  }


  const onDragOverHandler = (e: any) => {

    e.preventDefault();

  }

   





  return (
    <>
    
    <div className={classes.default_body}>
      <div className={classes.left_menu}>
    
          <div >
            <p className={classes.logo}>스마트워크 포털</p>
          </div>
          <div>
            <p className={classes.document}>
              문서함
            </p>
          </div>
    
          <div className={classes.parent_menu}>
            <p className={classes.parent_border}>
              개인문서함
            </p>
            <div className={classes.children_menu}>보고자료</div>
            <div className={classes.children_menu}>기획서</div>
            <div className={classes.children_menu}>참고자료</div>
            <div className={classes.children_menu}>사업문서</div>
            <div className={classes.children_menu}>개인함</div>
            <div className={`${classes.children_menu} ${'ai_docduments'}`} 
               ref={targetRef} 
               onDrop={(e) => onDropHandler(e)}
               onDragOver={(e)=> onDragOverHandler(e)}
               >AI참조문서</div>
            <div className={classes.children_menu}>기타</div>
            
          </div>
          <div className={classes.parent_menu}>
            <p className={classes.parent_border}>
              부서문서함
            </p>
          </div>
    
        </div>
        
    
          <div className={classes.main_page_wrap}>
    
          <div className={classes.header_layout}>
            
            <div className={classes.user_info_area}>
              
              <div className={classes.login}>
                jwp@jwp.com
              </div>
              <div className={classes.user_image}>
                jwp
              </div>
              
            </div>
            
          </div>
          
          <div className={classes.main_content}>
            
            {/* left main area */}
            <div className={classes.left_main_content_area}>
    
            
              <div className={classes.search_document}>
                  search document
              </div>
              <div className={classes.content_header}>
                  AI 업무 어시스턴트
              </div>
              <div className={classes.service_info}>	
                  <div className={classes.flex_container}>
                    this is flex container 
                  </div>
              </div>
              <div className={classes.ai_area}>
                <div>
                  this is chatting area 
                </div>
                <div>
                  this is message area
                </div>
              </div>
            {/* end of left main area */}
          </div>
          <div className={classes.right_main_content_area}> 
          <div className={classes.parent_menu}>
                  <div style={{textAlign: 'center', fontSize:'30px'}}> 문서목록</div>
              {docList.map((data: any)=> <p 
                            key={data.id}
                            draggable
                            onDragStart={(e) => onDragStartHandler(e,data.id)}
                            onDragEnd={(e) => onDragEndHandler(e)}
                                onDrag={(e)=> onDragHandler(e)}
                            className={classes.document_border} 
                              > 
                                {data.content}
                              </p>)}
    
            
          
          </div>
          </div>
        </div>
          
        </div>	
    </div>
    
    
    </>
    
  );
}
