let x: number[] = []
let index = 0
let index3: number;
let bri = [255, 150, 50, 10, 0]
for (let index2 = 0; index2 < 5; index2++) {
    x.push(0)
}
let dt = 150
let t = input.runningTime()
while (true) {
    if (input.runningTime() - t >= dt) {
        t = input.runningTime()
        for (let y = 0; y <= 4; y++) {
            index3 = 0
            while (index3 <= x[y]) {
                if (index3 <= 4) {
                    led.plotBrightness(y, x[y] - index3, bri[index3])
                } else {
                    led.plotBrightness(y, x[y] - index3, 0)
                }
                index3 += 1
            }
            if (x[y] <= 8) {
                x[y] = x[y] + 1
            } else if (Math.randomRange(0, 101) > 80) {
                x[y] = 0
            }
        }
    } else {
        basic.pause(dt - (input.runningTime() - t))
    }
}
