#!/usr/bin/env bash

npm whoami
pnpm publish -r --tag $(node ./scripts/parse-dist-tag.js) --no-git-checks
