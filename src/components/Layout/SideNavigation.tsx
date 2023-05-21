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
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        bgcolor: "primary.main",
        p: 2,
        minWidth: isExpanded ? 250 : 48,
        maxWidth: 250,
        zIndex: 2,
        transition: "width 0.3s ease-in",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 2,
          mx: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "background.default",
            display: isExpanded ? "block" : "none",
            transition: "opacity 0.3s ease-in",
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
            transition: "0.2s ease-in",
            fontSize: 20,
          }}
        >
          {isExpanded ? (
            <Tooltip key={"close-icon"} title={"Close"} placement="right">
              <ChevronLeftIcon sx={{ width: 26, height: 26 }} />
            </Tooltip>
          ) : (
            <Tooltip key={"open-icon"} title={"Open"} placement="right">
              <ChevronRightIcon sx={{ width: 26, height: 26 }} />
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
          transition: "opacity 0.2s ease-in",
        }}
      />
      {items.map((item) => (
        <Tooltip
          key={item.path}
          title={item.label}
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
                px: isExpanded ? 2.0 : 1,
                margin: 0.62,
                cursor: "pointer",
                transition: "0.2s ease-in",
                textDecoration: "none",
                fontSize: isExpanded ? 16 : 0,
                ...(currentSelection === item.path && {
                  backgroundColor: "background.default",
                  color: "primary.dark",
                  borderRadius: "10px 0 0 10px",
                  marginRight: -2,
                  paddingRight: 2,
                  paddingLeft: 2,
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
  );
};
