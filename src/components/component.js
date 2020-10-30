import { Sidebar, SidebarItem, NavBar, Col, Row, Tabbar, TabbarItem, Button, Card, Cell } from 'vant';

const components = [Sidebar, SidebarItem, NavBar, Col, Row, Tabbar, TabbarItem, Button, Card, Cell];
const install = Vue => {
    components.map(component => Vue.component(component.name, component));
};
export default {
    install,
    components,
};
