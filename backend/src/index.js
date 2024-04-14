import app from './app.js'

/**
 * Main function to start the server
 * @returns {Promise<void>}
 */
async function main () {
  const port = process.env.PORT || 3001
  try {
    // Start the server listening on port 3001
    app.listen(port, () => {
      // Know that the server is running
      console.log('Server listening on port', port)
    })
  } catch (e) {
    console.error(e)
  }
}

// Execute the server
main()
