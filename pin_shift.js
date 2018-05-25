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

 /*
 Copyright (c) 2013 OpenSourceRF.com.  All right reserved.
 This library is free software; you can redistribute it and/or
 modify it under the terms of the GNU Lesser General Public
 License as published by the Free Software Foundation; either
 version 2.1 of the License, or (at your option) any later version.
 This library is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 See the GNU Lesser General Public License for more details.
 You should have received a copy of the GNU Lesser General Public
 License along with this library; if not, write to the Free Software
 Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*
  Copyright (c) 2011 Arduino.  All right reserved.
  This library is free software; you can redistribute it and/or
  modify it under the terms of the GNU Lesser General Public
  License as published by the Free Software Foundation; either
  version 2.1 of the License, or (at your option) any later version.
  This library is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
  See the GNU Lesser General Public License for more details.
  You should have received a copy of the GNU Lesser General Public
  License along with this library; if not, write to the Free Software
  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

var gpio = require('gpio');

var pin_shift = {};

pin_shift.LSBFIRST = 0;
pin_shift.MSBFIRST = 1;

pin_shift.shiftIn =  function(dataPin, clockPin, bitOrder) {
  var value = 0;
  clockPin.setDirectionSync(gpio.DIRECTION.OUT);
  dataPin.setDirectionSync(gpio.DIRECTION.IN);
  for (var i = 0; i < 8; ++i) {
      digitalWrite(clockPin, HIGH);
      if (bitOrder == this.LSBFIRST)
          value |= dataPin.readSync() << i;
      else
          value |= dataPin.readSync() << (7 - i);
      clockPin.writeSync(0);
  }
  return value;
}

pin_shift.shiftOut = function(dataPin, clockPin, bitOrder, val) {
  clockPin.setDirectionSync(gpio.DIRECTION.OUT);
  dataPin.setDirectionSync(gpio.DIRECTION.OUT);

  for (var i = 0; i < 8; i++) {
      if (bitOrder == this.LSBFIRST) {
        dataPin.writeSync(!!(val & (1 << i)));
      } else {
        dataPin.writeSync(!!(val & (1 << (7 - i))));
      }
      clockPin.writeSync(1);
      clockPin.writeSync(0);
  }
}

module.exports = pin_shift;

