import {
  type SubscriberConfig,
  type SubscriberArgs,
} from "@medusajs/framework";
import myWorkflow from "../workflows/hello-world";
import { Modules } from "@medusajs/framework/utils";
import { IUserModuleService } from "@medusajs/framework/types";

export default async function handleCustomerCreate({
  event: { data },
  container,
}: SubscriberArgs<{ id: string }>) {
  const userId = data.id;
  const userModuleService: IUserModuleService = container.resolve(Modules.USER);

  const user = await userModuleService.retrieveUser(userId);

  const { result } = await myWorkflow(container).run({
    input: {
      name: user.first_name,
    },
  });

  console.log(result);
}

export const config: SubscriberConfig = {
  event: "user.created",
};
