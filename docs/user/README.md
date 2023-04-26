# user

### Available Operations

* [userControllerCreateUser](#usercontrollercreateuser)
* [userControllerGetUser](#usercontrollergetuser)

## userControllerCreateUser

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "metals";
import { CreateUserDto, UserControllerCreateUserResponse } from "metals/dist/sdk/models/operations";

const sdk = new SDK();

const req: shared.CreateUserDto = {
  city: "Paxtonfield",
  companyName: "voluptatum",
  description: "iusto",
  email: "Glen.Walsh33@yahoo.com",
  lastName: "Bogisich",
  logo: "deserunt",
  name: "Roberta Sipes",
  phoneNumber: "odit",
};

sdk.user.userControllerCreateUser(req).then((res: UserControllerCreateUserResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## userControllerGetUser

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "metals";
import { UserControllerGetUserRequest, UserControllerGetUserResponse } from "metals/dist/sdk/models/operations";

const sdk = new SDK();

const req: UserControllerGetUserRequest = {
  id: "ddf7cc78-ca1b-4a92-8fc8-16742cb73920",
};

sdk.user.userControllerGetUser(req).then((res: UserControllerGetUserResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
