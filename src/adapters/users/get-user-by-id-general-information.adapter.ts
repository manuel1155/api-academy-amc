import axios from "axios"
import { log } from "console"
import Image from "../../types/Image"

const { MICROSERVICE_USERS_URL: usersUrl } = process.env

interface UserMapingInfoGeneralDTO {
  id: number
  name: string
  jobPosition : string
  previousJobPositions: string[]
  entryDate: string
  careerInterests: string
  avatar?: Image | null
}

const getUserByIdGeneralInformation = async (userId: number): Promise<UserMapingInfoGeneralDTO> => {
  log('Running getUserById')
  const response = await axios.get<UserMapingInfoGeneralDTO>(`${usersUrl}/users/${userId}/mapping/general-information`)
  return response.data
}

export default getUserByIdGeneralInformation