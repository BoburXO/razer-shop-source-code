import React from 'react';
import "../Thunk"

const FixedBtn = () => {
    return (
        <div className='storeFix'>
            <a href="#storeHeader">
                <button className='fixedBtn'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18"/>
                    </svg>
                </button>
            </a>
        </div>
    );
};

export default FixedBtn;