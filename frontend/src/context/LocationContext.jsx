import React, { createContext, useContext, useState, useEffect } from 'react'
import LocationService from '../services/LocationService'

// Creamos un contexto para almacenar la información de localización
const LocationContext = createContext()

// Proveedor de localización que obtiene los datos de la ubicación al montar
export const LocationProvider = ({ children }) => {
  const [locationData, setLocationData] = useState(null)

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // Fetch the location from the server
        const locationData = await LocationService.getLocation()
        // Save the location in the state
        setLocationData(locationData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchLocation()
  }, [])

  return (
    <LocationContext.Provider value={locationData}>
      {children}
    </LocationContext.Provider>
  )
}

// Hook personalizado para acceder al contexto de localización
export const useLocation = () => useContext(LocationContext)
