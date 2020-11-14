import * as moment from 'moment';

export class DateHelper {
    public static GetCurrentDate = (): Date => new Date();

    public static GetCurrentDateAtHour = (hour: number): Date =>
        moment().set('hour', hour).toDate();

    public static GetFlooredHoursBetweenDates = (start: Date, end: Date): number =>
        -Math.floor(moment.duration(moment(start).diff(moment(end))).asHours());
}
