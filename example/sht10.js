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

var Sht1x = require('sht1x');
var gpio = require('gpio');
var pin = require('pin');

var dataPinNumber = pin.shtDataPin,
      clockPinNumber = pin.shtClockPin;

var dataPin = gpio.openSync({pin: dataPinNumber});
var clockPin = gpio.openSync({pin: clockPinNumber});

var sht10 = new Sht1x(dataPin, clockPin);

var loop = setInterval(function() {
  // Read values from the sensor
  var temp_c = sht10.readTemperatureC();
  var temp_f = sht10.readTemperatureF();
  var humidity = sht10.readHumidity();

  // Print the values to the serial port
  console.log('-------------------------------------')
  console.log("Temperature: ", temp_c.toFixed(2) + 'º' + "C / ", temp_f.toFixed(2) + 'º');
  console.log("F. Humidity: ", humidity.toFixed(2) + "%");
}, 2000);

setTimeout(function() {
  console.log('end example');
  clearInterval(loop);
}, 20 * 1000);

process.on('exit', function() {
  dataPin.close();
  clockPin.close();
});