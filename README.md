# imageborder
Small js lib for creating borders around images with the average RGB of the image as the border color.

no dependecies.

> note: this works only with images from the same domain.

![alt text](https://github.com/stevenvb/imageborder/blob/master/examples/screenshot.png "Example Chrome")

# Install
 ```<script src="../src/imageborder-1.1.js"></script>```
 
# Usage
To enable the borders set a classname on the images and pass the classname to the ```init(className,option);``` function.

 ```
 
 ImageBorder().init(className, {
                size : "20",
                padding: "2",
                diameter : "150",
                radius: "300"
                // color: { r: 166, g: 166, b: 166 }
            });
 ```
 **Options:**
 > size : size of border
 
 > padding : padding between border and image
 
 > diameter : width and heigth
 
 > radius : border radius
 
 > color : set color other than the average color of the image
 
 
 The average color for the image can be retrieved :
 
 ```  $('.img-circular').each(function (index, item) {
                var averageRgb = item.avgRgb;
      });
      ```

