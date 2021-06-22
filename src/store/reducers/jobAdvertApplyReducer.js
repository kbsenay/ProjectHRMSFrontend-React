// import { APPLY_TO_JOBADVERT } from "../actions/jobAdvertApplyActions";
// import { jobAdvertApplyItems } from "../initialValues/jobAdvertApplyItems";

// const initialState = {
//     jobAdvertApplyItems: jobAdvertApplyItems
// }

// export default function jobAdvertApplyReducer(state = initialState, { type, payload }) {
//     switch (type) {
//         case APPLY_TO_JOBADVERT:
//             let jobAdvert = state.jobAdvertApplyItems.find((j) => j.jobAdvert.jobPosition?.position === payload.jobPosition?.position)
//             if (jobAdvert) {
//                 jobAdvert.jobPosition.position++;
//                 return {
//                     ...state
//                 }
//             } else {
//                 return {
//                     ...state,
//                     jobAdvertApplyItems: [...state.jobAdvertApplyItems, payload]
//                 }
//             }


//         default:
//            return state;
//     }
// }