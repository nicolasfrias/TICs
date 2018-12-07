import serial

device_handler = serial.Serial('COM4', 9600)#el puerto puede variar


while (True):
    print (device_handler.readline())

device_handler.close()
