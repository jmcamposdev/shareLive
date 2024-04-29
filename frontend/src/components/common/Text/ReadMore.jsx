import React, { useState } from 'react'

const ReadMore = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div>
      <p className={`ReadMore-content ${isExpanded ? 'expanded' : ''}`}>
        {text.length > maxLength ? text.slice(0, maxLength) + (isExpanded ? '' : '...') : text}
      </p>
      {text.length > maxLength && (
        <button onClick={toggleExpand}>
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      )}
    </div>
  )
}

export default ReadMore
