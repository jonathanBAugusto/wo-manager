import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateWorkOrderTable1618798258262 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'work_order',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
