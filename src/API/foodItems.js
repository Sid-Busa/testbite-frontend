import API from "./";

export const getFoodItemByTypes = async (type) => {
  return await API.post("food/getFood", {
    type,
  });
};

export const updateFoodRatting = async (updateRatting) => {
  return await API.post("food/updateRatting", updateRatting);
};
