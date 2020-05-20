
import { FIREBASE_URLS } from './../constants/firebase-urls';
import { IVegeItem } from '../constants/interfaces';

export default class FirebaseService {
  public static database: any;

  constructor() { }

  public static getFridgeItems() {
    return FirebaseService.database.ref(FIREBASE_URLS.fridgeItems).once('value');
  }

  public static addFridgeItem() {

  }

  public static addNewVegetableItem(item: IVegeItem): Promise<any> {
    return FirebaseService.database.ref(FIREBASE_URLS.vegetables).child(item.key.toLowerCase()).set(item.value);
  }

  public static getVegeItems() {
    return FirebaseService.database.ref(FIREBASE_URLS.vegetables).once('value');
  }
}