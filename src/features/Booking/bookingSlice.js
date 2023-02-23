import produce from "immer";
const initialState = {
  banners: [],
  movies: {},
  selectedScheduleDetail: null,
};

const reducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    if (type === "SET_BANNERS") {
      draft.banners = payload;
    }
    if (type === "SET_MOVIES") {
      draft.movies = payload;
    }
    if(type === 'SET_SCHEDULE'){
      draft.selectedScheduleDetail = payload
    }
  });
};

export default reducer;
