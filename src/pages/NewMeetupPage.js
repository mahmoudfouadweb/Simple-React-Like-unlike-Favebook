import MeetupForm from '../components/meetups/MeetupForm';

function NewMeetupPage() {
  function addMeetupHandler(meetupObj) {}
  return (
    <section>
      <h1>New Meetup</h1>
      <MeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
