import React from 'react';
import { WorkProcess_PARENT, WorkProcess_text,WorkProcess_P} from './styled-components/custom-styled';
import WorkProcessBoxes from './WorkProcessBoxes';



const WorkProcess =()=>{
    return(
        <>
        < WorkProcess_PARENT>
        < WorkProcess_text>روند کاری ما به چه صورت است ؟</ WorkProcess_text>
        <WorkProcess_P>لطفا تمامی مراحل رابا دقت و به ترتیب انجام دهید</WorkProcess_P>
        </ WorkProcess_PARENT>
         <WorkProcessBoxes/>
        </>
    )
}
export default WorkProcess;