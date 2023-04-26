<!-- Start SDK Example Usage -->
```typescript
import { AxiosError } from "axios";
import { SDK } from "metals";
import { CreateUserDto, UserControllerCreateUserResponse } from "metals/dist/sdk/models/operations";

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
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->