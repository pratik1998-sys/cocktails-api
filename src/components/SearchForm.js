import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  return (
    <section className='section search'>
      <form onSubmit={(event) => handleSubmit(event)} className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>search your fovorite drink</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
