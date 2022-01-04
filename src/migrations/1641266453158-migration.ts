import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1641266453158 implements MigrationInterface {
    name = 'migration1641266453158'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `contact` DROP FOREIGN KEY `FK_5d0a5598bf0d6b386b8d8578a1e`");
        await queryRunner.query("ALTER TABLE `contact` ADD CONSTRAINT `FK_5d0a5598bf0d6b386b8d8578a1e` FOREIGN KEY (`id_person`) REFERENCES `person`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `contact` DROP FOREIGN KEY `FK_5d0a5598bf0d6b386b8d8578a1e`");
        await queryRunner.query("ALTER TABLE `contact` ADD CONSTRAINT `FK_5d0a5598bf0d6b386b8d8578a1e` FOREIGN KEY (`id_person`) REFERENCES `person`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
