import {Float} from '../lib/CodegenTypes';
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





export interface Spec extends TurboModule {
  getInt (arg: Int32) : Int32;
  getFloat (arg: Float) : Float;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');