'use client'
import * as React from 'react';
import { parseRecipeData } from '../actions';
import AddToHomeScreen from "@/components/AddToHomeScreen/AddToHomeScreen";


export interface IAppProps {
  results: any
  onSearchResponse?: () => void
}

export function RecipeSearch (props: IAppProps) {
  const [value, setValue] = React.useState<string>('')

  const handleURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  async function handleParseURLData() {
    const response = await parseRecipeData(value)

    console.log(response)
  }

  return (
    <div className='recipe-search'>
      <h2 className="headline-2">Enter Recipe URL here</h2>
      <input className='recipe-search-input' type="search" placeholder="Enter a Recipe URL" onChange={handleURLChange} value={value} />
      <button className='button' onClick={handleParseURLData}>
        Get Recipe
      </button>
      <AddToHomeScreen />
    </div>
  );
}
