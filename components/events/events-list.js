import Link from "next/link";
import Image from "next/image";
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

  const formattedAddress = location.replace(", ", "\n");

  return (
    <li key={id} className={classes.item}>
      <Image src={image} alt={title} width={300} height={300} loading="eager" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <span>{<DateIcon />}</span>
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <span>{<AddressIcon />}</span>
            <address>{formattedAddress}</address>
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
