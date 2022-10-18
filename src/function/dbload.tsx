import foodData from "../db/database.json";

export function getDatabase( food_item : string ) {
  let target: string = food_item.toUpperCase();
  let compare_target : string = "";
  let item: Array<string> = [];
  let itemArr: Array<Object> = foodData.food
  .filter( (db ) => {
    compare_target = db.foodkind;
    return target === compare_target.toUpperCase();
  })
  // .find((db) => {
  //   return db.foodkind;
  // });
  console.log(itemArr);
  return itemArr;
}