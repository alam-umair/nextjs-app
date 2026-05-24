import Link from "next/link";
import classes from "./events-list.module.css";

import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Button from "../ui/button";

const EventsList = ({ image, title, time, location, description, id }) => {
  const formattedDate = new Date(time).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // const formattedAddress = location.replace(", ", "\n");

  return (
    <li key={id} className={classes.item}>
      <img src={image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <span>{<DateIcon />}</span>
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <span>{<AddressIcon />}</span>
            <address>{location}</address>
          </div>
        </div>
        <div>
          <Button href={`/events/${id}`} className={classes.actions}>
            <span>{"Explore Event"}</span>
            <span className={classes.icon}>{<ArrowRightIcon />}</span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventsList;
