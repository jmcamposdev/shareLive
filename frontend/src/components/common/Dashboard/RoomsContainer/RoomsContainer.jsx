const RoomsContainer = ({ children, classname }) => {
  return (
    <div className={`w-full flex-wrap flex gap-x-[12px] gap-y-[12px] ${classname}`}>
      {children}
    </div>
  )
}

export default RoomsContainer
