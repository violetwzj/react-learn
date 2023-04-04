const a = '1.就是中的变量a';
export const b = 20;
const c = 30;
const obj = {
    name : 'violet'
}

const fn = () => {
    console.log('violet')
}


// 作为模块，不希望模块中所有的内容都暴露给外部
// 作为导入方，不希望导入无用的变量

// export 
// 用来决定一个模块中哪些内容可以被外部查看
// 1.默认导出
// export default xxx;一个模块中只有一个默认导出
// 2.命名导出
// export const b = 20;


// import 
// 将外部模块中的内容导入到当前模块
//  1.  导入默认模块
//  import a from './1.js';
//  导入的变量名可以自己指定，可以叫b,c皆可，不一定要叫a
//  在网页中导入模块时，模块的路径必须写完整；
//  2.  命名导入
//  要有大括号把他包裹起来
// import {b,c} from './1.js';





//将变量a作为默认导出暴露
export default a;
