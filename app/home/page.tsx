'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Page = () => {
    const router = useRouter()
    return (
        <div>
            <div>HomePage</div>
            <Link className='text-red-600' href={'/my'}>跳转到MyPage页面</Link>
            <div onClick={() => { router.push('/my') }} className='bg-blue-400'>跳转到MyPage页面</div>
        </div>
    )
}

export default Page
/*
    next 的路由是通过文件夹的名字来确定路由的，如当前的文件结构，url 路径为 http://localhost:3000/home 页面就会展示当前页面。

    page.tsx 是必须存在的，因为 Next.js 使用约定式路由，如果没有这个文件，Next.js 会认为这个页面不存在 显示404 面。
    如果页面layout.tsx 存在的话，那么页面会优先展示layout.tsx的内容，然后展示page.tsx的内容。 layout.tsx 存在
    page.tsx 不存在的时候，页面会404，所以page.tsx 是必须存在的。



    Link 组件是next内置组件，其使用效果和a标签类似，但是可以跳转页面，并且可以传递参数。
    useRouter 是next提供的hook，用于编程式路由跳转跟vue的router.push类似 注意useRouter是客户端组件。
    redirect 是服务端组件，我当前没有需求使用，故略。
*/