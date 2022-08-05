import mongoose from 'mongoose';
const { Schema } = mongoose;

const EventSchema = new Schema({
    name: String,
    complete: Boolean,
});

export default mongoose.model('UpcomingEvents', EventSchema);