import {
    IProductModuleService,
    MedusaContainer,
  } from "@medusajs/framework/types"
  import { Modules } from "@medusajs/framework/utils"
  
  export default async function myCustomJob(
    container: MedusaContainer
  ) {
    const productModuleService: IProductModuleService = 
      container.resolve(Modules.PRODUCT)
  
    const [, count] = await productModuleService.listAndCountProducts()
  
    console.log(
      `Time to check products! You have ${count} product(s)`
    )
  }
  
  export const config = {
    name: "every-minute-message",
    // execute every minute
    schedule: "* * * * *",
  }