import React from 'react'
import Button from './Button'
import {ButtonStyles1, ButtonStyles2, ButtonStyles3} from './data';

const App = () => {
  return  <div className="main">
            <h2>Button Types</h2>
            <div className='btn-group-div'>
              <div className='btn-group'>
                {ButtonStyles1.map(button => <Button {...button} />)}
              </div>
            </div>  
              <h2>Button Sizes</h2>
            <div className='btn-group-div'>
              <div className='btn-group'>
              {ButtonStyles2.map(button => <Button {...button} />)}
              </div>
            </div>
              <h2>Button with Icon</h2>
            <div className='btn-group-div'>
              <div className='btn-group'>
              {ButtonStyles3.map(button => <Button {...button} />)}
              </div>
            </div>
          </div>;

}

export default App
