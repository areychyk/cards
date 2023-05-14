import React, { useEffect } from "react";
import { packsListThunks } from "features/packsList/packsList.slice";
import { useAppDispatch } from "common/hooks";
import { useSelector } from "react-redux";
import { selectPacksList } from "features/packsList/packsList.selectors";
import { TablePacksList } from "features/packsList/TablePacksList/TablePacksList";

export const PacksList = () => {
  const dispatch = useAppDispatch();
  const packsList = useSelector(selectPacksList);
  useEffect(() => {
    dispatch(packsListThunks.getPacksList({}));
  }, []);
  return (
    <div>
      <TablePacksList />

    </div>
  );
};

