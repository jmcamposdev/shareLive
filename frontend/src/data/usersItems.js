export default [
  {
    id: 1,
    userId: 1,
    avatar: 'users/user-1.jpg',
    username: 'joe',
    email: 'joe@gmail.com',
    name: 'Joe',
    phone: '+34 978 345 342',
    firstName: 'Joe',
    lastName: 'Biden',
    mobilePhone: '+34 654 685 657',
    description: 'Joe Biden, born in 1942, rose from humble beginnings in Scranton, Pennsylvania, to become the 46th President of the United States. With a distinguished career spanning over four decades in the Senate, including chairing key committees, he later served as Vice President under Barack Obama. In 2020, he secured the Democratic nomination and won the presidency, focusing on unity and addressing pressing issues like the COVID-19 pandemic and climate change. Biden\'s presidency emphasizes restoring America\'s global leadership, fostering economic recovery, and advancing social justice, reflecting his lifelong dedication to public service and empathy.',
    extraDescription:'In addition to his role as a senator, Biden also served as vice president under the administration of Barack Obama, where he played a key role in policy formulation, particularly in areas such as foreign policy and healthcare reform. Biden\'s election as president in 2020 came at a pivotal moment for the United States, facing monumental challenges such as the COVID-19 pandemic and political polarization. His campaign focused on a message of national unity and the need to address urgent issues such as climate change and economic inequality. Biden is known for his pragmatic political style and ability to build coalitions. He has advocated for policies aimed at restoring America\'s global leadership, promoting economic recovery, and addressing social and racial disparities that persist in the country. In addition to his political career, Biden is recognized for his dedication to family and personal resilience, having faced personal tragedies such as the loss of his first wife and children. His personal story has resonated with many Americans and has contributed to shaping his image as an empathetic and resilient leader. In summary, Joe Biden is an experienced politician and a leader committed to building a fairer, more prosperous, and united United States.',
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
        reviewerFirstName: 'name1',
        reviewerLastName: 'Lname1',
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
        reviewerFirstName: 'name1',
        reviewerLastName: 'Lname1',
        reviewDate: '2024-03-27T15:05:48.261Z',
        reviewContent: 'This room is cozy and comfortable. The bed is soft, sheets clean. The bathroom is small but functional with good shower pressure. Loved the decor, especially the wall painting. Great natural light from the window. Overall, a lovely stay.',
        helpful: 4,
        notHelpful: 1
      }
    ],
    favouriteRoomsIds: [
      '1',
      '2',
      '3',
      '4'
    ],
    ownerRoomsIds: [
      '1',
      '2',
      '3',
      '4'
    ],
    joinDate: '2024-03-27T15:05:48.261Z'
  },
  {
    id: 2,
    userId: 2,
    avatar: 'users/user-2.jpg',
    username: 'janedoe',
    email: 'jane@example.com',
    name: 'Jane',
    phone: '+1 555 123 4567',
    firstName: 'Jane',
    lastName: 'Doe',
    mobilePhone: '+1 555 987 6543',
    description: 'Jane Doe is an experienced traveler and nature enthusiast. With a passion for adventure, she enjoys exploring remote destinations and immersing herself in different cultures. Her favorite travel memories include trekking through the Himalayas and camping under the stars in the Sahara Desert.',
    socials: {
      twitter: 'twitter.com/janedoe',
      facebook: 'facebook.com/janedoe',
      linkedin: 'linkedin.com/in/janedoe',
      instagram: 'instagram.com/janedoe'
    },
    password: 'encryptedpassword',
    reviews: [
      {
        id: '2',
        reviewId: '2',
        reviewRate: 5,
        reviewerAvatar: 'users/user-2.jpg',
        reviewerFirstName: 'name2',
        reviewerLastName: 'Lname2',
        reviewDate: '2024-03-28T10:15:00.000Z',
        reviewContent: 'Absolutely stunning room! The decor is elegant and the bed is incredibly comfortable. The bathroom feels luxurious with its marble finishes. Fantastic view from the window. Highly recommend this place for a relaxing getaway.',
        helpful: 5,
        notHelpful: 0
      }
    ],
    favouriteRoomsIds: [
      '5',
      '6',
      '7'
    ],
    ownerRoomsIds: [
      '5'
    ],
    joinDate: '2024-03-28T10:15:00.000Z'
  },
  {
    id: 3,
    userId: 3,
    avatar: 'users/user-3.jpg',
    username: 'johnsmith',
    email: 'john@example.com',
    name: 'John',
    phone: '+44 1234 567890',
    firstName: 'John',
    lastName: 'Smith',
    mobilePhone: '+44 7890 123456',
    description: 'John Smith is a professional chef and food enthusiast. He enjoys exploring different cuisines and experimenting with new recipes in his kitchen. When he\'s not cooking, John loves to travel and discover local food markets and restaurants around the world.',
    socials: {
      twitter: 'twitter.com/johnsmith',
      facebook: 'facebook.com/johnsmith',
      linkedin: 'linkedin.com/in/johnsmith',
      instagram: 'instagram.com/johnsmith'
    },
    password: 'encryptedpassword',
    reviews: [
      {
        id: '3',
        reviewId: '3',
        reviewRate: 4,
        reviewerAvatar: 'users/user-3.jpg',
        reviewerFirstName: 'name3',
        reviewerLastName: 'Lname3',
        reviewDate: '2024-03-29T08:30:00.000Z',
        reviewContent: 'Lovely room with a homely atmosphere. The bed is cozy and the amenities are top-notch. Enjoyed the complimentary breakfast. The location is convenient for exploring the city. Would definitely stay here again.',
        helpful: 4,
        notHelpful: 1
      }
    ],
    favouriteRoomsIds: [
      '8',
      '9'
    ],
    ownerRoomsIds: [
      '6',
      '7',
      '8'
    ],
    joinDate: '2024-03-29T08:30:00.000Z'
  }
]
