import mongoose, {Schema} from "mongoose";

type Company = {
    _id: Schema.Types.ObjectId
    name: string;
    b_id: string;
    ub_id: string;
    logo : string;
    email: string;
    phoneNumber: string;
    password: string;
    website: string;
    address: string;
    numberofTenders: number;
    numberofReports: number;   
    createdAt: Date;
    updatedAt: Date;
}

const companySchema = new Schema<Company>({
    name: { type: String, required: true },
    logo: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    b_id: { type: String, required: true },
    ub_id: { type: String, required: true },
    website: { type: String, required: true },
    address: { type: String, required: true }, 
    password: { type: String, required: true },
    numberofTenders: { type: Number, default: 0 },
    numberofReports: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, );
const CompanyModel = mongoose.model<Company>("Company", companySchema);
export default CompanyModel;