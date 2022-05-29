import {IsEmail, IsNotEmpty} from "class-validator";

export class MailDto {
   @IsEmail()
   @IsNotEmpty()
   senderEmail: string;

   @IsEmail()
   @IsNotEmpty()
   receiverEmail: string;

   @IsNotEmpty()
   subject: string;

   @IsNotEmpty()
   body: string;
}