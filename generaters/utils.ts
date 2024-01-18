import {
  ASSET_PLACES,
  INCOME_EXPENSE_PLACES,
  ITEM_PLACES,
} from "../constants/placesBase";
import { writeStringFile } from "../utils";

export const generatePlaceIdEnum = () => {
  const allPlaceIds = Object.keys({
    ...INCOME_EXPENSE_PLACES,
    ...ASSET_PLACES,
    ...ITEM_PLACES,
  });

  let enumString = "export type PlaceId =";
  allPlaceIds.forEach((placeId) => {
    enumString += `"${placeId}" |`;
  });
  enumString = enumString.slice(0, -2);
  writeStringFile("types/placeIdEnum.ts", enumString);
};
