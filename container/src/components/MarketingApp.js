import {mount} from 'marketing/MarketingApp';
import React , {useRef , useEffect} from 'react';


export default () =>{
    const ref =  useRef(null);

    useEffect(()=>{
        mount(ref.current);
        console.log('use effects of container')
    })

    return  <div ref={ref} />
}