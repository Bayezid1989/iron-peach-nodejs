import { AppPlaceConfig } from "../types";
import {
  ASSET_PLACES,
  INCOME_EXPENSE_PLACES,
  ITEM_PLACES,
} from "../constants/placesBase";
import { convertToCamelCase, writeStringFile } from "../utils";

export const generatePlaceIdArray = () => {
  const allPlaceIds = Object.keys({
    ...INCOME_EXPENSE_PLACES,
    ...ASSET_PLACES,
    ...ITEM_PLACES,
  });

  writeStringFile(
    "constants/placeIdArray.ts",
    `export const PLACE_IDS: readonly [string, ...string[]] | [string, ...string[]]  = ${JSON.stringify(allPlaceIds, undefined, 2)}`,
  );
};

export const generateDictionaryAndPlaceList = () => {
  const allPlaces = {
    ...INCOME_EXPENSE_PLACES,
    ...ASSET_PLACES,
    ...ITEM_PLACES,
  };

  type Dictionary = { [key: string]: { en: string } };

  const newAssetList: { [placeId: string]: AppPlaceConfig } = {};
  const newIncomeExpenseList: { [placeId: string]: AppPlaceConfig } = {};
  const newItemList: { [placeId: string]: AppPlaceConfig } = {};
  const placeNameDictionary: Dictionary = {};
  const assetNameDictionary: Dictionary = {};

  const createAssetId = (placeId: string, assetName: string) =>
    `${placeId}${convertToCamelCase(assetName, false)}`;

  Object.entries(allPlaces).forEach(([placeId, place]) => {
    placeNameDictionary[placeId] = { en: place.name };

    if (place.assets?.length) {
      place.assets.forEach((asset) => {
        const assetId = createAssetId(placeId, asset.name);
        assetNameDictionary[assetId] = { en: asset.name };
      });
    }

    const node = {
      coordinates: place.coordinates,
      role: place.role,
      assets: place.assets?.map((asset) => ({
        id: createAssetId(placeId, asset.name),
        price: asset.price,
        profitRate: asset.profitRate,
      })),
      items: place.items,
      cashVolume: place.cashVolume,
    };

    switch (place.role) {
      case "asset":
        newAssetList[placeId] = node;
        break;
      case "income":
      case "expense":
        newIncomeExpenseList[placeId] = node;
        break;
      case "item":
        newItemList[placeId] = node;
        break;
    }
  });

  const dictionaryString = `
    export const PLACE_NAME_DICTIONARY = ${JSON.stringify(placeNameDictionary, undefined, 2)};
    export const ASSET_NAME_DICTIONARY = ${JSON.stringify(assetNameDictionary, undefined, 2)}
    `;
  writeStringFile("constants/dictionary.ts", dictionaryString);

  const placeListString = `
    import { AppPlaceConfig } from "../types";
  
    export const ASSET_PLACES: Record<string, AppPlaceConfig> = ${JSON.stringify(
      newAssetList,
      undefined,
      2,
    )};
    
    export const INCOME_EXPENSE_PLACES: Record<string, AppPlaceConfig> = ${JSON.stringify(
      newIncomeExpenseList,
      undefined,
      2,
    )};
  
    export const ITEM_PLACES: Record<string, AppPlaceConfig> = ${JSON.stringify(
      newItemList,
      undefined,
      2,
    )};
    
    export const ALL_PLACES = {
      ...ASSET_PLACES,
      ...INCOME_EXPENSE_PLACES,
      ...ITEM_PLACES,
    };`;
  writeStringFile("constants/placeConfigs.ts", placeListString);
};
