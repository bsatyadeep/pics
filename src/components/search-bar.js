import React,{ useState } from 'react';
import './search-bar.css';

function SearchBar (props) {
  const [term, setTerm] = useState('');

  const { onSubmit } = props;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  }
  const handleInputChange = (e) => {
    // setTerm(e.target.value.replace(/[a-z]/,''));
    setTerm(e.target.value.replace(/[0-9]/,''));
  }

  return (
    <div className='search-bar'>
      <form
        onSubmit={handleFormSubmit}>
        <label>
          Enter Search Term
        </label>
        <input 
          placeholder='Search Image'
          autoFocus={true}  
          name='term'
          id='term'
          value={term}
          onChange={handleInputChange} />
      </form>
    </div>
  );
}
export default SearchBar;