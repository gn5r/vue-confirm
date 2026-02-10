#!/usr/bin/env bash

npm config set //registry.npmjs.org/:_authToken ${NODE_AUTH_TOKEN:?}
npm whoami
pnpm -r publish --tag $(node ./scripts/parse-dist-tag.js) --yes
