/** @type {import('next').NextConfig} */
export const reactStrictMode = true;
export function webpack(config) {
  config.experiments = { topLevelAwait: true, layers: true };
  config.module.rules.push({
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        plugins: ['@babel/plugin-syntax-top-level-await'],
        presets: ['next/babel']
      },
    },
  });

  return config;
}
