import Hl7v2ToFhir from "../Accelerators/Hl7v2ToFhir";
import FhirValidation from "../Accelerators/FhirValidation";
import SmartOnFhir from "../Accelerators/SmartOnFhir";
import CcdaToFhir from "../Accelerators/CcdaToFhir";
import FhirPath from "../Accelerators/FhirPath";
import ConnectToEmr from "../Accelerators/ConnectToEmr";

import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import TransformOutlinedIcon from '@mui/icons-material/TransformOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import CableOutlinedIcon from '@mui/icons-material/CableOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const items = [
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
  }
];

export default items;
