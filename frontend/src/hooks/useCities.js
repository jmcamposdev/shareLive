import { useEffect, useRef, useState } from 'react'
import RadarService from '../services/RadarService'

const useCities = ({ searchValue }) => {
  const lastSearchValue = useRef(searchValue)
  const [cities, setCities] = useState([])
  const [citiesLoading, setCitiesLoading] = useState(false)

  useEffect(() => {
    if (searchValue.length < 3) return
    if (searchValue.trim() === lastSearchValue.current.trim()) return

    lastSearchValue.current = searchValue

    const fetchCities = async () => {
      try {
        setCitiesLoading(true)
        // Fetch the cities from the server
        const citiesData = await RadarService.getAutocomplete(searchValue)
        // Save the cities in the state
        setCities(citiesData.addresses || [])
        // Set the loading state to false
        setCitiesLoading(false)
      } catch (error) {
        // If there's an error, set the error message
        // toast.showError(error.message)
        setCitiesLoading(false)
      }
    }

    fetchCities()
  }, [searchValue])

  return { cities, citiesLoading }
}

export default useCities
