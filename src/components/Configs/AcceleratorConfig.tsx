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
    path: "/",
    icon: <LocalFireDepartmentOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <FhirApis />,
  },
  {
    label: "HL7V2 To FHIR",
    path: "/hl7-to-fhir",
    icon: <TransformOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <Hl7v2ToFhir />,
  },
  {
    label: "FHIR Validation",
    path: "/fhir-validation",
    icon: <CheckCircleOutlineOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <FhirValidation />,
  },
  {
    label: "SMART on FHIR",
    path: "/smart-on-fhir",
    icon: <VpnKeyOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <SmartOnFhir />,
  },
  {
    label: "C-CDA To FHIR",
    path: "/c-cda-to-fhir",
    icon: <TransformOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <CcdaToFhir />,
  },
  {
    label: "FHIR Path",
    path: "/fhir-path",
    icon: <FilterAltOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <FhirPath />,
  },
  {
    label: "Connect To EMR",
    path: "/connect-to-emr",
    icon: <CableOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <ConnectToEmr />,
  },
];
