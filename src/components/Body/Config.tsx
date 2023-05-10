import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import FireHydrantAltOutlinedIcon from '@mui/icons-material/FireHydrantAltOutlined';
import Sample1 from "../Accelerators/Sample1";
import Sample2 from "../Accelerators/Sample2";
import Sample3 from "../Accelerators/Sample3";

const items = [
  {
    label: "HL7v2 to FHIR",
    path: "/",
    icon: <AccountBoxOutlinedIcon sx={{width:26,height:26}} />,
    component: <Sample1 />,
  },
  {
    label: "FHIR Validator",
    path: "/sample2",
    icon: <LocalFireDepartmentOutlinedIcon sx={{width:26,height:26}}/>,
    component: <Sample2 />,
  },
  {
    label: "Connect to EMR",
    path: "/sample3",
    icon: <FireHydrantAltOutlinedIcon sx={{width:26,height:26}}/>,
    component: <Sample3 />,
  },
];

export default items;