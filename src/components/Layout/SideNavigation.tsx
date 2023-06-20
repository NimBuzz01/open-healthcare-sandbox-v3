import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Divider, Typography, Tooltip } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface SideNavItem {
  label: string;
  path: string;
  icon: JSX.Element;
  component: JSX.Element;
}

interface Props {
  items: SideNavItem[];
}

export const SideNavigation = ({ items }: Props) => {
  const location = useLocation();
  const [currentSelection, setCurrentSelection] = useState<string>(
    location.pathname
  );
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const handleItemClick = (path: string) => {
    setCurrentSelection(path);
  };

  const handleToggleExpand = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          bgcolor: "primary.main",
          py: 1,
          px: 0.5,
          width: isExpanded ? 230 : 60,
          zIndex: 2,
          transition: "0.2s",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 2,
            mx: 1.8,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "background.default",
              display: isExpanded ? "block" : "none",
              transition: "0.2s",
              opacity: isExpanded ? 1 : 0,
            }}
          >
            Accelerators
          </Typography>
          <Box
            onClick={handleToggleExpand}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "background.default",
              cursor: "pointer",
              transition: "0.2s",
              fontSize: 20,
            }}
          >
            {isExpanded ? (
              <Tooltip
                key={"close-icon"}
                title={<Typography fontSize={11}>Collapse</Typography>}
                placement="right"
              >
                <ChevronLeftIcon sx={{ width: 23, height: 23 }} />
              </Tooltip>
            ) : (
              <Tooltip
                key={"open-icon"}
                title={<Typography fontSize={11}>Expand</Typography>}
                placement="right"
              >
                <ChevronRightIcon sx={{ width: 23, height: 23 }} />
              </Tooltip>
            )}
          </Box>
        </Box>
        <Divider
          light
          variant="middle"
          sx={{
            m: 1,
            bgcolor: "background.default",
            transition: "0.2s",
          }}
        />
        <Box>
          {items.map((item) => (
            <Tooltip
              key={item.path}
              title={<Typography fontSize={11}>{item.label}</Typography>}
              placement="right"
              disableHoverListener={isExpanded}
            >
              <Link
                style={{ textDecoration: "none" }}
                key={item.path}
                to={item.path}
                onClick={() => handleItemClick(item.path)}
              >
                <Box
                  className={`sidenav-item ${
                    currentSelection === item.path ? "selected" : ""
                  }`}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 2,
                    color: "background.default",
                    py: 1.25,
                    width: 230,
                    px: isExpanded ? 1.5 : 0,
                    margin: 0.62,
                    mx: 1.5,
                    cursor: "pointer",
                    transition: "0.2s",
                    textDecoration: "none",
                    borderRadius: "8px 0 0 8px",
                    fontSize: isExpanded ? 16 : 0,
                    ...(currentSelection === item.path && {
                      backgroundColor: "background.default",
                      color: "primary.dark",
                      marginRight: -1,
                      paddingLeft: 1.5,
                    }),
                  }}
                >
                  {item.icon}
                  <Typography
                    variant="h6"
                    sx={{ display: isExpanded ? "block" : "none" }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Link>
            </Tooltip>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
