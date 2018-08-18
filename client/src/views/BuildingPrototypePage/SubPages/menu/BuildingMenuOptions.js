import React from "react";
import MenuItem from "@material-ui/core/MenuItem";

export default ctx => {
  // console.log(ctx);
  return (
    <span>
      <MenuItem
        onClick={() => {
          ctx.props.onSave();
          ctx.handleClose();
        }}
      >
        Save...
      </MenuItem>
      <MenuItem
        onClick={() => {
          ctx.props.onSaveAs();
          ctx.handleClose();
        }}
      >
        Save As...
      </MenuItem>
      <MenuItem
        onClick={() => {
          ctx.props.openModal("templateBuildings");
          ctx.handleClose();
        }}
      >
        Load Template...
      </MenuItem>
      <MenuItem onClick={ctx.handleClose}>Export As...</MenuItem>
      <MenuItem onClick={ctx.handleClose}>Print...</MenuItem>
      <MenuItem
        onClick={() => {
          ctx.props.onCancel();
          ctx.handleClose();
        }}
      >
        Cancel
      </MenuItem>
    </span>
  );
};
