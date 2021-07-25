import React from 'react'
import { useAsync } from '../hooks/useAsyncs';

const bringPosts=async id=>{
  const requestOptions = {
    method: 'GET',
  };
  const response = await (await fetch('http://localhost:4000/api/posts/', requestOptions)).json();
  return response;
}

const MainScreen=()=>{
  const [{ isLoading, result: potentialMatches, error }, callBringPosts] = useAsync(bringPotentialMatches);
  const applicationId = match.params.id;
  let pageContent;

  useEffect(() => {
    dispatch(selectApplication({ applicationId }));
    if (applicationId) {
      callBringPosts();
    }
  }, [applicationId, selectApplication]);
  return(
  <div>
    <div>This Is My Blog</div>
  <div></div>
  </div>)
}

export default MainScreen