module.exports = (Sequelize, DataTypes) => {
    const User = Sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      displayName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
      {
        tableName: 'users',
        timestamps: false,
        underscored: true,
      });

      User.associate = (models) => {
        User.hasMany(models.BlogPost, {
          foreignKey: 'user_id', as: 'BlogPost'
        });
    }

    return User
  }