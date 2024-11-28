/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  DnsResolverPolicy,
  DnsResolverPoliciesListByResourceGroupOptionalParams,
  DnsResolverPoliciesListOptionalParams,
  SubResource,
  DnsResolverPoliciesListByVirtualNetworkOptionalParams,
  DnsResolverPoliciesCreateOrUpdateOptionalParams,
  DnsResolverPoliciesCreateOrUpdateResponse,
  DnsResolverPolicyPatch,
  DnsResolverPoliciesUpdateOptionalParams,
  DnsResolverPoliciesUpdateResponse,
  DnsResolverPoliciesDeleteOptionalParams,
  DnsResolverPoliciesDeleteResponse,
  DnsResolverPoliciesGetOptionalParams,
  DnsResolverPoliciesGetResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DnsResolverPolicies. */
export interface DnsResolverPolicies {
  /**
   * Lists DNS resolver policies within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: DnsResolverPoliciesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<DnsResolverPolicy>;
  /**
   * Lists DNS resolver policies in all resource groups of a subscription.
   * @param options The options parameters.
   */
  list(
    options?: DnsResolverPoliciesListOptionalParams,
  ): PagedAsyncIterableIterator<DnsResolverPolicy>;
  /**
   * Lists DNS resolver policy resource IDs linked to a virtual network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param virtualNetworkName The name of the virtual network.
   * @param options The options parameters.
   */
  listByVirtualNetwork(
    resourceGroupName: string,
    virtualNetworkName: string,
    options?: DnsResolverPoliciesListByVirtualNetworkOptionalParams,
  ): PagedAsyncIterableIterator<SubResource>;
  /**
   * Creates or updates a DNS resolver policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverPolicyName The name of the DNS resolver policy.
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    dnsResolverPolicyName: string,
    parameters: DnsResolverPolicy,
    options?: DnsResolverPoliciesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DnsResolverPoliciesCreateOrUpdateResponse>,
      DnsResolverPoliciesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a DNS resolver policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverPolicyName The name of the DNS resolver policy.
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    dnsResolverPolicyName: string,
    parameters: DnsResolverPolicy,
    options?: DnsResolverPoliciesCreateOrUpdateOptionalParams,
  ): Promise<DnsResolverPoliciesCreateOrUpdateResponse>;
  /**
   * Updates a DNS resolver policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverPolicyName The name of the DNS resolver policy.
   * @param parameters Parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    dnsResolverPolicyName: string,
    parameters: DnsResolverPolicyPatch,
    options?: DnsResolverPoliciesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DnsResolverPoliciesUpdateResponse>,
      DnsResolverPoliciesUpdateResponse
    >
  >;
  /**
   * Updates a DNS resolver policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverPolicyName The name of the DNS resolver policy.
   * @param parameters Parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    dnsResolverPolicyName: string,
    parameters: DnsResolverPolicyPatch,
    options?: DnsResolverPoliciesUpdateOptionalParams,
  ): Promise<DnsResolverPoliciesUpdateResponse>;
  /**
   * Deletes a DNS resolver policy. WARNING: This operation cannot be undone.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverPolicyName The name of the DNS resolver policy.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    dnsResolverPolicyName: string,
    options?: DnsResolverPoliciesDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DnsResolverPoliciesDeleteResponse>,
      DnsResolverPoliciesDeleteResponse
    >
  >;
  /**
   * Deletes a DNS resolver policy. WARNING: This operation cannot be undone.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverPolicyName The name of the DNS resolver policy.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    dnsResolverPolicyName: string,
    options?: DnsResolverPoliciesDeleteOptionalParams,
  ): Promise<DnsResolverPoliciesDeleteResponse>;
  /**
   * Gets properties of a DNS resolver policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsResolverPolicyName The name of the DNS resolver policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    dnsResolverPolicyName: string,
    options?: DnsResolverPoliciesGetOptionalParams,
  ): Promise<DnsResolverPoliciesGetResponse>;
}
