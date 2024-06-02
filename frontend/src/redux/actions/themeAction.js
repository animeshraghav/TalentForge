import { THEME_MODE } from "../constants/themeConstant";

// Define the action creator function
export const toggleActionTheme = () => {
    return (dispatch) => {
        dispatch({ type: THEME_MODE });
    };
};
