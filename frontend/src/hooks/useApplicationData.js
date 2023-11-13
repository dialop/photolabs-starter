import { useReducer, useEffect } from 'react';
import axios from "axios";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS' // New action type for fetching photos by topic
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favorites: [...state.favorites, action.payload.photoId] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favorites: state.favorites.filter(id => id !== action.payload.photoId) };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhotoData: action.payload.photoData, isModalOpen: true };
    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return { ...state, isModalOpen: false, selectedPhotoData: null };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, photoData: action.payload }; // Update photo data with photos for the selected topic
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const initialState = {
  isModalOpen: false,
  selectedPhotoData: null,
  favorites: [],
  photoData: [],
  topicData: []
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch photo data using Axios
  useEffect(() => {
    axios.get("/api/photos")
      .then((response) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
      })
      .catch((error) => console.log(error));
  }, []);

  // Fetch topic data using Axios
  useEffect(() => {
    axios.get("/api/topics")
      .then((response) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: response.data });
      })
      .catch((error) => console.log(error));
  }, []);

  const fetchPhotosByTopic = (topicId) => {
    axios.get(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((response) => {
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: response.data });
      })
      .catch((error) => console.error('Error:', error));
  };

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
    onClosePhotoDetailsModal: closeModal,
    fetchPhotosByTopic
  };
};

export default useApplicationData;
