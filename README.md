# polarImage
drawing an image by getting random polar coordinates for a line and a random point between to set image value

Can you see that this is Cuko the dog?  I sure miss this guy now that I have left Serbia for China.
First I get two random points on a circle, stick them into two different vectors to be the chord across the circle.
Then I use the lerp vector function to get a random point between the two ends. 
I use that point to select a color from the pixel array of a pre-loaded image. 
Then set the color of the stroke of that cord to that point. I also plot a circle at that point.

[see it live](https://greggelong.github.io/polarImage)
