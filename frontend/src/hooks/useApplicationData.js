//useApplicationData.js

import { useReducer } from 'react';

// Define actions
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS'
};

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favorites: [...state.favorites, action.payload.photoId] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favorites: state.favorites.filter(id => id !== action.payload.photoId) };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhotoData: action.payload.photoData, isModalOpen: true };
    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return { ...state, isModalOpen: false, selectedPhotoData: null };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// Initial state for the reducer
const initialState = {
  isModalOpen: false,
  selectedPhotoData: null,
  favorites: []
};

// useApplicationData hook
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavorite = (photoId) => {
    const actionType = state.favorites.includes(photoId) ? ACTIONS.FAV_PHOTO_REMOVED : ACTIONS.FAV_PHOTO_ADDED;
    dispatch({ type: actionType, payload: { photoId } });
  };

  const openModal = (photoData) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photoData } });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS });
  };

  return {
    state,
    onPhotoSelect: openModal,
    updateToFavPhotoIds: toggleFavorite,
    onClosePhotoDetailsModal: closeModal
  };
};

export default useApplicationData;
