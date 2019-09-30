module.exports = {
  pages: {
    top: {
      entry: 'src/pages/top/main.js', // エントリーポイントとなるjs
      template: 'public/index.html', // テンプレートのHTML
      filename: 'index.html', // build時に出力されるファイル名
    },
    step1: {
      entry: 'src/pages/step1/main.js',
      template: 'public/step1.html',
      filename: 'step1.html',
    },
    step2: {
      entry: 'src/pages/step2/main.js',
      template: 'public/step2.html',
      filename: 'step2.html',
    },
    confirm: {
      entry: 'src/pages/confirm/main.js',
      template: 'public/confirm.html',
      filename: 'confirm.html',
    },
    complete: {
      entry: 'src/pages/complete/main.js',
      template: 'public/complete.html',
      filename: 'complete.html',
    }
  },
};