import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import FireHydrantAltOutlinedIcon from "@mui/icons-material/FireHydrantAltOutlined";
import Hl7v2ToFhir from "../Accelerators/Hl7v2ToFhir";
import FhirValidation from "../Accelerators/FhirValidation";
import SmartOnFhir from "../Accelerators/SmartOnFhir";
import CcdaToFhir from "../Accelerators/CcdaToFhir";
import FhirPath from "../Accelerators/FhirPath";
import ConnectToEmr from "../Accelerators/ConnectToEmr";

const items = [
  {
    label: "HL7V2 To FHIR",
    path: "/",
    icon: <AccountBoxOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <Hl7v2ToFhir />,
  },
  {
    label: "FHIR Validation",
    path: "/fhir-validation",
    icon: <LocalFireDepartmentOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <FhirValidation />,
  },
  {
    label: "SMART on FHIR",
    path: "/smart-on-fhir",
    icon: <FireHydrantAltOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <SmartOnFhir />,
  },
  {
    label: "C-CDA To FHIR",
    path: "/c-cda-to-fhir",
    icon: <FireHydrantAltOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <CcdaToFhir />,
  },
  {
    label: "FHIR Path",
    path: "/fhir-path",
    icon: <FireHydrantAltOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <FhirPath />,
  },
  {
    label: "Connect To EMR",
    path: "/connect-to-emr",
    icon: <FireHydrantAltOutlinedIcon sx={{ width: 26, height: 26 }} />,
    component: <ConnectToEmr />,
  }
];

export default items;
