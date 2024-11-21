import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  // CHANGING THE USERS IMG
                  src={`data:image/jpeg;base64,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`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {/* NAME OF THE MAIN ADMIN */}
                  Ryan Chitate
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
