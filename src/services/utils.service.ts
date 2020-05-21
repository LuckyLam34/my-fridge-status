import sweetAlert from 'sweetalert';

export class Alert {
  static showSuccessAlert(text: string, title = 'Success') {
    return sweetAlert({
      title,
      text,
      icon: 'success',
      className: 'success-alert',
      buttons: [false],
      timer: 1000
    });
  }

  static showErrorAlert(text: string, title = 'Error') {
    return sweetAlert({
      title,
      text,
      buttons: ['Cancel', 'OK'],
      className: 'error-alert'
    })
  }
}

export class Fn {
  static convertObjToArr(obj: any) {
    let arr = [];
    for (let k in obj) {
      let item;
      if (typeof (obj[k]) === 'string') {
        item = Object.assign({}, { name: obj[k] }, { id: k });
      } else {
        item = Object.assign({}, obj[k], { id: k });
      }
      arr.push(item);
    }
    return arr;
  }

  /**
   * Check if checked value exits in the array
   * @param checkedValue 
   * @param arr 
   */
  static isExisted(checkedValue: any, arr: any[], checkedKeyname: string) {
    return arr.find((item: any) => item[checkedKeyname] === checkedValue);
  }
}