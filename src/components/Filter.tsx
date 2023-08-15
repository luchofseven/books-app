import { useState, useEffect } from 'react'
import { getGenres } from '../services/data'
import { type IFilter } from '../types'

export default function Filter ({
  setSelectedGenre,
  reset
}: IFilter): JSX.Element {
  const [availableGenres, setAvailableGenres] = useState<string[]>([])

  useEffect(() => {
    const getGenresData = async (): Promise<void> => {
      const genres = await getGenres()
      setAvailableGenres(genres)
    }

    getGenresData()
  }, [])

  const handleGenreChange = (genre: string): void => {
    setSelectedGenre(genre)
  }

  return (
    <section className="filters-section">
      <aside>
        <label htmlFor="genre-filter">
          <small>Filtrar por género</small>
          <select
            id="genre-filter"
            defaultValue="All"
            onChange={(e) => {
              handleGenreChange(e.target.value)
            }}
          >
            <option value="All">Todos</option>
            {availableGenres?.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </label>
        <button onClick={reset}>Reset</button>
      </aside>
    </section>
  )
}
