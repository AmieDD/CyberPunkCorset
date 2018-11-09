# Cyberpunk 3D Printed Light-Up Corset
Cyberpunk 3D Printed Light-Up Corset using Neopixel and Circuit Playground for Dragon Con 2018

![Dragon Con 2018 3D Printed Fabric on Corset](https://github.com/AmieDD/CyberPunkCorset/blob/master/Cyberpunk_Neopixels_AmieDD.jpg)

## Hardware Potion List

[Adafruit Circuit Playground Express](https://amzn.to/2QEi6pV)
2x [2x NeoPixel LED Strip - 30 LEDs/meter - 1 Meter - BLACK](https://amzn.to/2C5Cn3M)
[JST AAA Battery Pack](https://amzn.to/2RBFaXL)

## 3D Printer Magic

* 3D Printer: [Ultimaker S5](https://www.matterhackers.com/store/l/ultimaker-s5/sk/MH6DVDNK?aff=7454)
* 3D Print filament: [Ultimaker Transparent CPE 3.00mm](https://www.matterhackers.com/store/l/ultimaker-transparent-cpe-filament-3.00mm-0.75kg/sk/MQJGQCCV?aff=7454)

## 3D Printer Settings
CPE is easy to print with and with the right print settings gives a nice icy FX. I started the print and after the first 2 layers, pause the printer and lay down your fabric(works best on porous fabrics). You can tape down the edge of the fabric to the build plate with painters tape, just make sure that it is not overlaying on the way of the print or nozzle area.

* Quality Layer Height: .2mm
* Shell
 * Wall Thickness 1mm
  * Wall Line Count 3
 * Top/Bottom Thickness 
  * Top Thickness 1.2mm
  * Top Layers 6
 * Bottm Thickness 
  * Bottom Thickness 1.2mm
  * Bottom Layers 6
  
* Infill Density: 10%
* Infil Pattern: Zig Zag

* Print Speed 50 mm/s

* Travel: Z Hop When Retracted

 ### Uploading the code to the Circuit Playground:
 
Take your micro USB cable and plug it into the computer and the Circuit Playground. Press the RESET button to put the Circuit Playground into programming mode(the light on the Circuit Playground will turn green). From the file explorer on your computer, click and drag you code file you downloaded onto CPLAYBOOT (this is what the computer recognizes/names the Circuit Playground).

### Breadboard Layout
![Breadboard Layout](https://github.com/AmieDD/CyberPunkCorset/blob/master/AmieDD_DragonCon_bb.jpg)

### Code
![JavaScript Code](https://github.com/AmieDD/CyberPunkCorset/blob/master/amiedd-circuitplayground.png)

### Words of Wisdom
Make sure your Micro USB Cable is for data transfer, some micro usb cables are just for charging and don't transfer data, you won't be able to upload the code to the Circuit Playground. 
