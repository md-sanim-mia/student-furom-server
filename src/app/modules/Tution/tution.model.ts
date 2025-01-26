import { model, Schema } from "mongoose";
import { Ttution } from "./tution.interface";

const tutionSchema = new Schema<Ttution>({
    name: { type: String, required: true },
    contact_number: { type: String, required: true },
    location: { type: String, required: true },
    student_gender: { type: String, required: true },
    teacher_need: { type: String, required: true },
    salary: { type: Number, required: true },
    class: { type: String, required: true }
}
    ,
    {
        timestamps: true,
    }
)

export const tutionModel = model<Ttution>('tutionRequest', tutionSchema)