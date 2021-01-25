import { ShoppingListDto } from "./shopping-list.dto";

export class RequestListDto{
    purchase: Array<ShoppingListDto>;
    emails: Array<String>;
}