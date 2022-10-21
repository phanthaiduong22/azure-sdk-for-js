/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SkuInformation, SkusListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Skus. */
export interface Skus {
  /**
   * List all the available Skus in the region and information related to them
   * @param options The options parameters.
   */
  list(
    options?: SkusListOptionalParams
  ): PagedAsyncIterableIterator<SkuInformation>;
}
