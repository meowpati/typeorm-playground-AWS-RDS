import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entity/user.entity";

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  gender: string;

  @Column()
  photo: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User
}