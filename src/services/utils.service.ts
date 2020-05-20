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