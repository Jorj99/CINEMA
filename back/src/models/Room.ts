import { Schema, model } from 'mongoose';

import { IRoom } from '@/types';

const roomSchema = new Schema<IRoom>({
  name: { type: String, required: true },
});

const Room = model<IRoom>('Room', roomSchema);

export { Room, IRoom };
