export interface ParamConfig {
  paramName: string;
  paramExample: string;
  isRequired: boolean;
}

export enum OpearionTypes {
  CREATE,
  SEARCH,
  READ,
  DELETE,
}

export interface ResourceConfig {
  resourceMethod: string;
  resourcePath: string;
  resourceDescription: string;
  resourceParameters?: ParamConfig[];
  resourceOperation: OpearionTypes;
}

export interface ApiConfig {
  name: string;
  resources: ResourceConfig[];
}

export const apiList: ApiConfig[] = [
  {
    name: "Patient",
    resources: [
      {
        resourceMethod: "GET",
        resourcePath: "/Patient",
        resourceDescription: "Search patient resources",
        resourceOperation: OpearionTypes.SEARCH,
      },
      {
        resourceMethod: "GET",
        resourcePath: "/Patient/{id}",
        resourceDescription: "Read patient resource by Id",
        resourceOperation: OpearionTypes.READ,
      },
      {
        resourceMethod: "POST",
        resourcePath: "/Patient",
        resourceDescription: "Create patient resource",
        resourceOperation: OpearionTypes.CREATE,
      },
      {
        resourceMethod: "DELETE",
        resourcePath: "/Patient/{id}",
        resourceDescription: "Delete patient resource",
        resourceOperation: OpearionTypes.DELETE,
      },
    ],
  },
  {
    name: "Explanation Of Benefit",
    resources: [
      {
        resourceMethod: "GET",
        resourcePath: "/ExplanationOfBenefit",
        resourceDescription: "Search ExplanationOfBenefit resources",
        resourceOperation: OpearionTypes.SEARCH,
      },
      {
        resourceMethod: "GET",
        resourcePath: "/ExplanationOfBenefit/{id}",
        resourceDescription: "Read ExplanationOfBenefit resource by id",
        resourceOperation: OpearionTypes.READ,
      },
      {
        resourceMethod: "POST",
        resourcePath: "/ExplanationOfBenefit",
        resourceDescription: "Create ExplanationOfBenefit resource",
        resourceOperation: OpearionTypes.CREATE,
      },
      {
        resourceMethod: "DELETE",
        resourcePath: "/ExplanationOfBenefit/{id}",
        resourceDescription: "Delete ExplanationOfBenefit resource",
        resourceOperation: OpearionTypes.DELETE,
      },
    ],
  },
  {
    name: "Claim",
    resources: [
      {
        resourceMethod: "GET",
        resourcePath: "/Claim",
        resourceDescription: "Search Claim resources",
        resourceOperation: OpearionTypes.SEARCH,
      },
      {
        resourceMethod: "GET",
        resourcePath: "/Claim/{id}",
        resourceDescription: "Read Claim resource by id",
        resourceOperation: OpearionTypes.READ,
      },
      {
        resourceMethod: "POST",
        resourcePath: "/Claim",
        resourceDescription: "Create Claim resource",
        resourceOperation: OpearionTypes.CREATE,
      },
      {
        resourceMethod: "DELETE",
        resourcePath: "/Claim/{id}",
        resourceDescription: "Delete Claim resource",
        resourceOperation: OpearionTypes.DELETE,
      },
    ],
  },
  {
    name: "Observation",
    resources: [
      {
        resourceMethod: "GET",
        resourcePath: "/Observation",
        resourceDescription: "Search Observation resources",
        resourceOperation: OpearionTypes.SEARCH,
      },
      {
        resourceMethod: "GET",
        resourcePath: "/Observation/{id}",
        resourceDescription: "Read Observation resource by id",
        resourceOperation: OpearionTypes.READ,
      },
      {
        resourceMethod: "POST",
        resourcePath: "/Observation",
        resourceDescription: "Create Observation resource",
        resourceOperation: OpearionTypes.CREATE,
      },
      {
        resourceMethod: "DELETE",
        resourcePath: "/Observation/{id}",
        resourceDescription: "Delete Observation resource",
        resourceOperation: OpearionTypes.DELETE,
      },
    ],
  },
  {
    name: "Organization",
    resources: [
      {
        resourceMethod: "GET",
        resourcePath: "/Observation",
        resourceDescription: "Search Observation resources",
        resourceOperation: OpearionTypes.SEARCH,
      },
      {
        resourceMethod: "GET",
        resourcePath: "/Observation/{id}",
        resourceDescription: "Read Observation resources by id",
        resourceOperation: OpearionTypes.READ,
      },
      {
        resourceMethod: "POST",
        resourcePath: "/Observation",
        resourceDescription: "Create Observation resource",
        resourceOperation: OpearionTypes.CREATE,
      },
      {
        resourceMethod: "DELETE",
        resourcePath: "/Observation/{id}",
        resourceDescription: "Delete Observation resource",
        resourceOperation: OpearionTypes.DELETE,
      },
    ],
  },
];

export const searchParams = [
  { param: "name", display: "Name" },
  { param: "url", display: "URL" },
  { param: "version", display: "Version" },
  { param: "lastUpdated", display: "Last Updated" },
];
