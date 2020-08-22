import image from './assets/image.png'
import { ImageBlock, TextBlock, TextColumnsBlock, TitleBlock} from "./Classes/blocks";
import {css} from "./utils";

const text = `
I also got experience in creating UI With my own hands!`


export const model = [
    new TitleBlock('Pure JavaScript website builder ', {
        tag: 'h2',
        styles: css({
            background: "linear-gradient(to right, #000, #eb7dfa)",
            color: "#fff",
            'text-align': "center",
             padding: "1.5rem"
        })

    }),
    new ImageBlock(image, {
        styles: 'padding: 2rem 0;display: flex; justify-content: center;',
        alt: 'my image',
        imageStyles: 'width: 500px; height: auto;'
    }),
    new TextBlock(text, {
        styles: 'text-align: center; padding: 2rem; background-image: linear-gradient(to top right, #000, #8d7dfa ); color: #fff;'
    }),
    new TextColumnsBlock([
        'This tutorial project is created in pure JavaScript without using any third party libraries!',
        'When creating this project , I learned how SOLID and OOP works in JavaScript',
        'Так же получил опыт зодания UI своими руками'
    ], {
        styles: 'color:#fff; background-image: linear-gradient(to top right, #000, #8d7dfa);padding: 1rem'
    }),


]


