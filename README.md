This module requires [`sleep`](https://github.com/hs0225/my_modules/tree/sleep) and `gpio` module.

Add the following options when building IoT.js.

```
 --external-modules=../iotjs_modules/sleep/
 --cmake-param=-DENABLE_MODULE_SLEEP=ON
 --cmake-param=-DENABLE_MODULE_GPIO=ON
```

# sht1x

Support SHT10, SHT11, SHT15 temperature/humidity sensor.

### sht1x.readTemperatureC()
* Returns: {number}

### sht1x.readTemperatureF()
* Returns: {number}

### sht1x.readHumidity()
* Returns: {number}
