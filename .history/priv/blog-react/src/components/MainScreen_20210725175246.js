import React from 'react'

const bringPosts=async=>{
  const requestOptions = {
    method: 'GET',
  };
  const response = await (await fetch(`${api_v1_base}/v2/parse/matches/${applicationId}`, requestOptions)).json();
  return response;
};
}
const MainScreen=()=>{
  return(
  <div>
    <div>This Is My Blog</div>
  <div></div>
  </div>)
}

export default MainScreen