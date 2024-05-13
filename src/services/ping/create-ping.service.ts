import { log } from "console"
import Ping from "../../entities/Ping"
import { pingRepository } from "../../app/repositories"

export const createPing = async (userAgent?: string, remoteAddress?: string) => {
  log(' Starting service create ping... ')
  log( ' - userAgent: ', userAgent)

  const ping: Ping = new Ping()

  if(userAgent && remoteAddress) {
    ping.userAgent = userAgent
    ping.remoteAddress = remoteAddress
  }
  
  log(' save userAgent ')
  const result = await pingRepository.save(ping)

  log(' - ping.id:', result.id)
  log(' - ping.createdAt:', result.createdAt)

  return ping

}