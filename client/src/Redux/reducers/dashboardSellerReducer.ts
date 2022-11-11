import { ActionType } from "../action/types";
import { stateDashboardSeller, actionDashboardSeller } from "../Interfaces";

const initialState: stateDashboardSeller = {
  buyers: [],
  allBuyers: [],
};
//sobre este Type se van poniendo todas las interfaces para las acciones, separados con un |

function dashboardSellerReducer(
  state: stateDashboardSeller = initialState,
  action: actionDashboardSeller
) {
  switch (action.type) {
    case ActionType.GET_ALL_BUYERS:
      return {
        ...state,
        buyers: action.payload,
        allBuyers: action.payload,
      };
    default:
      return state;
  }
}

export default dashboardSellerReducer;
