// bucket.js

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";
const UPDATE = "bucket/UPDATE";

// 초기값 설정
const initialState = {
  list: [
    { text: "리액트 공부", completed: false },
    { text: "매일 책읽기", completed: false },
    { text: "넷플릭스 보기", completed: false },
  ],
};

// Action 생성 함수
export const loadBucket = (bucket) => {
  return { type: LOAD, bucket };
};

export const createBucket = (bucket) => {
  return { type: CREATE, bucket };
};

export const deleteBucket = (bucket) => {
  return { type: DELETE, bucket };
};
export const updateBucket = (bucket) => {
  return { type: UPDATE, bucket };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "bucket/LOAD":
      return state;

    case "bucket/CREATE":
      const new_bucket_list = [
        ...state.list,
        { text: action.bucket, completed: false },
      ];
      return { list: new_bucket_list };

    case "bucket/DELETE":
      const bucket_list = state.list.filter((l, index) => {
        if (index !== action.bucket) {
          return l;
        }
      });
      return { list: bucket_list };

    case "bucket/UPDATE":
      const update_bucket_list = state.list.map((l, index) => {
        if (index === action.bucket) {
          return { ...l, completed: true };
        } else {
          return l;
        }
      });
      return { list: update_bucket_list };

    default:
      return state;
  }
}
