import { v4 as uuid } from 'uuid';

export function createId(): string {
  return uuid();
}

export function emptyId(): string {
  return '00000000-0000-0000-0000-000000000000';
}
