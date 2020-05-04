import moment from 'moment';

export class CommonService {
    /**
     * 
     * @param dateTime MMDDYYYY
     */
    public static getDateTime(dateTime: string) {
        return moment(dateTime, 'MMDDYYYY').format('MMM D YYYY');
    }
}