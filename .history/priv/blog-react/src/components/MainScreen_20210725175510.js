import React from 'react'

const bringPosts=async id=>{
  const requestOptions = {
    method: 'GET',
  };
  const response = await (await fetch('http://localhost:4000/api/posts/', requestOptions)).json();
  return response;
}

const MainScreen=()=>{
  return(
  <div>
    <div>This Is My Blog</div>
  <div></div>
  </div>)
}

export default MainScreen