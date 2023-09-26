import React, { memo, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import withStyles from "@mui/styles/withStyles";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import Hotspot from "../home/Hotspot";

const styles = (theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    padding: "8px 16px",
    textAlign: "left",
    minWidth: "150px",
  },
  comingSoon: {
    backgroundColor: "#FED7AA",
    border: "1px solid #EA580C",
    color: "#EA580C",
    fontSize: "10px",
    padding: "2px 12px",
    borderRadius: "6px",
  },
});

function HotspotTooltip({
  children,
  placement,
  classes,
  text,
  label,
  isComingSoon = false,
  number,
}) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Tooltip
      open={open}
      onClose={handleClose}
      disableFocusListener
      disableHoverListener
      disableTouchListener
      arrow
      placement={placement || "left"}
      PopperProps={{
        disablePortal: true,
      }}
      style={{
        maxWidth: 400,
      }}
      title={
        <Box className={classes.wrapper}>
          <div>
            <IconButton
              aria-label="close"
              size="small"
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 16,
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </div>
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <Box
              style={{
                height: "30px",
                width: "30px",
                // backgroundColor: "#8B5CF6",
                borderRadius: "30px",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Hotspot label={number || ""} />
            </Box>
            <Box display={"flex"} gap={1} alignItems={"center"}>
              <Typography fontSize={"12px"} fontWeight={600}>
                {label || ""}
              </Typography>
              {isComingSoon && (
                <Box className={classes.comingSoon}>Comin Soon</Box>
              )}
            </Box>
            <div>{text || ""}</div>
          </Box>
        </Box>
      }
    >
      {children}
    </Tooltip>
  );
}

HotspotTooltip.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any,
  placement: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  isComingSoon: PropTypes.bool.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(HotspotTooltip));
