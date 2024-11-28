/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { EventHubManagementClient } from "@azure/arm-eventhub";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets all the Event Hubs in a Namespace.
 *
 * @summary Gets all the Event Hubs in a Namespace.
 * x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2024-01-01/examples/EventHubs/EHEventHubListByNameSpace.json
 */
async function eventHubsListAll() {
  const subscriptionId =
    process.env["EVENTHUB_SUBSCRIPTION_ID"] ||
    "e2f361f0-3b27-4503-a9cc-21cfba380093";
  const resourceGroupName =
    process.env["EVENTHUB_RESOURCE_GROUP"] ||
    "Default-NotificationHubs-AustraliaEast";
  const namespaceName = "sdk-Namespace-5357";
  const credential = new DefaultAzureCredential();
  const client = new EventHubManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.eventHubs.listByNamespace(
    resourceGroupName,
    namespaceName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  eventHubsListAll();
}

main().catch(console.error);
