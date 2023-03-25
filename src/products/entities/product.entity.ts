import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';
import { User } from "src/users/entities/user.entity";

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
        type: [{ type: Types.ObjectId, ref: User.name }],
        required: false, 
        default: null,
    })
    user: User[];
    
    @Prop({
        index: true,
        required: true
    })
    quantity: string;

    @Prop({
        index: true,
        required: false, 
        default: Date.now 
    })
    createdAt: Date;

    @Prop({
        index: true,
        required: false,
        default: null
    })
    updatedAt: Date;

}

export const ProductSchema = SchemaFactory.createForClass( Product );