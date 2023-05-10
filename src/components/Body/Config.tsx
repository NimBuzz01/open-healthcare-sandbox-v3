import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import FireHydrantAltOutlinedIcon from '@mui/icons-material/FireHydrantAltOutlined';
import Sample1 from "../Accelerators/Sample1";
import Sample2 from "../Accelerators/Sample2";
import Sample3 from "../Accelerators/Sample3";

const items = [
  {
    label: "Sample 1",
    path: "/",
    icon: <AccountBoxOutlinedIcon sx={{width:26,height:26}} />,
    component: <Sample1 />,
  },
  {
    label: "Sample 2",
    path: "/sample2",
    icon: <LocalFireDepartmentOutlinedIcon sx={{width:26,height:26}}/>,
    component: <Sample2 />,
  },
  {
    label: "Sample 3",
    path: "/sample3",
    icon: <FireHydrantAltOutlinedIcon sx={{width:26,height:26}}/>,
    component: <Sample3 />,
  },
];

export default items;