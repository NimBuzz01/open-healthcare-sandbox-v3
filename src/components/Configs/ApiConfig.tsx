export interface SearchParam {
  paramName: string;
  paramValue: string;
  paramType: string;
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
  resourceName: string;
  resourceMethod: string;
  resourcePath: string;
  resourceDescription: string;
  resourceParameters?: SearchParam[];
  resourceOperation: OpearionTypes;
}

export interface ApiConfig {
  name: string;
  baseUrl: string;
  resources: ResourceConfig[];
  searchParams: SearchParam[];
}

export const apiList: ApiConfig[] = [
  {
    name: "Patient",
    baseUrl:
      "https://c32618cf-389d-44f1-93ee-b67a3468aae3-dev.e1-us-east-azure.choreoapis.dev/hdbb/bffservice/endpoint-9090-803/1.0.0/fhir/r4/patient",
    searchParams: [
      {
        paramName: "ID",
        paramValue: "_id",
        isRequired: false,
        paramType: "integer",
        paramExample: "1",
      },
      {
        paramName: "Gender",
        paramValue: "gender",
        isRequired: false,
        paramType: "string",
        paramExample: "male",
      },
      {
        paramName: "Active",
        paramValue: "active",
        isRequired: false,
        paramType: "boolean",
        paramExample: "true",
      },
    ],
    resources: [
      {
        resourceName: "SEARCH",
        resourceMethod: "GET",
        resourcePath: "/Patient",
        resourceDescription: "Search patient resources",
        resourceOperation: OpearionTypes.SEARCH,
      },
      {
        resourceName: "READ",
        resourceMethod: "GET",
        resourcePath: "/Patient/{id}",
        resourceDescription: "Read patient resource by Id",
        resourceOperation: OpearionTypes.READ,
      },
      {
        resourceName: "CREATE",
        resourceMethod: "POST",
        resourcePath: "/Patient",
        resourceDescription: "Create patient resource",
        resourceOperation: OpearionTypes.CREATE,
      },
      // {
      //   resourceMethod: "DELETE",
      //   resourcePath: "/Patient/{id}",
      //   resourceDescription: "Delete patient resource",
      //   resourceOperation: OpearionTypes.DELETE,
      // },
    ],
  },
  {
    name: "Explanation Of Benefit",
    baseUrl:
      "https://c32618cf-389d-44f1-93ee-b67a3468aae3-dev.e1-us-east-azure.choreoapis.dev/hdbb/bffservice/endpoint-9090-803/1.0.0/fhir/r4/patient",
    searchParams: [],
    resources: [
      {
        resourceName: "SEARCH",
        resourceMethod: "GET",
        resourcePath: "/ExplanationOfBenefit",
        resourceDescription: "Search ExplanationOfBenefit resources",
        resourceOperation: OpearionTypes.SEARCH,
      },
      {
        resourceName: "READ",
        resourceMethod: "GET",
        resourcePath: "/ExplanationOfBenefit/{id}",
        resourceDescription: "Read ExplanationOfBenefit resource by id",
        resourceOperation: OpearionTypes.READ,
      },
      {
        resourceName: "CREATE",
        resourceMethod: "POST",
        resourcePath: "/ExplanationOfBenefit",
        resourceDescription: "Create ExplanationOfBenefit resource",
        resourceOperation: OpearionTypes.CREATE,
      },
    ],
  },
  {
    name: "Claim",
    baseUrl:
      "https://c32618cf-389d-44f1-93ee-b67a3468aae3-dev.e1-us-east-azure.choreoapis.dev/hdbb/bffservice/endpoint-9090-803/1.0.0/fhir/r4/patient",
    searchParams: [],
    resources: [
      {
        resourceName: "SEARCH",
        resourceMethod: "GET",
        resourcePath: "/Claim",
        resourceDescription: "Search Claim resources",
        resourceOperation: OpearionTypes.SEARCH,
      },
      {
        resourceName: "READ",
        resourceMethod: "GET",
        resourcePath: "/Claim/{id}",
        resourceDescription: "Read Claim resource by id",
        resourceOperation: OpearionTypes.READ,
      },
      {
        resourceName: "CREATE",
        resourceMethod: "POST",
        resourcePath: "/Claim",
        resourceDescription: "Create Claim resource",
        resourceOperation: OpearionTypes.CREATE,
      },
    ],
  },
  {
    name: "Observation",
    baseUrl:
      "https://c32618cf-389d-44f1-93ee-b67a3468aae3-dev.e1-us-east-azure.choreoapis.dev/hdbb/bffservice/endpoint-9090-803/1.0.0/fhir/r4/patient",
    searchParams: [],
    resources: [
      {
        resourceName: "SEARCH",
        resourceMethod: "GET",
        resourcePath: "/Observation",
        resourceDescription: "Search Observation resources",
        resourceOperation: OpearionTypes.SEARCH,
      },
      {
        resourceName: "READ",
        resourceMethod: "GET",
        resourcePath: "/Observation/{id}",
        resourceDescription: "Read Observation resource by id",
        resourceOperation: OpearionTypes.READ,
      },
      {
        resourceName: "CREATE",
        resourceMethod: "POST",
        resourcePath: "/Observation",
        resourceDescription: "Create Observation resource",
        resourceOperation: OpearionTypes.CREATE,
      },
    ],
  },
  {
    name: "Organization",
    baseUrl:
      "https://c32618cf-389d-44f1-93ee-b67a3468aae3-dev.e1-us-east-azure.choreoapis.dev/hdbb/bffservice/endpoint-9090-803/1.0.0/fhir/r4/patient",
    searchParams: [],
    resources: [
      {
        resourceName: "SEARCH",
        resourceMethod: "GET",
        resourcePath: "/Observation",
        resourceDescription: "Search Observation resources",
        resourceOperation: OpearionTypes.SEARCH,
      },
      {
        resourceName: "READ",
        resourceMethod: "GET",
        resourcePath: "/Observation/{id}",
        resourceDescription: "Read Observation resources by id",
        resourceOperation: OpearionTypes.READ,
      },
      {
        resourceName: "CREATE",
        resourceMethod: "POST",
        resourcePath: "/Observation",
        resourceDescription: "Create Observation resource",
        resourceOperation: OpearionTypes.CREATE,
      },
    ],
  },
];
