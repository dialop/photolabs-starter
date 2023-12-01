import { useReducer, useEffect } from 'react';
import axios from "axios";

// Action types as constants
const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
};

// Reducer to handle state changes
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
      return { ...state, photoData: action.payload }; 
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
    async function fetchPhotoData() {
      try {
        const response = await axios.get("http://localhost:8001/api/photos");
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
      } catch (error) {
        console.log(error);
      }
    }
    
    fetchPhotoData();
  }, []);

  // Fetch topic data using Axios
  useEffect(() => {
    async function fetchTopicData() {
      try {
        const response = await axios.get("http://localhost:8001/api/topics");
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: response.data });
      } catch (error) {
        console.log(error);
      }
    }
    
    fetchTopicData();
  }, []);

  // Fetch photos by topic
  const fetchPhotosByTopic = async (topicId) => {
    try {
      const response = await axios.get(`http://localhost:8001/api/topics/photos/${topicId}`);
      dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: response.data });
    } catch (error) {
      console.error('Error:', error);
    }
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
