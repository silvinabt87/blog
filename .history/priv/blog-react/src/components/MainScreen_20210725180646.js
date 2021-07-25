import React from 'react';
import { useEffect } from 'react';
import { useAsync } from '../hooks/useAsync';
import {useDispatch} from 'react-redux';

const bringPosts=async id=>{
  const requestOptions = {
    method: 'GET',
  };
  const response =  (await fetch('http://localhost:4000/api/posts/', requestOptions))
  return response;
}

const MainScreen=()=>{
  const dispatch=useDispatch()
  const [{ result: posts }, callBringPosts] = useAsync(bringPosts);

  useEffect(() => {
    dispatch(callBringPosts())
    });

  return(
  <div>
    <div>This Is My Blog</div>
  <div>{posts}</div>
  </div>)
}

export default MainScreen