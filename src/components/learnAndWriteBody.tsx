import React from 'react';

const learnAndWriteBody: React.FC = () => {
  return (
    <div className='learnAndWriteBodyCss'>
      <div className='learnAndWriteBodyWrapCss'>
        <div className='learnAndWriteBodyTitleCss'>Project</div>
        <div className='learnAndWriteBodyButtonWrapCss'>
          <div>
            <button className='learnAndWriteBodyButtonCss'>KDT-C</button>
            <div className='learnAndWriteBodyTextCss'>요리 레시피</div>
          </div>
          <div>
            <button className='learnAndWriteBodyButtonCss'>KDT-A</button>
            <div className='learnAndWriteBodyTextCss'>주식</div>
          </div>
          <div>
            <button className='learnAndWriteBodyButtonCss'>KDT-B</button>
            <div className='learnAndWriteBodyTextCss'>버스</div>
          </div>
        </div>
        <div className='learnAndWriteBodyGithubWrapCss'>
          <div>Github url : </div>
          <div>바뀔내용</div>
        </div>
        <div className='learnAndWriteBodyNotionWrapCss'>
          <div>Notion url : </div>
          <div>바뀔내용</div>
        </div>
        <div className='learnAndWriteBodyRecipeImageWrapCss'>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default learnAndWriteBody;