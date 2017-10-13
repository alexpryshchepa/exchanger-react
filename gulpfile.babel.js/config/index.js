const tasks = {
  browserSync: true,
  clean: true,
  html: true,
  react: true,
  images: true,
  ftp: true,
  watch: true,
  
  dev: true,
  build: true,
  deploy: true,
  default: true,
}

const paths = {
  src: 'src',
  dist: 'dist',
  
  html: {
    src: 'index.html',
    dist: '',
  },
  
  stylesheets: {
    src: '',
    dist: 'index.css',
  },

  javascripts: {
    src: 'index.js',
    dist: '',
  },

  images: {
    src: '/images/**/*',
    dist: 'images',
  }
}

const ftps = {
  host: 'es407.mirohost.net',
  user: 'davianns',
  password: '2xWUDQdx',
  folder: 'exchange',
}

module.exports = {
  tasks: tasks,
  paths: paths,
  ftps: ftps,
};