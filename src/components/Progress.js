import React from 'react';
import { Link, Router } from 'react-router-dom';

    const Progress = ({ location: { pathname } }) => {
        const isPersonalDetails = pathname === '/';
        const isBusinessDetails = pathname === '/second';
        const isLoanDetails = pathname === '/third';
      
        return (
          <React.Fragment>
            <div className="steps">
              <div className={`${isPersonalDetails ? 'step active' : 'step'}`}>
                <div>1</div>
                <div>
                  {isBusinessDetails || isLoanDetails ? (
                    <Link to="/">Step 1</Link>
                  ) : (
                    'Step 1'
                  )}
                </div>
              </div>
              <div className={`${isBusinessDetails ? 'step active' : 'step'}`}>
                <div>2</div>
                <div>{isLoanDetails ? <Link to="/second">Step 2</Link> : 'Step 2'}</div>
              </div>
              <div className={`${pathname === '/third' ? 'step active' : 'step'}`}>
                <div>3</div>
                <div>Step 3</div>
              </div>
            </div>
          </React.Fragment>
        );
      };
 

export default Router(Progress);