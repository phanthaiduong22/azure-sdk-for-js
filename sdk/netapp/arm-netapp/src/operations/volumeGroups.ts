/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { VolumeGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetAppManagementClient } from "../netAppManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  VolumeGroup,
  VolumeGroupsListByNetAppAccountOptionalParams,
  VolumeGroupsListByNetAppAccountResponse,
  VolumeGroupsGetOptionalParams,
  VolumeGroupsGetResponse,
  VolumeGroupDetails,
  VolumeGroupsCreateOptionalParams,
  VolumeGroupsCreateResponse,
  VolumeGroupsDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing VolumeGroups operations. */
export class VolumeGroupsImpl implements VolumeGroups {
  private readonly client: NetAppManagementClient;

  /**
   * Initialize a new instance of the class VolumeGroups class.
   * @param client Reference to the service client
   */
  constructor(client: NetAppManagementClient) {
    this.client = client;
  }

  /**
   * List all volume groups for given account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param options The options parameters.
   */
  public listByNetAppAccount(
    resourceGroupName: string,
    accountName: string,
    options?: VolumeGroupsListByNetAppAccountOptionalParams,
  ): PagedAsyncIterableIterator<VolumeGroup> {
    const iter = this.listByNetAppAccountPagingAll(
      resourceGroupName,
      accountName,
      options,
    );
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
        return this.listByNetAppAccountPagingPage(
          resourceGroupName,
          accountName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByNetAppAccountPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: VolumeGroupsListByNetAppAccountOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<VolumeGroup[]> {
    let result: VolumeGroupsListByNetAppAccountResponse;
    result = await this._listByNetAppAccount(
      resourceGroupName,
      accountName,
      options,
    );
    yield result.value || [];
  }

  private async *listByNetAppAccountPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: VolumeGroupsListByNetAppAccountOptionalParams,
  ): AsyncIterableIterator<VolumeGroup> {
    for await (const page of this.listByNetAppAccountPagingPage(
      resourceGroupName,
      accountName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List all volume groups for given account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param options The options parameters.
   */
  private _listByNetAppAccount(
    resourceGroupName: string,
    accountName: string,
    options?: VolumeGroupsListByNetAppAccountOptionalParams,
  ): Promise<VolumeGroupsListByNetAppAccountResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listByNetAppAccountOperationSpec,
    );
  }

  /**
   * Get details of the specified volume group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param volumeGroupName The name of the volumeGroup
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    volumeGroupName: string,
    options?: VolumeGroupsGetOptionalParams,
  ): Promise<VolumeGroupsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, volumeGroupName, options },
      getOperationSpec,
    );
  }

  /**
   * Create a volume group along with specified volumes
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param volumeGroupName The name of the volumeGroup
   * @param body Volume Group object supplied in the body of the operation.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    accountName: string,
    volumeGroupName: string,
    body: VolumeGroupDetails,
    options?: VolumeGroupsCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VolumeGroupsCreateResponse>,
      VolumeGroupsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<VolumeGroupsCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, accountName, volumeGroupName, body, options },
      spec: createOperationSpec,
    });
    const poller = await createHttpPoller<
      VolumeGroupsCreateResponse,
      OperationState<VolumeGroupsCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a volume group along with specified volumes
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param volumeGroupName The name of the volumeGroup
   * @param body Volume Group object supplied in the body of the operation.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    accountName: string,
    volumeGroupName: string,
    body: VolumeGroupDetails,
    options?: VolumeGroupsCreateOptionalParams,
  ): Promise<VolumeGroupsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      accountName,
      volumeGroupName,
      body,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete the specified volume group only if there are no volumes under volume group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param volumeGroupName The name of the volumeGroup
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    accountName: string,
    volumeGroupName: string,
    options?: VolumeGroupsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, accountName, volumeGroupName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete the specified volume group only if there are no volumes under volume group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param volumeGroupName The name of the volumeGroup
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    volumeGroupName: string,
    options?: VolumeGroupsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      accountName,
      volumeGroupName,
      options,
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByNetAppAccountOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/volumeGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VolumeGroupList,
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
    Parameters.accountName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/volumeGroups/{volumeGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VolumeGroupDetails,
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
    Parameters.accountName,
    Parameters.volumeGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/volumeGroups/{volumeGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VolumeGroupDetails,
    },
    201: {
      bodyMapper: Mappers.VolumeGroupDetails,
    },
    202: {
      bodyMapper: Mappers.VolumeGroupDetails,
    },
    204: {
      bodyMapper: Mappers.VolumeGroupDetails,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body31,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.volumeGroupName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/volumeGroups/{volumeGroupName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.volumeGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
