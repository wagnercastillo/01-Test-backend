import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema({
    validateBeforeSave: true 
})
export class User extends Document {

    @Prop({
        index: true,
        required: true
    })
    name: string;
    
    @Prop({
        index: true,
        required: true
    })
    lastName: string;
    
    @Prop({
        index: true,
        required: true,
        unique: true
    })
    email: string;

    @Prop({
        index: true,
        required: false, 
        default: Date.now 
    })
    createdAt: Date;
    
}

export const UserSchema = SchemaFactory.createForClass( User );