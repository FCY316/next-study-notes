const Template = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div>
            Home Template
            {children}
        </div>
    )
}

export default Template


/*
   Template 跟 layout.tsx 的情况很像，区别在于：
   template 文件的主要作用是为页面和组件提供一个可以重复使用的布局，
   但与 layout 不同的是，它允许页面在导航时进行重新渲染。也就是说，
   当用户在同一布局内导航到不同的页面时，页面会重新渲染，而不仅仅是内容更新。
   就嵌套而言，template.js 在布局和其子项之间呈现。以下是简化的输出：
        <Layout>
        <Template key={routeParam}>{children}</Template>
        </Layout>
*/