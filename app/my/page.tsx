import Link from "next/link"

const page = () => {
    return (
        <div>
            <div>MyPage</div>
            <Link className='text-red-600' href={'/home'}>跳转到HomePage页面</Link>
        </div>
    )
}

export default page