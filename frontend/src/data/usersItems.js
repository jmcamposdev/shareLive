export default [
  {
    id: 1,
    userId: 1,
    avatar: 'users/user-1.jpg',
    username: 'joe',
    email: 'joe@gmail.com',
    phone: '+34 978 345 342',
    firstName: 'Joe',
    lastName: 'Biden',
    mobilePhone: '+34 654 685 657',
    description: 'Joe Biden, born in 1942, rose from humble beginnings in Scranton, Pennsylvania, to become the 46th President of the United States. With a distinguished career spanning over four decades in the Senate, including chairing key committees, he later served as Vice President under Barack Obama. In 2020, he secured the Democratic nomination and won the presidency, focusing on unity and addressing pressing issues like the COVID-19 pandemic and climate change. Biden\'s presidency emphasizes restoring America\'s global leadership, fostering economic recovery, and advancing social justice, reflecting his lifelong dedication to public service and empathy.',
    extraDescription: 'In addition to his role as a senator, Biden also served as vice president under the administration of Barack Obama, where he played a key role in policy formulation, particularly in areas such as foreign policy and healthcare reform. Biden\'s election as president in 2020 came at a pivotal moment for the United States, facing monumental challenges such as the COVID-19 pandemic and political polarization. His campaign focused on a message of national unity and the need to address urgent issues such as climate change and economic inequality. Biden is known for his pragmatic political style and ability to build coalitions. He has advocated for policies aimed at restoring America\'s global leadership, promoting economic recovery, and addressing social and racial disparities that persist in the country. In addition to his political career, Biden is recognized for his dedication to family and personal resilience, having faced personal tragedies such as the loss of his first wife and children. His personal story has resonated with many Americans and has contributed to shaping his image as an empathetic and resilient leader. In summary, Joe Biden is an experienced politician and a leader committed to building a fairer, more prosperous, and united United States.',
    socials: {
      twitter: 'twitter.com',
      facebook: 'facebook.com',
      linkedin: 'linkedin.com',
      instagram: 'instagram.com'
    },
    password: 'encryptedpassword',
    reviews: [
      {
        id: '1',
        reviewId: '1',
        reviewRate: 4,
        reviewerAvatar: 'users/user-1.jpg',
        reviewerFirstName: 'FNR1',
        reviewerLastName: 'LNR1',
        reviewDate: '2024-03-27T15:05:48.261Z',
        reviewContent: 'This room is cozy and comfortable. The bed is soft, sheets clean. The bathroom is small but functional with good shower pressure. Loved the decor, especially the wall painting. Great natural light from the window. Overall, a lovely stay.',
        helpful: 4,
        notHelpful: 1
      },
      {
        id: '2',
        reviewId: '2',
        reviewRate: 1,
        reviewerAvatar: 'users/user-1.jpg',
        reviewerFirstName: 'FNR2',
        reviewerLastName: 'FNR2',
        reviewDate: '2024-03-27T15:05:48.261Z',
        reviewContent: 'This room is cozy and comfortable. The bed is soft, sheets clean. The bathroom is small but functional with good shower pressure. Loved the decor, especially the wall painting. Great natural light from the window. Overall, a lovely stay.',
        helpful: 4,
        notHelpful: 1
      }
    ],
    favouriteRoomsIds: [
      1,
      2,
      3,
      4
    ],
    ownerRoomsIds: [
      1,
      2,
      3,
      4
    ],
    joinDate: '2024-03-27T15:05:48.261Z'
  }
]
