module.exports = {
  apps: [
    {
      name: 'nuxt3-app', // 应用名称，可以根据需要修改
      script: '.output/server/index.mjs', // Nuxt3的启动脚本
      instances: 'max', // 根据可用CPU核心数启动最大数量的实例
      exec_mode: 'cluster', // 使用集群模式以利用多核CPU
      watch: false, // 是否监视文件变化并自动重启（在生产环境中通常设置为false）
      port: "8080",
      source_map_enabled: true, // 是否启用source map（仅在开发环境中有用）
      log_date_format: 'YYYY-MM-DD HH:mm:ss', // 日志时间格式
      out_file: './logs/nuxt3-app-out.log', // 标准输出日志路径
      error_file: './logs/nuxt3-app-err.log', // 错误输出日志路径
      merge_logs: true, // 是否将多个实例的日志合并到一个文件中
      max_memory_restart: '1G', // 当内存使用量超过此限制时自动重启应用（可选）
      // 其他PM2配置选项...
    },
  ],
};