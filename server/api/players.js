export default defineEventHandler(async () => {
  const response = await fetch("https://randomuser.me/api/?results=10&nat=us");
  const data = await response.json();

  const players = data.results.map((user, index) => {
    return {
      id: index + 1,
      name: `${user.name.first} ${user.name.last}`,
      age: user.dob.age,
      score: 0,
      address: `${user.location.street.number} ${user.location.street.name}`,
    };
  });

  return players;
});
