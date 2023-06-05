import { BFF_BASE_URL } from "./Constants";

export enum OperationTypes {
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
  resourceOperation: OperationTypes;
}

export interface ApiConfig {
  name: string;
  baseUrl: string;
  resources: ResourceConfig[];
  searchParams: SearchParam[];
}

export interface SearchParam {
  paramName: string;
  paramValue: string;
  paramDescription: string;
  paramType: string;
  paramExample: string;
  isRequired: boolean;
}

export const apiList: ApiConfig[] = [
  {
    name: "Patient",
    baseUrl: BFF_BASE_URL + "/fhir/r4/patient",
    searchParams: [
      {
        paramName: "ID",
        paramValue: "_id",
        paramDescription: "ID of the patient",
        isRequired: false,
        paramType: "string",
        paramExample: "1",
      },
      {
        paramName: "Gender",
        paramDescription: "Gender of the person",
        paramValue: "gender",
        isRequired: false,
        paramType: "string",
        paramExample: "male",
      },
      {
        paramName: "Active",
        paramDescription: "Whether the patient record is active",
        paramValue: "active",
        isRequired: false,
        paramType: "boolean",
        paramExample: "true",
      },
      // {
      //   paramName: "Birthdate",
      //   paramDescription: "The patients birthdate (NOT IMPLEMENTED YET)",
      //   paramValue: "birthDate",
      //   isRequired: false,
      //   paramType: "date",
      //   paramExample: "2023-07-31",
      // },
    ],
    resources: [
      {
        resourceName: "SEARCH",
        resourceMethod: "GET",
        resourcePath: "/Patient",
        resourceDescription: "Search patient resources",
        resourceOperation: OperationTypes.SEARCH,
      },
      {
        resourceName: "READ",
        resourceMethod: "GET",
        resourcePath: "/Patient/{id}",
        resourceDescription: "Read patient resource by Id",
        resourceOperation: OperationTypes.READ,
      },
      {
        resourceName: "CREATE",
        resourceMethod: "POST",
        resourcePath: "/Patient",
        resourceDescription: "Create patient resource",
        resourceOperation: OperationTypes.CREATE,
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
    name: "Encounter",
    baseUrl: BFF_BASE_URL + "/fhir/r4/encounter",
    searchParams: [],
    resources: [
      {
        resourceName: "SEARCH",
        resourceMethod: "GET",
        resourcePath: "/Encounter",
        resourceDescription: "Search Encounter resources",
        resourceOperation: OperationTypes.SEARCH,
      },
      {
        resourceName: "READ",
        resourceMethod: "GET",
        resourcePath: "/Encounter/{id}",
        resourceDescription: "Read Encounter resource by id",
        resourceOperation: OperationTypes.READ,
      },
      {
        resourceName: "CREATE",
        resourceMethod: "POST",
        resourcePath: "/Encounter",
        resourceDescription: "Create Encounter resource",
        resourceOperation: OperationTypes.CREATE,
      },
    ],
  },
  {
    name: "Practitioner",
    baseUrl: BFF_BASE_URL + "/fhir/r4/practitioner",
    searchParams: [],
    resources: [
      {
        resourceName: "SEARCH",
        resourceMethod: "GET",
        resourcePath: "/Practitioner",
        resourceDescription: "Search Practitioner resources",
        resourceOperation: OperationTypes.SEARCH,
      },
      {
        resourceName: "READ",
        resourceMethod: "GET",
        resourcePath: "/Practitioner/{id}",
        resourceDescription: "Read Practitioner resource by id",
        resourceOperation: OperationTypes.READ,
      },
      {
        resourceName: "CREATE",
        resourceMethod: "POST",
        resourcePath: "/Practitioner",
        resourceDescription: "Create Practitioner resource",
        resourceOperation: OperationTypes.CREATE,
      },
    ],
  },
  {
    name: "Organization",
    baseUrl: BFF_BASE_URL + "/fhir/r4/organization",
    searchParams: [],
    resources: [
      {
        resourceName: "SEARCH",
        resourceMethod: "GET",
        resourcePath: "/Organization",
        resourceDescription: "Search Organization resources",
        resourceOperation: OperationTypes.SEARCH,
      },
      {
        resourceName: "READ",
        resourceMethod: "GET",
        resourcePath: "/Organization/{id}",
        resourceDescription: "Read Organization resource by id",
        resourceOperation: OperationTypes.READ,
      },
      {
        resourceName: "CREATE",
        resourceMethod: "POST",
        resourcePath: "/Organization",
        resourceDescription: "Create Organization resource",
        resourceOperation: OperationTypes.CREATE,
      },
    ],
  },
  {
    name: "Observation",
    baseUrl: BFF_BASE_URL + "/fhir/r4/observation",
    searchParams: [],
    resources: [
      {
        resourceName: "SEARCH",
        resourceMethod: "GET",
        resourcePath: "/Observation",
        resourceDescription: "Search Observation resources",
        resourceOperation: OperationTypes.SEARCH,
      },
      {
        resourceName: "READ",
        resourceMethod: "GET",
        resourcePath: "/Observation/{id}",
        resourceDescription: "Read Observation resources by id",
        resourceOperation: OperationTypes.READ,
      },
      {
        resourceName: "CREATE",
        resourceMethod: "POST",
        resourcePath: "/Observation",
        resourceDescription: "Create Observation resource",
        resourceOperation: OperationTypes.CREATE,
      },
    ],
  },
];
