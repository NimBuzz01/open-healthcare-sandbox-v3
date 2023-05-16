import {
  ConnectToEmr,
  CcdaToFhir,
  FhirPath,
  Hl7v2ToFhir,
  SmartOnFhir,
  FhirValidation,
} from "./components/Accelerators";

import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import TransformOutlinedIcon from "@mui/icons-material/TransformOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import CableOutlinedIcon from "@mui/icons-material/CableOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

export const items = [
  {
    label: "HL7V2 To FHIR",
    path: "/",
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

export const HL7_TO_FHIR_CONVERTER_BASE_URL: string = "https://c32618cf-389d-44f1-93ee-b67a3468aae3-dev.e1-us-east-azure.choreoapis.dev/hdbb/bffservice/endpoint-9090-803/1.0.0"

export const WSO2_CONTACT_URL: string = "https://wso2.com/contact/?src=healthcare";

export const HL7_TO_FHIR_ABOUT_URL:string = "https://wso2.com/solutions/healthcare/";
