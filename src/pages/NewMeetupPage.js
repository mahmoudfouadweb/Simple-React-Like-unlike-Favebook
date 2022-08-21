import MeetupForm from '../components/meetups/MeetupForm';

function NewMeetupPage() {
  function addMeetupHandler(meetupDataObj) {
    fetch(
      'https://react-first-project-94078-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupDataObj),
        headers: {
          'content-type': 'application/json',
        },
      }
    );
  }
  return (
    <section>
      <h1>New Meetup</h1>
      <MeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
