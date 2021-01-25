import { RequestListDto } from './dto/request-list.dto';
import { ShoppingListDto } from './dto/shopping-list.dto';
import { MapTransformer } from '../util/mapTransformer.util';

const rest = 0;
export class ShoppingListService {
  async ordersList({ purchase, emails }: RequestListDto) {
    const totalOrders = await this.getTotal(purchase);
    const map = await this.divideByEmails(totalOrders, emails);

    return MapTransformer.mapToObj(map);
  }

  private async getTotal(purchase: Array<ShoppingListDto>): Promise<Number> {
    let totalSum = 0;

    purchase.forEach((i) => {
      totalSum += i.unitaryPrice * i.itemQuantity;
    });

    return totalSum;
  }

  private async divideByEmails(
    totalSum,
    arrayEmail: Array<String>,
  ): Promise<Map<String, String>> {
    const emailQuantity = arrayEmail.length;
    const divideValue = totalSum / emailQuantity;

    let dic: Map<String, String> = new Map();
    for (let email of arrayEmail) {
      dic.set(email, (divideValue / 100).toFixed(2));
    }

    let differenceValue = this.verifyDifferenceOfCents(
      divideValue,
      emailQuantity,
      totalSum,
    );

    if (differenceValue != rest) {
      let value = divideValue / 100 + differenceValue;
      console.log(value);
      dic.set(arrayEmail[arrayEmail.length - 1], value.toFixed(2));
    }

    return dic;
  }

  private verifyDifferenceOfCents(divideValue, emailQuantity, totalSum): number {
    let totalSumProv = Number(divideValue.toFixed(2)) * emailQuantity;
    let differenceValue = Number((totalSum - totalSumProv).toFixed(2));
    return differenceValue;
  }
}
