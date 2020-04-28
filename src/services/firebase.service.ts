

export default class FirebaseService {
  public static database: any;

  constructor() { }

  public static getFridgeItems() {
    return FirebaseService.database.ref('/fridge-items').once('value');
  }
}