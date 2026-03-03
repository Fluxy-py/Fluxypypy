/**
 * User-related type definitions
 */

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export type UserRole = "admin" | "user" | "moderator";

export interface UserProfile extends User {
  bio?: string;
  phone?: string;
  address?: string;
}
