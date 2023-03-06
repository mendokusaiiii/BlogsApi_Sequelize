module.exports = (Sequelize, DataTypes) => {
    const BlogPosts = Sequelize.define(
      'BlogPost',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          foreignKey: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        content: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        userId: {
          type: DataTypes.INTEGER,
          foreignKey: true,
        },
        published: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW(),
          allowNull: false,
        },
        updated: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW(),
          allowNull: false,
        },
      },
      {
        timestamps: false,
        underscored: true,
        tableName: 'blog_posts',
      },
    )
    BlogPosts.associate = (models) => {
      BlogPosts.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      })
    }
    return BlogPosts
  }