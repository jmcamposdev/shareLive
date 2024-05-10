import React, { useState } from 'react'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import useAlertToast from '../../../hooks/useToast'
import { useRoomSingle } from '../../../context/RoomSingleContext'
import UserService from '../../../services/UserService'
import useSignIn from 'react-auth-kit/hooks/useSignIn'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

const PropertyHeader = ({ title, address, price }) => {
  const signIn = useSignIn()
  const { toast } = useAlertToast()
  const { room } = useRoomSingle()
  const user = useAuthUser()
  const authHeader = useAuthHeader()
  const [favouriteLoading, setFavouriteLoading] = useState(false)
  const [isRoomFavourite, setIsRoomFavourite] = useState(user && user.favouriteRoomsIds.includes(room._id))

  const handleFavourite = async () => {
    if (!user) {
      toast.showError('Please login to add to favourites')
    } else {
      setFavouriteLoading(true)
      try {
        const updatedUser = await UserService.toggleFavoriteRoom(user._id, room._id)
        signIn({
          auth: {
            token: authHeader.split(' ')[1],
            type: authHeader.split(' ')[0]
          },
          userState: { ...updatedUser }
        })
        setIsRoomFavourite(!isRoomFavourite)
        setFavouriteLoading(false)
      } catch (error) {
        console.log(error)
        toast.showError('Error adding to favourites')
      }
    }
  }
  return (
    <>
      <div className='flex-[0_0_auto] w-full md:w-2/3 px-[12px] '>
        <div className='single-property-content mb30-md'>
          <h2 className='sp-lg-title dark:text-white'>{title}</h2>
          <div className='pd-meta mb15 d-md-flex align-items-center'>
            <p className='text fz15 mb-0 pr10 bdrrn-sm dark:text-white'>
              {address}
            </p>
          </div>
        </div>
      </div>
      {/* End .col-lg--8 */}

      <div className='flex-[0_0_auto] w-full md:w-1/3 px-[12px]'>
        <div className='single-property-content'>
          <div className='property-action lg:text-right'>
            <div className='flex mb-[20px] mb10-md items-center justify-start lg:justify-end'>
              <button
                disabled={favouriteLoading}
                onClick={handleFavourite}
                className={`!flex justify-center items-center icon mr-[10px] !leading-[40px] dark:bg-midnight dark:!border-none  dark:hover:!bg-orangePrimary/10 ${isRoomFavourite ? 'text-red-500' : ''}`}
              >
                <span className={`fa-heart dark:text-white ${isRoomFavourite ? 'text-red-500 fa-solid' : 'fa-light'}`} />
              </button>
              <a className='icon mr-[10px] !leading-[40px] dark:bg-midnight dark:!border-none  dark:hover:!bg-orangePrimary/10' href='#'>
                <span className='flaticon-share-1 dark:text-white' />
              </a>
            </div>
            <h3 className='price mb15 dark:text-white'>${price} / month</h3>
          </div>
        </div>
      </div>
      {/* End .col-lg--4 */}
    </>
  )
}

export default PropertyHeader
