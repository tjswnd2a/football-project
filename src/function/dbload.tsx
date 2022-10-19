import foodData from "../db/database.json";

export function getDatabase(food_item: string) {
  // food_item = "Appetizer";
  let target: string = food_item.toUpperCase();
  let compare_target: string = "";
  let itemArr: Array<any> = foodData.food
    .filter((db) => {
      compare_target = db.foodkind;
      return target === compare_target.toUpperCase();
    });
  return itemArr;
}

export function setBanner(item: Array<any>) {
  return item[0].foodtitle;
}
export function setMenuList(item: Array<any>) {
  return item[0].menu;
}