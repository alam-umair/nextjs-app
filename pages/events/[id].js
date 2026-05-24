import { Fragment } from "react";

import { getEventById, fetchData } from "../../helpers/api-util";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

import Head from "next/head";

const EventDetailsPage = (props) => {
  const event = props.event; // extract the event data from props

  if (!event) {
    // if event data is not available, show a loading message (this can happen when fallback is true and the page is being generated on demand)
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  // function to fetch data for a specific event based on the dynamic segment (id) in the URL
  const eventId = context.params.id; // extract the event id from the context params
  const events = await getEventById(eventId); // helper function to fetch data by id
  return {
    props: {
      event: events, // pass the fetched event data as props to the component
    },
    revalidate: 1800, // revalidate every 30 minutes to update the page with new data if available
  };
}

export async function getStaticPaths() {
  // function to generate static paths for dynamic routes
  const allEvents = await fetchData(); // helper function to fetch all events data
  const paths = allEvents.map((event) => {
    // map through all events and return an array of objects with params property containing the dynamic segment name and value
    return { params: { id: event.id } };
  });
  return {
    paths: [...paths], // spread operator to create a new array with the paths
    fallback: "blocking", // fallback true to enable dynamic generation of pages that are not pre-rendered at build time
  };
}

export default EventDetailsPage;
