module.exports = (Sequelize, DataTypes) => {
    const PostCategory = Sequelize.define(
      'PostCategory',
      {
        postId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          foreignKey: true,
        },
        categoryId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          foreignKey: true,
        },
      },
      {
        timestamps:false,
        underscored: true,
        tableName: 'posts_categories',
      },
    )
    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        foreignKey: 'post_id',
        as: 'categories',
        through: PostCategory,
        otherKey: 'category_id',
      })
      models.Category.belongsToMany(models.BlogPost, {
        foreignKey: 'category_id',
        as: 'BlogPost',
        through: PostCategory,
        otherKey: 'post_id',
      })
    }
    return PostCategory
  }
  