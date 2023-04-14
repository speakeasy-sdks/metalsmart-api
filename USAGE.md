<!-- Start SDK Example Usage -->
```typescript
import {
  shared.CreateUserDto,
  UserControllerCreateUserResponse
} from "metals/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "metals";
const sdk = new SDK();

const req: shared.CreateUserDto = {
  city: "Laruecester",
  companyName: "quibusdam",
  description: "unde",
  email: "Karley_Stamm@hotmail.com",
  lastName: "Oberbrunner",
  logo: "suscipit",
  name: "Dr. Valerie Toy",
  phoneNumber: "suscipit",
};

sdk.user.userControllerCreateUser(req).then((res: UserControllerCreateUserResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->