import WebLayout from '../../../layout/WebLayout'
import RoomSimple from '../../../components/common/Room/RoomSimple'
import RoomData from '../../../data/roomsItems'
const UserSingle = () => {
  return (
    <WebLayout>
      <h1>User single</h1>
      <RoomSimple room={RoomData[0]} />
    </WebLayout>
  )
}

export default UserSingle
