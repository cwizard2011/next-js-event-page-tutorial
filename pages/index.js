import { Fragment } from "react";
import { useRouter } from "next/router";
import EventList from "../components/events/EventList";
import EventsSearch from "../components/events/EventsSearch";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={featuredEvents} />
    </Fragment>
  )
}

export default HomePage;