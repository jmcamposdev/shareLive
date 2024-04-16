const WhyChooseFeatures = ({ features }) => {
  return (
    <>
      {features.map((feature, index) => (
        <div className='list-one d-flex align-items-start mb30 group' key={index}>
          <span className={`list-icon flex-shrink-0 ${feature.icon} dark:!text-white dark:!bg-midnight group-hover:dark:!bg-orangePrimary`} />
          <div className='list-content flex-grow-1 ml20'>
            <h6 className='mb-1 dark:text-white'>{feature.title}</h6>
            <p className='text mb-0 fz15 dark:text-white'>{feature.description}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default WhyChooseFeatures
