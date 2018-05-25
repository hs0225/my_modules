/* Copyright 2018-present Samsung Electronics Co., Ltd. and other contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var pin = {};

if (process.platform === 'linux') {
  pin.shtDataPin = 5;
  pin.shtClockPin = 6;
} else if (process.platform === 'tizen') {
} else if (process.platform === 'nuttx') {
} else if (process.platform === 'tizenrt') {
  pin.shtDataPin = 30;
  pin.shtClockPin = 32;
} else {
  throw new Error('Unsupported platform');
}

module.exports = pin;
