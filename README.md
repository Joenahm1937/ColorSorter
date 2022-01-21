# Color Sorter

This is a sorting visualizer that uses the HSV (Hue, Saturation, and Value) as the sorting condition. HSV was chosen as the sorting criteria as it yields visually pleasing results, although noisy. [The incredibly challenging task of sorting colours](https://www.alanzucconi.com/2015/09/30/colour-sorting/)

## Sorting Algorithms

Below is a list of the available sorting algorithms used to sort the colors. Additionally, users are able to input

## How to convert RGB color model to HSV

![Calculating R, G, B, Cmax, Cmin, and diff](https://github.com/[username]/[reponame]/blob/[branch]/image.jpg?raw=true)

1. Divide r, g, b by 255 to calculate R, G, and B.
2. Compute Cmax, Cmin, and diff
3. Hue calculation:

- if Cmax and Cmin equal 0, then h = 0
- if Cmax equal R then compute h = (60 \* ((G – B) / diff) + 360) % 360
- if Cmax equal G then compute h = (60 \* ((B – R) / diff) + 120) % 360
- if Cmax equal B then compute h = (60 \* ((R – G) / diff) + 240) % 360

4. Saturation computation :

- if Cmax = 0, then s = 0
- if Cmax does not equal 0 then compute s = (diff/Cmax)\*100

5. Value computation :

- v = Cmax\*100
