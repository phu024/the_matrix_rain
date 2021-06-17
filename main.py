index = 0
bri = [255, 150, 50, 10, 0]
x: List[number] = []
for index2 in range(5):
    x.append(0)
dt = 150
t = input.running_time()
while True:
    if input.running_time() - t >= dt:
        t = input.running_time()
        for y in range(5):
            index3 = 0
            while index3 <= x[y]:
                if index3 <= 4:
                    led.plot_brightness(y, x[y] - index3, bri[index3])
                else:
                    led.plot_brightness(y, x[y] - index3, 0)
                index3 += 1
            if x[y] <= 8:
                x[y] = x[y] + 1
            elif Math.random_range(0, 101) > 80:
                x[y] = 0
    else:
        basic.pause(dt - (input.running_time() - t))