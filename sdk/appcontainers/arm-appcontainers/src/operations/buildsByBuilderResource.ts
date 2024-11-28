/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { BuildsByBuilderResource } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerAppsAPIClient } from "../containerAppsAPIClient";
import {
  BuildResource,
  BuildsByBuilderResourceListNextOptionalParams,
  BuildsByBuilderResourceListOptionalParams,
  BuildsByBuilderResourceListResponse,
  BuildsByBuilderResourceListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing BuildsByBuilderResource operations. */
export class BuildsByBuilderResourceImpl implements BuildsByBuilderResource {
  private readonly client: ContainerAppsAPIClient;

  /**
   * Initialize a new instance of the class BuildsByBuilderResource class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerAppsAPIClient) {
    this.client = client;
  }

  /**
   * List BuildResource resources by BuilderResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param builderName The name of the builder.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    builderName: string,
    options?: BuildsByBuilderResourceListOptionalParams,
  ): PagedAsyncIterableIterator<BuildResource> {
    const iter = this.listPagingAll(resourceGroupName, builderName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          builderName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    builderName: string,
    options?: BuildsByBuilderResourceListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<BuildResource[]> {
    let result: BuildsByBuilderResourceListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, builderName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        builderName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    builderName: string,
    options?: BuildsByBuilderResourceListOptionalParams,
  ): AsyncIterableIterator<BuildResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      builderName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List BuildResource resources by BuilderResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param builderName The name of the builder.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    builderName: string,
    options?: BuildsByBuilderResourceListOptionalParams,
  ): Promise<BuildsByBuilderResourceListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, builderName, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param builderName The name of the builder.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    builderName: string,
    nextLink: string,
    options?: BuildsByBuilderResourceListNextOptionalParams,
  ): Promise<BuildsByBuilderResourceListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, builderName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/builders/{builderName}/builds",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BuildCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.builderName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BuildCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.builderName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
