import { Link } from 'react-router-dom'
import { formatDate } from '../../../utils/formatDate'
import DefaultAvatar from '../../../assets/img/users/defaultAvatar.jpg'
import { toNormalCase } from '../../../utils/formatString'

const searchUsersColumns = [
  {
    header: 'User',
    cell: (row) => {
      const user = row.cell.row.original
      return (
        <>
          <div className='2xl:hidden pt-3'>
            <div className='w-full flex justify-between h-fit flex-wrap-reverse !mb-5'>
              <div className='grow shrink flex flex-col gap-1'>
                <p className='font-bold text-lg m-0 '>
                  <Link className='dark:text-white hover:text-orangePrimary dark:hover:text-orangePrimary' to={`/users/${user._id}`}>{`${user.firstName} ${user.lastName}`}</Link>
                </p>
                <p className='dark:text-white m-0 flex flex-wrap gap-2 items-center'>
                  <span className='font-medium text-base'>ID</span>
                  <span className='font-normal text-base'>{user._id}</span>
                </p>
              </div>

              <Link to={`/users/${user._id}`} className='h-[65px] aspect-square rounded-full shrink-0 block bg-cover mb-[20px] overflow-hidden group'>
                <img alt={`Avatar of user ${user.firstName} ${user.lastName}`} src={user.avatar || DefaultAvatar} className='transition-all duration-400 ease h-full aspect-square block group-hover:scale-110' />
              </Link>

            </div>

            <div className='w-full flex flex-col gap-[10px]'>

              <p className='dark:text-white m-0 flex flex-wrap gap-2 items-center  w-full justify-between'>
                <span className='font-medium text-base text-[#717171] '>Joined:</span>
                <span className='font-normal text-base'>{formatDate(user.joinDate)}</span>
              </p>

              <p className='dark:text-white m-0 flex flex-wrap gap-2 items-center  w-full justify-between'>
                <span className='font-medium text-base text-[#717171] '>Email:</span>
                <span className='font-normal text-base'>{user.email}</span>
              </p>

              <p className='dark:text-white m-0 flex flex-wrap gap-2 items-center  w-full justify-between'>
                <span className='font-medium text-base text-[#717171] '>Roles:</span>
                <span className='font-normal text-base'>{user.roles.map(role => toNormalCase(role.name)).join(', ')}</span>
              </p>

            </div>
          </div>
          <div className='listing-style1 dashboard-style d-xxl-flex align-items-center !mb-0 dark:bg-midnight hidden 2xl:table-cell !bg-transparent'>
            <Link to={`/users/${user._id}`} className='block group list-thumb !rounded-full overflow-hidden !h-[76px] !aspect-square !min-w-0 !min-h-0'>
              <img className='transition-all duration-400 ease group-hover:scale-110 w-full h-full object-fill' src={user.avatar || DefaultAvatar} alt={`Avatar of user ${user.firstName} ${user.lastName}`} />
            </Link>
            <div className='list-content py-0 p-0 mt-2 mt-xxl-0 ps-xxl-4 !pr-0'>
              <div className='h6 list-title'>
                <Link to={`/users/${user._id}`} className='dark:text-white dark:hover:!text-orangePrimary'>
                  {`${user.firstName} ${user.lastName}`}
                </Link>
              </div>
              <p className='list-text mb-0'>{user.roles.map(role => toNormalCase(role.name)).join(', ')}
              </p>
              <div className='list-price dark:bg-midnight bg-transparent'>
                <span className='dark:text-white font-normal'>{user.email}</span>
              </div>
            </div>
          </div>
        </>
      )
    }
  },
  {
    header: 'Id',
    accessorFn: (row) => row._id
  },
  {
    header: 'Joined',
    accessorFn: (row) => formatDate(row.joinDate)
  },
  {
    header: 'Name',
    accessorFn: (row) => `${row.firstName} ${row.lastName}`,
    hidden: true
  },
  {
    header: 'Roles',
    accessorFn: (row) => row.roles.join(' '),
    hidden: true
  },
  {
    header: 'Email',
    accessorFn: (row) => row.email,
    hidden: true
  }
]

export default searchUsersColumns
