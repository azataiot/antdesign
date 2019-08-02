export default {
    plugins:[
        ['umi-plugin-react', {
        antd:true
        //这里是plugin 的一些具体内容
        }],
    ],
    routes: [
        {
            path:'/',
            component:'./home',
        }
    ],
};