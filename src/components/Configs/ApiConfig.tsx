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
  baseUrl: string;
  resources: ResourceConfig[];
}

export const apiList: ApiConfig[] = [
  {
    name: "Patient",
    baseUrl: "https://c32618cf-389d-44f1-93ee-b67a3468aae3-dev.e1-us-east-azure.choreoapis.dev/hdbb/bffservice/endpoint-9090-803/1.0.0/fhir/r4/patient",
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
    baseUrl: "https://c32618cf-389d-44f1-93ee-b67a3468aae3-dev.e1-us-east-azure.choreoapis.dev/hdbb/bffservice/endpoint-9090-803/1.0.0/fhir/r4/patient",
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
    baseUrl: "https://c32618cf-389d-44f1-93ee-b67a3468aae3-dev.e1-us-east-azure.choreoapis.dev/hdbb/bffservice/endpoint-9090-803/1.0.0/fhir/r4/patient",
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
    baseUrl: "https://c32618cf-389d-44f1-93ee-b67a3468aae3-dev.e1-us-east-azure.choreoapis.dev/hdbb/bffservice/endpoint-9090-803/1.0.0/fhir/r4/patient",
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
    baseUrl: "https://c32618cf-389d-44f1-93ee-b67a3468aae3-dev.e1-us-east-azure.choreoapis.dev/hdbb/bffservice/endpoint-9090-803/1.0.0/fhir/r4/patient",
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
  { param: "_id", display: "Id" },
  { param: "gender", display: "Gender" },
  { param: "active", display: "Active" },
  // { param: "lastUpdated", display: "Last Updated" },
];
