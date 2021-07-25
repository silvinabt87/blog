import React from 'react';
import { useEffect } from 'react';
import { useAsync } from '../hooks/useAsyncs';
import {useDispatch} from 'react-redux'

const bringPosts=async id=>{
  const requestOptions = {
    method: 'GET',
  };
  const response = await (await fetch('http://localhost:4000/api/posts/', requestOptions)).json();
  return response;
}

const MainScreen=()=>{
  const dispatch=useDispatch()
  const [{ isLoading, result: posts, error }, callBringPosts] = useAsync(bringPosts);


  useEffect(() => {
    dispatch(selectApplication({ applicationId }));
    if (applicationId) {
      callBringPosts();
    }
  }, [applicationId, selectApplication]);
  return(
  <div>
    <div>This Is My Blog</div>
  <div>{posts}</div>
  </div>)
}

export default MainScreen