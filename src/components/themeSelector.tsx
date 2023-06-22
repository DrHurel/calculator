import React from 'react';
import { ThemeList } from '../lib/theme';

export function ThemeSelector() {


  return (<div>
    <input type="range" min={0} max={2} step={1} id="them-selector" defaultValue={0}


      onChange={(e) => {
        ThemeList[e.target.value].setTheme()
      }}
    />
    <label htmlFor="them-selector">1</label>
    <label htmlFor="them-selector">2</label>
    <label htmlFor="them-selector">3</label>
  </div>)

}