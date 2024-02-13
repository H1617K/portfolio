// reducer.js
import { Cloudservices, MobileappDevelopment, WebDevelopment } from '../Images/Images';
import { FETCH_PRODUCT_DATA } from './actions';

const initialState = {
  products: [{
    title: "Web Development",
    description: "Create responsive and user-friendly websites tailored to your business needs.",
    imageUrl: WebDevelopment,
  },
  {
    title: "Mobile App Development",
    description: "Build native or cross-platform mobile applications for iOS and Android.",
    imageUrl: MobileappDevelopment,
  },
  {
    title: "Cloud Services",
    description: "Leverage cloud computing solutions to scale your IT infrastructure and improve efficiency.",
    imageUrl: Cloudservices,
  }],
  loading: false,
  error: null
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_DATA:
      // Implement logic to fetch product data from an API or elsewhere
      return {
        ...state,
        loading: true
      };
    // Add other cases if needed
    default:
      return state;
  }
};

export default productReducer;
