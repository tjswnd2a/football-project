export const addCart = (item: any) => { // 카트 담기
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const deleteCart = (items: any) => { // 카트 제거
  return {
    tpye: "DELETE_ITEM",
    payload: items,
  }
};

// 여기서 addCart와 deleteCart는 액션 그 자체가 아닌 액션생성함수이다.
// 액션생성함수가 return하는 객체가 바로 액션 객체이다.
