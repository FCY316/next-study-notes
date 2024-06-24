
const Page = () => {
    return (
        <div>Home2 Page</div>
    )
}

export default Page
/*
   现在的目录结构就是嵌套路由，url 是http://localhost:3000/home/home2

   一个有趣的事情是当你进行嵌套路由的时候，home 的 page.tsx 是不存在的，但是layout.tsx 是存在的，
   相当于 home 的 page.tsx 被嵌套的 home2 给替换了，所以在我们删除 home 的 page.tsx 的时候， home2 这个页面也不会存在
   这个嵌套路由，我们可以在实现一些复杂的页面逻辑的时候进行操作
*/