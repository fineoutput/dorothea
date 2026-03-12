import mongoose, { Schema, Document } from "mongoose";

export interface Item extends Document {
  id: string;
  type: "food" | "drink" | "breakfast";
  name: string;
  description: string;
  price: number;
  category: string;
  images: string;
  restaurantId: string;
  isVeg: boolean;
  isLive: boolean;
}

const ItemSchema: Schema<Item> = new Schema({
  id: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  images: { type: String, required: true },
  restaurantId: {
    type: String,
    required: true,
    default: "dorothea-cafe-jaipur",
  },
  isVeg: { type: Boolean, required: true, default: true },
  isLive: { type: Boolean, required: true, default: false },
});

const ItemModel =
  (mongoose.models.Item as mongoose.Model<Item>) ||
  mongoose.model<Item>("Item", ItemSchema);

export default ItemModel;
