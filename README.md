# imageborder
Small js lib for creating borders around images with the average RGB of the image as the border color.

no dependecies.

-- works only with images from the same domain.

# Install
 ```<script src="../src/imageborder-1.1.js"></script>```
 
# Usage
 ```init(className,{options});
 
 ImageBorder().init(className, {
                size : "20",
                padding: "2",
                diameter : "150",
                radius: "300"
            });
