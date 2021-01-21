// bucket.js

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";

// 초기값 설정
const initialState = {
  list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
};

// Action 생성 함수
export const loadBucket = (bucket) => {
  return { type: LOAD };
};

export const createBucket = (bucket) => {
  return { type: CREATE, bucket };
};

export function createWidget(widget) {
  return { type: CREATE, widget };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "bucket/LOAD": {
      return state;
    }
    case "bucket/CREATE": {
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }
    default:
      return state;
  }
}
