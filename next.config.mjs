/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    /**
     * 定义重定向规则
     *
     * 此函数旨在返回一个重定向配置数组，用于将特定的URL路径重定向到新的目标路径。
     * 重定向可以是永久性的（301重定向），这告诉搜索引擎和浏览器导航应永久更新为新地址。
     *
     * @returns {Array} 重定向配置数组，每个元素包含源路径、目标路径和重定向类型。
     */
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true, // 如果是永久重定向设置为true，否则设置为false
      },
    ];
  },
};

export default nextConfig;
