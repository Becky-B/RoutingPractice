import React from 'react';
import {Link, navigate} from '@reach/router';

const String_Num = ({param}) => {
    let num = true;
    if(isNaN(param)){
        num = false;
    }

    return(
        <div>
            {
                num ?
                    <h1>The Number is: {param}</h1>:
                    <h1>The Word is: {param}</h1>
            }
        </div>
    )
};
export default String_Num;