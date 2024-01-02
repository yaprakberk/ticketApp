
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./state/store";
import App from "./App";

import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// // src/index.tsx

// import React from 'react'; // 'react' kütüphanesi küçük harfle yazılmalı
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// // src/App.tsx

// import React { useState } from 'react'; // useState parantez içinde olmalı

// interface User {
//   username: string;
//   password: string;
// }

// const App: React.FC = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [user, setUser] = useState<User>({ username: '', password: '' });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Burada giriş yap veya üye ol işlemleri yapılabilir.
//     console.log(isLogin ? 'Giriş Yapıldı' : 'Üye Olundu', user);
//   };

//   return (
//     <div>
//       {/* <h1>{isLogin ? 'Giriş Yap' : 'Üye Ol'}</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Kullanıcı Adı:
//           <input type="text" name="username" value={user.username} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Şifre:
//           <input type="password" name="password" value={user.password} onChange={handleInputChange} />
//         </label>
//         <br />
//         <button type="submit">{isLogin ? 'Giriş Yap' : 'Üye Ol'}</button>
//       </form>
//       <p onClick={() => setIsLogin(!isLogin)}>
//         {isLogin ? 'Hesabınız yok mu? Üye Olun!' : 'Zaten üye misiniz? Giriş Yapın!'}
//       </p> */}
//     </div>
//   );
// };

// export default App;
