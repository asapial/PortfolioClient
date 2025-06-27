import React from 'react';

const ShadowCard = ({children}) => {
    return (
        <div className='shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] p-10 rounded-lg'>
            {children}
        </div>
    );
};

export default ShadowCard;