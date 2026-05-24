import EventsItem from "../../components/events/events-item";
import { fetchData } from "../../helpers/api-util";
import { useRouter } from "next/router";
import EventSearch from "../../components/event-search/event-search";
import { Fragment } from "react";

const Events = (props) => {
  const router = useRouter();

  const clickHandler = (dateFilter) => {
    const { currentYear, currentMonth } = dateFilter;
    router.push(`/events/${currentYear}/${currentMonth}`);
  };

  return (
    <Fragment>
      <EventSearch onSearch={clickHandler} />
      <EventsItem items={props.allItems} />
    </Fragment>
  );
};

export default Events;

export async function getStaticProps() {
  const allItems = await fetchData();
  return {
    props: {
      allItems: allItems,
    },
    revalidate: 10,
  };
}
