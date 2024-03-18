import React from 'react'

const ContactMeta = () => {
  const contactInfoList = [
    {
      title: 'Total Free Customer Care',
      phone: '+(0) 123 050 945 02',
      phoneLink: 'tel:+012305094502' // Changed phoneLink to tel: URI
    },
    {
      title: 'Need Live Support?',
      mail: 'hi@homez.com',
      mailLink: 'mailto:hi@homez.com' // Changed mailLink to direct email address
    }
  ]

  return (
    <div className='flex flex-wrap  mb-4 lg:mb-12'>
      {contactInfoList.map((contact, index) => (
        <div className='col-auto' key={index}>
          <div className='contact-info'>
            <p className='info-title'>{contact.title}</p>
            {contact.phone && (
              <h6 className='info-phone'>
                <a href={contact.phoneLink}>{contact.phone}</a>
              </h6>
            )}
            {contact.mail && (
              <h6 className='info-mail'>
                <a href={contact.mailLink}>{contact.mail}</a>
              </h6>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ContactMeta
