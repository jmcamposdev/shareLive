import LoadingSkeleton from '../Loading/LoadingSkeleton'

const UserSocialsSkeleton = () => {
  const socials = Array.from({ length: 4 }, (_, index) => (
    <LoadingSkeleton key={index} className='w-7 h-7' />
  ))
  return (
    <div className='agent-social flex gap-3.5'>
      {socials}
    </div>
  )
}

export default UserSocialsSkeleton
