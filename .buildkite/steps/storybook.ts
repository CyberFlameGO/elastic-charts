/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { createStep, CustomCommandStep, commandStepDefaults } from '../utils';

export const storybookStep = createStep<CustomCommandStep>(() => {
  return {
    ...commandStepDefaults,
    label: ':storybook: Storybook build',
    key: 'storybook',
    commands: ['npx ts-node .buildkite/scripts/steps/storybook.ts'],
    env: {
      ECH_GH_STATUS_CONTEXT: 'Storybook build',
    },
  };
});
