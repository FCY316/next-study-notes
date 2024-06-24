
const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div>
            MyLayout
            {children}
        </div>
    )
}

export default layout