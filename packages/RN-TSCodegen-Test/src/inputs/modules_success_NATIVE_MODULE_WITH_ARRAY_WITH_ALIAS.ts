import {TurboModule} from '../lib/RCTExport'
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';




export type SomeString = string;

export interface Spec extends TurboModule {
  getArray (arg: Array<SomeString>) : Array<string>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');
