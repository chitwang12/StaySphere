import { QueryInterface, DataTypes } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface: QueryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('hotels', 'deleted_at', {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null
    })
  },

  async down (queryInterface: QueryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  await queryInterface.removeColumn('hotels', 'deleted_at')
  }
};
