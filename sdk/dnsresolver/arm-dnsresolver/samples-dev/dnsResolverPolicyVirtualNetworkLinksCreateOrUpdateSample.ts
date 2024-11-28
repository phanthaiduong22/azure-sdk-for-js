/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  DnsResolverPolicyVirtualNetworkLink,
  DnsResolverManagementClient,
} from "@azure/arm-dnsresolver";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a DNS resolver policy virtual network link.
 *
 * @summary Creates or updates a DNS resolver policy virtual network link.
 * x-ms-original-file: specification/dnsresolver/resource-manager/Microsoft.Network/preview/2023-07-01-preview/examples/DnsResolverPolicyVirtualNetworkLink_Put.json
 */
async function upsertDnsResolverPolicyVirtualNetworkLink() {
  const subscriptionId =
    process.env["DNSRESOLVER_SUBSCRIPTION_ID"] ||
    "abdd4249-9f34-4cc6-8e42-c2e32110603e";
  const resourceGroupName =
    process.env["DNSRESOLVER_RESOURCE_GROUP"] || "sampleResourceGroup";
  const dnsResolverPolicyName = "sampleDnsResolverPolicy";
  const dnsResolverPolicyVirtualNetworkLinkName = "sampleVirtualNetworkLink";
  const parameters: DnsResolverPolicyVirtualNetworkLink = {
    location: "westus2",
    tags: { key1: "value1" },
    virtualNetwork: {
      id: "/subscriptions/0403cfa9-9659-4f33-9f30-1f191c51d111/resourceGroups/sampleVnetResourceGroupName/providers/Microsoft.Network/virtualNetworks/sampleVirtualNetwork",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new DnsResolverManagementClient(credential, subscriptionId);
  const result =
    await client.dnsResolverPolicyVirtualNetworkLinks.beginCreateOrUpdateAndWait(
      resourceGroupName,
      dnsResolverPolicyName,
      dnsResolverPolicyVirtualNetworkLinkName,
      parameters,
    );
  console.log(result);
}

async function main() {
  upsertDnsResolverPolicyVirtualNetworkLink();
}

main().catch(console.error);
