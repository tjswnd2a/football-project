import brandData from "../db/database.json";

export function getDatabase(brand_item: string) {
  let target: string = brand_item.toUpperCase();
  let compare_target: string = "";
  let itemArr: Array<any> = brandData.brand
    .filter((db: any) => {
      compare_target = db.brandkind;
      return target === compare_target.toUpperCase();
    });
  return itemArr;
}

export function setBanner(item: Array<any>) {
  return item[0].brandtitle;
}
export function setMenuList(item: Array<any>) {
  return item[0].menu;
}