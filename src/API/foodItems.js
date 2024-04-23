import API from "./";

export const getFoodItemByTypes = async (type) => {
  return await API.post("food/getFood", {
    type,
  });
};
