import { StringHelper } from '../string-helper/string-helper';

export class ObjectHelper {
    public static Compare = (obj1: any, obj2: any): boolean =>
        StringHelper.Equals(JSON.stringify(obj1), JSON.stringify(obj2));
}
