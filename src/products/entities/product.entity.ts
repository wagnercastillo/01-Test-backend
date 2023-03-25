import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {

    @Prop({
        index: true,
        required: true
    })
    name: string;
    
    @Prop({
        index: true,
        required: true
    })
    price: number;
    
    @Prop({
        index: true,
        required: true
    })
    quantity: string;

    @Prop({
        index: true,
        required: false, 
    })
    createdAt: Date;

}

export const ProductSchema = SchemaFactory.createForClass( Product );