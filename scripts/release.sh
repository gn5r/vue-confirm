#!/usr/bin/env bash

npm config set //registry.npmjs.org/:_authToken ${NODE_AUTH_TOKEN:?}
npm whoami
yarn run build
yarn lerna publish from-package --dist-tag $(node ./scripts/parse-dist-tag.js) --yes --no-verify-access