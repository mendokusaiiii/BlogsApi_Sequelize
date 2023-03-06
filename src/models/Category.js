module.exports = (Sequelize, DataTypes) => {
	const categories = Sequelize.define(
		'Category',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: 'categories',
			timestamps: false,
		},
	);

	return categories;
};