// reducer.js
import { TOGGLE_SERVICE } from './actions';

const initialState = {
  services: [{
    title: "Web Development",
    description: "Create responsive and user-friendly websites tailored to your business needs.",
    icon: "fas fa-laptop-code" 
  },
  {
    title: "Mobile App Development",
    description: "Build native or cross-platform mobile applications for iOS and Android.",
    icon: "fas fa-mobile-alt" 
  },
  {
    title: "Cloud Services",
    description: "Leverage cloud computing solutions to scale your IT infrastructure and improve efficiency.",
    icon: "fas fa-cloud"
  },],
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SERVICE:
      // Implement logic to toggle service state if needed
      return state;
    default:
      return state;
  }
};

export default serviceReducer;
