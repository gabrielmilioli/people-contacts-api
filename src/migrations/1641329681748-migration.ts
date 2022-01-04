import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1641329681748 implements MigrationInterface {
    name = 'migration1641329681748'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `person` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `contact` (`id` int NOT NULL AUTO_INCREMENT, `value` varchar(255) NOT NULL DEFAULT '', `type` tinyint NOT NULL DEFAULT 1, `id_person` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `contact` ADD CONSTRAINT `FK_5d0a5598bf0d6b386b8d8578a1e` FOREIGN KEY (`id_person`) REFERENCES `person`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `contact` DROP FOREIGN KEY `FK_5d0a5598bf0d6b386b8d8578a1e`");
        await queryRunner.query("DROP TABLE `contact`");
        await queryRunner.query("DROP TABLE `person`");
    }

}
