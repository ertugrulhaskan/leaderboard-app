export default defineEventHandler(() => {
  const players = [
    {
      name: "John Doe",
      age: 25,
      score: 1000,
      address: "123 Main St",
    },
    {
      name: "Jane Smith",
      age: 30,
      score: 1500,
      address: "456 Elm St",
    },
    {
      name: "Peter Jones",
      age: 20,
      score: 800,
      address: "789 Oak St",
    },
    {
      name: "Mary Brown",
      age: 35,
      score: 2000,
      address: "101 Pine St",
    },
    {
      name: "David Lee",
      age: 28,
      score: 1200,
      address: "222 Maple St",
    },
  ];

  return players;
});
