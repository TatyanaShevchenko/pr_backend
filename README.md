# pr_backend

This is a simple Node.js application that provides a backend for my test task.

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/TatyanaShevchenko/pr_backend.git
cd pr_backend
```

```bash
npm install
```

## How to start an app

To start the express server, run the following

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to make sure that it works, you should see the message:
```
node-ex-api works :-)
```
## Next steps

Now you are ready to start the frontend application.

If you would like to test ticket adding functionality, you could change the number of generated tickets (because the new ticket will be added to the end of the list).

In /routes/items.js change maximum value of the iterator:
```
for (let i = 1; i <= 10; i++) {
  const object = {
    id: i,
    subject: `Ticket ${i}`,
    priority: faker.helpers.arrayElement(["low", "medium", "high"]),
    status: faker.helpers.arrayElement(["to do", "in progress", "done"]),
    description: faker.lorem.sentence(),
  };
  data.push(object);
}
```
