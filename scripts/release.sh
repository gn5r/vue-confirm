#!/usr/bin/env bash

npm whoami
yarn run build
yarn lerna publish from-package --dist-tag $(node ./scripts/parse-dist-tag.js) --yes --no-verify-access