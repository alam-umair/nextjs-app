export async function fetchData() {
  const response = await fetch(
    "https://meetup-5b824-default-rtdb.firebaseio.com/events.json",
    {
      method: "GET",
    },
  );
  const data = await response.json();

  const events = [];
  for (let key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFilteredFetchedData() {
  const fetchedData = await fetchData();

  const filteredData = fetchedData.filter((data) => {
    return data.isFeatured;
  });

  return filteredData;
}

export async function getEventById(id) {
  const allEvents = await fetchData();
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const allEvents = await fetchData();
  const { year, month } = dateFilter;

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
