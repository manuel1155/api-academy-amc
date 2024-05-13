import { AppDataSource } from "./data-source";
import Ping from "../entities/Ping";

export const pingRepository = AppDataSource.getRepository(Ping)