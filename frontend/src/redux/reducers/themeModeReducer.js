import { THEME_MODE } from "../constants/themeConstant";

export const modeReducer = (state = { toggleActive: true }, action) => {
    switch (action.type) {
        case THEME_MODE:
            return {
                ...state,
                toggleActive: !state.toggleActive, // Corrected capitalization
                mode: state.toggleActive ? "dark" : "light" // Fixed logic for mode
            };

        default:
            return state;
    }
};
