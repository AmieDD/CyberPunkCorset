// Dragon Con 2018 Cyberpunk 3D Printed Light-Up Corset
// AmieDD www.amiedd.com
// Hardware: Circuit Playground Express
// 2x NeoPixel LED Strip - 30 LEDs/meter - 1 Meter - BLACK


let strip: light.NeoPixelStrip = null

input.onGesture(Gesture.Shake, function () {
    music.playSound(music.sounds(Sounds.PowerUp))
    for (let i = 0; i < 4; i++) {
        strip.setAll(0x00ffff)
        light.showAnimation(light.rainbowAnimation, __internal.__timePicker(1000))
        light.showRing(
            `blue white blue white blue blue white blue white blue`
        )
        pause(__internal.__timePicker(100))
        strip.showAnimation(light.rainbowAnimation, __internal.__timePicker(500))
        pause(__internal.__timePicker(100))
    }
    light.showAnimation(light.sparkleAnimation, __internal.__timePicker(500))
    light.setAll(0x000000)
})

// Data is on pin A1 on the Circuit Playground
strip = light.createStrip(pins.A1, 32)
strip.setBrightness(200)