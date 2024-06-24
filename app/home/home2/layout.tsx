import React from 'react'

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div>
            Home2 Layout
            {children}
        </div>
    )
}

export default Layout