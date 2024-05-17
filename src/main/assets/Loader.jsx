import React from 'react';
import ReactLoading from 'react-loading';
 
const Loader = ({ type, color,size }) => (
    <ReactLoading type={'spokes'} color={color||'#888'} height={size||100} width={size||100} />
);
 
export default Loader;