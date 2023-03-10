import {
  ChatBubbleOutline,
  FullscreenExitOutlined,
  LanguageOutlined,
  MenuOutlined,
  Search,
} from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { useState, useContext } from "react";
import { cont } from "../../context/Genprovider";
import "./Navbar.scss";
import { width } from "@mui/system";
import { Button, TextField } from "@mui/material";
import Sidebar from "../Sidbar/Sidebar";

const Navbar = () => {
  const { toggle, reset } = useContext(cont);

  return (
    <>
      <div className=" navzz position-fixed bg-white">
        <nav className="navz ">
          <div className="  input d-flex align-items-center ">
            <TextField sx={{}} variant="standard" label="search" />

            <Search
              color="secondary"
              className="  mt-auto "
              sx={{ cursor: "pointer" }}
            />
          </div>

          <div className="iconsz">
            <div>
              <Button variant="text" sx={{ color: "black" }}>
                <Badge className="ch" variant="dot" color="secondary">
                  <MailIcon className="ch" color="white" />
                </Badge>
              </Button>
            </div>

            <div>
              <Button
                onClick={(e) => {
                  reset();
                }}
                className="toggle"
                variant="text"
                size="small"
                sx={{ color: "black" }}
              >
                <MenuOutlined className="ch" />
              </Button>
            </div>
            <div>
              <Button variant="text" sx={{ color: "black" }}>
                <LanguageOutlined className="ch" />
              </Button>
            </div>
            <div>
              <Button variant="text" sx={{ color: "black" }}>
                <Badge className="ch" variant="dot" color="secondary">
                  <ChatBubbleOutline className="ch" />
                </Badge>
              </Button>
            </div>
            <div>
              <Button variant="text" sx={{ color: "black" }}>
                <FullscreenExitOutlined className="ch" />
              </Button>
            </div>
            <Button variant="text" sx={{ color: "black" }}>
              <div className="profilez">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="profile"
                />
              </div>
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
