import { useRouter } from "next/router";
import EventsItem from "../../components/events/events-item";
import { getFilteredEvents } from "../../data";

import ErrorAlert from "../../components/error-alert/error-alert";
import { Fragment } from "react/jsx-runtime";

const FilteredEvents = () => {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  const dataFilter = { year: filteredYear, month: filteredMonth };

  if (
    !dataFilter.year ||
    !dataFilter.month ||
    dataFilter.year > 2022 ||
    dataFilter.year < 2021 ||
    dataFilter.month < 1 ||
    dataFilter.month > 12
  ) {
    return <ErrorAlert>Invalid filter. Please adjust your values!</ErrorAlert>;
  }

  const filteredItems = getFilteredEvents(dataFilter);

  if (!filteredItems || filteredItems.length === 0) {
    return <ErrorAlert>No events found for the chosen filter!</ErrorAlert>;
  }

  return (
    <Fragment>
      <EventsItem items={filteredItems} />
    </Fragment>
  );
};

export default FilteredEvents;
