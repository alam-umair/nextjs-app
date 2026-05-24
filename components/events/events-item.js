import Link from "next/link";
import EventsList from "./events-list";

import classes from "./events-item.module.css";

const EventsItem = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((item) => {
        return (
          <EventsList
            key={item.id}
            title={item.title}
            time={item.date}
            location={item.location}
            description={item.description}
            image={item.image}
            id={item.id}
          />
        );
      })}
    </ul>
  );
};

export default EventsItem;
