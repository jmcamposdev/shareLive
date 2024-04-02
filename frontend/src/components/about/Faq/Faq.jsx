import FaqAccordion from './FaqAccordion'

const Faq = () => {
  const rentingQuestions = [
    {
      collapseNumber: 1,
      question: 'How can I list my room for rent on your platform?',
      answer: 'Listing your room is simple! Just sign up as a host on our website,  provide details about your property and the available room, upload some  photos, and set your rental terms. Once approved, your listing will be  visible to potential renters.'
    },
    {
      collapseNumber: 2,
      question: 'What kind of rooms are typically available for rent on your platform?',
      answer: 'We offer a variety of room types, including single rooms, shared rooms,  and apartments with multiple bedrooms. Whether you are looking for a cozy  private space or a shared living arrangement, you will find options that  suit your needs.'
    },
    {
      collapseNumber: 3,
      question: 'How do I find roommates if I am interested in a shared living arrangement?',
      answer: 'If you are open to sharing a living space, you can indicate your  preference for roommates when searching for rooms. Additionally, our  platform allows you to connect with other users who are also seeking  roommates. You can chat with potential roommates, discuss preferences,  and mutually decide on a living arrangement that works for everyone.'
    },
    {
      collapseNumber: 4,
      question: 'Are the listings on your platform safe and reliable?',
      answer: 'We prioritize the safety and security of our users. All hosts and  listings undergo a verification process to ensure legitimacy. We also  encourage users to read reviews from previous renters and hosts to get a  sense of the experience. Additionally, our customer support team is  available to assist with any concerns or issues that may arise during  the rental process.'
    }

  ]
  const roomQuestions = [
    {
      collapseNumber: 5,
      question: 'Can I specify my preferences for the type of roommate I am looking for?',
      answer: 'Absolutely! When creating your profile or searching for rooms, you can  indicate your preferences for roommates based on factors such as gender,  age, lifestyle habits, and more. This helps ensure compatibility and a  harmonious living environment.'
    },
    {
      collapseNumber: 6,
      question: 'What amenities are typically included in the rooms for rent?',
      answer: 'Amenities vary depending on the listing, but common inclusions are  furnishings (bed, desk, chair, etc.), access to shared spaces like the  kitchen and living room, utilities (electricity, water, internet), and  sometimes additional perks like laundry facilities or parking.'
    },
    {
      collapseNumber: 7,
      question: 'How does the rental process work?',
      answer: 'Once you find a room you are interested in, you can message the host  directly through our platform to inquire about availability and ask any  questions you may have. If you are ready to proceed, you can discuss  rental terms, sign any necessary agreements, and make payment  arrangements with the host.'
    },
    {
      collapseNumber: 8,
      question: 'What if I encounter issues during my stay in the rented room?',
      answer: 'We strive to provide a smooth rental experience, but if you encounter  any issues or concerns during your stay, you can reach out to our  customer support team for assistance. We are here to help resolve any  disputes between renters and hosts and ensure that everyone has a  positive experience on our platform.'
    }

  ]
  return (
    <section className='our-faq pb90 pt-0 relative'>
      <div className='absolute w-full h-full -z-[20] bg-f7f7f7 dark:bg-lightmidnight' />
      <div className='container mx-auto sm:px-4'>
        <div className='flex flex-wrap  wow fadeInUp' data-wow-delay='300ms'>
          <div className='w-full pr-4 pl-4'>
            <div className='ui-content'>
              <h2 className='dark:text-white'>Frequently Asked Questions</h2>
              <p className='dark:text-white mb-[60px]'>Home / Faq</p>
              <h4 className='title dark:text-white'>Question About Renting</h4>
              <div className='accordion-style1 faq-page mb-4 lg:mb-12'>
                <div className='accordion' id='accordionExample'>
                  {rentingQuestions.map((question) => (
                    <FaqAccordion
                      key={question.collapseNumber}
                      collapseNumber={question.collapseNumber}
                      question={question.question}
                      answer={question.answer}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className='ui-content'>
              <h4 className='title dark:text-white'>Question About Rooms</h4>
              <div className='accordion-style1 faq-page mb-4 lg:mb-12'>
                <div className='accordion' id='accordionExample2'>
                  {roomQuestions.map((question) => (
                    <FaqAccordion
                      key={question.collapseNumber}
                      collapseNumber={question.collapseNumber}
                      question={question.question}
                      answer={question.answer}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
