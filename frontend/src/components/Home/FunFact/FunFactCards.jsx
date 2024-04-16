import { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'

const FunFactCards = ({ funFacts }) => {
  // Split the funFacts array into two arrays: firstTwoFacts and remainingFacts
  const firstTwoFacts = funFacts.slice(0, 2)
  const remainingFacts = funFacts.slice(2)
  return (
    <>
      <div className='sm:w-1/2 pr-4 pl-4 flex-grow'>
        {firstTwoFacts.map((fact, index) => (
          <div className='funfact-style1 text-center rounded-md dark:bg-lightmidnight' key={index}>
            <ul className='ps-0 mb-0 flex justify-center'>
              <li>
                <div className='timer title mb15 dark:!text-white'>
                  <CounterWithAnimation end={fact.number} />+
                </div>
              </li>
            </ul>
            <p className='fz15 dark-color dark:text-white'>{fact.text}</p>
          </div>
        ))}
      </div>
      <div className='sm:w-1/2 pr-4 pl-4 flex-grow'>
        {remainingFacts.map((fact, index) => (
          <div className='funfact-style1 text-center rounded-md dark:bg-lightmidnight' key={index}>
            <ul className='ps-0 mb-0 flex justify-center'>
              <li>
                <div className='timer title mb15 dark:text-white'>
                  <CounterWithAnimation end={fact.number} />+
                </div>
              </li>
            </ul>
            <p className='fz15 dark-color dark:text-white'>{fact.text}</p>
          </div>
        ))}
      </div>
    </>
  )
}

const CounterWithAnimation = ({ end }) => {
  const countRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
      }
    }, options)

    const currentRef = countRef.current // Create a local variable

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <span ref={countRef}>
      {inView
        ? (
          <CountUp
            end={end}
            duration={2}
            separator=','
          />
          )
        : (
            '0'
          )}
    </span>
  )
}

export default FunFactCards
