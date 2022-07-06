import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greeting/greeting';

function Greetings() {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!greeting.length) dispatch(fetchGreeting());
  }, []);

  return (
    <>
      { greeting.length ? greeting : 'Loading...' }
    </>
  );
}

export default Greetings;
