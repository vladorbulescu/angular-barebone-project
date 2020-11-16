import { ObjectHelper } from '../object-helper/object-helper';

export class ArrayHelper {
    public static Remove(array: Array<any>, item: any): Array<any> {
        array.splice(array.indexOf(item), 1);

        return array;
    }

    public static Exists = (array: Array<any>, item: any): boolean =>
        array.find((searchedItem: any) => ObjectHelper.Compare(item, searchedItem)) !== undefined;
}
