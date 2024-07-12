export interface RequestAccessCodePayload {
  phoneNumber: string;
}

export interface RequestVerifyAccessCodePayload {
  userId: string;
  accessCode: string;
  phoneNumber: string;
}

export interface ResponseAccessCode {
  message: string;
  userId: string;
}
