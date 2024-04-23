import moment from 'moment';
import 'moment-precise-range-plugin';

export const getTodayDate = (date) => {
	return moment(date).format('L');
};
