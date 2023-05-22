import {
  ConnectToEmr,
  CcdaToFhir,
  FhirPath,
  Hl7v2ToFhir,
  SmartOnFhir,
  FhirValidation,
  FhirApis,
} from "../Accelerators";

import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import TransformOutlinedIcon from "@mui/icons-material/TransformOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import CableOutlinedIcon from "@mui/icons-material/CableOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";

export const items = [
  {
    label: "FHIR APIs",
    description: "Test out a list of sample APIs",
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
  },
  {
    label: "FHIR Validation",
    description: "Validate the FHIR Resource",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/fhir-validation",
    icon: <CheckCircleOutlineOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <FhirValidation />,
  },
  {
    label: "SMART on FHIR",
    description: "Try out a standalone end user application",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/smart-on-fhir",
    icon: <VpnKeyOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <SmartOnFhir />,
  },
  {
    label: "C-CDA To FHIR",
    description: "Convert C-CDA data to FHIR",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/c-cda-to-fhir",
    icon: <TransformOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <CcdaToFhir />,
  },
  {
    label: "FHIR Path",
    description: "FHIR Path Description Idk",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/fhir-path",
    icon: <FilterAltOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <FhirPath />,
  },
  {
    label: "Connect To EMR",
    description: "Connect FHIR to EMR",
    url: "https://wso2.com/solutions/healthcare/",
    path: "/connect-to-emr",
    icon: <CableOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <ConnectToEmr />,
  },
];
