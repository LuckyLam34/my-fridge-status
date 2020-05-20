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
}