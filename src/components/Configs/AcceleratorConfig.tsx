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
import {
  Hl7Samples,
  ValidationSamples,
  SmartSamples,
  CcdaSamples,
  PathSamples,
  EmrSamples,
} from "../Accelerators/Samples";
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
  samples?: ReactElement;
}

export const items: Item[] = [
  {
    label: "FHIR APIs",
    description: "Test out a list of sample FHIR APIs",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/",
    icon: <LocalFireDepartmentOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <FhirApis />,
  },
  {
    label: "HL7V2 To FHIR",
    description: "Convert HL7 V2 data to FHIR",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/hl7-to-fhir",
    icon: <TransformOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <Hl7v2ToFhir />,
    samples: <Hl7Samples />,
  },
  {
    label: "C-CDA To FHIR",
    description: "Convert C-CDA data to FHIR",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/c-cda-to-fhir",
    icon: <TransformOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <CcdaToFhir />,
    samples: <CcdaSamples />,
  },
  {
    label: "FHIR Validation",
    description:
      "Validate the FHIR Resource that complies with the FHIR standards",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/fhir-validation",
    icon: <CheckCircleOutlineOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <FhirValidation />,
    samples: <ValidationSamples />,
  },
  {
    label: "SMART on FHIR",
    description: "Try out a standalone end user FHIR application",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/smart-on-fhir",
    icon: <VpnKeyOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <SmartOnFhir />,
    samples: <SmartSamples />,
  },
  {
    label: "FHIR Path",
    description:
      "Easily convert, transform and extract healthcare data to meet HL7 FHIR standards",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/fhir-path",
    icon: <FilterAltOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <FhirPath />,
    samples: <PathSamples />,
  },
  {
    label: "Connect To EMR",
    description: "Connect FHIR resource to EMR",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/connect-to-emr",
    icon: <CableOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <ConnectToEmr />,
    samples: <EmrSamples />,
  },
];
