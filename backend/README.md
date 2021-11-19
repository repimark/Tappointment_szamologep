# Backend todos & ideas

## API ideas
- use express router to easily manage REST API
- /number : GET : get number from file './data/number-store.txt'
- /number : POST : (inputdata String) write number to file (./data/number-store.txt) as string

## USER Todos

1. run ```npm install```
2. Create .env file and give it a variable called `PORT`, this is the port where the backend listening, in my case it was ```PORT=5500```.
3. run the script with ```npm run backend```

~ **3h** of work with the fully working backend

## Structure

```
backend/
    api/
        routes/
            number.js       //here is the routes for /number
    data/
        number-store.txt    //save the number from the calculator here.
    .env                    //save the setting or password here. 
    app.js                  //running an expressJS, error handling, etc here.
    server.js               //here is the base of the webserver 

```
