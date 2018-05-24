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

#include "iotjs_def.h"
#include <unistd.h>

JS_FUNCTION(UsleepSync) {
  DJS_CHECK_THIS();
  DJS_CHECK_ARGS(1, number);

  useconds_t time = JS_GET_ARG(0, number);
  usleep(time);

  return jerry_create_undefined();
}


jerry_value_t Initsleep() {
  jerry_value_t sleep = jerry_create_object();

  iotjs_jval_set_method(sleep, "usleepSync", UsleepSync);

  return sleep;
}
