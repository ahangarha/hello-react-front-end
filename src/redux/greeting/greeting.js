import CONFIG from '../../config.json'

const GREETING_FETCHED = 'helloReactFrontEnd/greeting/FETCHED';

export const fetchGreeting = () => (dispatch) => {
  fetch(CONFIG.API_URL)
    .then((res) => res.json())
    .then((res) => {
      dispatch(greetingFetchd(res.data));
    });
}

const greetingFetchd = (greeting) => ({
  type: GREETING_FETCHED,
  payload: {
    greeting
  },
});

export default function reducer(state = '', action) {
  switch (action.type) {
    case GREETING_FETCHED:
      return action.payload.greeting;
    default:
      return state;
  }
}
