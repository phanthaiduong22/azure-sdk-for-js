/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ElasticSanUpdate, ElasticSanManagement } from "@azure/arm-elasticsan";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Update a Elastic San.
 *
 * @summary Update a Elastic San.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/preview/2021-11-20-preview/examples/ElasticSans_Update_MaximumSet_Gen.json
 */
async function elasticSansUpdateMaximumSetGen() {
  const subscriptionId = "aaaaaaaaaaaaaaaaaa";
  const resourceGroupName = "rgelasticsan";
  const elasticSanName = "ti7q-k952-1qB3J_5";
  const parameters: ElasticSanUpdate = {
    baseSizeTiB: 23,
    extendedCapacitySizeTiB: 4,
    tags: { key3137: "aaaaaaaaaaaaaaa" }
  };
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const result = await client.elasticSans.beginUpdateAndWait(
    resourceGroupName,
    elasticSanName,
    parameters
  );
  console.log(result);
}

elasticSansUpdateMaximumSetGen().catch(console.error);

/**
 * This sample demonstrates how to Update a Elastic San.
 *
 * @summary Update a Elastic San.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/preview/2021-11-20-preview/examples/ElasticSans_Update_MinimumSet_Gen.json
 */
async function elasticSansUpdateMinimumSetGen() {
  const subscriptionId = "aaaaaaaaaaaaaaaaaa";
  const resourceGroupName = "rgelasticsan";
  const elasticSanName = "ti7q-k952-1qB3J_5";
  const parameters: ElasticSanUpdate = {};
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const result = await client.elasticSans.beginUpdateAndWait(
    resourceGroupName,
    elasticSanName,
    parameters
  );
  console.log(result);
}

elasticSansUpdateMinimumSetGen().catch(console.error);
