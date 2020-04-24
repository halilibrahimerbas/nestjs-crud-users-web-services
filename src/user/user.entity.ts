import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ type: "varchar", length: 200, nullable: false })
  @ApiProperty()
  firstname: string;

  @Column({ type: "varchar", length: 200 })
  @ApiProperty()
  lastname: string;

  @Column({ type: "varchar", unique: true, length: 200 })
  @ApiProperty()
  email: string;

  @Column({ type: "varchar", nullable: false, length: 70 })
  @ApiProperty()
  password: string;
}
