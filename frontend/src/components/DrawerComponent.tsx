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

const DrawerComponent = () => {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const list = () => (
    <div role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <List>
        {["Tab Generator", "Tuner", "Analyzer"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <QueueMusic /> : <MusicNote />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Contact", "About"].map((text, index) => (
          <ListItem button key={text}>
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
          <Button onClick={toggleDrawer}>Program</Button>
          <Drawer open={drawer} onClose={toggleDrawer}>
            {list()}
          </Drawer>
        </>
      }
    </div>
  );
};

export default DrawerComponent;
