import LoadingSkeleton from '../Loading/LoadingSkeleton'

const UserSocialsSkeleton = () => {
  const socialSkeletons = Array.from({ length: 4 }, (_, index) => (
    <LoadingSkeleton key={index} className='w-6 h-6' innerClasses='rounded-md shadow-sm' />
  ))

  return (
    <div className='agent-social flex gap-2'>
      {socialSkeletons}
    </div>
  )
}

export default UserSocialsSkeleton
