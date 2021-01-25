import {IsString, IsInt, IsNotEmpty} from 'class-validator'

export class ShoppingListDto {
    @IsString()
    @IsNotEmpty()
    item: String;

    @IsInt()
    @IsNotEmpty()
    itemQuantity: number;

    @IsInt()
    @IsNotEmpty()
    unitaryPrice: number;

    @IsString()
    @IsNotEmpty()
    unityOfMeasure: String;
}
