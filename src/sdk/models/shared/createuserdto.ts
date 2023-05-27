/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CreateUserDto extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "city" })
    city: string;

    @SpeakeasyMetadata()
    @Expose({ name: "companyName" })
    companyName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lastName" })
    lastName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "logo" })
    logo: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "phoneNumber" })
    phoneNumber: string;
}
