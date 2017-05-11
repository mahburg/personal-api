var user = {
  name: "Lloyd Grubham",
  location: "Earth",
  occupations: ["Camp Councilor", "Electrician", "Broadcast Engineer", "Maintenance Supervisor", "Metadata/Asset Manager"],
  hobbies: [
    {
      name: "rock climbing",
      type: "outdoor"
    },
    {
      name: "electronics",
      type: "maker"
    },
    {
      name: "linguistics",
      type: 'personal growth'
    }
  ],
  family: [
    {
      name: "Tim",
      relation: "father",
      gender: "male"
    },
    {
      name: "Carey",
      relation: "mother",
      gender: "female"
    },{
      name: "Maggie",
      relation: "niece",
      gender: "female"
    }
  ],
  restaurants: [
    {
      name: "Cubby's",
      type: "sandwich",
      rating: 9
    },
    {
      name: "Denny's",
      type: "diner",
      rating: 8
    },
    {
      name: "Tucano's",
      type: "brazilian",
      rating: 9
    },
    {
      name: "McDonald's",
      type: "fast",
      rating: 3.5
    }
  ]
};

module.exports = user;
