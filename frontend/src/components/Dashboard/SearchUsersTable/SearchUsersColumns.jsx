import { Link } from 'react-router-dom'
import { formatDate } from '../../../utils/formatDate'
import DefaultAvatar from '../../../assets/img/users/defaultAvatar.jpg'
const searchUsersColumns = [
  {
    header: 'User',
    cell: (row) => {
      const user = row.cell.row.original
      return (
        <div className='listing-style1 dashboard-style d-xxl-flex align-items-center !mb-0 dark:bg-midnight'>
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
