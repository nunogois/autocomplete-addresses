# autocomplete-addresses

Very simple Vite app for autocompleting addresses built with React + TypeScript + Tailwind CSS.

Currently hosted on Vercel: https://autocomplete-addresses.nunogois.com/

Uses [autocomplete-addresses-api](https://github.com/nunogois/autocomplete-addresses-api) as the back-end.

Since I prefer a microservice and decoupled approached compared to setting up monorepos, as always I decided to separate the front-end and back-end in different repos.

```mermaid
flowchart LR
  A[Front-end\nautocomplete-addresses] -- Search Query --> B[Back-end\nautocomplete-addresses-api]
  B -- Addresses, max 20 --> A
```

## Getting Started

1. Clone the repo: `git clone https://github.com/nunogois/autocomplete-addresses.git`;
2. cd into the folder: `cd autocomplete-addresses`;
3. Install dependencies: `yarn` or `npm install`;
4. Run tests: `yarn test` or `npm run test`;
5. Run the server: `yarn start` or `npm run start`;

Check out [autocomplete-addresses-api](https://github.com/nunogois/autocomplete-addresses-api) and follow its instructions to run the API, so you can run everything together locally.

## Developer Log

Since this is a simple single page application, I will not need routing and other advanced features, so I followed a [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) and [lean](https://en.wikipedia.org/wiki/Lean_software_development) approach as much as possible, which is why I decided to use Vite. It also provides excellent DX (Developer Experience) since it's so fast.

1. Created a new Vite project: `yarn create vite autocomplete-addresses`;
2. Selected the `react-ts` template;
3. Installed dependencies: `yarn`;
4. Followed [Tailwind CSS official docs](https://tailwindcss.com/docs/guides/vite) to add Tailwind CSS;
5. Cleaned up a bit, removed unnecessary files and code;

The main entrypoint and file for this app will be `src/App.tsx`.

I considered the e2e tests included in the `tests` folder for `App.tsx`, `Address.tsx` and `Addresses.tsx` to represent a good enough code coverage given the time available.

If this were a prod app, I would definitely consider adding a debounce to the search field.
