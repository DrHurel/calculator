import React from 'react';

export function Key({ action, value }) {


  return <div><button onClick={action} >{value}</button></div>
}