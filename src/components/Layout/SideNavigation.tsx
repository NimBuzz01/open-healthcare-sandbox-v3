import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Divider, Typography, Tooltip, IconButton } from "@mui/material";
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
      sx={{ display: "flex", flexDirection: "column", bgcolor: "primary.main" }}
      id="sidebar"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mx: isExpanded ? 0.5 : 1.2,
          my: 0.8,
        }}
        id="sidebar-header"
      >
        <Typography
          variant="h6"
          sx={{
            color: "background.default",
            display: isExpanded ? "block" : "none",
            transition: "0.2s",
            opacity: isExpanded ? 1 : 0,
            ml: 1,
          }}
          id="sidebar-title"
        >
          Accelerators
        </Typography>
        <Box
          id="sidebar-toggle"
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? (
            <Tooltip
              key={"close-icon"}
              title={<Typography fontSize={11}>Collapse</Typography>}
              placement="right"
            >
              <IconButton
                onClick={handleToggleExpand}
                sx={{ color: "background.default" }}
              >
                <ChevronLeftIcon sx={{ width: 24, height: 24 }} />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip
              key={"open-icon"}
              title={<Typography fontSize={11}>Expand</Typography>}
              placement="right"
            >
              <IconButton
                onClick={handleToggleExpand}
                sx={{ color: "background.default" }}
              >
                <ChevronRightIcon sx={{ width: 24, height: 24 }} />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Box>
      <Divider
        sx={{
          transition: "0.2s",
          bgcolor: "background.default",
        }}
        id="sidebar-divider"
      />
      <Box
        sx={{
          py: 1,
          px: 0.5,
          width: isExpanded ? 230 : 60,
          transition: "0.2s",
          overflow: "hidden",
        }}
        id="sidebar-content"
      >
        <Box id="sidebar-items">
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
                    borderRadius: "4px 0 0 4px",
                    fontSize: isExpanded ? 16 : 0,
                    ...(currentSelection === item.path && {
                      backgroundColor: "background.default",
                      color: "primary.dark",
                      marginRight: -1,
                      paddingLeft: 1.5,
                    }),
                  }}
                  id={`sidebar-item-${item.path}`}
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
