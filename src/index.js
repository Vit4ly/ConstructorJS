import {model} from './model'
import {Site} from "./Classes/Site";
import {SideBar} from "./Classes/SideBar";
import './Styles/main.css'

const site = new Site('#site');

const updateCallback = newBlock => {
    model.push(newBlock)
    site.render(model)
}

new SideBar('#panel', updateCallback)

site.render(model)


