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
}