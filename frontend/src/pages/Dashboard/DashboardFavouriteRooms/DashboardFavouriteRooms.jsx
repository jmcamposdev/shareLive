import DashboardLayout from '../../../layout/DashboardLayout'
import Rooms from '../../../data/roomsItems'
import TitleDashboard from '../../../components/common/Dashboard/TitleDashboard/TitleDashboard'
import RoomsContainer from '../../../components/common/Dashboard/RoomsContainer/RoomsContainer'
import RoomSmall from '../../../components/common/Room/RoomSmall/RoomSmall'
import RoomSmallSkeleton from '../../../components/common/Room/RoomSmall/RoomsSmallSkeleton'
import Selector from '../../../components/common/Inputs/Selector'

const DashboardFavouriteRooms = (loading) => {
  const skeletonItems = Array.from({ length: 8 }, (_, index) => <RoomSmallSkeleton key={index} />)
  return (

    <DashboardLayout>
      <div className='flex justify-between items-center 2xl:mb30 mt-56 2xl:mt-0'>
        <TitleDashboard title='Your favourite Rooms' subtitle='Search your favourite rooms here.' />

        <div className='flex gap-4'>
          <div className='item1 mb15-sm'>
            <div className='search_area  z-40 w-[100dvw] lg:w-[calc(100dvw-300px)] 2xl:w-fit top-[65px] lg:top-[92px] rounded-b-lg bg-white dark:bg-midnight py-4 px-5 box-border 2xl:bg-transparent 2xl:dark:bg-transparent !right-0 !fixed 2xl:!relative 2xl:!top-0 !rounded-none'>
              <input
                type='text'
                className='form-control bdrs12 dark:bg-midnight dark:!border-borderColor/20 dark:placeholder:text-borderColor/40 dark:text-white dark:outline-white placeholder:text-[#212529bf]'
                placeholder='Search Rooms'
              />
              <label className='!absolute !left-[36px] !top-[34px] 2xl:relative'>
                <span className='flaticon-search dark:text-white' />
              </label>
            </div>
          </div>
        </div>

      </div>
      <RoomsContainer>
        {/*
        Dejo aquí el selector para seleccionar los items por página de la
        paginación como con la tabla, lo he dejado importado
          <Selector />
        */}
        {
          !loading
            ? (skeletonItems)
            : Rooms.length > 0
              ? Rooms.map((room) => (
                <RoomSmall key={room._id} room={room} onEdit={1} onDelete={1} />
              ))
              : <>
                <div className='min-h-[40dvh] w-full flex items-center justify-center'>
                  <h3 className='black:text-white'>No rooms favourited yet...</h3>
                </div>
                </>

        }

        {/*
            Aquí puede ir la paginación, si quieres que se vea bien tienes que
            Envolverla en un div que tenga de ancho 100% para que haga wrap y le puedes
            poner a ese div un margin top si quieres separarlo mas
        */}

      </RoomsContainer>

      {/* Si pones la paginación aquí no seria necesario lo del div */}
    </DashboardLayout>
  )
}

export default DashboardFavouriteRooms
