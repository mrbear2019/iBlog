import { IBlogConfig } from '@/types';

const config: IBlogConfig = {
  host: '0.0.0.0',
  port: 9095,
  enableHTTPS: false,
  mongoUrl: `mongodb://${process.env.BUILD_ENV === 'docker' ? 'database' : 'www.simorp.top'}:27017/iBlog_v2`,
  jwtSecret: 'myblogjsonwebtokensecretkey'
};

export default config;
