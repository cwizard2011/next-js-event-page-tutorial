import Head from 'next/head';
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";

const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>NextJS events</title>
        <meta name='description' content='Find a lot of great event that suits your passion' />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}
export default HomePage;