import { ReactElement } from "react";
import {
  ConnectToEmr,
  CcdaToFhir,
  FhirPath,
  Hl7v2ToFhir,
  SmartOnFhir,
  FhirValidation,
  FhirApis,
} from "../Accelerators";
import { data as ccdaData } from "../Accelerators/Samples/CcdaData";
import { data as hl7Data } from "../Accelerators/Samples/Hl7Data";
import { data as fhirData } from "../Accelerators/Samples/FhirData";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import TransformOutlinedIcon from "@mui/icons-material/TransformOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import CableOutlinedIcon from "@mui/icons-material/CableOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";

export interface Item {
  label: string;
  description: string;
  url: string;
  path: string;
  icon: ReactElement;
  component: ReactElement;
  sampleData?: Sample[];
}

export interface Sample {
  name: string;
  data: string;
}

export const items: Item[] = [
  {
    label: "FHIR APIs",
    description: "Try out sample FHIR APIs",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/",
    icon: <LocalFireDepartmentOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <FhirApis />,
    sampleData: fhirData,
  },
  {
    label: "HL7V2 To FHIR",
    description: "Convert HL7 V2 data to FHIR",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/hl7-to-fhir",
    icon: <TransformOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <Hl7v2ToFhir />,
    sampleData: hl7Data,
  },
  {
    label: "C-CDA To FHIR",
    description: "Convert C-CDA data to FHIR",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/c-cda-to-fhir",
    icon: <TransformOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <CcdaToFhir />,
    sampleData: ccdaData,
  },
  {
    label: "FHIR Validation",
    description:
      "Validate the FHIR Resource that complies with the FHIR standards",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/fhir-validation",
    icon: <CheckCircleOutlineOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <FhirValidation />,
  },
  {
    label: "SMART on FHIR",
    description: "Try out a standalone end user FHIR application",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/smart-on-fhir",
    icon: <VpnKeyOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <SmartOnFhir />,
  },
  {
    label: "FHIR Path",
    description:
      "Easily convert, transform and extract healthcare data to meet HL7 FHIR standards",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/fhir-path",
    icon: <FilterAltOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <FhirPath />,
  },
  {
    label: "Connect To EMR",
    description: "Connect FHIR resource to EMR",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/connect-to-emr",
    icon: <CableOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <ConnectToEmr />,
  },
];
