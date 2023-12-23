export interface IsValid {
  valid: boolean;
  values?: string[];
}

export interface User {
  userName: string;
  userEmail?: string;
  userPassword: string;
  reUserPassword?: string;
}
