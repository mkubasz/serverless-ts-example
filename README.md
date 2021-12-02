# Serverless TS Example

## Environment Variables
| Variable Name                    | Suggested development value        | Description
|----------------------------------|------------------------------------|------------
|STAGE                             | dev                                | Deployment stage
|NODE_ENV                          | development                        | Node environment type (dev/prod)

## Architecture structure

```sh
.env
 |
tests
 |
src
   |
   +-- config
   |
   +-- handlers < !-- Lambda functions --/>
   | 
   +-- helpers < !-- All client classes and common services --/>
   | 
   +-- modules
```

## Install

```bash
# If you don't already have the serverless cli installed, do that
npm install -g serverless serverless-offline

npm install
```

## Development

Creating and deploying a new function takes two steps, which you can see in action with this repo's default Hello World function (if you're already familiar with Serverless, you're probably familiar with these steps).

#### Add your function to `serverless.yml`

In the functions section of [`./serverless.yml`](./serverless.yml), you have to add your new function like so:

```yaml
functions:
  hello:
    handler: src/hello.default
    events:
      - http:
          path: hello
          method: get
```

Ignoring the scheduling event, you can see here that we're setting up a function named `hello` with a handler at `src/hello.ts` (the `.default` piece is just indicating that the function to run will be the default export from that file). The `http` event says that this function will run when an http event is triggered (on AWS, this happens via API Gateway).


### Live-reloading functions

To run the hello function with the event data defined in [`fixtures/event.json`](fixtures/event.json) (with live reloading), run:

```bash
npm watch:hello
```

### API Gateway-like local dev server

To spin up a local dev server that will more closely match the API Gateway endpoint/experience:

```bash
npm serve
```

### Test your functions with Jest

Jest is installed as the testrunner. To create a test, co-locate your test with the file it's testing
as `<filename>.test.ts` and then run/watch tests with:

```bash
npm test
```

### Environment Variables

If you have environment variables stored in a `.env` file, you can reference them inside your `serverless.yml` and inside your functions. Considering you have a `NAME` variable:

In a function:

```node
process.env.NAME
```

In `serverless.yml`:

```yaml
provider:
  name: ${env:NAE}
  runtime: nodejs14.x
```

You can check the documentation [here](https://www.npmjs.com/package/serverless-dotenv-plugin).

## Deploy

Assuming you've already set up your default AWS credentials (or have set a different AWS profile via [the profile field](serverless.yml#L25)):

```bash
npm run deploy
```

You can pass additional arguments to the `deploy` script, to deploy to different stages, or otherwise configure the
serverless deployment:

```bash
npm deploy -- --stage stage # example stage deployment

# -- or --

npm deploy -- --stage prod # example production deployment
```

After you've deployed, the output of the deploy script will give you the API endpoint
for your deployed function(s), so you should be able to test the deployed API via that URL.

---M
