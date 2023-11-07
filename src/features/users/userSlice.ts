// berisi namaReducer dan action
// yang kemudian reducer nya di export ke store.ts
// dispatch action di export hanya ke konsumer, contoh UserSliceKonsumer.tsx

const initialState = {
  nama: "",
  usia: 0
};

// Initial state langsung ditaruh di parameter
function userReducer(state = initialState, action: actionProp) {
  switch (action.type) {
    case "user/updateNama":
      return {
        ...state,
        nama: action.payload
      };
    case "user/updateUsia":
      return {
        ...state,
        usia: action.payload
      };
    default:
      return state; // important soalnya kebiasaan pake throw new Error
  }
}

function updateNama(nama: string) {
  return { type: "user/updateNama", payload: nama };
}

// contoh operasi action sideeffect menggunakan thunk
function updateUsia(usia: number) {
  if (usia < 18)
    return { type: "user/updateUsia", payload: "Usia harus diatas 18" };

  // dengan nge return function(){} redux mengetahui bahwa itu adalah middleware
  // Disini parameternya bawaan dari thunk, ada dispatch sama getState
  return function (dispatch: any, getState) {
    setTimeout(() => {
      // Nah disini ketika pake thunk, wajib pake dispatch !!
      dispatch({ type: "user/updateUsia", payload: usia });
    }, 2000);
  };
}

export default userReducer;
export { updateNama, updateUsia };

interface actionProp {
  type: string;
  payload: any;
}
