
var ImageBorder = function () {
    var defaultBorder = '10';
    var defaultBorderRadius = '170';
    var defaultSize = '120';
    var defaultPadding = '15';
    var defaultBorder = '10px solid rgb(0,0,0)';

    return {
        init: function (className, options) {
            if (!options)
                options = {};
             
            var borderSize = (options.size || defaultBorder),
            borderRadius = (options.radius || defaultBorderRadius) + 'px',
            diameter = (options.diameter || defaultSize) + 'px',
            padding = (options.padding || defaultPadding) + 'px';

            var images = document.getElementsByClassName(className);
            var i;
            for (i = 0; i < images.length; i++) {
                setValues(images[i]);
                // image may not be loaded
                images[i].onload = function (event) {
                    setValues(event.srcElement);
                };
            }

            function setValues(image) {
                var rgb = options.color || getAverageRGB(image, 3);
                image.style.borderRadius = borderRadius;
                image.style.border = borderSize + 'px solid rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
                image.style.width = diameter;
                image.style.height = diameter;
                image.style.padding = padding;
                image.avgRgb = rgb;
                image.hidden = false;
            }
        }
    }

    function getAverageRGB(img, blockSize) {
        var defaultRGB = {
            r: 0,
            g: 0,
            b: 0
        },
            canvas = document.createElement('canvas'),
            context = canvas.getContext && canvas.getContext('2d'),
            data, width, height,
            i = -4,
            length,
            rgb = {
                r: 0,
                g: 0,
                b: 0
            },
            count = 0;
        if (!context) {
            return defaultRGB;
        }
        height = canvas.height = img.naturalHeight || img.offsetHeight || img.height;
        width = canvas.width = img.naturalWidth || img.offsetWidth || img.width;
        context.drawImage(img, 0, 0);
        try {
            data = context.getImageData(0, 0, width, height);
        } catch (e) {
            return defaultRGB;
        }
        length = data.data.length;
        while ((i += blockSize * 4) < length) {
            ++count;
            rgb.r += data.data[i];
            rgb.g += data.data[i + 1];
            rgb.b += data.data[i + 2];
        }
        rgb.r = ~~(rgb.r / count);
        rgb.g = ~~(rgb.g / count);
        rgb.b = ~~(rgb.b / count);
        return rgb;
    };
}
