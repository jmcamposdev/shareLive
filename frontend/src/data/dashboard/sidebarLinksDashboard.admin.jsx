export default [
  {
    title: 'MAIN',
    items: [
      {
        href: '/dashboard',
        icon: <svg style={{ transform: 'scale(0.9) translateX(-2px)' }} className='fillVector' strokeWidth='0.01' xmlns='http://www.w3.org/2000/svg' width='19' height='19' viewBox='0 0 20 20' fill='none'><path className='!stroke-none fill-black dark:fill-white' d='M10 20C4.48539 20 0 15.5144 0 10C0 4.48562 4.48562 0 10 0C15.5144 0 20 4.48562 20 10C20 15.5144 15.5144 20 10 20ZM10 1.1236C5.10517 1.1236 1.1236 5.10535 1.1236 10C1.1236 14.8947 5.10535 18.8764 10 18.8764C14.8947 18.8764 18.8764 14.8947 18.8764 10C18.8764 5.10535 14.8947 1.1236 10 1.1236Z' fill='black' /><path className='!stroke-none fill-black dark:fill-white' d='M6.91129 13.6538C6.76382 13.6538 6.62337 13.5959 6.51628 13.487C6.35827 13.329 6.30911 13.092 6.38987 12.8849L8.13845 8.45369C8.19639 8.30973 8.30875 8.19386 8.45271 8.13943L12.8839 6.39085C13.0911 6.31009 13.3281 6.35925 13.4861 6.51725C13.6441 6.67526 13.6932 6.91227 13.6125 7.11941L11.8639 11.5506C11.8059 11.6946 11.6936 11.8104 11.5496 11.8649L7.11843 13.6134C7.04645 13.6415 6.97976 13.6538 6.91129 13.6538ZM9.09178 9.09292L7.91026 12.095L10.9124 10.9135L12.0939 7.91139L9.09178 9.09292Z' /></svg>,
        text: 'Dashboard'
      },
      {
        href: '/dashboard/users',
        icon: <svg xmlns='http://www.w3.org/2000/svg' width='22' height='17' viewBox='0 0 22 17' fill='none' stroke='none'><path className='dark:stroke-white' d='M9.00039 8.50005C7.67491 8.50005 6.60039 7.42556 6.60039 6.10012C6.60039 4.77468 7.67491 3.7002 9.00039 3.7002C10.3259 3.7002 11.4004 4.77468 11.4004 6.10012C11.4004 7.42556 10.3259 8.50005 9.00039 8.50005Z' stroke='inherit' fill='none' /><path className='dark:stroke-white' d='M4.22339 14.8998C4.35139 12.5862 5.05939 10.8999 8.99939 10.8999C12.9394 10.8999 13.6474 12.5862 13.7754 14.8998' stroke='inherit' fill='none' strokeLinecap='round' /><path className='dark:stroke-white' d='M13 1.57062C11.7844 0.867363 10.4044 0.49809 9 0.500254C4.5816 0.500254 1 4.08174 1 8.5C1 12.9183 4.5816 16.4998 9 16.4998C13.4184 16.4998 17 12.9183 17 8.5' stroke='inherit' fill='none' strokeLinecap='round' /><path className='dark:stroke-white' d='M18.9967 6.16691L21.3301 8.50024M17.0523 6.94469C15.5489 6.94469 14.3301 5.72591 14.3301 4.22247C14.3301 2.71903 15.5489 1.50024 17.0523 1.50024C18.5557 1.50024 19.7745 2.71903 19.7745 4.22247C19.7745 5.72591 18.5557 6.94469 17.0523 6.94469Z' stroke='inherit' fill='none' strokeLinecap='round' strokeLinejoin='round' /></svg>,
        text: 'Search Users'
      },
      {
        href: '/dashboard/users/add',
        icon: <svg className='strokeVector' xmlns='http://www.w3.org/2000/svg' width='22' height='17' viewBox='0 0 22 17' fill='none' stroke='none'><path className='dark:stroke-white' d='M9.00039 8.50005C7.67491 8.50005 6.60039 7.42556 6.60039 6.10012C6.60039 4.77468 7.67491 3.7002 9.00039 3.7002C10.3259 3.7002 11.4004 4.77468 11.4004 6.10012C11.4004 7.42556 10.3259 8.50005 9.00039 8.50005Z' stroke='inherit' fill='none' /><path className='dark:stroke-white' d='M4.22339 14.8998C4.35139 12.5862 5.05939 10.8999 8.99939 10.8999C12.9394 10.8999 13.6474 12.5862 13.7754 14.8998' stroke='inherit' fill='none' strokeLinecap='round' /><path className='dark:stroke-white' d='M13 1.57062C11.7844 0.867363 10.4044 0.49809 9 0.500254C4.5816 0.500254 1 4.08174 1 8.5C1 12.9183 4.5816 16.4998 9 16.4998C13.4184 16.4998 17 12.9183 17 8.5' stroke='inherit' fill='none' strokeLinecap='round' /><path d='M13.1992 5.1001H18.1992M15.6992 2.6001V7.6001' style={{ transform: 'translateY(-1px)' }} stroke='black' strokeLinecap='round' strokeLinejoin='round' /></svg>,
        text: 'Create User'
      },
      {
        href: '/dashboard/rooms',
        icon: <svg xmlns='http://www.w3.org/2000/svg' width='20' height='17' viewBox='0 0 20 17' fill='none'><path className='dark:stroke-white' fill='none' d='M7 13.575H13' stroke='inherit' strokeLinecap='round' strokeLinejoin='round' /><path className='dark:stroke-white' fill='none' d='M16.6667 5.74162L19 8.07495M14.7222 6.5194C13.2188 6.5194 12 5.30062 12 3.79717C12 2.29373 13.2188 1.07495 14.7222 1.07495C16.2257 1.07495 17.4444 2.29373 17.4444 3.79717C17.4444 5.30062 16.2257 6.5194 14.7222 6.5194Z' stroke='inherit' strokeLinecap='round' strokeLinejoin='round' /><path className='dark:stroke-white' fill='none' d='M17 8.57504V11.9264C17 13.3809 17 14.1082 16.6789 14.6637C16.3966 15.1524 15.946 15.5498 15.3918 15.7988C14.7617 16.0819 13.9369 16.0819 12.2873 16.0819H7.96727C6.31766 16.0819 5.49286 16.0819 4.86279 15.7988C4.30857 15.5498 3.85797 15.1524 3.57558 14.6637C3.25455 14.1082 3.25455 13.3809 3.25455 11.9264V6.36616M11.095 1.0627C10.4676 0.87001 9.78462 0.870054 9.15714 1.06282C8.44277 1.28229 7.83631 1.87658 6.6233 3.06518L1 8.50003' stroke='inherit' strokeLinecap='round' strokeLinejoin='round' /></svg>,
        text: 'Search Rooms'
      },
      {
        href: '/dashboard/favourites',
        icon: <svg width='16' height='14' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg' className='!fill-none'><path className='stroke-dark dark:stroke-white' d='M8.9101 1.51106L7.84998 2.57717L6.78986 1.52004C6.12216 0.938605 5.25866 0.632268 4.37381 0.66292C3.48896 0.693572 2.64872 1.05893 2.02285 1.68518C1.39699 2.31143 1.03214 3.15188 1.00202 4.03675C0.971909 4.92162 1.27877 5.78493 1.86061 6.45229L2.92073 7.5124L5.39135 9.98302L7.84998 12.4596L10.3206 9.98901L12.7912 7.51839L13.8393 6.45229C14.4713 5.79231 14.8197 4.91106 14.8098 3.99735C14.7999 3.08363 14.4325 2.21014 13.7864 1.56401C13.1403 0.917876 12.2668 0.550508 11.3531 0.540611C10.4393 0.530713 9.55809 0.879075 8.89812 1.51106H8.9101Z' strokeWidth='0.8' /></svg>,
        text: 'My favorites'
      },
      {
        href: '/dashboard/messages',
        icon: <svg style={{ transform: 'scale(0.96' }} className='fillVector' xmlns='http://www.w3.org/2000/svg' width='16' height='13' viewBox='0 0 16 13' fill='none'><path strokeWidth='0.01' d='M14.5085 0.127197H1.49153C0.668203 0.128282 0.00108475 0.795401 0 1.61872V11.3814C0.00108475 12.2048 0.668203 12.8719 1.49153 12.873H14.5085C15.3318 12.8719 15.9989 12.2048 16 11.3814V1.61872C15.9989 0.795401 15.3318 0.128282 14.5085 0.127197ZM1.49153 0.940757H14.5085C14.8138 0.943468 15.0704 1.15011 15.1485 1.43106L15.1496 1.43594L8 6.54293L0.813559 1.49939C0.892746 1.21356 1.18671 0.943468 1.49153 0.940757ZM14.5085 12.0594H1.49153C1.11729 12.0589 0.814102 11.7557 0.813559 11.3814V2.40896L7.76353 7.3733C7.77112 7.37872 7.78088 7.37655 7.78847 7.38143C7.84705 7.42103 7.91864 7.44543 7.99566 7.44815L7.99892 7.44923H8L8.00271 7.44815C8.08027 7.44543 8.15187 7.42048 8.21207 7.38035L8.21044 7.38143C8.21803 7.37655 8.2278 7.37872 8.23539 7.3733L15.1854 2.40896V11.3814C15.1848 11.7557 14.8816 12.0589 14.5074 12.0594H14.5085Z' /></svg>,
        text: 'Messages'
      }
    ]
  },

  {
    title: 'MANAGE ACCOUNT',
    items: [
      {
        href: '/dashboard/profile',
        icon: <svg xmlns='http://www.w3.org/2000/svg' width='18' height='17' viewBox='0 0 18 17' fill='none' stroke='none'><path className='dark:stroke-white' d='M9.09698 9.12405C9.04098 9.11605 8.96898 9.11605 8.90498 9.12405C7.49698 9.07605 6.37695 7.92405 6.37695 6.50803C6.37695 5.06003 7.54498 3.88403 9.00098 3.88403C10.449 3.88403 11.625 5.06003 11.625 6.50803C11.617 7.92405 10.505 9.07605 9.09698 9.12405Z' stroke='inherit' fill='none' strokeLinecap='round' strokeLinejoin='round' /><path className='dark:stroke-white' d='M14.3914 14.404C12.9674 15.708 11.0794 16.5 8.99941 16.5C6.91942 16.5 5.03142 15.708 3.60742 14.404C3.68742 13.652 4.16742 12.916 5.02342 12.34C7.21542 10.884 10.7994 10.884 12.9754 12.34C13.8314 12.916 14.3114 13.652 14.3914 14.404Z' stroke='inherit' fill='none' strokeLinecap='round' strokeLinejoin='round' /><path className='dark:stroke-white' d='M9 16.5C13.4182 16.5 17 12.9182 17 8.5C17 4.08172 13.4182 0.5 9 0.5C4.58172 0.5 1 4.08172 1 8.5C1 12.9182 4.58172 16.5 9 16.5Z' stroke='inherit' fill='none' strokeLinecap='round' strokeLinejoin='round' /></svg>,
        text: 'My Profile'
      },
      {
        href: '/logout',
        icon: <svg xmlns='http://www.w3.org/2000/svg' width='18' height='17' viewBox='0 0 18 17' fill='none' stroke='none'><path d='M11.3999 8.50056H1M1 8.50056L3.79997 6.10059M1 8.50056L3.79997 10.9005' stroke='#F1416C' fill='none' strokeLinecap='round' strokeLinejoin='round' /><path d='M6.60156 4.50069C6.61125 2.76069 6.68841 1.81837 7.30311 1.20367C8.00607 0.500732 9.13742 0.500732 11.4001 0.500732H12.2001C14.4628 0.500732 15.5942 0.500732 16.2971 1.20367C17.0001 1.90661 17.0001 3.03796 17.0001 5.30068V11.7006C17.0001 13.9633 17.0001 15.0947 16.2971 15.7976C15.6824 16.4123 14.7401 16.4895 12.9999 16.4992M6.60156 12.5006C6.61125 14.2406 6.68841 15.1829 7.30311 15.7976C7.81615 16.3107 8.55734 16.4493 9.79997 16.4867' stroke='#F1416C' fill='none' strokeLinecap='round' /></svg>,
        text: 'Log out',
        className: 'logout-btn dark:!bg-red-700/10 dark:hover:!bg-red-600/20'
      }
    ]
  }
]
