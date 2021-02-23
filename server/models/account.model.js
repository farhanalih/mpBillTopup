const account = (sequelize, DataTypes) => {
    const account = sequelize.define('account', {
        acco_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        }
      }, {
        sequelize,
        tableName: 'account',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "account_pkey",
            unique: true,
            fields: [
              { name: "acco_id" },
            ]
          },
        ]
      });

      // account.associate = models => {
      //     account.hasMany(models.billTopup,{foreignKey: 'bito_acco_id', onDelete: 'CASCADE'});

      // };
      return account;
    
};

export default account;