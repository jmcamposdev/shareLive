const WhyChooseFeatures = ({ features }) => {
  return (
    <>
      {features.map((feature, index) => (
        <div className='list-one d-flex align-items-start mb30' key={index}>
          <span className={`list-icon flex-shrink-0 ${feature.icon}`} />
          <div className='list-content flex-grow-1 ml20'>
            <h6 className='mb-1'>{feature.title}</h6>
            <p className='text mb-0 fz15'>{feature.description}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default WhyChooseFeatures
