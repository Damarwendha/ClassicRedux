// konsumer dispatch action, nama bebas asal tidak ada Slice
// @ts-nocheck

import { useDispatch, useSelector } from "react-redux";
import { updateNama, updateUsia } from "./userSlice";

function UserSliceKonsumer() {
  const dispatch = useDispatch();
  const { nama, usia } = useSelector((store) => store.user);

  return (
    <div onClick={() => dispatch(updateUsia(19))}>
      Tes, usia {usia}, nama {nama}
    </div>
  );
}

export default UserSliceKonsumer;
