# GraphQL

## Schema

This project uses [graph.cool](https://www.graph.cool/docs/) to define and implement the GraphQL schema.

You will need to globally install the `graphcool` binary:

```
yarn global add graphcool
```

The relevant files can be found in the [`server`](./server) directory.

## Seeding data

Without data, the application will not display anything, so we need to seed the graph.cool datastore with some data.

### Reset existing data

You will want to reset (remove) the existing data first:

```
$ cd server
$ graphcool reset
? Are you sure that you want to reset the data of server (__GRAPHCOOL_SERVICE_ID__)? y/N (n)
```

Type `y`, and press `<Enter>`.

### Insert new data

Start the browser console:

```
$ graphcool console
```

Click the **Playground** button at bottom left of the screen, then enter each GQL mutation listed below.

> **NOTE!**
> Mutatations must be executed in the order they appear below.

1. Create venues

<details>
  <summary>
    Show/hide mutation...
  </summary>

```graphql
mutation {
  createVenue(
    title: "The Amersham"
    wideImageUrl: "https://www.fillmurray.com/600/200"
    headerImageUrl: "https://www.fillmurray.com/600/400"
    secondaryImageUrls: ["https://www.placecage.com/200/200"]
    description: "The Amersham Arms makes Timeout's top ten best comedy clubs and nights in the capital"
    events: []
    promotions: []
    address: { city: "London", postcode: "W1A", street: "High Street" }
  ) {
    id
    title
    wideImageUrl
    secondaryImageUrls
    description
    events {
      description
      title
    }
    promotions {
      offer
    }
    address {
      id
      street
      postcode
      city
    }
  }
}
```

</details>

> Take a note of the `id` of at least one of the venues created above, as it will be used in the next two steps.

2. Create events

<details>
  <summary>
    Show/hide mutation...
  </summary>

```graphql
mutation {
  createEvent(
    title: "Comedy Night"
    date: "2015-11-22T13:57:31.123Z"
    wideImageUrl: "https://placekitten.com/600/200"
    headerImageUrl: "https://placekitten.com/600/400"
    secondaryImageUrls: [
      "https://placekitten.com/200/200"
      "https://placekitten.com/201/201"
      "https://placekitten.com/202/202"
    ]
    description: "Join to see the latest comedy acts from Edinburgh fringe festival"
    venueId: "__VENUE_ID_FROM_FIRST_STEP__"
  ) {
    id
    title
    wideImageUrl
    headerImageUrl
    secondaryImageUrls
    description
    venue {
      title
      address {
        street
        city
        postcode
      }
    }
  }
}
```
</details>

3. Create promotions

<details>
  <summary>
    Show/hide mutation...
  </summary>

```graphql
mutation {
  createPromotion(
    offer: "Buy 4 Mojitos - Get 2 free"
    wideImageUrl: "https://placem.at/things?w=600&h=200"
    headerImageUrl: "https://placem.at/things?w=600&h=400"
    scanCodeImageUrl: "https://pbs.twimg.com/media/BesJ0qXCUAA3EJx.png"
    venueId: "__VENUE_ID_FROM_FIRST_STEP__"
  ) {
    id
    offer
    wideImageUrl
    headerImageUrl
    scanCodeImageUrl
    venue {
      title
    }
  }
}
```

</details>

### Viewing existing data

For convenience, here are some GraphQL queries that allow viewing of existing data.

1. All venues

<details>
  <summary>
    Show/hide query...
  </summary>

```graphql
query {
  allVenues {
    id
    title
    wideImageUrl
    headerImageUrl
    secondaryImageUrls
    description
    events {
      title
    }
    promotions {
      offer
    }
    address {
      id
      street
      city
      postcode
    }
  }
}
```

</details>

2. All events

<details>
  <summary>
    Show/hide query...
  </summary>

```graphql
query {
  allEvents {
    id
    title
    date
    wideImageUrl
    headerImageUrl
    secondaryImageUrls
    venue {
      title
      address {
        street
        city
        postcode
      }
      events {
        title
      }
    }
  }
}
```

</details>

3. All promotions

<details>
  <summary>
    Show/hide query...
  </summary>

```graphql
query {
  allPromotions {
    id
    offer
    scanCodeImageUrl
    wideImageUrl
    headerImageUrl
    venue {
      title
      description
      address {
        street
        city
        postcode
      }
    }
  }
}
```

</details>
