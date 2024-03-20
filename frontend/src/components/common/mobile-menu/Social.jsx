const Social = () => {
  const socialLinks = [
    {
      id: 1,
      iconClass: 'fab fa-facebook-f',
      href: '#'
    },
    {
      id: 2,
      iconClass: 'fab fa-twitter',
      href: '#'
    },
    {
      id: 3,
      iconClass: 'fab fa-instagram',
      href: '#'
    },
    {
      id: 4,
      iconClass: 'fab fa-linkedin-in',
      href: '#'
    }
  ]

  return (
    <>
      {socialLinks.map((link) => (
        <a className='me-3' href={link.href} key={link.id}>
          <i className={link.iconClass} />
        </a>
      ))}
    </>
  )
}

export default Social
