/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { BillingSubscriptionsAliases } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClient } from "../billingManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  BillingSubscriptionAlias,
  BillingSubscriptionsAliasesListByBillingAccountNextOptionalParams,
  BillingSubscriptionsAliasesListByBillingAccountOptionalParams,
  BillingSubscriptionsAliasesListByBillingAccountResponse,
  BillingSubscriptionsAliasesGetOptionalParams,
  BillingSubscriptionsAliasesGetResponse,
  BillingSubscriptionsAliasesCreateOrUpdateOptionalParams,
  BillingSubscriptionsAliasesCreateOrUpdateResponse,
  BillingSubscriptionsAliasesListByBillingAccountNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing BillingSubscriptionsAliases operations. */
export class BillingSubscriptionsAliasesImpl
  implements BillingSubscriptionsAliases
{
  private readonly client: BillingManagementClient;

  /**
   * Initialize a new instance of the class BillingSubscriptionsAliases class.
   * @param client Reference to the service client
   */
  constructor(client: BillingManagementClient) {
    this.client = client;
  }

  /**
   * Lists the subscription aliases for a billing account. The operation is supported for seat based
   * billing subscriptions.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  public listByBillingAccount(
    billingAccountName: string,
    options?: BillingSubscriptionsAliasesListByBillingAccountOptionalParams,
  ): PagedAsyncIterableIterator<BillingSubscriptionAlias> {
    const iter = this.listByBillingAccountPagingAll(
      billingAccountName,
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
        return this.listByBillingAccountPagingPage(
          billingAccountName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByBillingAccountPagingPage(
    billingAccountName: string,
    options?: BillingSubscriptionsAliasesListByBillingAccountOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<BillingSubscriptionAlias[]> {
    let result: BillingSubscriptionsAliasesListByBillingAccountResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByBillingAccount(billingAccountName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByBillingAccountNext(
        billingAccountName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByBillingAccountPagingAll(
    billingAccountName: string,
    options?: BillingSubscriptionsAliasesListByBillingAccountOptionalParams,
  ): AsyncIterableIterator<BillingSubscriptionAlias> {
    for await (const page of this.listByBillingAccountPagingPage(
      billingAccountName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets a subscription by its alias ID.  The operation is supported for seat based billing
   * subscriptions.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param aliasName The ID that uniquely identifies a subscription alias.
   * @param options The options parameters.
   */
  get(
    billingAccountName: string,
    aliasName: string,
    options?: BillingSubscriptionsAliasesGetOptionalParams,
  ): Promise<BillingSubscriptionsAliasesGetResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, aliasName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a billing subscription by its alias ID.  The operation is supported for seat
   * based billing subscriptions.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param aliasName The ID that uniquely identifies a subscription alias.
   * @param parameters A billing subscription alias.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    billingAccountName: string,
    aliasName: string,
    parameters: BillingSubscriptionAlias,
    options?: BillingSubscriptionsAliasesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BillingSubscriptionsAliasesCreateOrUpdateResponse>,
      BillingSubscriptionsAliasesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<BillingSubscriptionsAliasesCreateOrUpdateResponse> => {
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
      args: { billingAccountName, aliasName, parameters, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      BillingSubscriptionsAliasesCreateOrUpdateResponse,
      OperationState<BillingSubscriptionsAliasesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a billing subscription by its alias ID.  The operation is supported for seat
   * based billing subscriptions.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param aliasName The ID that uniquely identifies a subscription alias.
   * @param parameters A billing subscription alias.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    billingAccountName: string,
    aliasName: string,
    parameters: BillingSubscriptionAlias,
    options?: BillingSubscriptionsAliasesCreateOrUpdateOptionalParams,
  ): Promise<BillingSubscriptionsAliasesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      billingAccountName,
      aliasName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists the subscription aliases for a billing account. The operation is supported for seat based
   * billing subscriptions.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  private _listByBillingAccount(
    billingAccountName: string,
    options?: BillingSubscriptionsAliasesListByBillingAccountOptionalParams,
  ): Promise<BillingSubscriptionsAliasesListByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, options },
      listByBillingAccountOperationSpec,
    );
  }

  /**
   * ListByBillingAccountNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param nextLink The nextLink from the previous successful call to the ListByBillingAccount method.
   * @param options The options parameters.
   */
  private _listByBillingAccountNext(
    billingAccountName: string,
    nextLink: string,
    options?: BillingSubscriptionsAliasesListByBillingAccountNextOptionalParams,
  ): Promise<BillingSubscriptionsAliasesListByBillingAccountNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, nextLink, options },
      listByBillingAccountNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptionAliases/{aliasName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionAlias,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName1,
    Parameters.aliasName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptionAliases/{aliasName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionAlias,
    },
    201: {
      bodyMapper: Mappers.BillingSubscriptionAlias,
    },
    202: {
      bodyMapper: Mappers.BillingSubscriptionAlias,
    },
    204: {
      bodyMapper: Mappers.BillingSubscriptionAlias,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters16,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName1,
    Parameters.aliasName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByBillingAccountOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptionAliases",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionAliasListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.orderBy,
    Parameters.top,
    Parameters.skip,
    Parameters.count,
    Parameters.search,
    Parameters.includeDeleted,
  ],
  urlParameters: [Parameters.$host, Parameters.billingAccountName1],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByBillingAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionAliasListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.billingAccountName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
