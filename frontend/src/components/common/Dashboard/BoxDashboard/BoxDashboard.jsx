const BoxDashboard = ({ children, className }) => {
  return (
    <div className={`ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb-[30px] relative dark:bg-midnight ${className}`}>
      {children}
    </div>
  )
}
// ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 relative dark:bg-midnight
// ps-widget 2xl:bgc-white bdrs12 2xl:default-box-shadow2 2xl:p30 2xl:mb30 relative 2xl:dark:bg-midnight

export default BoxDashboard
