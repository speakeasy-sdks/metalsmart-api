<!-- Start SDK Example Usage -->
```typescript
import { SDK } from "metals";
import { UserControllerCreateUserResponse } from "metals/dist/sdk/models/operations";

const sdk = new SDK();

sdk.user.userControllerCreateUser({
  city: "Laruecester",
  companyName: "quibusdam",
  description: "unde",
  email: "Karley_Stamm@hotmail.com",
  lastName: "Oberbrunner",
  logo: "suscipit",
  name: "Dr. Valerie Toy",
  phoneNumber: "suscipit",
}).then((res: UserControllerCreateUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->