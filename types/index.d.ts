/* eslint-disable no-unused-vars */
import { Reserve } from "./appwrite.types";

declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
  declare type Gender = "Male" | "Female" | "Other";
  declare type Status = "pending" | "scheduled" | "cancelled";
  
  declare interface CreateGuestParams {
    fullname: string;
    email: string;
  }
  declare interface User extends CreateUserParams {
    $id: string;
  }
  
  declare interface RegisterUserParams extends CreateUserParams {
    userId: string;
    name: string;
    email: string;
    phone: string;
    birthDate: Date;
    gender: Gender;
    address: string;
    identificationType: string | undefined;
    identificationNumber: string | undefined;
    identificationDocument: FormData | undefined;
    privacyConsent: boolean;
  }
  
  declare type CreateReserveParams = {
    userId: string;
    guest: string;
    roomType: string;
    schedule: Date;
    status: Status;
    note: string | undefined;
  };
  
  declare type UpdateReserveParams = {
    reserveId: string;
    userId: string;
    reserve: Reserve;
    type: string;
  };