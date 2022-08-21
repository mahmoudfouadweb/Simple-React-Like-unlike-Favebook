import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetup, setLoadedMeetup] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-first-project-94078-default-rtdb.firebaseio.com/meetups.json'
    )
      .then(res => res.json())
      .then(data => {
        const meetups = [];
        Object.keys(data).forEach(key => {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        });
        setIsLoading(false);
        setLoadedMeetup(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={loadedMeetup} />
    </section>
  );
}

export default AllMeetupsPage;
