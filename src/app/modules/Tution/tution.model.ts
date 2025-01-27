import { model, Schema } from "mongoose";
import { Ttution } from "./tution.interface";

const tutionSchema = new Schema<Ttution>({
    name: { type: String, required: true },
    contact_number: { type: String, required: true },
    location: { type: String, required: true },
    student_gender: { type: String, required: true },
    teacher_need: { type: String, required: true },
    salary: { type: Number, required: true },
    class_s: { type: String, required: true }
}
    ,
    {
        timestamps: true,
    }
)

tutionSchema.index({ createdAt: 1 }, { expireAfterSeconds: 15 * 24 * 60 * 60  });
export const tutionModel = model<Ttution>('tutionRequest', tutionSchema)
