import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  username:string,
  password: string;
  DOB:String,
 // Add Date of Birth to interface
  Bio: string; 
  // New field for profile picture URL
  savedWork: string[],
  activities: string[];
  profilePicture: string; // Add Bio field to interface for consistency
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  DOB:{type:String,required:true},
// Set as required here
  Bio: { type: String, default: '' },
  savedWork: { type: [String], default: [] },
  activities: { type: [String], default: [] },
  profilePicture: { type: String, default: '' }
});


export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
