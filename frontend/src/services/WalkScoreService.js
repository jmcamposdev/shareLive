const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_WALKSCORE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'walk-score.p.rapidapi.com'
  }
}
const WalkScoreService = {
  getWalkScore: async (lat, lon) => {
    if (!lat || !lon) return null

    try {
      const response = await fetch(`https://walk-score.p.rapidapi.com/score?lat=${lat}&wsapikey=74f66e2c7d5e3b66c8de7699c8b97bd0&lon=${lon}&format=json&bike=1&transit=1`,
        options)
      const data = await response.json()

      const walkScore = data.walkscore ? data.walkscore : 'No score available'
      const transitScore = data.transit ? data.transit.score : 'No score available'
      const bikeScore = data.bike ? data.bike.score : 'No score available'
      return {
        walk: walkScore,
        transit: transitScore,
        bike: bikeScore
      }
    } catch (error) {
      console.error('Error fetching walk score:', error)
      throw error
    }
  }
}

export default WalkScoreService
