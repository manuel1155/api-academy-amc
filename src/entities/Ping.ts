import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'ping' })
export default class Ping {
  @PrimaryGeneratedColumn()
  id!: number

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date

  @Column({ name: 'user_agent' })
  userAgent!: string
  
  @Column({ name: 'remote_address' })
  remoteAddress!: string
}