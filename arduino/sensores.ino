#include <SoftwareSerial.h>
#include <Wire.h>
#include "Adafruit_VEML6070.h"

SoftwareSerial BT(10,12);
Adafruit_VEML6070 uv = Adafruit_VEML6070();
int indice;
float tempC;                 // Variable para almacenar el valor obtenido del sensor (0 a 1023)
int pinLM35 = A0;            // Variable del pin de entrada del sensor (A0)
int PulseSensorPurplePin = 1;// Pulse Sensor CABLE MORADO conectado a Analogo 1
int Signal;                  // holds the incoming raw data. Signal valor en el rango 0-1024
int Threshold = 550;         // Determine which Signal to "count as a beat", and which to ingore.


void setup() 
{
  // Configuramos el puerto serial a 9600 bps
  Serial.begin(9600);
  BT.begin(9600);
  Serial.println("VEML6070 Test");
  uv.begin(VEML6070_1_T);  // pass in the integration time constant
}
 
void loop() 
{
  Serial.println("UV light level: ");
  Serial.println(uv.readUV());
    if (uv.readUV()<=4480)
  {
    Serial.println(String("Indice Bajo")+uv.readUV());
  }
  /if (uv.readUV()>4481 && uv.readUV()<=8964);
  {
    Serial.println(String("Indice Moderado")+uv.readUV());
  }/
  if (uv.readUV()>8965 && uv.readUV()<=11952)
  {
    Serial.println(String("Indice Alto")+uv.readUV());
  }
  if (uv.readUV()>11953 && uv.readUV()<=16432)
  {
    Serial.println(String("Indice muy Alto")+uv.readUV());
  }
  if (uv.readUV()>16433)
  {
    Serial.println(String("Indice Extremo")+uv.readUV());
  }
  Signal = analogRead(PulseSensorPurplePin);   // Leer el sensor pulso.
                                               // Asignar valor a Pulso.
  tempC = analogRead(pinLM35);                 // Con analogRead leemos el sensor, recuerda que es un valor de 0 a 1023
  tempC = (5.0 * tempC * 10.0)/1024.0;         // Calculamos la temperatura con la fórmula
  Serial.println(String("Pulso : ")+Signal/10);                      // Enviar valor de Signal al Serial Plotter.
  Serial.println(String("Temperatura : ")+tempC);


  delay(10000);
  BT.peek();
}
