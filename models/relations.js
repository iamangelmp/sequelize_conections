Wish.belongsTo(Wishlist);
Wishlist.hasMany(Wish);

const wishlist = await Wishlist.findOne();
const wishes = await wishlist.getWishes();
const wish = await wishlist.createWish({ 
  title: 'Toys', quantity: 3,
});

await wishlist.removeWish(wish);