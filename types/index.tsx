import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title : string;
    containerStyles? : string;
    handleClick? : MouseEventHandler<HTMLButtonElement>;
    btnType? : "button" | "submit";
    textStyles? : string;
    rightIcon? : string;
    isDisabled? : boolean;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer:(manufacturer: string)=> void;
}

export interface CarProps {
    city_mpg:number
class:string 
combination_mp: number
cylinde: number
displacement: number
drive: string
fuel_type:string
highway_mp: string
make: string
model:string
transmission: string
year:number
}