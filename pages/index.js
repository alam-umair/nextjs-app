// import { useEffect, useState } from "react";
import EventsItem from "../components/events/events-item";
import { getFilteredFetchedData } from "../helpers/api-util";
import { Fragment } from "react";

import Head from "next/head";

const HomePage = (props) => {
  // const [featuredEvents, setFeaturedEvents] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "https://meetup-5b824-default-rtdb.firebaseio.com/events.json",
  //       {
  //         method: "GET",
  //       },
  //     );
  //     const data = await response.json();

  //     const events = [];

  //     for (const key in data) {
  //       events.push({
  //         id: key,
  //         ...data[key],
  //       });
  //     }
  //     setFeaturedEvents(events);
  //   };
  //   fetchData();
  // }, []);
  return (
    <Fragment>
      <Head>
        <title>Featured Events</title>
        <meta name="description" content="Find amazing programming events" />
      </Head>
      <EventsItem items={props.featuredEvents} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const filteredEvents = await getFilteredFetchedData();

  return {
    props: {
      featuredEvents: filteredEvents,
    },
    revalidate: 10,
  };
}

export default HomePage;
