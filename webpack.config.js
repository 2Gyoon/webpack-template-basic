// import
const path = require('path');
// path / __dirname node.js 환경에서 전역적으로 사용할 수 있는 변수
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// export
module.exports = {
  // parcel index.html(main.js)와 같은 기능
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',    // 진입점은 보통 js파일
  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'), // node.js가 원하는 절대경로를 명시해줘야함
    // __dirname : 현재 파일이 있는 그 경로를 지칭 // resolve(a,b) : a와 b를 합쳐줌
    // filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [  // 순서는 아래에서 위로
          'style-loader', // 해석된 내용을 삽입하는 용도
          'css-loader',  // js에서 css파일을 해석하는 용도
          'postcss-loader', // 공급업체 접두사 적용
          'sass-loader' // 가장 먼저 해석됨
        ]
      },
      {
        test: /\.js$/,
        use: [  
          'babel-loader'  // babel이 동작할 수 있는 기능을 webpack이 해석하기 위해 필요함
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        {from: 'static'}
      ]
    })
  ],
  devServer: {
    host: 'localhost'
  }
}