const User = sequelize.define("User", 
  { username: DataTypes.STRING },
  { paranoid: true },
);

const user = await User.findOne();

await user.destroy();
await User.findAll(); // non-deleted only
await User.findAll({ paranoid: false }); // all