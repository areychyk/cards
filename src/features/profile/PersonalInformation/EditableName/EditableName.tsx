import React, { ChangeEvent, FC, useState } from "react";
import { Input, InputAdornment } from "@mui/material";
import Button from "@mui/material/Button";

type Props = {
  value:string | undefined
  onChange: (newValue: string) => void;
}

export const EditableName:FC<Props> = ({value,onChange}) => {
  let [editMode, setEditMode] = useState(false);
  let [title, setTitle] = useState(value);

  const activateEditMode = () => {
    setEditMode(true);
    setTitle(value);
  };
  const activateViewMode = () => {
    setEditMode(false);
    onChange(title?title:'');
  };
  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  return editMode ? (
    // <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} />
    <Input type="text"
           style={{ width: "402px", padding:'5px' }}
           value={title}
           autoFocus
           placeholder="Nickname"
           onChange={changeTitle}
           onBlur={activateViewMode}
           endAdornment={
             <InputAdornment position={"end"}>
               <Button variant="contained" onClick={activateViewMode} style={{padding:'3px', marginLeft:'10px'}}>SAVE</Button>

             </InputAdornment>
           }
    />
  ) : (
    <span onDoubleClick={activateEditMode}>{value}</span>
  );
};

