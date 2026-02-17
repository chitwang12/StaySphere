import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.sequelize.query(`
    ALTER TABLE hotels
    ADD COLUMN rating DECIMAL(3,2) DEFAULT NULL,
    ADD COLUMN rating_count INT DEFAULT NULL
    `)
  },

  async down (queryInterface: QueryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  await queryInterface.sequelize.query(`
  ALTER TABLE hotels
  DROP COLUMN rating,
  DROP COLUMN rating_count
  `)
  }
};
