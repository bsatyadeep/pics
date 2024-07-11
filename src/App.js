import React, { useState } from 'react';
import searchImages from './api';
import SearchBar from './components/search-bar';
import ImageList from './components/image-list';

function App () {
  const [images, setImages] = useState([]);
  
  const handleSearchSubmit = async (term) => {
    console.log(`Search Images for: ${term}`);
    const result = await searchImages(term);
    console.log(result.length);
    setImages(result);
  }

  return (
    <div>
      <SearchBar 
        onSubmit={handleSearchSubmit}></SearchBar>
        
      <ImageList
        images={images}></ImageList>
    </div>
  );
}
export default App;