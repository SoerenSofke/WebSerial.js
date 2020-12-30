# WebSerial.js
JavaScript ❤️ Embedded Devices

## Example
### Prerequisits

1. Upload the code below to your favorite Arduino board

```C
void setup() {
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  int cmd = Serial.parseInt();

  switch (cmd) {
    case -1:
      digitalWrite(LED_BUILTIN, LOW);
      break;
      
    case 1:
      digitalWrite(LED_BUILTIN, HIGH);
      break;
      
    default:
      break;
}
```

2. Connect this Arduino board to your PC
3. Enable the experimental web platform features of your web browser in use, e.g.
   * `chrome://flags/#enable-experimental-web-platform-features`
   * `opera://flags/#enable-experimental-web-platform-features`
   * `edge://flags/#enable-experimental-web-platform-features`

### Example Page
1. Open the example page: [index.html](https://soerensofke.github.io/WebSerial.js/) of this repository
2. Connect to your Arduino board by selecting the corresponding COM port
3. Toggle the build-in LED of your Arduino board
4. Quit the serial connection by closing the corresponding web browser tab
