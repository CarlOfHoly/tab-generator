import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import QueueMusic from "@material-ui/icons/QueueMusic";
import MusicNote from "@material-ui/icons/MusicNote";
import InboxIcon from "@material-ui/icons/Inbox";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom";

const DrawerComponent = () => {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const funLinks = [
    <Link to="/">Home</Link>,
    <Link to="/tabs">Tab Generator</Link>,
    <Link to="/tuner">Tuner</Link>,
  ];

  const boringLinks = [
    <Link to="/contact">Contact</Link>,
    <Link to="/about">About</Link>,
  ];

  const list = () => (
    <div
      className="drawer"
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {funLinks.map((text, index) => (
          <ListItem button key={index}>
            <ListItemIcon>
              {index % 2 === 0 ? <QueueMusic /> : <MusicNote />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {boringLinks.map((text, index) => (
          <ListItem button key={index}>
            <ListItemIcon>
              {index % 2 !== 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {
        <>
          <Button onClick={toggleDrawer}>{!drawer ? "Program" : null}</Button>
          <Drawer open={drawer} onClose={toggleDrawer}>
            {list()}
          </Drawer>
        </>
      }
    </div>
  );
};

export default DrawerComponent;
