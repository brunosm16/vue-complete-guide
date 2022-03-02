<template>
  <div id="app">
    <header><h1>Users List</h1></header>
    <UserForm @add-user="saveUser" />
    <ul>
      <UserInfo
        v-for="user in users"
        @toggle-active="toggleActiveValue"
        @delete-user="deleteUser"
        :key="user._id"
        :_id="user._id"
        :name="user.name"
        :gender="user.gender"
        :email="user.email"
        :phone="user.phone"
        :is-active="user.isActive"
        :age="user.age"
      />
    </ul>
  </div>
</template>

<script>
import UserInfo from "./components/UserInfo.vue";
import UserForm from "./components/UserForm.vue";

export default {
  name: "App",
  components: {
    UserInfo,
    UserForm,
  },
  data() {
    return {
      users: [
        {
          _id: "621eba7402c49bc37fde024d",
          index: 0,
          guid: "dd79e08c-4f94-4177-8351-f196b5aaacf8",
          isActive: true,
          balance: "$1,034.25",
          picture: "http://placehold.it/32x32",
          age: 22,
          eyeColor: "blue",
          name: "Hart Cross",
          gender: "male",
          company: "ORONOKO",
          email: "hartcross@oronoko.com",
          phone: "+1 (846) 552-3260",
          address:
            "997 Scholes Street, Steinhatchee, Federated States Of Micronesia, 7402",
          about:
            "Officia pariatur officia do aliquip nulla velit ullamco consectetur sit officia eiusmod ipsum elit. Fugiat ut irure laboris mollit tempor minim. Exercitation cillum minim sunt labore officia. Dolor officia magna sit aute ut non est id sunt sint qui mollit. Dolore ad dolore ipsum deserunt enim ipsum do magna dolor ut qui. Ea adipisicing aute nostrud proident consectetur ea aliqua deserunt fugiat enim est id. Duis aliqua cupidatat irure consectetur quis tempor adipisicing nulla.\r\n",
          registered: "2014-12-04T11:36:25 +03:00",
          latitude: -12.47498,
          longitude: -127.461606,
          tags: [
            "aliqua",
            "aute",
            "excepteur",
            "dolor",
            "nisi",
            "minim",
            "amet",
          ],
          friends: [
            {
              id: 0,
              name: "Maritza Welch",
            },
            {
              id: 1,
              name: "Hancock Alvarado",
            },
            {
              id: 2,
              name: "Benson Stone",
            },
          ],
          greeting: "Hello, Hart Cross! You have 3 unread messages.",
          favoriteFruit: "banana",
        },
        {
          _id: "621eba7493c2294dca0e18d0",
          index: 1,
          guid: "7b6e0428-1744-4031-8cb3-1afc2c7805f0",
          isActive: true,
          balance: "$1,071.75",
          picture: "http://placehold.it/32x32",
          age: 31,
          eyeColor: "brown",
          name: "Holt Cameron",
          gender: "male",
          company: "SCHOOLIO",
          email: "holtcameron@schoolio.com",
          phone: "+1 (894) 473-3123",
          address: "839 Louis Place, Brookfield, Wyoming, 7884",
          about:
            "Officia elit labore laboris nisi. Magna ad quis fugiat nostrud incididunt consequat id. Qui adipisicing ex elit eiusmod consectetur dolor quis eu quis veniam fugiat nisi dolor quis.\r\n",
          registered: "2016-03-05T06:14:47 +03:00",
          latitude: 19.177816,
          longitude: 131.01574,
          tags: [
            "eiusmod",
            "qui",
            "dolore",
            "deserunt",
            "amet",
            "adipisicing",
            "elit",
          ],
          friends: [
            {
              id: 0,
              name: "Carla Clay",
            },
            {
              id: 1,
              name: "Case Lucas",
            },
            {
              id: 2,
              name: "Delia Kent",
            },
          ],
          greeting: "Hello, Holt Cameron! You have 2 unread messages.",
          favoriteFruit: "strawberry",
        },
        {
          _id: "621eba74b45be2054b64b09c",
          index: 2,
          guid: "f527a90e-8dbf-4785-826c-9150b9ec7dda",
          isActive: true,
          balance: "$2,496.77",
          picture: "http://placehold.it/32x32",
          age: 26,
          eyeColor: "blue",
          name: "Haynes Hendrix",
          gender: "male",
          company: "MELBACOR",
          email: "hayneshendrix@melbacor.com",
          phone: "+1 (973) 567-3115",
          address: "881 Roebling Street, Marion, Colorado, 8656",
          about:
            "Nulla amet anim laborum veniam irure consequat non cupidatat in cupidatat sit. Veniam Lorem ex Lorem aliquip ut ad. Magna laborum ex anim do esse laborum adipisicing proident. Non minim eu cupidatat consectetur.\r\n",
          registered: "2015-07-29T08:17:15 +03:00",
          latitude: 88.922888,
          longitude: -86.099359,
          tags: [
            "duis",
            "laborum",
            "elit",
            "deserunt",
            "magna",
            "nostrud",
            "ex",
          ],
          friends: [
            {
              id: 0,
              name: "Rita Warren",
            },
            {
              id: 1,
              name: "Denise Waller",
            },
            {
              id: 2,
              name: "Benita Colon",
            },
          ],
          greeting: "Hello, Haynes Hendrix! You have 9 unread messages.",
          favoriteFruit: "strawberry",
        },
        {
          _id: "621eba74f6920e9ab90bfc80",
          index: 3,
          guid: "bffc7503-290e-421d-bbf2-ac23888c8e46",
          isActive: true,
          balance: "$1,583.40",
          picture: "http://placehold.it/32x32",
          age: 31,
          eyeColor: "brown",
          name: "Goldie Woodard",
          gender: "female",
          company: "SNOWPOKE",
          email: "goldiewoodard@snowpoke.com",
          phone: "+1 (907) 566-2862",
          address: "648 Lombardy Street, Canby, Northern Mariana Islands, 9041",
          about:
            "Ullamco id cupidatat adipisicing est sunt labore duis laboris nisi in ex labore et. Ea ipsum sint veniam fugiat excepteur dolor ex consequat. Elit et id do sit id Lorem tempor eu sit.\r\n",
          registered: "2014-08-25T10:21:01 +03:00",
          latitude: 73.542784,
          longitude: 80.093219,
          tags: [
            "dolor",
            "Lorem",
            "officia",
            "reprehenderit",
            "velit",
            "ut",
            "id",
          ],
          friends: [
            {
              id: 0,
              name: "Minerva Fletcher",
            },
            {
              id: 1,
              name: "Greta Baldwin",
            },
            {
              id: 2,
              name: "Kathie Sosa",
            },
          ],
          greeting: "Hello, Goldie Woodard! You have 10 unread messages.",
          favoriteFruit: "banana",
        },
        {
          _id: "621eba74432580a938fc8215",
          index: 4,
          guid: "0a32061d-8483-461f-8a97-9e5c3a6b237e",
          isActive: false,
          balance: "$1,007.56",
          picture: "http://placehold.it/32x32",
          age: 37,
          eyeColor: "blue",
          name: "Humphrey Navarro",
          gender: "male",
          company: "EYERIS",
          email: "humphreynavarro@eyeris.com",
          phone: "+1 (959) 563-2552",
          address: "382 Wolf Place, Sanborn, Michigan, 8298",
          about:
            "Irure officia nulla tempor ad qui reprehenderit non veniam duis qui commodo aliquip ea velit. Dolore minim ad consectetur ipsum aliqua ex. Dolor aliqua occaecat enim excepteur reprehenderit nostrud exercitation.\r\n",
          registered: "2015-04-14T03:50:15 +03:00",
          latitude: -49.734542,
          longitude: -111.210003,
          tags: [
            "excepteur",
            "anim",
            "eiusmod",
            "fugiat",
            "commodo",
            "officia",
            "id",
          ],
          friends: [
            {
              id: 0,
              name: "Meyer Conrad",
            },
            {
              id: 1,
              name: "Jan Ballard",
            },
            {
              id: 2,
              name: "Belinda Cobb",
            },
          ],
          greeting: "Hello, Humphrey Navarro! You have 6 unread messages.",
          favoriteFruit: "banana",
        },
        {
          _id: "621eba7490f853b57937dc03",
          index: 5,
          guid: "a0818bf1-6eeb-47b5-a1b1-a0d60af128ae",
          isActive: false,
          balance: "$1,006.78",
          picture: "http://placehold.it/32x32",
          age: 27,
          eyeColor: "brown",
          name: "Alvarado Burton",
          gender: "male",
          company: "QUARX",
          email: "alvaradoburton@quarx.com",
          phone: "+1 (914) 435-3211",
          address: "591 Roosevelt Place, Trinway, Virgin Islands, 7666",
          about:
            "Est officia non do ex tempor fugiat nulla minim occaecat enim ullamco. Est pariatur anim est tempor veniam. Sit consequat nisi fugiat id cupidatat sunt aliquip laborum tempor tempor. Incididunt nulla est aliqua commodo ex ullamco id officia aliqua. Consectetur dolore id quis esse qui cupidatat. Incididunt laborum ex laboris amet id ut non ullamco exercitation elit laborum anim consequat laboris. Lorem laboris elit eu consectetur ipsum id eu et mollit consequat aliqua.\r\n",
          registered: "2017-10-20T03:34:10 +03:00",
          latitude: -88.135555,
          longitude: 144.017655,
          tags: [
            "anim",
            "proident",
            "ipsum",
            "do",
            "culpa",
            "adipisicing",
            "esse",
          ],
          friends: [
            {
              id: 0,
              name: "Carlson Campbell",
            },
            {
              id: 1,
              name: "Richardson Roach",
            },
            {
              id: 2,
              name: "Murray Horn",
            },
          ],
          greeting: "Hello, Alvarado Burton! You have 2 unread messages.",
          favoriteFruit: "banana",
        },
      ],
    };
  },
  methods: {
    toggleActiveValue(userId) {
      const userFound = this.users.find((user) => user._id === userId);
      if (userFound) userFound.isActive = !userFound.isActive;
    },
    saveUser(inputUser) {
      this.users.unshift(inputUser);
    },
    deleteUser(userId) {
      this.users = this.users.filter((user) => user._id !== userId);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
  background: #cfcfcf;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
