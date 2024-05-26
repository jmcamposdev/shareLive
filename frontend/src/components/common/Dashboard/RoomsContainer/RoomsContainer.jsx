const RoomsContainer = ({ children, classname }) => {
  return (
    <div className={`w-full flex-wrap flex gap-5 ${classname ?? ''}`}>
      {children}
    </div>
  )
}

export default RoomsContainer
