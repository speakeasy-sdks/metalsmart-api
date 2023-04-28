# metals

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/metalsmart-api-speakeasy
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/metalsmart-api-speakeasy
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [user](docs/user/README.md)

* [userControllerCreateUser](docs/user/README.md#usercontrollercreateuser)
* [userControllerGetUser](docs/user/README.md#usercontrollergetuser)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

