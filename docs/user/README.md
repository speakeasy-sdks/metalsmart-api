# user

### Available Operations

* [userControllerCreateUser](#usercontrollercreateuser)
* [userControllerGetUser](#usercontrollergetuser)

## userControllerCreateUser

### Example Usage

```typescript
import { SDK } from "metals";
import { UserControllerCreateUserResponse } from "metals/dist/sdk/models/operations";

const sdk = new SDK();

sdk.user.userControllerCreateUser({
  city: "Paxtonfield",
  companyName: "voluptatum",
  description: "iusto",
  email: "Glen.Walsh33@yahoo.com",
  lastName: "Bogisich",
  logo: "deserunt",
  name: "Roberta Sipes",
  phoneNumber: "odit",
}).then((res: UserControllerCreateUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## userControllerGetUser

### Example Usage

```typescript
import { SDK } from "metals";
import { UserControllerGetUserResponse } from "metals/dist/sdk/models/operations";

const sdk = new SDK();

sdk.user.userControllerGetUser({
  id: "ddf7cc78-ca1b-4a92-8fc8-16742cb73920",
}).then((res: UserControllerGetUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
