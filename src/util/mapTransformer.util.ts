
export class MapTransformer{

    static mapToObj(map: Map<any, any>) {
       const obj = {};

       for (let [k, v] of map) {
         obj[k] = v;
       }

       return obj;
     }

}


