import React, { useEffect, useState } from "react";
import Aboutus from "../Aboutus";
import CuratedCollections from "./Curatedcollections";
import Recipes from "./Recipes";
import { getFoodItemByTypes } from "../../API/foodItems";
import { useDispatch } from "react-redux";
import { endLoading, startLoading } from "../../store/reducer/loader";
import RattingCards from "./RattingCards";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [foodItems, setFoodItems] = useState({
    rattingTypes: [],
    curatedItems: [],
    latestItems: [],
    freshItems: [],
  });

  useEffect(() => {
    (async () => {
      try {
        dispatch(startLoading());
        const allFoodItems = await Promise.all([
          getFoodItemByTypes("RATTING"),
          getFoodItemByTypes("CURATED_DATA"),
          getFoodItemByTypes("LETEST_RECIPES"),
          getFoodItemByTypes("FRESH_RECIPES"),
        ]);

        setFoodItems((prewState) => ({
          ...prewState,
          rattingTypes: allFoodItems[0]?.foodItem || [],
          curatedItems: allFoodItems[1]?.foodItem || [],
          latestItems: allFoodItems[2]?.foodItem || [],
          freshItems: allFoodItems[3]?.foodItem || [],
        }));
      } catch (error) {
        console.error(error);
      } finally {
        dispatch(endLoading());
      }
    })();
  }, [dispatch]);

  const hanldeToMoveItemDetail = (item) => {
    navigate("/food-item-details", { state: item });
  };

  return (
    <>
      <RattingCards data={foodItems.rattingTypes} />
      <Aboutus />
      <CuratedCollections data={foodItems.curatedItems} />
      <Recipes
        latestData={foodItems.latestItems}
        freshData={foodItems.freshItems}
        hanldeToMoveItemDetail={hanldeToMoveItemDetail}
      />
    </>
  );
};

export default Home;
