import { Component } from '@angular/core';
import { fabric } from 'fabric'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    ngOnInit() {
        var canvas = new fabric.Canvas('canvasShirt');
        // canvas.loadFromJSON(JSON.parse(`{ "version": "2.0.0-rc.4", "objects": [{ "type": "rect", "version": "2.0.0-rc.4", "originX": "left", "originY": "top", "left": 0, "top": 0, "width": 20, "height": 20, "fill": "red", "stroke": null, "strokeWidth": 1, "strokeDashArray": null, "strokeLineCap": "butt", "strokeLineJoin": "miter", "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 0, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "clipTo": null, "backgroundColor": "", "fillRule": "nonzero", "paintFirst": "fill", "globalCompositeOperation": "source-over", "transformMatrix": null, "skewX": 0, "skewY": 0, "rx": 0, "ry": 0 }, { "type": "text", "version": "2.0.0-rc.4", "originX": "left", "originY": "top", "left": 100, "top": 100, "width": 183.3, "height": 45.2, "fill": "rgb(0,0,0)", "stroke": null, "strokeWidth": 1, "strokeDashArray": null, "strokeLineCap": "butt", "strokeLineJoin": "miter", "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 0, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "clipTo": null, "backgroundColor": "", "fillRule": "nonzero", "paintFirst": "fill", "globalCompositeOperation": "source-over", "transformMatrix": null, "skewX": 0, "skewY": 0, "text": "hello world", "fontSize": 40, "fontWeight": "normal", "fontFamily": "Times New Roman", "fontStyle": "normal", "lineHeight": 1.16, "underline": false, "overline": false, "linethrough": false, "textAlign": "left", "textBackgroundColor": "", "charSpacing": 0, "styles": {} }], "backgroundImage": { "type": "image", "version": "2.0.0-rc.4", "originX": "left", "originY": "top", "left": 0, "top": 0, "width": 1000, "height": 1000, "fill": "rgb(0,0,0)", "stroke": null, "strokeWidth": 0, "strokeDashArray": null, "strokeLineCap": "butt", "strokeLineJoin": "miter", "strokeMiterLimit": 10, "scaleX": 0.5, "scaleY": 0.5, "angle": 0, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "clipTo": null, "backgroundColor": "", "fillRule": "nonzero", "paintFirst": "fill", "globalCompositeOperation": "source-over", "transformMatrix": null, "skewX": 0, "skewY": 0, "crossOrigin": "", "cropX": 0, "cropY": 0, "src": "http://10.0.0.172:3333/assets/shirt.jpg", "filters": [] } }`));
        canvas.renderAll();
        // // create a rectangle object
        // var rect = new fabric.Rect({
        //     fill: 'red',
        //     width: 20,
        //     height: 20
        // });
        // canvas.add(rect);

        // var text = new fabric.Text('hello world', { left: 100, top: 100 });
        // canvas.add(text);
        // canvas.renderAll();

        // fabric.Image.fromURL('/assets/shirt.jpg', function (oImg) {
        //     oImg.scale(0.5)
        //     canvas.setBackgroundImage(oImg);
        //     canvas.renderAll();
        // });
        setTimeout(() => {
            console.log(JSON.stringify(canvas));
        }, 1000);
    }
}
