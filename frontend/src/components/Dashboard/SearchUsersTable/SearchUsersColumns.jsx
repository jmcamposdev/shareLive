import { Link } from 'react-router-dom'
import { formatDate } from '../../../utils/formatDate'
import DefaultAvatar from '../../../assets/img/users/defaultAvatar.jpg'

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
                <p className='dark:text-white font-bold text-lg m-0'>
                  {`${user.firstName} ${user.lastName}`}
                </p>
                <p className='dark:text-white m-0 flex flex-wrap gap-2 items-center'>
                  <span className='font-medium text-base'>ID</span>
                  <span className='font-normal text-base'>{user._id}</span>
                </p>
              </div>

              <div style={{ backgroundImage: `url("${user.avatar || DefaultAvatar}")` }} className='h-[65px] aspect-square rounded-full shrink-0 block bg-cover mb-[20px]'>
                <Link to={`/users/${user._id}`} className='h-full aspect-square block' />
              </div>

            </div>

            <div className='w-full flex flex-col gap-[10px]'>

              <p className='dark:text-white m-0 flex flex-wrap gap-2 items-center  w-full justify-between'>
                <span className='font-medium text-base text-slate-700 dark:text-slate-300'>Joined:</span>
                <span className='font-normal text-base'>{formatDate(user.joinDate)}</span>
              </p>

              <p className='dark:text-white m-0 flex flex-wrap gap-2 items-center  w-full justify-between'>
                <span className='font-medium text-base text-slate-700 dark:text-slate-300'>Email:</span>
                <span className='font-normal text-base'>{user.email}</span>
              </p>

              <p className='dark:text-white m-0 flex flex-wrap gap-2 items-center  w-full justify-between'>
                <span className='font-medium text-base text-slate-700 dark:text-slate-300'>Roles:</span>
                <span className='font-normal text-base'>{user.roles.join(', ')}</span>
              </p>

            </div>
          </div>
          <div className='listing-style1 dashboard-style d-xxl-flex align-items-center !mb-0 dark:bg-midnight hidden 2xl:table-cell'>
            <div className='list-thumb !rounded-full overflow-hidden h-[90px] w-[90px]'>
              <img className='w-full h-full object-fill' src={user.avatar || DefaultAvatar} alt={`Avatar of user ${user.firstName} ${user.lastName}`} />
            </div>
            <div className='list-content py-0 p-0 mt-2 mt-xxl-0 ps-xxl-4'>
              <div className='h6 list-title'>
                <Link to={`/users/${user._id}`} className='dark:text-white dark:hover:!text-orangePrimary'>
                  {`${user.firstName} ${user.lastName}`}
                </Link>
              </div>
              <p className='list-text mb-0'>{user.roles.join(', ')}</p>
              <div className='list-price dark:bg-midnight'>
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
