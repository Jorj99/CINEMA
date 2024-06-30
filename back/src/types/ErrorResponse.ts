import MessageResponse from '@/types/MessageResponse';

export interface ErrorResponse extends MessageResponse {
  stack?: string;
}
