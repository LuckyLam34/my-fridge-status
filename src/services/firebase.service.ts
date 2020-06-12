
import { FIREBASE_URLS } from './../constants/firebase-urls';
import { IVegeItem } from '../constants/interfaces';
import { IFridgeItem } from './../constants/interfaces';

export default class FirebaseService {
  public static database: any;

  constructor() { }

  public static getFridgeItems() {
    return FirebaseService.database.ref(FIREBASE_URLS.fridgeItems).once('value');
  }

  public static addFridgeItem(data: IFridgeItem) {
    const newItemKey = FirebaseService.database.ref().child(FIREBASE_URLS.fridgeItems).push().key;

    return FirebaseService.database.ref(FIREBASE_URLS.fridgeItems).child(newItemKey).set(data);
  }

  public static removeFridgeItem(id: string) {
    return FirebaseService.database.ref(FIREBASE_URLS.fridgeItems).child(id).set(null);
  }

  public static addNewVegetableItem(item: IVegeItem): Promise<any> {
    return FirebaseService.database.ref(FIREBASE_URLS.vegetables).child(item.key.toLowerCase()).set(item.value);
  }

  public static getVegeItems() {
    return FirebaseService.database.ref(FIREBASE_URLS.vegetables).once('value');
  }
}