import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import HelloModuleService from "../../modules/hello/service";
import { HELLO_MODULE } from "../../modules/hello";

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  const helloModuleService: HelloModuleService =
    req.scope.resolve(HELLO_MODULE);

  const my_custom = await helloModuleService.createMyCustoms({
    name: "test",
  });

  res.json({
    my_custom,
  });
}
